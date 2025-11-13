import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-9264c6c0/health", (c) => {
  return c.json({ status: "ok" });
});

// Debug endpoint to check YouTube API key
app.get("/make-server-9264c6c0/debug-youtube", (c) => {
  const youtubeApiKey = Deno.env.get("YOUTUBE_API_KEY");
  return c.json({ 
    hasKey: !!youtubeApiKey,
    keyPrefix: youtubeApiKey ? youtubeApiKey.substring(0, 10) + '...' : 'not set'
  });
});

// Debug endpoint to check Resend API key
app.get("/make-server-9264c6c0/debug-resend", (c) => {
  const resendApiKey = Deno.env.get("RESEND_API_KEY");
  return c.json({ 
    hasKey: !!resendApiKey,
    keyPrefix: resendApiKey ? resendApiKey.substring(0, 7) + '...' : 'not set'
  });
});

// YouTube videos fetch endpoint
app.get("/make-server-9264c6c0/youtube-videos", async (c) => {
  try {
    const youtubeApiKey = Deno.env.get("YOUTUBE_API_KEY");
    
    if (!youtubeApiKey) {
      console.error("YOUTUBE_API_KEY environment variable not set");
      return c.json({ 
        success: false, 
        error: "YouTube API key not configured" 
      }, 500);
    }

    // Use the channel handle to get channel details
    const channelHandle = "@NanaKailayam";
    
    // First, try to get the channel by forUsername parameter
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails,snippet&forHandle=${channelHandle.replace('@', '')}&key=${youtubeApiKey}`
    );
    
    let channelId = null;
    
    if (channelResponse.ok) {
      const channelData = await channelResponse.json();
      if (channelData.items && channelData.items.length > 0) {
        channelId = channelData.items[0].id;
      }
    }
    
    // If that didn't work, try searching
    if (!channelId) {
      const searchResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${encodeURIComponent(channelHandle)}&maxResults=1&key=${youtubeApiKey}`
      );
      
      if (searchResponse.ok) {
        const searchData = await searchResponse.json();
        if (searchData.items && searchData.items.length > 0) {
          channelId = searchData.items[0].snippet.channelId;
        }
      }
    }
    
    // If still no channel ID, try with just the name "NanaKailayam"
    if (!channelId) {
      const nameSearchResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=NanaKailayam&maxResults=5&key=${youtubeApiKey}`
      );
      
      if (nameSearchResponse.ok) {
        const nameSearchData = await nameSearchResponse.json();
        if (nameSearchData.items && nameSearchData.items.length > 0) {
          channelId = nameSearchData.items[0].snippet.channelId;
        }
      }
    }
    
    if (!channelId) {
      console.error("Channel not found after all attempts");
      return c.json({ 
        success: false, 
        error: "Channel not found. Please verify the channel handle." 
      }, 404);
    }
    
    // Now fetch videos from this channel
    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=10&order=date&type=video&key=${youtubeApiKey}`
    );
    
    if (!videosResponse.ok) {
      const error = await videosResponse.text();
      console.error(`YouTube API error (videos): ${error}`);
      return c.json({ 
        success: false, 
        error: "Failed to fetch videos" 
      }, 500);
    }
    
    const videosData = await videosResponse.json();
    
    if (!videosData.items || videosData.items.length === 0) {
      return c.json({ 
        success: true, 
        videos: [] 
      });
    }
    
    // Transform the data to our format
    const videos = videosData.items.map((item: any, index: number) => ({
      id: String(index + 1),
      youtubeId: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.default?.url,
      publishedAt: item.snippet.publishedAt,
    }));
    
    return c.json({ 
      success: true, 
      videos 
    });

  } catch (error) {
    console.error(`Error fetching YouTube videos: ${error}`);
    return c.json({ 
      success: false, 
      error: "An error occurred while fetching videos" 
    }, 500);
  }
});

// Contact form submission endpoint
app.post("/make-server-9264c6c0/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { name, phone, email, subject, message } = body;

    // Validate required fields
    if (!name || !phone || !email || !message) {
      return c.json({ 
        success: false, 
        error: "Missing required fields" 
      }, 400);
    }

    // Get Resend API key from environment
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    
    if (!resendApiKey) {
      console.error("RESEND_API_KEY environment variable not set");
      return c.json({ 
        success: false, 
        error: "Email service not configured" 
      }, 500);
    }

    // Prepare email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #ff6b00 0%, #ff8800 100%); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">🕉 Gnana Kailayam</h1>
          <p style="color: white; margin: 5px 0; font-size: 14px;">Kubera Kailasanathar</p>
          <p style="color: white; margin: 5px 0;">New Contact Form Submission</p>
        </div>
        
        <div style="background: #f9f9f9; padding: 30px; border: 1px solid #e0e0e0;">
          <h2 style="color: #333; margin-top: 0;">Contact Details</h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject || 'Not specified'}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <div style="background: white; padding: 15px; border-left: 4px solid #ff6b00; border-radius: 4px;">
              <p style="margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #666; font-size: 12px;">
            <p>This email was sent from the Gnana Kailayam - Kubera Kailasanathar website contact form.</p>
            <p>Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
          </div>
        </div>
      </div>
    `;

    // Send email using Resend API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        // Using Resend's default email. In testing mode, can only send to account owner's email.
        // Once domain is verified at https://resend.com/domains, change to contact@gnanakailayam.com
        from: "Gnana Kailayam <onboarding@resend.dev>",
        to: ["navin.thiruva@gmail.com"], // Using account owner's email for testing mode
        reply_to: email,
        subject: `New Contact Form: ${subject || 'General Inquiry'}`,
        html: emailHtml,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.text();
      console.error(`Resend API error: Status ${resendResponse.status}, Response: ${errorData}`);
      return c.json({ 
        success: false, 
        error: `Failed to send email: ${errorData}` 
      }, 500);
    }

    const resendData = await resendResponse.json();
    console.log(`Email sent successfully: ${resendData.id}`);

    // Store submission in database for record-keeping
    await kv.set(`contact_${Date.now()}`, {
      name,
      phone,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
      emailId: resendData.id,
    });

    return c.json({ 
      success: true, 
      message: "Your message has been sent successfully!" 
    });

  } catch (error) {
    console.error(`Error processing contact form: ${error}`);
    return c.json({ 
      success: false, 
      error: "An error occurred while processing your request" 
    }, 500);
  }
});

Deno.serve(app.fetch);