import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Check, Star, Crown, Sparkles, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function ShivaDonationPlans() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  const donationPlans = [
    {
      name: t('donation.plan1'),
      amount: t('donation.amount1'),
      period: t('donation.oneTime'),
      icon: Sparkles,
      features: [
        'Certificate of blessing',
        'Name in monthly donor list',
        'Prasad by courier',
        'Monthly e-newsletter',
        'Temple event updates'
      ],
      gradient: 'from-orange-500 to-amber-500',
      popular: false
    },
    {
      name: t('donation.plan2'),
      amount: t('donation.amount2'),
      period: t('donation.oneTime'),
      icon: Star,
      features: [
        'Personalized blessing certificate',
        'Name engraved on donor wall',
        'Special Rudrabhishekam in your name',
        'Annual Maha Shivaratri invitation',
        'Priority darshan pass (1 year)',
        'Quarterly trust reports',
        'Tax exemption certificate',
        'Divine blessings photo'
      ],
      gradient: 'from-orange-600 to-red-600',
      popular: true
    },
    {
      name: t('donation.plan3'),
      amount: t('donation.amount3'),
      period: t('donation.oneTime'),
      icon: Crown,
      features: [
        'Lifetime patron status',
        'Name on temple gold plaque',
        'Monthly special puja for family',
        'VIP darshan privileges (lifetime)',
        'Temple trust advisory membership',
        'Annual meeting with trustees',
        'Premium tax exemption certificate',
        'Legacy documentation',
        'Personal puja coordinator',
        'Exclusive festival invitations'
      ],
      gradient: 'from-amber-600 to-orange-700',
      popular: false
    }
  ];

  const handleDonateClick = () => {
    if (selectedPlan !== null) {
      const donationSection = document.getElementById('donation-details');
      if (donationSection) {
        donationSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="donate" ref={ref} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white dark:from-gray-900 to-gray-50 dark:to-gray-800 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 dark:from-orange-900/30 to-red-100 dark:to-red-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm mb-4">
            {t('donation.supportMission')}
          </span>
          <h2 className="mb-4 text-gray-900 dark:text-white">{t('donation.plansTitle')}</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
            {t('donation.plansDescription')}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            {t('donation.taxExempt')}
          </p>
        </motion.div>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {donationPlans.map((plan, index) => {
            const Icon = plan.icon;
            const isSelected = selectedPlan === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${plan.popular ? 'lg:-mt-4' : ''}`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="inline-flex items-center gap-1 px-4 py-1 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full text-xs shadow-lg">
                      <Star className="w-3 h-3" fill="currentColor" />
                      {t('donation.popular')}
                    </span>
                  </div>
                )}
                
                <button
                  onClick={() => setSelectedPlan(index)}
                  className={`w-full h-full text-left transition-all duration-300 ${
                    isSelected 
                      ? 'scale-105' 
                      : 'hover:scale-105'
                  }`}
                >
                  <div className={`relative h-full p-8 bg-gradient-to-br ${
                    isSelected 
                      ? 'from-orange-50 dark:from-orange-900/20 to-red-50 dark:to-red-900/20 shadow-2xl border-2 border-orange-500' 
                      : 'from-white dark:from-gray-800 to-gray-50 dark:to-gray-800 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700'
                  } rounded-2xl transition-all duration-300`}>
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    {/* Plan Name */}
                    <h3 className="mb-2 text-2xl text-gray-900 dark:text-white">{plan.name}</h3>
                    
                    {/* Amount */}
                    <div className="mb-2">
                      <span className="text-4xl text-gray-900 dark:text-white">{plan.amount}</span>
                      <span className="text-gray-500 dark:text-gray-400 ml-2 text-sm">{plan.period}</span>
                    </div>
                    
                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent my-6"></div>
                    
                    {/* Features */}
                    <ul className="space-y-3">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Selection Indicator */}
                    {isSelected && (
                      <div className="absolute top-4 right-4">
                        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                          <Check className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Proceed Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <button
            onClick={handleDonateClick}
            disabled={selectedPlan === null}
            className={`px-10 py-4 rounded-full shadow-lg transition-all duration-300 text-lg ${
              selectedPlan !== null
                ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:shadow-xl hover:scale-105'
                : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
            }`}
          >
            {selectedPlan !== null ? t('donation.proceedToDonate') : t('donation.selectPlan')}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
