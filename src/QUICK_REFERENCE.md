# 📌 Quick Reference Card

## Gnana Kailayam - Deployment Quick Reference

Print or bookmark this page for quick access to common commands and links!

---

## 🔗 Important Links

### **Deployment:**
- Vercel: https://vercel.com
- GitHub: https://github.com
- Vercel Dashboard: https://vercel.com/dashboard

### **Tools:**
- DNS Checker: https://dnschecker.org
- SSL Checker: https://www.sslshopper.com/ssl-checker.html
- PageSpeed Test: https://pagespeed.web.dev

### **Your Services:**
- Supabase: https://llatyspuufuzcupnflil.supabase.co
- Resend: https://resend.com
- MilesWeb: (your login)

---

## 🚀 Quick Deploy Commands

### **If Using Terminal/Command Line:**

```bash
# Clone/Download project
cd gnana-kailayam

# Install dependencies
npm install

# Test locally
npm run dev
# Visit: http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
```

### **If Using GitHub:**

```bash
# First time setup
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/gnana-kailayam.git
git push -u origin main

# Future updates
git add .
git commit -m "Update: your changes"
git push
```

---

## 🌐 DNS Records Quick Reference

### **For Vercel (Add in MilesWeb):**

```
┌─────────┬──────┬─────────────────────────────┐
│ Type    │ Name │ Value                       │
├─────────┼──────┼─────────────────────────────┤
│ A       │ @    │ 76.76.21.21                 │
│ CNAME   │ www  │ cname.vercel-dns.com        │
└─────────┴──────┴─────────────────────────────┘
```

### **Current DNS Records (Already Setup):**

```
┌─────────┬──────┬─────────────────────────────┐
│ Type    │ Name │ Status                      │
├─────────┼──────┼─────────────────────────────┤
│ DKIM    │ mail │ ✅ Verified                 │
│ MX      │ send │ ⚠️ Failed (working on it)   │
│ TXT     │ send │ ⚠️ Failed (working on it)   │
└─────────┴──────┴─────────────────────────────┘
```

---

## 📧 Email Configuration

### **Current Setup:**
```
Contact Form → Supabase → Resend → navin.thiruva@gmail.com
✅ Working perfectly!
```

### **Future Setup (After DNS Verification):**
```
Contact Form → Supabase → Resend → contact@gnanakailayam.com
⏳ Waiting for MX/TXT records to verify
```

---

## 🔑 Environment Variables

### **Already Configured in vercel.json:**

```javascript
VITE_SUPABASE_URL = "https://llatyspuufuzcupnflil.supabase.co"
VITE_SUPABASE_ANON_KEY = "eyJhbGci...FaAU"
```

### **Backend (Supabase) Variables:**
```
SUPABASE_URL = (auto-configured)
SUPABASE_SERVICE_ROLE_KEY = (auto-configured)
RESEND_API_KEY = (already provided)
YOUTUBE_API_KEY = (already provided)
```

---

## 📂 Project Structure Quick Map

```
📁 Root
├── index.html          ← Main HTML
├── main.tsx            ← React entry
├── App.tsx             ← Main component
│
├── 📁 components/
│   ├── ShivaNavbar.tsx      ← Navigation
│   ├── ShivaHero.tsx        ← Hero carousel
│   ├── AboutShivaTemple.tsx ← About section
│   ├── ShivaServices.tsx    ← Services
│   ├── ShivaGallery.tsx     ← Photo gallery
│   ├── ShivaVideos.tsx      ← YouTube videos
│   ├── DonationSection.tsx  ← Donations
│   ├── ShivaContactFooter.tsx ← Contact/Footer
│   └── 📁 ui/               ← Shadcn components
│
├── 📁 contexts/
│   ├── ThemeContext.tsx     ← Dark/Light mode
│   └── LanguageContext.tsx  ← Multi-language
│
├── 📁 translations/
│   └── index.ts             ← 6 languages
│
└── 📁 styles/
    └── globals.css          ← Tailwind styles
```

---

## 🎨 Color Scheme (Orange Theme)

```css
Primary Orange:     #FF6B35
Dark Orange:        #E85D31
Light Orange:       #FFA07A
Background Light:   #FFF5F0
Background Dark:    #1A1A1A
Text Light:         #333333
Text Dark:          #FFFFFF
```

---

## 🌍 Languages Available

```
1. English (en)    🇬🇧
2. Tamil (ta)      🇮🇳
3. Kannada (kn)    🇮🇳
4. Hindi (hi)      🇮🇳
5. Telugu (te)     🇮🇳
6. Malayalam (ml)  🇮🇳
```

---

## 📱 Breakpoints (Responsive Design)

```css
Mobile:    < 640px
Tablet:    640px - 1024px
Laptop:    1024px - 1280px
Desktop:   > 1280px
```

---

## 🔧 Common Issues & Quick Fixes

### **Issue: Build Failed**
```
✅ Check package.json exists
✅ Clear cache and rebuild
✅ Check error logs in Vercel
```

### **Issue: Site Blank After Deploy**
```
✅ Check browser console (F12)
✅ Verify all files uploaded
✅ Check environment variables
```

### **Issue: Contact Form Not Working**
```
✅ Test Supabase backend
✅ Check email in spam folder
✅ Verify Resend API key
```

### **Issue: Domain Not Connecting**
```
✅ Wait 30-60 minutes
✅ Check DNS with dnschecker.org
✅ Verify A and CNAME records
```

---

## 📊 Performance Targets

```
Page Load Time:    < 3 seconds
Largest Contentful Paint: < 2.5s
First Input Delay: < 100ms
Cumulative Layout Shift: < 0.1
Performance Score: > 90
```

---

## 🎯 Feature Checklist

```
✅ Responsive design
✅ Dark/Light mode
✅ 6 languages
✅ Hero carousel
✅ Navigation menu
✅ About sections
✅ Services cards
✅ Photo gallery
✅ YouTube videos
✅ Donation QR code
✅ UPI/Bank details
✅ Contact form
✅ Facebook link
✅ YouTube link
✅ Email notifications
✅ Mobile responsive
✅ SEO optimized
```

---

## 📞 Contact Information

### **Temple:**
```
Name:    Gnana Kailayam
Email:   contact@gnanakailayam.com
Backup:  navin.thiruva@gmail.com
```

### **Social Media:**
```
Facebook: /gnanakailayam (replace with actual)
YouTube:  /gnanakailayam (replace with actual)
```

---

## 🆘 Emergency Commands

### **Rollback Deployment:**
```
1. Go to Vercel Dashboard
2. Click "Deployments"
3. Find previous working version
4. Click "..." → "Promote to Production"
```

### **Force Rebuild:**
```
1. Go to Vercel Dashboard
2. Click "Deployments"
3. Click "Redeploy"
4. Wait for build to complete
```

---

## 📚 Documentation Quick Access

```
🎯 Start Here:
   └── QUICK_START.md (10-minute deploy)

📖 Detailed Guides:
   ├── VERCEL_DEPLOYMENT_GUIDE.md (full instructions)
   ├── STEP_BY_STEP_DEPLOYMENT.md (visual guide)
   └── DEPLOYMENT_CHECKLIST.md (testing)

❓ Help:
   ├── DEPLOYMENT_FAQ.md (all questions)
   ├── HOSTING_COMPARISON.md (compare options)
   └── DEPLOYMENT_SUMMARY.md (overview)

📌 Reference:
   └── QUICK_REFERENCE.md (this file)
```

---

## ⚡ Speed Tips

### **Local Development:**
```bash
npm run dev          # Start dev server (fast)
npm run build        # Test production build
npm run preview      # Preview production
```

### **Quick Update Workflow:**
```
1. Edit files locally
2. Test with: npm run dev
3. Commit to GitHub (or upload to Vercel)
4. Auto-deploy!
```

---

## 🔐 Security Checklist

```
✅ HTTPS enabled (automatic)
✅ Environment variables secure
✅ API keys not in code
✅ Sensitive data in backend
✅ DDoS protection (Vercel)
✅ Regular backups (automatic)
```

---

## 💾 Backup Strategy

```
Primary:   Vercel (all deployments saved)
Secondary: GitHub (code history)
Tertiary:  Local copy (your computer)
Database:  Supabase (automatic backups)
```

---

## 📏 Testing Checklist

### **Desktop:**
```
□ Chrome
□ Firefox
□ Safari
□ Edge
```

### **Mobile:**
```
□ iPhone Safari
□ Android Chrome
□ Tablet (iPad/Android)
```

### **Features:**
```
□ All pages load
□ Navigation works
□ Contact form submits
□ Language switcher works
□ Dark/Light mode toggles
□ YouTube videos load
□ Images display
□ QR code shows
□ Links work
```

---

## 🎉 Success Metrics

### **After Deployment:**
```
✅ Website live
✅ Custom domain connected
✅ SSL certificate active
✅ All features working
✅ Mobile responsive
✅ Performance score > 90
✅ Contact form tested
✅ No console errors
```

---

## 📅 Maintenance Schedule

### **Weekly:**
```
□ Test contact form
□ Check for email submissions
□ Verify uptime
```

### **Monthly:**
```
□ Review analytics
□ Update content (if needed)
□ Check performance
```

### **Quarterly:**
```
□ Update dependencies (optional)
□ Review features
□ Plan enhancements
```

---

## 🕉️ Quick Command Reference

```bash
# Local development
npm install          # Install dependencies
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview build

# Git commands
git status           # Check changes
git add .            # Stage all changes
git commit -m "msg"  # Commit changes
git push             # Push to GitHub

# Vercel CLI (optional)
vercel               # Deploy from terminal
vercel --prod        # Deploy to production
vercel logs          # View logs
```

---

**Print this page for quick reference! 📌**

🕉️ **Om Namah Shivaya** 🕉️

---

**Last Updated:** November 12, 2025  
**Version:** 1.0  
**Status:** Ready to Deploy ✅
