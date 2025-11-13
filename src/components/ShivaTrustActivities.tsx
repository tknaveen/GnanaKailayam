import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Check, HandHeart, BookOpen, Sparkles, Users, Heart, Utensils, GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function ShivaTrustActivities() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const activities = [
    {
      icon: HandHeart,
      title: 'Spiritual Guidance',
      description: 'Vedic teachings and meditation sessions for devotees'
    },
    {
      icon: GraduationCap,
      title: 'Educational Programs',
      description: 'Sanskrit and spiritual education for all ages'
    },
    {
      icon: Heart,
      title: 'Charitable Activities',
      description: 'Medical camps and support for underprivileged'
    },
    {
      icon: BookOpen,
      title: 'Scripture Study',
      description: 'Regular study of ancient Vedic texts and teachings'
    },
    {
      icon: Users,
      title: 'Community Service',
      description: 'Support for elderly and disabled devotees'
    },
    {
      icon: Sparkles,
      title: 'Temple Maintenance',
      description: 'Preservation of sacred heritage and architecture'
    },
    {
      icon: Utensils,
      title: 'Prasad Distribution',
      description: 'Daily blessed food offerings after rituals'
    },
    {
      icon: Heart,
      title: 'Festival Celebrations',
      description: 'Maha Shivaratri and other sacred events'
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 dark:from-orange-900/30 to-red-100 dark:to-red-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm mb-4">
            {t('about.ourSeva')}
          </span>
          <h2 className="mb-4 text-gray-900 dark:text-white">{t('about.activitiesTitle')}</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
            Serving humanity through spiritual guidance and charitable initiatives
          </p>
        </motion.div>
        
        {/* Activities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="h-full p-6 bg-gradient-to-br from-orange-50 dark:from-gray-800 to-red-50 dark:to-gray-800 rounded-2xl hover:shadow-xl transition-all duration-300 border border-orange-100/50 dark:border-orange-900/50">
                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="mb-2 text-lg text-gray-900 dark:text-white">{activity.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{activity.description}</p>
                  
                  {/* Check Mark */}
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-green-500/20 dark:bg-green-500/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 lg:mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => {
                const donateSection = document.getElementById('donate');
                donateSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-base sm:text-lg"
            >
              {t('nav.donate')}
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-white dark:bg-gray-800 text-orange-600 dark:text-orange-400 border-2 border-orange-600 dark:border-orange-500 rounded-full hover:bg-orange-50 dark:hover:bg-gray-700 transition-all duration-300 text-base sm:text-lg"
            >
              {t('nav.contact')}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
