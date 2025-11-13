import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const galleryImages = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1668770109988-24fe041e6b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW5kdSUyMHRlbXBsZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjI0NDEzNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    caption: 'Temple Exterior'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1757308530438-4e2340a6475f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW1wbGUlMjBsYW1wJTIwZGl5YXxlbnwxfHx8fDE3NjI0NDEzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    caption: 'Divine Lamps'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1609223709178-46a9400f007b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW1wbGUlMjByaXR1YWwlMjBjZXJlbW9ueXxlbnwxfHx8fDE3NjI0MDQ0MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    caption: 'Ritual Ceremony'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1745739193791-c2d4153f5e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW1wbGUlMjBmZXN0aXZhbCUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc2MjQ0MTM2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    caption: 'Festival Joy'
  }
];

export function TempleGallery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + 
        (direction === 'right' ? scrollAmount : -scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="py-20 px-4 bg-orange-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-12">Temple Gallery</h2>
        
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {galleryImages.map((item) => (
              <div key={item.id} className="flex-shrink-0 w-80">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                  <ImageWithFallback 
                    src={item.image} 
                    alt={item.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-3 text-center text-gray-700">{item.caption}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-orange-300 bg-white flex items-center justify-center hover:bg-orange-50 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-orange-300 bg-white flex items-center justify-center hover:bg-orange-50 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
