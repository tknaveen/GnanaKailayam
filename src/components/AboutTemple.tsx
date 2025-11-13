import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutTemple() {
  return (
    <div className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-12">About Our Temple</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-600">
              Our temple has been a beacon of spiritual light for over 100 years, serving as a 
              sacred sanctuary where devotees come to seek blessings, find inner peace, and 
              connect with the divine. Built with traditional architecture and adorned with 
              intricate carvings, our temple stands as a testament to devotion and faith.
            </p>
            <p className="text-gray-600">
              We are committed to preserving ancient traditions while embracing modern devotees. 
              Our temple conducts daily prayers, special pujas, and hosts various religious 
              festivals throughout the year. We believe in serving humanity through spiritual 
              guidance, charitable activities, and community service.
            </p>
            <p className="text-gray-600">
              The temple trust is dedicated to maintaining this sacred space, supporting religious 
              education, and helping those in need. Through your support and participation, we 
              continue to spread peace, harmony, and divine blessings to all.
            </p>
          </div>
          
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1636382439930-e904b20a8bbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW1wbGUlMjBkZWl0eSUyMHN0YXR1ZXxlbnwxfHx8fDE3NjI0NDEzNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Temple deity" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
