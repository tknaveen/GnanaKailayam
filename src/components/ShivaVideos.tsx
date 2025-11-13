import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Play, Loader2 } from 'lucide-react';
import { VideoThumbnail } from './VideoThumbnail';
import { useLanguage } from '../contexts/LanguageContext';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface Video {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
  duration?: string;
  views?: string;
}

export function ShivaVideos() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch videos from YouTube API via backend
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-9264c6c0/youtube-videos`,
          {
            headers: {
              'Authorization': `Bearer ${publicAnonKey}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch videos: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.success && data.videos && data.videos.length > 0) {
          // Ensure the first video is always GWZU-ilNKaw (featured video)
          const fetchedVideos = data.videos.filter((v: Video) => v.youtubeId !== 'GWZU-ilNKaw');
          
          const allVideos = [
            {
              id: '1',
              youtubeId: 'GWZU-ilNKaw',
              title: 'Divine Shiva Darshan',
              description: 'Experience the sacred darshan and divine blessings of Lord Shiva at Gnana Kailayam - Kubera Kailasanathar',
              duration: 'Watch',
              views: ''
            },
            ...fetchedVideos.slice(0, 5).map((v: any, idx: number) => ({
              ...v,
              id: String(idx + 2),
              duration: 'Watch',
              views: ''
            }))
          ];
          
          setVideos(allVideos);
          setError(null);
        } else {
          // If no videos from API, show featured video
          setVideos([
            {
              id: '1',
              youtubeId: 'GWZU-ilNKaw',
              title: 'Divine Shiva Darshan',
              description: 'Experience the sacred darshan and divine blessings of Lord Shiva at Gnana Kailayam - Kubera Kailasanathar',
              duration: 'Watch',
              views: ''
            }
          ]);
        }
      } catch (err: any) {
        console.error('Error fetching YouTube videos:', err);
        setError(err.message || 'Failed to load videos');
        // Fallback to featured video
        setVideos([
          {
            id: '1',
            youtubeId: 'GWZU-ilNKaw',
            title: 'Divine Shiva Darshan',
            description: 'Experience the sacred darshan and divine blessings of Lord Shiva at Gnana Kailayam - Kubera Kailasanathar',
            duration: 'Watch',
            views: ''
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="videos"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white dark:from-gray-900 via-orange-50/30 dark:via-gray-800/30 to-white dark:to-gray-900 py-20 sm:py-32 relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          y: [0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="w-8 sm:w-12 h-px bg-orange-500" />
            <span className="text-orange-600 dark:text-orange-400 tracking-[0.3em] uppercase text-xs sm:text-sm">{t('videos.subtitle')}</span>
            <div className="w-8 sm:w-12 h-px bg-orange-500" />
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4 sm:mb-6 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {t('videos.title')}
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {t('videos.description')}
          </motion.p>
        </div>

        {/* Videos Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-orange-500 animate-spin" />
          </div>
        ) : null}
        
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {videos.map((video, index) => (
              <VideoThumbnail 
                key={video.id}
                youtubeId={video.youtubeId}
                title={video.title}
                description={video.description}
                duration={video.duration}
                views={video.views}
                index={index}
              />
            ))}
          </div>
        )}

        {/* YouTube Channel CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12 sm:mt-16"
        >
          <a
            href="https://www.youtube.com/@NanaKailayam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-base sm:text-lg"
          >
            <Play className="w-5 h-5" />
            <span>{t('videos.watchMore')}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
