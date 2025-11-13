# 🚀 Getting Started - Gnana Kailayam

Quick guide to get your temple website running locally.

## ⚡ Super Quick Start (3 Commands)

```bash
npm install
npm run dev
```

Open: `http://localhost:3000`

That's it! ✅

---

## 📋 Detailed Setup

### 1. Prerequisites

Make sure you have installed:
- **Node.js 18+** - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)

**Check versions:**
```bash
node --version  # Should be v18 or higher
npm --version   # Should be 9 or higher
```

---

### 2. Install Dependencies

```bash
npm install
```

This installs:
- React 18
- Tailwind CSS 3.4.1
- Motion (animations)
- ShadCN UI components
- Lucide icons
- And more...

---

### 3. Start Development Server

```bash
npm run dev
```

You should see:
```
  VITE v5.1.0  ready in 500 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

---

### 4. Open in Browser

**Option 1: Normal Mode**
```
http://localhost:3000
```

**Option 2: Incognito (Recommended for testing)**
```bash
# Windows
start chrome --incognito http://localhost:3000

# Mac
open -a "Google Chrome" --args --incognito http://localhost:3000
```

---

## 🎨 Project Features

Once running, you can test:

### ✅ Multi-Language Support
1. Click language dropdown in navbar
2. Select: Tamil, Hindi, Kannada, Telugu, or Malayalam
3. Entire site changes language instantly!

### ✅ Dark/Light Theme
1. Click moon/sun icon in navbar
2. Theme changes with smooth animation
3. Preference saved to browser

### ✅ Navigation
- **Home:** Hero carousel
- **About:** Temple history
- **Services:** Puja timings
- **Gallery:** Photo gallery
- **Videos:** YouTube videos
- **Contact:** Email form

### ✅ Donate Button
- Click "Donate" in navbar
- Smooth scrolls to donation section
- Shows UPI QR code and bank details

### ✅ Contact Form
- Fill out form at bottom
- Sends email to: contact@gnanakailayam.com
- Requires Supabase backend setup

---

## 📁 Project Structure

```
gnana-kailayam/
│
├── components/              # All React components
│   ├── ShivaNavbar.tsx     # Top navigation bar
│   ├── ShivaHero.tsx       # Hero carousel
│   ├── ShivaGallery.tsx    # Image gallery
│   ├── ShivaVideos.tsx     # YouTube integration
│   ├── DonationSection.tsx # Donation QR/UPI
│   └── ui/                 # ShadCN components
│
├── contexts/               # React Context providers
│   ├── LanguageContext.tsx # Multi-language logic
│   └── ThemeContext.tsx    # Dark/Light theme
│
├── translations/           # All language files
│   └── index.ts           # EN, TA, HI, KN, TE, ML
│
├── styles/
│   └── globals.css        # Tailwind + custom CSS
│
├── supabase/              # Backend server
│   └── functions/server/
│       └── index.tsx      # Email API
│
├── App.tsx                # Main component
├── main.tsx              # React entry point
└── index.html            # HTML template
```

---

## 🔧 Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install new package
npm install package-name

# Clean install (if issues)
rm -rf node_modules
npm install
```

---

## 🐛 Troubleshooting

### Issue: Port 3000 already in use

**Solution:**
```bash
# Kill port 3000
npx kill-port 3000

# Or use different port
npm run dev -- --port 3001
```

---

### Issue: CSS not loading

**Solution:**
```bash
# Ensure Tailwind v3.4.1 is installed
npm install tailwindcss@3.4.1 -D

# Restart dev server
Ctrl + C
npm run dev
```

---

### Issue: Browser showing `/login` page

**Solution:**
```bash
# Clear browser cache
Ctrl + Shift + Delete

# Or use incognito mode
Ctrl + Shift + N
```

Then go to: `http://localhost:3000`

---

### Issue: Images not loading

**Images are fetched from Unsplash:**
- Check internet connection
- Images load from CDN
- May take a few seconds on first load

---

### Issue: Contact form not working

**The form requires Supabase backend:**
1. Contact form UI works locally
2. Email sending requires deployed backend
3. See `DEPLOYMENT.md` for backend setup

---

## 🎯 Next Steps

### 1. Customize Content

Edit these files:
- `/translations/index.ts` - Change text content
- `/components/DonationSection.tsx` - Update UPI/bank details
- `/components/ShivaVideos.tsx` - Change YouTube channel

### 2. Change Images

Images come from Unsplash API.
To use your own images:
1. Replace ImageWithFallback components
2. Add images to `/public/images/`
3. Import: `import img from '/images/your-image.jpg'`

### 3. Update Contact Info

Edit `/components/ShivaContactFooter.tsx`:
```tsx
addressText: 'Your Temple Address'
phone: '+91 YOUR PHONE'
email: 'your@email.com'
```

### 4. Deploy to Production

See `DEPLOYMENT.md` for complete deployment guide.

Quick deploy:
```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## 📚 Learn More

### Technologies Used:
- **React:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com
- **Vite:** https://vitejs.dev
- **ShadCN UI:** https://ui.shadcn.com
- **Motion:** https://motion.dev
- **Supabase:** https://supabase.com

### Helpful Resources:
- React Hooks: https://react.dev/reference/react
- Tailwind Classes: https://tailwindcss.com/docs
- Lucide Icons: https://lucide.dev

---

## 🎨 Development Tips

### Hot Reload
- Save any file → Browser auto-refreshes
- No need to restart server

### Component Development
1. Create new component in `/components/`
2. Import in `App.tsx`
3. Changes appear instantly

### Styling
- Use Tailwind classes: `className="bg-orange-500 text-white"`
- Custom CSS in: `/styles/globals.css`
- Dark mode: `dark:bg-gray-900`

### Testing Languages
1. Click language selector
2. Check all sections update
3. Verify translations in `/translations/index.ts`

---

## ✅ Success Checklist

You know it's working when:
- ✅ Hero carousel auto-plays
- ✅ Navigation smooth scrolls
- ✅ Language changes entire site
- ✅ Theme toggles dark/light
- ✅ Gallery images load
- ✅ Videos play
- ✅ Mobile responsive works
- ✅ No console errors

---

## 🆘 Need Help?

If you're stuck:
1. Check console for errors (`F12` → Console)
2. Review error messages
3. Check `DEPLOYMENT.md` for backend issues
4. Ensure all dependencies installed

---

## 🎉 You're Ready!

Your Gnana Kailayam website is now running locally.

**Next:** Make it live! See `DEPLOYMENT.md`

---

🕉️ **Om Namah Shivaya** 🕉️
