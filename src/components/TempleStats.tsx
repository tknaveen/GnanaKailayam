import { Users, Calendar, Heart, HandHeart } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '10,000+',
    label: 'Monthly Devotees'
  },
  {
    icon: Calendar,
    value: '100+',
    label: 'Years of Heritage'
  },
  {
    icon: Heart,
    value: '50+',
    label: 'Daily Pujas'
  },
  {
    icon: HandHeart,
    value: '5000+',
    label: 'Families Helped'
  }
];

export function TempleStats() {
  return (
    <div className="py-20 px-4 bg-orange-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-12">Our Impact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-orange-600" />
                </div>
                <div className="mb-2">{stat.value}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
