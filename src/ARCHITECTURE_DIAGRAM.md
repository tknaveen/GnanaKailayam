# 🏗️ Architecture Diagram

## Gnana Kailayam - System Architecture

---

## 🌐 Overall System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         USERS / VISITORS                         │
│         (Desktop, Mobile, Tablet - Worldwide Access)             │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         │ HTTPS (Secure)
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                     VERCEL (Global CDN)                          │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  React Application (Frontend)                             │  │
│  │  • ShivaNavbar                                            │  │
│  │  • ShivaHero (Carousel)                                   │  │
│  │  • About Sections                                         │  │
│  │  • Services, Gallery, Videos                             │  │
│  │  • Donation Section                                       │  │
│  │  • Contact Form                                           │  │
│  │  • Multi-language Support                                │  │
│  │  • Dark/Light Mode                                        │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                   │
│  Built with: React + TypeScript + Tailwind CSS + Vite           │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         │ API Calls
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                    SUPABASE (Backend)                            │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Edge Functions (Server)                                  │  │
│  │  • Contact form processing                                │  │
│  │  • Email sending                                          │  │
│  │  • API routes                                             │  │
│  └──────────────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  PostgreSQL Database                                      │  │
│  │  • Contact form submissions                               │  │
│  │  • Key-value store                                        │  │
│  └──────────────────────────────────────────────────────────┘  │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         │ Email API
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                      RESEND (Email Service)                      │
│  • Sends contact form emails                                    │
│  • From: noreply@resend.dev                                     │
│  • To: navin.thiruva@gmail.com                                  │
│  • (Future: contact@gnanakailayam.com)                          │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🔄 User Journey Flow

### **1. Visitor Arrives at Website**

```
User types: gnanakailayam.com
        │
        ▼
    DNS Lookup
        │
        ▼
MilesWeb DNS (Domain Registrar)
        │
        │ DNS Records:
        │ A:     @ → 76.76.21.21
        │ CNAME: www → cname.vercel-dns.com
        │
        ▼
Vercel Global CDN (Nearest Server)
        │
        ▼
React Application Loads
        │
        ├─→ HTML/CSS/JS downloaded
        ├─→ Images cached
        ├─→ Styles applied
        └─→ Interactive UI ready
        │
        ▼
User sees website! 🎉
```

---

## 📱 Frontend Component Tree

```
App.tsx (Root)
│
├─ ThemeProvider (Dark/Light Mode)
│  │
│  └─ LanguageProvider (Multi-language)
│     │
│     └─ Main Content
│        │
│        ├─ ShivaNavbar
│        │  ├─ ShivaLogo
│        │  ├─ Navigation Links
│        │  ├─ Language Selector
│        │  └─ Theme Toggle
│        │
│        ├─ ShivaHero
│        │  └─ Carousel (Auto-play slides)
│        │
│        ├─ AboutShivaTemple
│        │
│        ├─ AboutShivaTrust
│        │
│        ├─ ShivaServices
│        │  └─ Service Cards (Grid)
│        │
│        ├─ ShivaGallery
│        │  └─ Photo Grid
│        │
│        ├─ ShivaVideos
│        │  ├─ YouTube API Integration
│        │  └─ Video Thumbnails
│        │
│        ├─ ShivaTempleStats
│        │  └─ Statistics Counter
│        │
│        ├─ DevoteeTestimonials
│        │  └─ Testimonial Slider
│        │
│        ├─ ShivaTrustActivities
│        │
│        ├─ DonationSection
│        │  ├─ Donation Plans
│        │  ├─ QR Code
│        │  ├─ UPI Details
│        │  └─ Bank Details
│        │
│        ├─ ShivaContactFooter
│        │  ├─ Contact Form
│        │  ├─ Social Media Links
│        │  └─ Footer Information
│        │
│        └─ ScrollToTop Button
```

---

## 📧 Contact Form Flow

```
User fills contact form
        │
        ├─ Name: "Ravi Kumar"
        ├─ Email: "ravi@example.com"
        ├─ Phone: "9876543210"
        └─ Message: "Want to visit temple"
        │
        ▼
Click "Send Message"
        │
        ▼
Frontend validates input
        │
        ▼
POST request to Supabase
        │
        ├─ URL: /functions/v1/make-server-9264c6c0/contact
        └─ Headers: Authorization (Supabase key)
        │
        ▼
Supabase Edge Function receives request
        │
        ├─→ Validates data
        ├─→ Stores in database (kv_store)
        └─→ Calls Resend API
        │
        ▼
Resend sends email
        │
        ├─ From: Gnana Kailayam <onboarding@resend.dev>
        ├─ To: navin.thiruva@gmail.com
        ├─ Reply-To: ravi@example.com
        └─ Content: Form data
        │
        ▼
Email delivered! ✅
        │
        ▼
Frontend shows success message
        │
        ▼
User sees: "Thank you! We'll contact you soon."
```

---

## 🌍 Multi-Language Architecture

```
User selects language: தமிழ் (Tamil)
        │
        ▼
LanguageContext updates state
        │
        ▼
All components re-render
        │
        ├─ ShivaNavbar → Tamil text
        ├─ ShivaHero → Tamil text
        ├─ About sections → Tamil text
        ├─ Services → Tamil text
        ├─ Gallery → Tamil text
        ├─ Videos → Tamil text
        ├─ Donation → Tamil text
        └─ Footer → Tamil text
        │
        ▼
Entire site now in Tamil! 🎉

Translations loaded from:
translations/index.ts
        │
        ├─ en: English
        ├─ ta: Tamil (தமிழ்)
        ├─ kn: Kannada (ಕನ್ನಡ)
        ├─ hi: Hindi (हिंदी)
        ├─ te: Telugu (తెలుగు)
        └─ ml: Malayalam (മലയാളം)
```

---

## 🌓 Theme Toggle Architecture

```
User clicks theme toggle
        │
        ▼
ThemeContext updates state
        │
        ├─ Current: "light"
        └─ New: "dark"
        │
        ▼
Apply dark class to <html>
        │
        ▼
Tailwind CSS applies dark variants
        │
        ├─ Background: #1A1A1A
        ├─ Text: #FFFFFF
        ├─ Cards: Dark variants
        └─ Buttons: Dark variants
        │
        ▼
Entire site now in dark mode! 🌙

Preference saved to:
localStorage → theme = "dark"
        │
        ▼
Next visit: Auto-applies dark mode
```

---

## 🎥 YouTube Integration Flow

```
Component mounts: ShivaVideos
        │
        ▼
Check if YouTube API key exists
        │
        ├─ YES → Fetch videos
        └─ NO → Show static thumbnails
        │
        ▼
Fetch from YouTube Data API v3
        │
        ├─ API: /youtube/v3/search
        ├─ Query: "Gnana Kailayam" OR channel videos
        └─ Results: 6 latest videos
        │
        ▼
Display video thumbnails
        │
        ├─ Thumbnail image
        ├─ Video title
        └─ Play button overlay
        │
        ▼
User clicks video
        │
        ▼
Open YouTube in new tab
OR
Embed video in modal
```

---

## 💰 Donation System Flow

```
User wants to donate
        │
        ▼
Scrolls to Donation Section
        │
        ├─ Sees donation plans
        ├─ Monthly/Yearly options
        └─ Suggested amounts
        │
        ▼
Selects payment method:
        │
        ├─ UPI
        │  ├─ Scan QR code
        │  └─ UPI ID: temple@upi
        │
        ├─ Bank Transfer
        │  ├─ Account Number
        │  ├─ IFSC Code
        │  └─ Bank Name
        │
        └─ Future: Payment Gateway
           └─ (Razorpay/Stripe integration)
```

---

## 🔐 Security Architecture

```
┌─────────────────────────────────────────┐
│         Security Layers                  │
├─────────────────────────────────────────┤
│ 1. HTTPS/SSL (Automatic)                │
│    └─ All traffic encrypted              │
│                                          │
│ 2. Environment Variables                │
│    ├─ API keys not in code              │
│    └─ Stored securely in Vercel         │
│                                          │
│ 3. Supabase Auth                        │
│    └─ API key validation                │
│                                          │
│ 4. CORS Protection                      │
│    └─ Only allowed origins              │
│                                          │
│ 5. DDoS Protection (Vercel)             │
│    └─ Automatic mitigation              │
│                                          │
│ 6. Input Validation                     │
│    └─ Sanitize user input               │
└─────────────────────────────────────────┘
```

---

## 📊 Performance Optimization

```
┌─────────────────────────────────────────┐
│    Performance Optimizations             │
├─────────────────────────────────────────┤
│ 1. Global CDN (Vercel)                  │
│    └─ Serves from nearest location      │
│                                          │
│ 2. Code Splitting                       │
│    └─ Load only needed components       │
│                                          │
│ 3. Image Optimization                   │
│    └─ Lazy loading, responsive sizes    │
│                                          │
│ 4. CSS Optimization                     │
│    └─ Tailwind purges unused styles     │
│                                          │
│ 5. Caching Strategy                     │
│    ├─ Static assets: 1 year             │
│    └─ HTML: No cache (always fresh)     │
│                                          │
│ 6. Compression                          │
│    └─ Gzip/Brotli compression           │
└─────────────────────────────────────────┘
```

---

## 🔄 Deployment Pipeline

```
Developer (You)
        │
        ├─ Edit files locally
        ├─ Test with: npm run dev
        └─ Ready to deploy
        │
        ▼
Push to GitHub (OR Upload to Vercel)
        │
        ▼
Vercel detects change
        │
        ├─→ Automatic trigger
        └─→ Start build process
        │
        ▼
Build Process
        │
        ├─ Install dependencies (npm install)
        ├─ Run build (npm run build)
        ├─ Optimize assets
        ├─ Generate static files
        └─ Run checks
        │
        ▼
Build Success ✅
        │
        ▼
Deploy to Global CDN
        │
        ├─ Upload to edge servers worldwide
        ├─ Update DNS routing
        └─ Invalidate old cache
        │
        ▼
Deployment Complete! 🎉
        │
        ├─ New version live
        ├─ Old version archived
        └─ Rollback available
        │
        ▼
Users see updated website
```

---

## 🗄️ Database Structure

```
Supabase PostgreSQL
│
└─ kv_store_9264c6c0 (Table)
   │
   ├─ id (Primary Key)
   ├─ key (String)
   ├─ value (JSONB)
   ├─ created_at (Timestamp)
   └─ updated_at (Timestamp)
   │
   └─ Sample Data:
      ├─ contact_form_001
      │  └─ { name, email, phone, message }
      │
      ├─ contact_form_002
      │  └─ { name, email, phone, message }
      │
      └─ ... (more submissions)
```

---

## 📡 API Endpoints

```
┌─────────────────────────────────────────────────────────┐
│  Supabase Edge Function Routes                          │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  POST /make-server-9264c6c0/contact                     │
│  └─ Process contact form submissions                    │
│     ├─ Input: { name, email, phone, message }           │
│     ├─ Validation: Check required fields                │
│     ├─ Storage: Save to kv_store                        │
│     ├─ Email: Send via Resend API                       │
│     └─ Response: { success: true, message }             │
│                                                          │
│  (Future endpoints can be added here)                   │
│  GET /make-server-9264c6c0/testimonials                 │
│  POST /make-server-9264c6c0/donate                      │
│  GET /make-server-9264c6c0/events                       │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

## 🌐 Domain Resolution Flow

```
User types: gnanakailayam.com
        │
        ▼
Browser DNS lookup
        │
        ▼
MilesWeb DNS Server
        │
        ├─ Checks A record
        │  └─ @ → 76.76.21.21 (Vercel IP)
        │
        └─ Returns IP address
        │
        ▼
Browser connects to: 76.76.21.21
        │
        ▼
Vercel Edge Network
        │
        ├─ Identifies domain: gnanakailayam.com
        ├─ Loads SSL certificate
        └─ Serves React app
        │
        ▼
Website loads! ✅

---

For www.gnanakailayam.com:
        │
        ▼
Browser DNS lookup
        │
        ▼
MilesWeb DNS Server
        │
        ├─ Checks CNAME record
        │  └─ www → cname.vercel-dns.com
        │
        └─ Follows CNAME
        │
        ▼
Vercel Edge Network
        │
        └─ Redirects to gnanakailayam.com
        │
        ▼
Website loads! ✅
```

---

## 📦 File Build Process

```
Source Files (Development)
│
├─ App.tsx (JSX/TypeScript)
├─ components/*.tsx
├─ styles/globals.css (Tailwind)
└─ assets/*
│
        ▼
Vite Build Process
│
├─ Transpile TypeScript → JavaScript
├─ Process Tailwind CSS → Optimized CSS
├─ Bundle components → Chunks
├─ Optimize images → WebP/compressed
├─ Generate source maps
└─ Tree-shake unused code
│
        ▼
Production Build (dist/)
│
├─ index.html (Entry point)
├─ assets/
│  ├─ index-[hash].js (Main bundle)
│  ├─ vendor-[hash].js (Libraries)
│  ├─ index-[hash].css (Styles)
│  └─ images/ (Optimized)
│
        ▼
Deployed to Vercel CDN
        │
        └─ Served to users worldwide! 🌍
```

---

## 🎯 Technology Stack Summary

```
┌─────────────────────────────────────────┐
│         Technology Stack                 │
├─────────────────────────────────────────┤
│ Frontend Framework:                     │
│ └─ React 18 + TypeScript                │
│                                          │
│ Styling:                                │
│ └─ Tailwind CSS v4                      │
│                                          │
│ Build Tool:                             │
│ └─ Vite (Fast, modern)                  │
│                                          │
│ Hosting:                                │
│ └─ Vercel (Global CDN)                  │
│                                          │
│ Backend:                                │
│ └─ Supabase (PostgreSQL + Edge Funcs)   │
│                                          │
│ Email Service:                          │
│ └─ Resend (Transactional emails)        │
│                                          │
│ Video API:                              │
│ └─ YouTube Data API v3                  │
│                                          │
│ Version Control:                        │
│ └─ Git + GitHub                         │
│                                          │
│ Domain:                                 │
│ └─ gnanakailayam.com (MilesWeb)         │
└─────────────────────────────────────────┘
```

---

🕉️ **Om Namah Shivaya** 🕉️

This architecture is designed for:
- ✅ **Scalability** - Handles growth
- ✅ **Performance** - Lightning fast
- ✅ **Reliability** - 99.99% uptime
- ✅ **Security** - Enterprise-grade
- ✅ **Maintainability** - Easy updates

**Your temple website is built on world-class infrastructure!** 🏆
