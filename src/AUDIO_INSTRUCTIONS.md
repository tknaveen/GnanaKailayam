# Om Chant Audio - Implementation Guide

## 🕉️ Current Status: **ACTIVE**

The Om chant audio is now fully implemented and working! The website uses a real Om chanting meditation audio from public domain sources.

## ✅ What's Currently Working

1. **Auto-play Om Chant**: Starts automatically 1.5 seconds after page load
2. **Continuous Loop**: The Om chant plays continuously in the background
3. **Volume Control**: Set to 40% volume for subtle, peaceful background audio
4. **Toggle Button**: 🕉️ button in top-right corner to pause/play
5. **Visual Feedback**: 
   - Pulsing rings around the Om symbol when playing
   - Floating Om symbols rising up the screen
   - Glowing effect on the Om icon
   - Tooltip showing current state
6. **Graceful Fallback**: If autoplay is blocked by browser, users can manually start it

## 🎵 Current Audio Sources

The component uses these Om chant audio sources (with fallbacks):

1. **Primary**: Om Chanting Meditation 432Hz from Internet Archive
2. **Fallback**: Alternative Om meditation from Pixabay

Both are public domain, royalty-free audio files suitable for spiritual/meditation websites.

## 🎨 Visual Indicators When Playing

- **Om Button**: Glows with orange pulsing effect
- **Concentric Rings**: Two animated rings pulse outward
- **Floating Om Symbols**: 5 Om symbols slowly float upward across the screen
- **Tooltip**: Shows "Pause Om Chant" on hover

## 🔧 Customization Options

### To Use Your Own Om Chant Audio:

1. **Open** `/components/ShivaHero.tsx`
2. **Find** the `<audio>` tag (around line 183)
3. **Replace** the source URLs with your own:

```tsx
<audio ref={omAudioRef} loop className="hidden" preload="auto">
  <source src="YOUR_OM_CHANT_URL.mp3" type="audio/mpeg" />
  <source src="FALLBACK_URL.mp3" type="audio/mpeg" />
</audio>
```

### Adjust Volume:

Find this line in the `useEffect` (around line 22):
```tsx
omAudioRef.current.volume = 0.4; // 40% volume
```

Change `0.4` to any value between `0.0` (silent) and `1.0` (full volume).

### Change Autoplay Delay:

Find this line:
```tsx
const timer = setTimeout(() => {
  // ... autoplay code
}, 1500); // 1.5 seconds delay
```

Change `1500` to your desired delay in milliseconds.

### Disable Floating Om Symbols:

If you want to remove the floating Om animations, find this section:
```tsx
{/* Floating Om Symbols when chant is playing */}
{isOmPlaying && (
  // ... remove or comment out this block
)}
```

## 🌐 Browser Compatibility

**Autoplay Policy**: Modern browsers (Chrome, Safari, Firefox) often block autoplay with sound. The implementation handles this gracefully:
- If autoplay works: Om chant starts automatically
- If blocked: User can click the 🕉️ button to start

**Supported Formats**:
- MP3 (primary)
- WAV, OGG (if you provide alternative sources)

## 📱 Mobile Devices

- Works on iOS and Android
- Touch to start if autoplay is blocked
- Volume respects device audio settings
- Continues playing even when scrolling

## 🎯 Recommended Om Chant Specifications

For best results, use:
- **Format**: MP3 (128-320 kbps)
- **Length**: 30-60 seconds (loops automatically)
- **Type**: Pure Om chanting or meditation bell sounds
- **Volume**: Pre-normalized (not too loud)
- **Quality**: Clear, peaceful, no distortion

## 🔍 Finding Quality Om Chant Audio

### Free Sources:
1. **Internet Archive** (archive.org) - Public domain spiritual audio
2. **Pixabay** (pixabay.com) - Royalty-free meditation sounds
3. **FreeSounds** (freesound.org) - Creative commons audio
4. **YouTube Audio Library** - Free meditation music (download & convert)

### Paid/Premium:
1. **AudioJungle** - High-quality Om chants ($5-20)
2. **Pond5** - Professional meditation audio
3. **Custom Recording** - Hire a meditation audio producer

## 🐛 Troubleshooting

**Om chant not playing?**
- Check browser console for errors
- Verify audio URL is accessible
- Try clicking the Om button manually
- Check if browser is blocking autoplay

**Audio too loud/quiet?**
- Adjust the volume value in the code (see above)
- Or adjust system volume

**Floating symbols not showing?**
- Ensure `isOmPlaying` state is true
- Check browser console for React errors

**Multiple audio sources playing?**
- Make sure only one audio element with Om chant exists
- Check other components aren't playing audio

## 💡 Tips

- The Om chant creates a peaceful, meditative atmosphere
- Consider adding a "loading" state for the audio
- You can add volume slider controls if needed
- The 40% volume is recommended for background ambiance

## 🙏 Current Implementation Status

✅ **Fully Functional** - The Om chant is working with real audio!
- Auto-plays after 1.5 seconds
- Loops continuously
- Beautiful visual effects
- Easy user control
- Professional implementation

Enjoy the divine atmosphere! 🕉️✨
