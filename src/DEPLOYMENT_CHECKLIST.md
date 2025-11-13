# ✅ Deployment Checklist

Use this checklist to ensure smooth deployment of Gnana Kailayam to Vercel.

---

## Pre-Deployment Checklist

### **Files Ready:**
- [ ] All component files (.tsx) downloaded
- [ ] `package.json` present
- [ ] `vercel.json` present
- [ ] `index.html` present
- [ ] `main.tsx` present
- [ ] `App.tsx` present
- [ ] `styles/globals.css` present
- [ ] `translations/index.ts` present
- [ ] All UI components in `components/ui/` folder

### **Accounts Created:**
- [ ] GitHub account (if using Method 2)
- [ ] Vercel account

---

## Deployment Steps

### **Phase 1: Code Upload**
- [ ] Project uploaded to GitHub **OR**
- [ ] Project folder ready for Vercel upload

### **Phase 2: Vercel Deployment**
- [ ] Logged into Vercel
- [ ] Project imported/uploaded
- [ ] Framework preset set to "Vite"
- [ ] Build command: `npm run build`
- [ ] Output directory: `dist`
- [ ] Clicked "Deploy"
- [ ] Deployment successful (check for green checkmark ✅)

### **Phase 3: Verify Deployment**
- [ ] Visited the Vercel URL (e.g., https://gnana-kailayam.vercel.app)
- [ ] Homepage loads correctly
- [ ] Navigation works (Home, About, Services, Gallery, etc.)
- [ ] Dark/Light mode toggle works
- [ ] Language switcher works (try changing to Tamil, Hindi, etc.)
- [ ] YouTube videos section loads
- [ ] Donation section displays correctly
- [ ] Contact form appears

---

## Test All Features

### **UI/UX Tests:**
- [ ] ShivaLogo displays in navbar
- [ ] Hero carousel auto-plays
- [ ] About sections render properly
- [ ] Services cards display
- [ ] Gallery images load
- [ ] Statistics counter visible
- [ ] Testimonials section shows
- [ ] Donation plans display
- [ ] QR code shows in donation section
- [ ] UPI/Bank details visible
- [ ] Footer displays correctly
- [ ] Facebook icon links to profile
- [ ] YouTube icon links to channel

### **Functionality Tests:**
- [ ] Dark mode toggle switches theme
- [ ] Light mode toggle switches theme
- [ ] Language change updates entire site
- [ ] Contact form accepts input
- [ ] Contact form submission works
- [ ] Email notification received (check navin.thiruva@gmail.com)
- [ ] YouTube videos load (if API key configured)
- [ ] Scroll to top button works
- [ ] Mobile menu works on small screens

### **Responsive Tests:**
- [ ] Desktop view (1920px+) looks good
- [ ] Laptop view (1366px) looks good
- [ ] Tablet view (768px) looks good
- [ ] Mobile view (375px) looks good

---

## Custom Domain Setup (Optional)

### **Domain Configuration:**
- [ ] Domain added in Vercel (gnanakailayam.com)
- [ ] A record added in MilesWeb: `@ → 76.76.21.21`
- [ ] CNAME record added in MilesWeb: `www → cname.vercel-dns.com`
- [ ] Waited 15-30 minutes for DNS propagation
- [ ] Domain verified in Vercel
- [ ] SSL certificate issued automatically
- [ ] https://gnanakailayam.com loads
- [ ] https://www.gnanakailayam.com redirects to main domain

---

## Environment Variables (If Needed)

### **Check if these are set in Vercel:**
- [ ] `VITE_SUPABASE_URL` (auto-configured via vercel.json)
- [ ] `VITE_SUPABASE_ANON_KEY` (auto-configured via vercel.json)

### **Optional Variables (add if needed):**
- [ ] `VITE_YOUTUBE_API_KEY` (for YouTube videos)
- [ ] `VITE_RESEND_API_KEY` (already set in backend)

---

## Post-Deployment

### **Share Your Website:**
- [ ] Test on multiple devices
- [ ] Share URL with team/community
- [ ] Add to Google Search Console
- [ ] Submit sitemap (if created)

### **Monitor:**
- [ ] Check Vercel analytics
- [ ] Monitor contact form submissions
- [ ] Check error logs (if any)

---

## Support & Maintenance

### **Regular Checks:**
- [ ] Test contact form weekly
- [ ] Check YouTube API quota usage
- [ ] Monitor Supabase usage
- [ ] Update content as needed

### **If Issues Occur:**
1. Check Vercel deployment logs
2. Check browser console for errors
3. Verify environment variables
4. Check Supabase backend status
5. Review recent code changes

---

## 🎉 Success Criteria

Your deployment is successful when:
- ✅ Website loads at Vercel URL
- ✅ All features work as expected
- ✅ No console errors
- ✅ Contact form sends emails
- ✅ Multi-language support works
- ✅ Dark/Light mode works
- ✅ Mobile responsive
- ✅ Custom domain connected (if applicable)

---

## Quick Reference

**Vercel Dashboard:** https://vercel.com/dashboard  
**GitHub Repository:** https://github.com/YOUR_USERNAME/gnana-kailayam  
**Live Site:** https://gnanakailayam.com (or your Vercel URL)  
**Contact Email:** contact@gnanakailayam.com  

---

🕉️ **Om Namah Shivaya** 🕉️

**Need help?** Check `VERCEL_DEPLOYMENT_GUIDE.md` for detailed instructions.
