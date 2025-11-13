import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { FacebookIconHD } from './FacebookIconHD';
import { YouTubeIconHD } from './YouTubeIconHD';
import { useLanguage } from '../contexts/LanguageContext';

export function AboutShivaTemple() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 relative overflow-hidden py-32 transition-colors duration-300"
    >
      {/* Minimalist Background Element */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            {/* Animated Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-3">
                <div className="w-12 h-px bg-orange-500" />
                <span className="text-orange-600 dark:text-orange-400 tracking-[0.3em] uppercase text-sm">{t('about.subtitle')}</span>
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.h2
              className="text-5xl lg:text-6xl text-gray-900 dark:text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {t('hero.title')}
              <motion.span 
                className="block text-orange-600 dark:text-orange-400 mt-2"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {t('hero.subtitle')}
              </motion.span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {t('hero.description')}
            </motion.p>

            {/* Stats - Minimalist */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {[
                { value: '1000+', label: 'Years Heritage' },
                { value: '5000+', label: 'Daily Devotees' },
                { value: '24/7', label: 'Divine Presence' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                >
                  <motion.div
                    className="text-3xl text-orange-600 mb-1"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { 
                      opacity: 1,
                    } : {}}
                    transition={{ duration: 1, delay: 1 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main Circle with Om */}
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Outer Rotating Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-orange-500/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />

              {/* Middle Ring */}
              <motion.div
                className="absolute inset-8 rounded-full border border-orange-500/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              {/* Inner Glow Circle */}
              <motion.div
                className="absolute inset-16 rounded-full bg-gradient-to-br from-orange-500/10 to-orange-600/5 backdrop-blur-sm"
                animate={{
                  boxShadow: [
                    '0 0 60px rgba(249, 115, 22, 0.2)',
                    '0 0 100px rgba(249, 115, 22, 0.4)',
                    '0 0 60px rgba(249, 115, 22, 0.2)',
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Center Om Symbol */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { 
                  scale: 1, 
                  opacity: 1,
                } : {}}
                transition={{ duration: 1.5, delay: 0.8, type: "spring" }}
              >
                <motion.div
                  className="text-9xl text-orange-600/80"
                  animate={{
                    filter: [
                      'drop-shadow(0 0 20px rgba(249, 115, 22, 0.3))',
                      'drop-shadow(0 0 40px rgba(249, 115, 22, 0.6))',
                      'drop-shadow(0 0 20px rgba(249, 115, 22, 0.3))',
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  ॐ
                </motion.div>
              </motion.div>

              {/* Floating Dots */}
              {[0, 90, 180, 270].map((angle, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-2 h-2 bg-orange-500 rounded-full"
                  style={{
                    transformOrigin: '0 0',
                  }}
                  initial={{ opacity: 0 }}
                  animate={isInView ? {
                    opacity: [0.3, 1, 0.3],
                    x: Math.cos(angle * Math.PI / 180) * 200,
                    y: Math.sin(angle * Math.PI / 180) * 200,
                  } : {}}
                  transition={{
                    duration: 3,
                    delay: 1 + i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Social Media Buttons */}
        <motion.div
          className="flex items-center justify-center gap-8 mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {/* Facebook Button */}
          <motion.a
            href="https://www.facebook.com/sivachandran.pcr/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-blue-500/50"
              whileHover={{
                boxShadow: '0 20px 50px rgba(37, 99, 235, 0.4)'
              }}
            >
              <FacebookIconHD size={48} className="text-white" />
            </motion.div>
            <motion.div
              className="absolute -inset-2 rounded-2xl border-2 border-blue-500/20 -z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          {/* YouTube Button */}
          <motion.a
            href="https://www.youtube.com/@NanaKailayam"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg shadow-red-500/30 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-red-500/50"
              whileHover={{
                boxShadow: '0 20px 50px rgba(220, 38, 38, 0.4)'
              }}
            >
              <YouTubeIconHD size={48} className="text-white" />
            </motion.div>
            <motion.div
              className="absolute -inset-2 rounded-2xl border-2 border-red-500/20 -z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
