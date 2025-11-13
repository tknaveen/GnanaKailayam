import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import homaRitual from 'figma:asset/da99bdb7f5e6e043148634545731f3470d76fd0f.png';
import nandaMalai1 from 'figma:asset/bfe79541372f76f668a5975f4e67b4e46b6abeff.png';
import nandaMalai2 from 'figma:asset/b537a6fe63b977f85d88428f2adf2c053285cad3.png';

export function ShivaGallery() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const images = [
    { 
      id: 1, 
      aspect: 'wide',
      src: homaRitual,
      title: 'Sacred Fire Ritual',
      category: 'Agni Homam'
    },
    { 
      id: 2, 
      aspect: 'square',
      src: nandaMalai1,
      title: 'Nanda Malai',
      category: 'Sacred Mountain'
    },
    { 
      id: 3, 
      aspect: 'square',
      src: nandaMalai2,
      title: 'Devagiri Hills',
      category: 'Temple Location'
    },
    { 
      id: 4, 
      aspect: 'tall',
      src: 'https://images.unsplash.com/photo-1701665837448-cdbb9fab5a0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGl2YSUyMGxpbmdhbSUyMHRlbXBsZXxlbnwxfHx8fDE3NjI1OTMyMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Sacred Lingam',
      category: 'Divine Deity'
    },
    { 
      id: 5, 
      aspect: 'square',
      src: 'https://images.unsplash.com/photo-1661857887505-89342a4d93e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGl2YSUyMHN0YXR1ZSUyMGRlaXR5fGVufDF8fHx8MTc2MjU5ODEwNXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Lord Shiva',
      category: 'Divine Form'
    },
    { 
      id: 6, 
      aspect: 'tall',
      src: 'https://images.unsplash.com/photo-1650451484146-5d3a5654b7f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW1wbGUlMjBhcmNoaXRlY3R1cmUlMjBpbmRpYXxlbnwxfHx8fDE3NjI1OTgxMDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Temple Architecture',
      category: 'Divine Design'
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="gallery"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-50/30 dark:from-gray-800/30 via-white dark:via-gray-900 to-orange-50/30 dark:to-gray-800/30 py-20 sm:py-32 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="w-8 sm:w-12 h-px bg-orange-500" />
            <span className="text-orange-600 dark:text-orange-400 tracking-[0.3em] uppercase text-xs sm:text-sm">{t('gallery.subtitle')}</span>
            <div className="w-8 sm:w-12 h-px bg-orange-500" />
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4 sm:mb-6 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {t('gallery.title')}
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {t('gallery.description')}
          </motion.p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => {
            const heights = {
              tall: 'row-span-2',
              wide: 'col-span-2',
              square: ''
            };

            return (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className={`${heights[image.aspect as keyof typeof heights]} relative group overflow-hidden rounded-2xl shadow-lg`}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="relative h-full"
                >
                  <ImageWithFallback
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="block text-xs sm:text-sm text-orange-300 mb-1">{image.category}</span>
                        <h3 className="text-base sm:text-lg">{image.title}</h3>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Corner Accent */}
                  <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
