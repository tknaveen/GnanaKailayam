# 🕉️ Gnana Kailayam - Shiva Temple Website

A modern, fully responsive temple website dedicated to Lord Shiva, built with React, TypeScript, and Tailwind CSS.

## ✨ Features

### 🌍 Multi-Language Support
- **5 Languages:** English, Tamil, Kannada, Hindi, Telugu, Malayalam
- One-click language switching
- Complete translation of all content

### 🎨 Theme Support
- **Dark Mode & Light Mode**
- Smooth theme transitions
- Preferences saved to localStorage

### 📱 Fully Responsive
- Mobile-first design
- Optimized for all screen sizes
- Touch-friendly navigation

### 🎯 Key Sections
- **Hero Carousel:** Auto-playing image carousel with Shiva temple imagery
- **About Temple:** History and significance
- **Services:** Puja timings and offerings
- **Gallery:** Photo gallery with lightbox
- **Videos:** YouTube video integration
- **Donations:** UPI/QR code payment options
- **Contact Form:** Email integration via Supabase

### 🎭 Modern UI/UX
- Smooth animations with Motion (Framer Motion)
- Orange theme representing spirituality
- Professional design with ShadCN UI components
- Interactive hover effects

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Open in browser:**
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
gnana-kailayam/
├── components/           # React components
│   ├── ui/              # ShadCN UI components
│   ├── ShivaNavbar.tsx  # Navigation bar
│   ├── ShivaHero.tsx    # Hero carousel
│   ├── ShivaGallery.tsx # Image gallery
│   └── ...              # Other components
├── contexts/            # React contexts
│   ├── LanguageContext.tsx  # Multi-language support
│   └── ThemeContext.tsx     # Dark/Light theme
├── translations/        # Translation files
│   └── index.ts        # All language translations
├── styles/             # Global styles
│   └── globals.css     # Tailwind & custom CSS
├── supabase/           # Backend server
│   └── functions/server/
│       └── index.tsx   # Email API endpoint
└── App.tsx             # Main app component
```

## 🎨 Tech Stack

- **Framework:** React 18 + TypeScript
- **Styling:** Tailwind CSS 3.4
- **Animations:** Motion (Framer Motion)
- **UI Components:** ShadCN UI
- **Icons:** Lucide React
- **Carousel:** Embla Carousel
- **Backend:** Supabase Edge Functions
- **Email:** Resend API
- **Build Tool:** Vite 5

## 🌐 Deployment

### Vercel (Recommended)

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

### Netlify

1. **Build the project:**
```bash
npm run build
```

2. **Deploy `dist` folder to Netlify**

## ⚙️ Environment Variables

Create a `.env` file in the root:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 📧 Email Configuration

The contact form uses Supabase Edge Functions with Resend API:

1. Set up Supabase project
2. Add RESEND_API_KEY to Supabase secrets
3. Deploy edge function from `/supabase/functions/server/`

## 🎯 Key Features Implementation

### Multi-Language System
```tsx
import { useLanguage } from './contexts/LanguageContext';

function Component() {
  const { t, language, setLanguage } = useLanguage();
  return <h1>{t('hero.title')}</h1>;
}
```

### Theme Toggle
```tsx
import { useTheme } from './contexts/ThemeContext';

function Component() {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Toggle Theme</button>;
}
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
```

### Clear Browser Cache
- Use Incognito mode: `Ctrl + Shift + N`
- Or clear cache: `Ctrl + Shift + Delete`

### CSS Not Loading
Ensure Tailwind v3.4.1 is installed (not v4):
```bash
npm install tailwindcss@3.4.1
```

## 📄 License

This project is created for Gnana Kailayam Temple.

## 🙏 Credits

- **Images:** Unsplash
- **Icons:** Lucide React
- **UI Components:** ShadCN UI
- **Animations:** Motion (Framer Motion)

---

🕉️ **Om Namah Shivaya** 🕉️
