import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react';
import { Users, Calendar, Heart, Award } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function AnimatedCounter({ value, duration }: { value: number; duration: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration });
      return controls.stop;
    }
  }, [isInView, count, value, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function ShivaTempleStats() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const stats = [
    { icon: Users, value: 5000, suffix: '+', label: t('stats.devotees'), duration: 2 },
    { icon: Calendar, value: 365, suffix: '', label: t('stats.daysOpen'), duration: 1.5 },
    { icon: Heart, value: 100, suffix: 'K+', label: t('stats.blessings'), duration: 2.5 },
    { icon: Award, value: 1000, suffix: '+', label: t('stats.heritage'), duration: 2 },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-br from-gray-900 dark:from-black via-orange-950/50 dark:via-gray-950 to-gray-900 dark:to-black py-32 overflow-hidden transition-colors duration-300"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(249, 115, 22, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-px bg-orange-500" />
            <span className="text-orange-400 tracking-[0.3em] uppercase text-sm">{t('stats.subtitle')}</span>
            <div className="w-12 h-px bg-orange-500" />
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-5xl text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {t('stats.title')}
          </motion.h2>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.3 + index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <motion.div
                  className="relative group"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Card */}
                  <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 overflow-hidden">
                    {/* Animated Background Gradient on Hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.5 }}
                    />

                    {/* Icon */}
                    <motion.div
                      className="relative mb-6"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.5 + index * 0.15,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      <motion.div
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/10 flex items-center justify-center relative"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 360,
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-8 h-8 text-orange-400" />
                      </motion.div>
                    </motion.div>

                    {/* Number */}
                    <div className="relative mb-3">
                      <motion.div 
                        className="text-5xl text-white inline-flex items-baseline"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ 
                          duration: 0.6, 
                          delay: 0.6 + index * 0.15 
                        }}
                      >
                        <AnimatedCounter value={stat.value} duration={stat.duration} />
                        <span className="text-orange-400">{stat.suffix}</span>
                      </motion.div>
                    </div>

                    {/* Label */}
                    <div className="relative text-white/60 uppercase tracking-wider text-sm">
                      {stat.label}
                    </div>

                    {/* Accent Line */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: '100%' } : {}}
                      transition={{ duration: 1, delay: 0.8 + index * 0.15 }}
                    />
                  </div>

                  {/* Glow Effect on Hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 -z-10 blur-xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.3), rgba(234, 88, 12, 0.3))',
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
