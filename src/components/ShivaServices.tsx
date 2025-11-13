import { motion, useInView } from 'motion/react';
import { Flame, Calendar, BookOpen, Users } from 'lucide-react';
import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function ShivaServices() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const services = [
    {
      icon: Flame,
      title: t('services.dailyPuja'),
      description: t('services.dailyPujaDesc'),
      time: 'Morning & Evening'
    },
    {
      icon: Calendar,
      title: t('services.abhishekam'),
      description: t('services.abhishekamDesc'),
      time: 'Daily'
    },
    {
      icon: BookOpen,
      title: t('services.rudrabhishekam'),
      description: t('services.rudrabhishekamDesc'),
      time: 'Weekly'
    },
    {
      icon: Users,
      title: t('services.homam'),
      description: t('services.homamDesc'),
      time: 'On Request'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="services"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white dark:from-gray-900 via-orange-50/30 dark:via-gray-800/30 to-white dark:to-gray-900 py-20 sm:py-32 relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Elements */}
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [-50, 0, -50],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="w-8 sm:w-12 h-px bg-orange-500" />
            <span className="text-orange-600 dark:text-orange-400 tracking-[0.3em] uppercase text-xs sm:text-sm">{t('services.subtitle')}</span>
            <div className="w-8 sm:w-12 h-px bg-orange-500" />
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4 sm:mb-6 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {t('services.title')}
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Experience sacred rituals and spiritual services guided by ancient traditions
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.4 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <motion.div
                  className="group relative h-full bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
                  whileHover={{ 
                    y: -10,
                    boxShadow: '0 20px 40px rgba(249, 115, 22, 0.15)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon */}
                  <motion.div
                    className="relative z-10 mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl text-gray-900 dark:text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-500" />
                      <span className="text-xs sm:text-sm text-orange-600 dark:text-orange-400">{service.time}</span>
                    </div>
                  </div>

                  {/* Hover Gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  {/* Decorative Corner */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-orange-600/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Book Puja Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg text-center"
          >
            {t('services.bookNow')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
