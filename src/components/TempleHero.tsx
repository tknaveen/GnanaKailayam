import { ImageWithFallback } from './figma/ImageWithFallback';

export function TempleHero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1668770109988-24fe041e6b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW5kdSUyMHRlbXBsZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjI0NDEzNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Temple architecture" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="mb-6 text-white">Welcome to Divine Trust Temple</h1>
          <p className="mb-8 text-lg opacity-90">
            A sacred place of worship, peace, and spiritual enlightenment
          </p>
          <button className="px-8 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
