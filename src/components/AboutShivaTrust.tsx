import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Shield, Heart, Users, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function AboutShivaTrust() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const trustValues = [
    {
      icon: Shield,
      title: t('about.trustValue1'),
      description: t('about.trustValue1Desc')
    },
    {
      icon: Heart,
      title: t('about.trustValue2'),
      description: t('about.trustValue2Desc')
    },
    {
      icon: Users,
      title: t('about.trustValue3'),
      description: t('about.trustValue3Desc')
    },
    {
      icon: Award,
      title: t('about.trustValue4'),
      description: t('about.trustValue4Desc')
    }
  ];

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white dark:from-gray-900 via-blue-50 dark:via-gray-800 to-indigo-50 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm mb-4">
            {t('about.mission')}
          </span>
          <h2 className="mb-6 text-gray-900 dark:text-white">{t('about.trustTitle')}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 sm:p-10 lg:p-12 mb-12 transition-colors duration-300"
        >
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {t('about.trustDesc1')}
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {t('about.trustDesc2')}
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('about.trustDesc3')}
            </p>
          </div>
        </motion.div>

        {/* Trust Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center border border-transparent dark:border-gray-700">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg text-gray-900 dark:text-white">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
