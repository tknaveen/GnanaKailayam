import { motion } from 'motion/react';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay@8.6.0';
import { useLanguage } from '../contexts/LanguageContext';

export function ShivaHero() {
  const { t } = useLanguage();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1709313979726-a2b58cd47c35?w=1920&q=90',
      title: t('hero.title'),
      subtitle: t('hero.slogan'),
      description: t('hero.subtitle')
    },
    {
      image: 'https://images.unsplash.com/photo-1578326013806-51ad7f2e3458?w=1920&q=90',
      title: 'Dravidian Heritage',
      subtitle: 'Magnificent Gopuram Towers',
      description: 'Sacred Gateway to Divine Realm - Tamil Temple Glory'
    },
    {
      image: 'https://images.unsplash.com/photo-1758427971321-04ea69d1e8eb?w=1920&q=90',
      title: 'Mount Kailash',
      subtitle: 'Abode of Lord Shiva',
      description: 'Sacred Himalayan Peak - Gateway to Heaven'
    },
    {
      image: 'https://images.unsplash.com/photo-1619239632374-9e6651c2b7bb?w=1920&q=90',
      title: 'South Indian Splendor',
      subtitle: 'Ancient Temple Architecture',
      description: 'Tamil Nadu Sacred Heritage - Divine Sanctuaries'
    },
    {
      image: 'https://images.unsplash.com/photo-1609151745346-c624e507baa2?w=1920&q=90',
      title: 'Brihadeeswara Temple',
      subtitle: 'UNESCO World Heritage Site',
      description: 'The Great Living Chola Temple - Thanjavur Marvel'
    },
    {
      image: 'https://images.unsplash.com/photo-1700649251087-c1cbc96fa7eb?w=1920&q=90',
      title: 'Om Namah Shivaya',
      subtitle: 'Timeless Dravidian Legacy',
      description: 'Where Ancient Wisdom Meets Celestial Beauty'
    }
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Animated Background Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 z-10 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(249, 115, 22, 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(249, 115, 22, 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(249, 115, 22, 0.2) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Divine Particle System */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -1000],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Carousel */}
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          duration: 40,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="h-full w-full"
      >
        <CarouselContent className="h-screen ml-0">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="pl-0 h-screen">
              <div className="relative h-full w-full">
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-[5]" />
                
                {/* Background Image */}
                <motion.div
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full w-full"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-full w-full object-cover"
                  />
                </motion.div>

                {/* Animated Light Rays */}
                <div className="absolute inset-0 overflow-hidden z-[6] pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute top-1/2 left-1/2 w-1 origin-left"
                      style={{
                        height: '150vh',
                        rotate: `${i * 45}deg`,
                        background: 'linear-gradient(to bottom, rgba(249, 115, 22, 0.15), transparent)',
                      }}
                      animate={{
                        opacity: [0, 0.3, 0],
                        scaleY: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <div className="max-w-6xl mx-auto px-6 text-center">
                    {/* Sacred Symbol */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180, opacity: 0 }}
                      animate={{ scale: 1, rotate: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="mb-6"
                    >
                      <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/20 via-purple-500/20 to-orange-500/20 backdrop-blur-xl border border-orange-500/30">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                          <Sparkles className="w-5 h-5 text-orange-400" />
                        </motion.div>
                        <span className="text-orange-200 tracking-widest uppercase text-sm">Om Namah Shivaya</span>
                        <motion.div
                          animate={{ rotate: -360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                          <Sparkles className="w-5 h-5 text-orange-400" />
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="text-5xl md:text-7xl lg:text-8xl mb-4 tracking-tight"
                    >
                      <motion.span 
                        className="block bg-gradient-to-r from-orange-200 via-orange-100 to-orange-200 bg-clip-text text-transparent"
                        animate={{
                          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                        }}
                        style={{ backgroundSize: '200% auto' }}
                      >
                        {slide.title}
                      </motion.span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="text-2xl md:text-3xl lg:text-4xl text-orange-300/90 tracking-wide mb-4"
                    >
                      {slide.subtitle}
                    </motion.p>

                    {/* Divider */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 0.8 }}
                      className="w-64 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-6"
                    />

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 1 }}
                      className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                      {slide.description}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                      className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          const aboutSection = document.querySelector('#about');
                          aboutSection?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="group relative px-10 py-4 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full overflow-hidden shadow-2xl shadow-orange-500/50 text-center"
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                        <span className="relative text-white tracking-wide flex items-center justify-center gap-3">
                          {t('hero.visitButton')}
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </span>
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          const donateSection = document.getElementById('donate');
                          donateSection?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-10 py-4 rounded-full border-2 border-orange-400/50 backdrop-blur-xl bg-white/5 text-orange-200 tracking-wide hover:bg-white/10 hover:border-orange-400 transition-all text-center"
                      >
                        {t('hero.donateButton')}
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom Navigation Arrows */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => api?.scrollPrev()}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-orange-500/30 transition-all group"
        >
          <ChevronLeft className="w-7 h-7 group-hover:text-orange-300" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => api?.scrollNext()}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-orange-500/30 transition-all group"
        >
          <ChevronRight className="w-7 h-7 group-hover:text-orange-300" />
        </motion.button>

        {/* Carousel Dots */}
        <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-3">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              onClick={() => api?.scrollTo(index)}
              className={`h-3 rounded-full transition-all duration-500 ${
                current === index + 1
                  ? 'bg-orange-500 w-8'
                  : 'bg-white/40 hover:bg-white/60 w-3'
              }`}
            />
          ))}
        </div>
      </Carousel>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 cursor-pointer"
        onClick={() => {
          const aboutSection = document.querySelector('#about');
          aboutSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-1.5 bg-orange-400 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Corner Ornaments */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-orange-500/30 z-20" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-orange-500/30 z-20" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-orange-500/30 z-20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-orange-500/30 z-20" />
    </div>
  );
}
