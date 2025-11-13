import { motion, useInView } from 'motion/react';
import { Quote } from 'lucide-react';
import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    location: 'Chennai',
    text: 'The divine energy at Gnana Kailayam - Kubera Kailasanathar is beyond words. Every visit brings peace and clarity to my life.',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    location: 'Bangalore',
    text: 'A truly sacred place. The temple priests are knowledgeable and the rituals are performed with utmost devotion.',
    rating: 5
  },
  {
    name: 'Venkat Reddy',
    location: 'Hyderabad',
    text: 'This temple has been my spiritual sanctuary for years. The positive vibrations are incredible.',
    rating: 5
  }
];

export function DevoteeTestimonials() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 py-32 relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Element */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
            <span className="text-orange-600 dark:text-orange-400 tracking-[0.3em] uppercase text-sm">{t('testimonials.subtitle')}</span>
            <div className="w-12 h-px bg-orange-500" />
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {t('testimonials.title')}
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {t('testimonials.description')}
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.4 + index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <motion.div
                className="relative bg-gradient-to-br from-white dark:from-gray-800 to-orange-50/30 dark:to-gray-800/50 p-8 rounded-2xl h-full group border border-transparent dark:border-gray-700 transition-colors duration-300"
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 20px 60px rgba(249, 115, 22, 0.15)'
                }}
                style={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
                }}
              >
                {/* Quote Icon */}
                <motion.div
                  className="mb-6"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.6 + index * 0.15,
                    type: "spring"
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/10 flex items-center justify-center">
                    <Quote className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                </motion.div>

                {/* Testimonial Text */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {testimonial.text}
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.3, 
                        delay: 0.8 + index * 0.15 + i * 0.05 
                      }}
                    >
                      <div className="text-orange-500 dark:text-orange-400 text-lg">★</div>
                    </motion.div>
                  ))}
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-gray-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.location}</div>
                </div>

                {/* Hover Accent */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-orange-500/5 rounded-bl-full"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
