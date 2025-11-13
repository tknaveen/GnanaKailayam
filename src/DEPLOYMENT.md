# 🚀 Deployment Guide - Gnana Kailayam

Complete guide to deploy your Shiva Temple website to production.

## 📋 Pre-Deployment Checklist

- ✅ All features working locally
- ✅ Email form tested with Supabase
- ✅ All translations complete
- ✅ Images loading properly
- ✅ Mobile responsive tested
- ✅ Dark/Light theme working

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - FREE)

**Why Vercel?**
- ✅ FREE forever for personal projects
- ✅ Automatic HTTPS/SSL
- ✅ Global CDN (fast worldwide)
- ✅ Automatic deployments from Git
- ✅ Zero configuration needed

**Steps:**

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Login to Vercel:**
```bash
vercel login
```

3. **Deploy:**
```bash
vercel
```

4. **Answer the prompts:**
```
? Set up and deploy "~/gnana-kailayam"? [Y/n] y
? Which scope do you want to deploy to? [Your Name]
? Link to existing project? [y/N] n
? What's your project's name? gnana-kailayam
? In which directory is your code located? ./
? Want to override the settings? [y/N] n
```

5. **Done!** Your site is live at: `https://gnana-kailayam.vercel.app`

6. **For production deployment:**
```bash
vercel --prod
```

**Environment Variables in Vercel:**

1. Go to: https://vercel.com/dashboard
2. Select your project
3. Click "Settings" → "Environment Variables"
4. Add:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

---

### Option 2: Netlify (FREE)

1. **Build the project:**
```bash
npm run build
```

2. **Install Netlify CLI:**
```bash
npm install -g netlify-cli
```

3. **Login:**
```bash
netlify login
```

4. **Deploy:**
```bash
netlify deploy
```

5. **For production:**
```bash
netlify deploy --prod
```

**Or use Netlify UI:**
1. Go to https://app.netlify.com
2. Drag & drop the `dist` folder
3. Done!

---

### Option 3: GitHub Pages (FREE)

1. **Install gh-pages:**
```bash
npm install --save-dev gh-pages
```

2. **Update package.json:**
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/gnana-kailayam"
}
```

3. **Deploy:**
```bash
npm run deploy
```

---

## 🔧 Build Optimization

### Before deploying, optimize your build:

1. **Clean install dependencies:**
```bash
rm -rf node_modules package-lock.json
npm install
```

2. **Test production build locally:**
```bash
npm run build
npm run preview
```

3. **Check build size:**
```bash
npm run build
# Check dist/ folder size
```

---

## 🌍 Custom Domain Setup

### Vercel:

1. Buy domain from Namecheap/GoDaddy
2. In Vercel Dashboard → Settings → Domains
3. Add your domain: `gnanakailayam.com`
4. Update DNS records as shown
5. Wait 24-48 hours for propagation

### DNS Records (Example):
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## 🔐 Security Checklist

Before going live:

- ✅ Environment variables set correctly
- ✅ API keys not exposed in frontend code
- ✅ HTTPS enabled (automatic on Vercel/Netlify)
- ✅ CORS configured properly in Supabase
- ✅ No console.log() in production code

---

## 📧 Email Setup (Supabase + Resend)

Your contact form requires backend setup:

### 1. Supabase Setup:

Already configured at: `https://llatyspuufuzcupnflil.supabase.co`

### 2. Resend API Setup:

1. Go to: https://resend.com
2. Sign up for free account
3. Get API key
4. Add to Supabase secrets:
```bash
# In Supabase Dashboard → Project Settings → Edge Functions → Secrets
RESEND_API_KEY=re_your_api_key_here
```

### 3. Deploy Edge Function:

```bash
# Install Supabase CLI
npm install -g supabase

# Login
supabase login

# Link to project
supabase link --project-ref llatyspuufuzcupnflil

# Deploy function
supabase functions deploy server
```

---

## 🎬 YouTube Integration

Already configured for channel: `@NanaKailayam`

To use your own channel:

1. Get YouTube API key from: https://console.cloud.google.com
2. Add to Supabase secrets:
```bash
YOUTUBE_API_KEY=your_youtube_api_key
```
3. Update channel handle in `/supabase/functions/server/index.tsx`

---

## 🐛 Troubleshooting Deployment

### Issue: Build fails

**Solution:**
```bash
# Clear cache
rm -rf node_modules dist .cache
npm install
npm run build
```

### Issue: Environment variables not working

**Solution:**
- Ensure variables start with `VITE_` for frontend
- Check Vercel/Netlify dashboard for correct values
- Redeploy after adding variables

### Issue: 404 on page refresh

**Solution:**
Already configured in `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

For Netlify, create `_redirects` in `/public`:
```
/*  /index.html  200
```

### Issue: Images not loading

**Solution:**
- Check image URLs in browser console
- Ensure Unsplash images are accessible
- Check CORS settings

---

## 📊 Post-Deployment

### 1. Test Everything:

- ✅ All pages load correctly
- ✅ Language switching works
- ✅ Theme toggle works
- ✅ Contact form sends emails
- ✅ Donation section displays
- ✅ Mobile responsive
- ✅ Images load properly
- ✅ Videos play correctly

### 2. Monitor Performance:

Use Vercel Analytics or Google PageSpeed Insights:
```
https://pagespeed.web.dev/
```

### 3. SEO Optimization:

Add to `index.html`:
```html
<meta name="description" content="Gnana Kailayam - Sacred Shiva Temple">
<meta property="og:title" content="Gnana Kailayam">
<meta property="og:description" content="Divine Abode of Lord Shiva">
<meta property="og:image" content="/og-image.jpg">
```

---

## 🔄 Continuous Deployment

### Setup Auto-Deploy from GitHub:

1. Push code to GitHub
2. In Vercel Dashboard:
   - Import Git Repository
   - Connect to GitHub
   - Select repository
3. Every push to `main` branch auto-deploys!

**Git Setup:**
```bash
git init
git add .
git commit -m "Initial commit - Gnana Kailayam website"
git branch -M main
git remote add origin https://github.com/yourusername/gnana-kailayam.git
git push -u origin main
```

---

## 📱 Mobile App (Optional Future)

Convert to mobile app using:
- **Capacitor:** https://capacitorjs.com
- **React Native WebView**

---

## 💰 Costs

### FREE Tier (Recommended):
- **Hosting:** Vercel/Netlify (FREE forever)
- **Backend:** Supabase (FREE - 500MB database)
- **Email:** Resend (FREE - 3,000 emails/month)
- **Images:** Unsplash (FREE)

**Total: $0/month** ✅

### Paid Options (If Needed):
- **Custom Domain:** $10-15/year
- **Supabase Pro:** $25/month (if you exceed free tier)
- **Resend Pro:** $20/month (if you exceed 3,000 emails)

---

## 📞 Support

For deployment issues:
- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **Supabase Docs:** https://supabase.com/docs

---

## ✅ Quick Deploy Command (Copy-Paste):

```bash
# One-line deployment to Vercel
npm install -g vercel && vercel login && vercel --prod
```

---

🕉️ **Your temple website will be live in 5 minutes!** 🕉️

**Om Namah Shivaya**
