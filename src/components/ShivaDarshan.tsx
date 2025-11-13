import { motion, useInView } from 'motion/react';
import { Clock, MapPin, Phone } from 'lucide-react';
import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const timings = [
  { day: 'Monday - Friday', morning: '5:00 AM - 12:00 PM', evening: '4:00 PM - 9:00 PM' },
  { day: 'Saturday - Sunday', morning: '4:00 AM - 12:00 PM', evening: '3:00 PM - 10:00 PM' },
  { day: 'Festival Days', morning: '3:00 AM - 12:00 PM', evening: '2:00 PM - 11:00 PM' },
];

export function ShivaDarshan() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-gray-900 dark:bg-black text-white py-32 relative overflow-hidden transition-colors duration-300"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"
          animate={{
            y: [0, 100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600 rounded-full blur-3xl"
          animate={{
            y: [0, -100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left - Timings */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-12 h-px bg-orange-500" />
              <span className="text-orange-400 tracking-[0.3em] uppercase text-sm">{t('darshan.subtitle')}</span>
            </div>

            <h2 className="text-4xl lg:text-5xl mb-12">
              {t('darshan.title')}
            </h2>

            {/* Timings Cards */}
            <div className="space-y-6">
              {timings.map((timing, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
                  className="group"
                >
                  <motion.div
                    className="relative bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 overflow-hidden"
                    whileHover={{ 
                      backgroundColor: 'rgba(249, 115, 22, 0.1)',
                      borderColor: 'rgba(249, 115, 22, 0.3)',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Day */}
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="w-5 h-5 text-orange-400" />
                      <h3 className="text-lg text-white/90">
                        {timing.day}
                      </h3>
                    </div>

                    {/* Timing Details */}
                    <div className="space-y-2 text-white/70">
                      <p><span className="text-orange-400">{t('darshan.morning')}:</span> {timing.morning}</p>
                      <p><span className="text-orange-400">{t('darshan.evening')}:</span> {timing.evening}</p>
                    </div>

                    {/* Hover Effect Gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 p-6 bg-orange-500/10 border border-orange-500/20 rounded-xl"
            >
              <p className="text-orange-300 text-center">
                {t('darshan.open')}
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Address & Contact */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-12 h-px bg-orange-500" />
              <span className="text-orange-400 tracking-[0.3em] uppercase text-sm">{t('darshan.address')}</span>
            </div>

            {/* Address Card */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
              whileHover={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                borderColor: 'rgba(249, 115, 22, 0.3)',
              }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl text-white mb-4">{t('darshan.address')}</h3>
                  <p className="text-white/70 leading-relaxed">
                    {t('darshan.addressText')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
              whileHover={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                borderColor: 'rgba(249, 115, 22, 0.3)',
              }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl text-white mb-4">{t('contact.title')}</h3>
                  <div className="space-y-2 text-white/70">
                    <p>Phone: +91 XXXXX XXXXX</p>
                    <p>Email: contact@gnanakailayam.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Special Timings Notice */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="p-6 bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-xl"
            >
              <p className="text-orange-300 text-center leading-relaxed">
                <span className="block text-orange-400 mb-2">🕉️ {t('darshan.aarti')} 🕉️</span>
                Please arrive 15 minutes early for Maha Aarti
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
