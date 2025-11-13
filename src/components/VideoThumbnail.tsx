import { motion } from 'motion/react';
import { Play, Clock, Eye } from 'lucide-react';

interface VideoThumbnailProps {
  youtubeId: string;
  title: string;
  description: string;
  duration?: string;
  views?: string;
  index: number;
}

export function VideoThumbnail({ 
  youtubeId, 
  title, 
  description, 
  duration = "View",
  views,
  index 
}: VideoThumbnailProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <motion.div
        className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-orange-300 transition-all duration-300"
        whileHover={{ 
          y: -8,
          boxShadow: '0 20px 50px rgba(251, 146, 60, 0.15)'
        }}
        style={{
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
        }}
      >
        {/* Video Thumbnail Container */}
        <div className="relative aspect-video bg-gradient-to-br from-orange-100 to-orange-200 overflow-hidden">
          {/* YouTube Thumbnail Image */}
          <img
            src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
            alt={title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-90"
            onError={(e) => {
              // Fallback to high quality thumbnail if maxres doesn't exist
              const target = e.currentTarget;
              if (target.src.includes('maxresdefault')) {
                target.src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
              } else if (target.src.includes('hqdefault')) {
                // If hqdefault also fails, use default thumbnail
                target.src = `https://img.youtube.com/vi/${youtubeId}/default.jpg`;
              }
            }}
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Play Button Overlay */}
          <motion.a
            href={`https://www.youtube.com/watch?v=${youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all duration-300"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Pulsing Ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-orange-500/30"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Play Button */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-2xl border-4 border-white/20 backdrop-blur-sm">
                <Play className="w-7 h-7 sm:w-9 sm:h-9 text-white ml-1" fill="white" />
              </div>
            </motion.div>
          </motion.a>

          {/* Duration Badge */}
          {duration && (
            <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/80 backdrop-blur-sm text-white text-xs rounded flex items-center gap-1.5 font-medium">
              <Clock className="w-3 h-3" />
              {duration}
            </div>
          )}

          {/* Views Badge */}
          {views && (
            <div className="absolute top-3 right-3 px-2.5 py-1 bg-orange-600/90 backdrop-blur-sm text-white text-xs rounded flex items-center gap-1.5 font-medium">
              <Eye className="w-3 h-3" />
              {views}
            </div>
          )}
        </div>

        {/* Video Info Card */}
        <div className="p-5 sm:p-6">
          {/* Title */}
          <h3 className="text-lg sm:text-xl text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors duration-300">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
            {description}
          </p>

          {/* Watch Button */}
          <a
            href={`https://www.youtube.com/watch?v=${youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-orange-600 group-hover:text-orange-700 transition-colors duration-300"
          >
            <Play className="w-4 h-4" fill="currentColor" />
            <span className="text-sm">Watch on YouTube</span>
            <motion.span
              className="text-sm"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>

          {/* YouTube Channel Badge */}
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
              <Play className="w-4 h-4 text-white" fill="white" />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Gnana Kailayam</p>
              <p className="text-xs text-orange-600 dark:text-orange-400">Kubera Kailasanathar</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
