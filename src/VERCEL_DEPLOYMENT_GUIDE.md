# 🚀 Vercel Deployment Guide for Gnana Kailayam

## Prerequisites
- GitHub account (free)
- Vercel account (free) - Sign up at https://vercel.com

---

## Step 1: Download All Files from Figma Make

You need to download all the project files. Here's what you need:

### **Files to Download:**
```
📁 Project Root
├── 📄 index.html
├── 📄 main.tsx
├── 📄 App.tsx
├── 📄 package.json
├── 📄 vite.config.ts
├── 📄 tsconfig.json
├── 📄 vercel.json
├── 📄 .gitignore
├── 📄 README.md
│
├── 📁 components/
│   ├── All .tsx files in components folder
│   └── 📁 ui/ (all shadcn components)
│
├── 📁 contexts/
│   ├── LanguageContext.tsx
│   └── ThemeContext.tsx
│
├── 📁 translations/
│   └── index.ts
│
├── 📁 styles/
│   └── globals.css
│
└── 📁 utils/
    └── 📁 supabase/
        └── info.tsx
```

---

## Step 2: Create GitHub Repository

### **Option A: Using GitHub Desktop (Easiest)**

1. **Download GitHub Desktop**: https://desktop.github.com/
2. **Install and sign in** with your GitHub account
3. **Create new repository:**
   - Click "File" → "New Repository"
   - Name: `gnana-kailayam`
   - Local Path: Choose where you downloaded the files
   - Click "Create Repository"
4. **Add all files:**
   - Copy all downloaded files into the repository folder
   - GitHub Desktop will show all changes
5. **Commit:**
   - Summary: "Initial commit - Gnana Kailayam website"
   - Click "Commit to main"
6. **Publish:**
   - Click "Publish repository"
   - Uncheck "Keep this code private" (or keep private, your choice)
   - Click "Publish Repository"

### **Option B: Using Command Line**

```bash
# Navigate to your project folder
cd /path/to/gnana-kailayam

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Gnana Kailayam website"

# Create repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/gnana-kailayam.git
git branch -M main
git push -u origin main
```

---

## Step 3: Deploy to Vercel

### **Super Easy Method:**

1. **Go to Vercel**: https://vercel.com
2. **Sign up/Login** (use your GitHub account for easy access)
3. **Click "Add New Project"**
4. **Import Git Repository:**
   - Click "Import Git Repository"
   - Select your `gnana-kailayam` repository
   - Click "Import"
5. **Configure Project:**
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (leave as is)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)
   - **Environment Variables**: Already configured in vercel.json ✅
6. **Click "Deploy"** 🚀

---

## Step 4: Wait for Deployment

- Vercel will install dependencies
- Build your project
- Deploy to global CDN
- Takes about **2-3 minutes**

You'll get a URL like: `https://gnana-kailayam.vercel.app`

---

## Step 5: Connect Your Custom Domain (Optional)

### **To use gnanakailayam.com:**

1. **In Vercel Dashboard:**
   - Go to your project
   - Click "Settings" → "Domains"
   - Enter: `gnanakailayam.com`
   - Click "Add"

2. **Vercel will show DNS records:**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Add these in MilesWeb:**
   - Go to MilesWeb DNS management
   - Add the A record for root domain
   - Add the CNAME record for www
   - Wait 10-30 minutes

4. **Verify in Vercel:**
   - Vercel will automatically verify
   - SSL certificate will be issued
   - ✅ Your site is live at gnanakailayam.com!

---

## Step 6: Environment Variables (Already Configured!)

The following are already set in `vercel.json`:
- ✅ `VITE_SUPABASE_URL`
- ✅ `VITE_SUPABASE_ANON_KEY`

### **Additional Environment Variables (if needed):**

If you need to add more (like YouTube API key), go to:
- Vercel Dashboard → Your Project → Settings → Environment Variables
- Add:
  - `VITE_YOUTUBE_API_KEY` = `your_api_key_here`
  - `VITE_RESEND_API_KEY` = `your_resend_key_here`

---

## Automatic Deployments

From now on, every time you push to GitHub:
- Vercel automatically detects the change
- Builds and deploys new version
- Zero downtime deployment
- ✅ **Fully automatic!**

---

## Troubleshooting

### **Build Fails:**
- Check the build logs in Vercel dashboard
- Common issue: Missing dependencies
- Solution: Ensure `package.json` is committed

### **Environment Variables Not Working:**
- Go to Settings → Environment Variables
- Redeploy the project

### **Domain Not Connecting:**
- Check DNS records in MilesWeb
- Wait 30 minutes for DNS propagation
- Use https://dnschecker.org to verify

---

## Support

Need help? Check:
- Vercel Documentation: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- GitHub Issues: Create issues in your repository

---

## 🎉 Congratulations!

Your Gnana Kailayam website is now live on Vercel with:
- ✅ Lightning-fast global CDN
- ✅ Automatic HTTPS
- ✅ Automatic deployments
- ✅ Custom domain support
- ✅ All features working (contact form, YouTube, multi-language, etc.)

---

🕉️ **Om Namah Shivaya** 🕉️
