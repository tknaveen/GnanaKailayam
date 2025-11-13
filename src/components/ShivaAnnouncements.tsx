import { motion } from 'motion/react';
import { Bell, Calendar, Clock, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay@8.6.0';
import { useLanguage } from '../contexts/LanguageContext';

export function ShivaAnnouncements() {
  const { t } = useLanguage();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Announcement data - can be expanded with more announcements
  const announcements = [
    {
      id: 1,
      temple: 'Nandi Malai Kailasanathar Temple',
      event: 'Maha Gnana Pooja',
      subtitle: 'Great Wisdom Worship',
      date: 'December 3, 2025',
      time: '6:00 AM',
      message: 'All the devotees to participate and make it special',
      upiId: '9677518561@ybl'
    },
    // You can add more announcements here
    // {
    //   id: 2,
    //   temple: 'Nandi Malai Kailasanathar Temple',
    //   event: 'Pradosha Puja',
    //   subtitle: 'Sacred Evening Worship',
    //   date: 'December 15, 2025',
    //   time: '6:30 PM',
    //   message: 'Join us for the special Pradosha worship ceremony',
    //   upiId: '9677518561@ybl'
    // },
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 dark:from-gray-800 to-white dark:to-gray-900 overflow-hidden transition-colors duration-300">
      <div className="relative max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          {/* Bell Icon with Notification Dot */}
          <motion.div
            className="inline-flex items-center justify-center mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
                <Bell className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              {/* Green notification dot */}
              <motion.span 
                className="absolute top-0 right-0 w-5 h-5 bg-green-500 rounded-full border-3 border-white"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity
                }}
              ></motion.span>
            </div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-2 text-orange-500 dark:text-orange-400"
          >
            Announcements
          </motion.h2>
        </motion.div>

        {/* Announcement Carousel */}
        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              loop: true,
              duration: 30,
            }}
            plugins={
              announcements.length > 1
                ? [
                    Autoplay({
                      delay: 6000,
                    }),
                  ]
                : []
            }
            className="w-full"
          >
            <CarouselContent>
              {announcements.map((announcement, index) => (
                <CarouselItem key={announcement.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="relative"
                  >
                    {/* Decorative Corner Elements */}
                    <div className="absolute -top-2 -left-2 w-16 h-16 border-t-4 border-l-4 border-orange-500 rounded-tl-3xl"></div>
                    <div className="absolute -top-2 -right-2 w-16 h-16 border-t-4 border-r-4 border-orange-500 rounded-tr-3xl"></div>
                    <div className="absolute -bottom-2 -left-2 w-16 h-16 border-b-4 border-l-4 border-orange-500 rounded-bl-3xl"></div>
                    <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-4 border-r-4 border-orange-500 rounded-br-3xl"></div>

                    <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border-2 border-orange-200 dark:border-orange-700 transition-colors duration-300">
                      {/* Top Gradient Bar */}
                      <div className="h-2 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500"></div>
                      
                      {/* Card Content */}
                      <div className="p-8 sm:p-10 lg:p-12">
                        {/* Temple Name Badge */}
                        <div className="text-center mb-6">
                          <span className="inline-block px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full shadow-md">
                            {announcement.temple}
                          </span>
                        </div>

                        {/* Event Title */}
                        <motion.h3 
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.5 }}
                          className="text-center mb-8 text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
                        >
                          🙏 {announcement.event} 🙏
                        </motion.h3>

                        {/* Event Subtitle */}
                        <p className="text-center text-gray-700 dark:text-gray-300 mb-8 text-lg sm:text-xl">
                          ({announcement.subtitle})
                        </p>

                        {/* Event Details */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                          {/* Date */}
                          <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex items-center justify-center gap-4 p-4 bg-orange-50 dark:bg-gray-700 rounded-xl border border-orange-200 dark:border-orange-600"
                          >
                            <Calendar className="w-6 h-6 text-orange-500 dark:text-orange-400 flex-shrink-0" />
                            <div className="text-center">
                              <p className="text-sm text-gray-600 dark:text-gray-400">Date</p>
                              <p className="text-lg text-gray-900 dark:text-white">{announcement.date}</p>
                            </div>
                          </motion.div>

                          {/* Time */}
                          <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="flex items-center justify-center gap-4 p-4 bg-orange-50 dark:bg-gray-700 rounded-xl border border-orange-200 dark:border-orange-600"
                          >
                            <Clock className="w-6 h-6 text-orange-500 dark:text-orange-400 flex-shrink-0" />
                            <div className="text-center">
                              <p className="text-sm text-gray-600 dark:text-gray-400">Time</p>
                              <p className="text-lg text-gray-900 dark:text-white">{announcement.time}</p>
                            </div>
                          </motion.div>
                        </div>

                        {/* Divider */}
                        <div className="relative mb-8">
                          <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-orange-200"></div>
                          </div>
                          <div className="relative flex justify-center">
                            <span className="bg-white dark:bg-gray-800 px-4 text-orange-500 dark:text-orange-400 text-2xl">🕉️</span>
                          </div>
                        </div>

                        {/* Message */}
                        <motion.p
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.8 }}
                          className="text-center text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-8"
                        >
                          {announcement.message}
                        </motion.p>

                        {/* Donate Button */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.9 }}
                          className="text-center"
                        >
                          <button
                            onClick={() => {
                              const donateSection = document.getElementById('donate');
                              donateSection?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg text-center"
                          >
                            <Heart className="w-5 h-5 fill-white" />
                            <span>{t('nav.donate')}</span>
                          </button>
                        </motion.div>
                      </div>

                      {/* Bottom Gradient Bar */}
                      <div className="h-2 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500"></div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Arrows - Only show if multiple announcements */}
            {announcements.length > 1 && (
              <>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => api?.scrollPrev()}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-gray-700 shadow-lg border border-orange-200 dark:border-orange-600 flex items-center justify-center text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-600 hover:border-orange-400 transition-all"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => api?.scrollNext()}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-gray-700 shadow-lg border border-orange-200 dark:border-orange-600 flex items-center justify-center text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-600 hover:border-orange-400 transition-all"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>
              </>
            )}
          </Carousel>

          {/* Carousel Dots - Only show if multiple announcements */}
          {announcements.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {announcements.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    current === index
                      ? 'bg-orange-500 w-8'
                      : 'bg-orange-200 hover:bg-orange-300 w-2.5'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-6 text-sm text-gray-600 dark:text-gray-400"
        >
          <p>For donations, please use UPI ID: <strong className="text-orange-600 dark:text-orange-400">9677518561@ybl</strong></p>
        </motion.div>
      </div>
    </section>
  );
}
