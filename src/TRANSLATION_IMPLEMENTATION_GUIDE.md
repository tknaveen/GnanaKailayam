# Multi-Language & Dark Mode Implementation Guide

## ✅ COMPLETED

### Infrastructure
- ✅ ThemeContext created (`/contexts/ThemeContext.tsx`)
- ✅ LanguageContext created (`/contexts/LanguageContext.tsx`)
- ✅ Comprehensive translations file (`/translations/index.ts`) with 6 languages:
  - English, Tamil (தமிழ்), Kannada (ಕನ್ನಡ), Hindi (हिन्दी), Telugu (తెలుగు), Malayalam (മലയാളം)
- ✅ App.tsx wrapped with providers
- ✅ ShivaNavbar.tsx - Full theme toggle & language selector implemented
- ✅ ShivaHero.tsx - Hero buttons translated
- ✅ AboutShivaTemple.tsx - Partially updated with translations

### Dark Mode Support
- ✅ Tailwind CSS dark mode configuration in globals.css
- ✅ Dark mode classes added to:
  - Navbar
  - App wrapper
  - AboutShivaTemple section

## 🔄 REMAINING COMPONENTS TO UPDATE

### Critical Components (User-Facing Text)
These components need to:
1. Import `useLanguage` hook
2. Replace hardcoded text with `t('translation.key')`
3. Add dark mode classes (`dark:` variants)

#### Priority 1: Main Content
- [ ] **ShivaAnnouncements.tsx** - Add translations for announcements
- [ ] **ShivaDarshan.tsx** - Temple address, timings, etc.
- [ ] **ShivaServices.tsx** - Service names and descriptions
- [ ] **AboutShivaTrust.tsx** - Trust information
- [ ] **ShivaGallery.tsx** - Gallery titles
- [ ] **ShivaVideos.tsx** - Video section text
- [ ] **ShivaTrustActivities.tsx** - Activities descriptions
- [ ] **ShivaTempleStats.tsx** - Statistics labels
- [ ] **ShivaDonationPlans.tsx** - Donation plan names
- [ ] **DonationSection.tsx** - Donation instructions and labels
- [ ] **ShivaContactFooter.tsx** - Contact form and footer

#### Priority 2: Interactive Components
- [ ] **DevoteeTestimonials.tsx** - Section headings
- [ ] **ScrollToTop.tsx** - Tooltip text (if any)

## 📋 HOW TO UPDATE EACH COMPONENT

### Step 1: Import the hook
```tsx
import { useLanguage } from '../contexts/LanguageContext';

export function YourComponent() {
  const { t } = useLanguage();
  // ... rest of component
}
```

### Step 2: Replace hardcoded text
**Before:**
```tsx
<h2>About Temple</h2>
<p>Welcome to Gnana Kailayam</p>
```

**After:**
```tsx
<h2>{t('about.title')}</h2>
<p>{t('about.welcomeText')}</p>
```

### Step 3: Add dark mode classes
**Before:**
```tsx
<div className="bg-white text-gray-900">
  <p className="text-gray-600">Some text</p>
</div>
```

**After:**
```tsx
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
  <p className="text-gray-600 dark:text-gray-300">Some text</p>
</div>
```

## 🗝️ AVAILABLE TRANSLATION KEYS

All translation keys are in `/translations/index.ts`. Main sections:

- **nav.*** - Navigation (home, about, services, gallery, contact, donate)
- **hero.*** - Hero section (title, subtitle, description, buttons)
- **about.*** - About temple (title, history, significance, architecture)
- **darshan.*** - Temple visit info (address, timings)
- **services.*** - Temple services (puja names, descriptions)
- **gallery.*** - Gallery text
- **videos.*** - Videos section
- **testimonials.*** - Testimonials section
- **stats.*** - Temple statistics
- **donation.*** - Donation section (amounts, payment methods)
- **contact.*** - Contact form (labels, messages)
- **footer.*** - Footer links and copyright

## 🎨 DARK MODE COLOR SCHEME

### Backgrounds
- Light: `bg-white` → Dark: `dark:bg-gray-900`
- Light: `bg-gray-50` → Dark: `dark:bg-gray-800`
- Light: `bg-gray-100` → Dark: `dark:bg-gray-700`

### Text Colors
- Light: `text-gray-900` → Dark: `dark:text-white`
- Light: `text-gray-700` → Dark: `dark:text-gray-200`
- Light: `text-gray-600` → Dark: `dark:text-gray-300`
- Light: `text-gray-500` → Dark: `dark:text-gray-400`

### Borders
- Light: `border-gray-200` → Dark: `dark:border-gray-700`
- Light: `border-gray-300` → Dark: `dark:border-gray-600`

### Orange Accents (Keep consistent)
- `text-orange-600` → `dark:text-orange-400`
- `text-orange-500` → `dark:text-orange-400`
- `bg-orange-100` → `dark:bg-orange-900/30`

## 🚀 QUICK START FOR NEXT COMPONENT

Example for ShivaDarshan.tsx:

```tsx
import { useLanguage } from '../contexts/LanguageContext';

export function ShivaDarshan() {
  const { t } = useLanguage();
  
  return (
    <section className="bg-white dark:bg-gray-900 transition-colors">
      <h2 className="text-gray-900 dark:text-white">
        {t('darshan.title')}
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        {t('darshan.addressText')}
      </p>
      {/* ... */}
    </section>
  );
}
```

## 📝 TESTING CHECKLIST

- [ ] Test all 6 languages switch correctly
- [ ] Test dark/light mode toggle
- [ ] Test language selection persists on page reload
- [ ] Test theme preference persists on page reload
- [ ] Test mobile language selector works
- [ ] Test mobile theme toggle works
- [ ] Verify all text is readable in both themes
- [ ] Check for any hardcoded text remaining

## 🎯 FINAL RESULT

Users will be able to:
1. Toggle between light and dark themes
2. Switch between 6 Indian languages + English
3. See their preferences saved across visits
4. Enjoy a fully localized, accessible website

---

**Current Status:** Core infrastructure complete ✅  
**Remaining Work:** Update individual components with translations and dark mode classes  
**Estimated Effort:** 15-20 components to update
