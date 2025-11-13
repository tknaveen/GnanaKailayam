import { Sunrise, Sun, Moon, Calendar, Flower2, BookOpen } from 'lucide-react';

const services = [
  {
    icon: Sunrise,
    title: 'Morning Aarti',
    description: 'Daily morning prayers at 6:00 AM',
    time: '6:00 AM'
  },
  {
    icon: Sun,
    title: 'Afternoon Darshan',
    description: 'Open for devotees throughout the day',
    time: '12:00 PM - 2:00 PM'
  },
  {
    icon: Moon,
    title: 'Evening Aarti',
    description: 'Divine evening prayers and rituals',
    time: '7:00 PM'
  },
  {
    icon: Calendar,
    title: 'Special Pujas',
    description: 'Book advance for special occasions',
    time: 'By Appointment'
  },
  {
    icon: Flower2,
    title: 'Prasad Distribution',
    description: 'Blessed offerings after every aarti',
    time: 'After Aarti'
  },
  {
    icon: BookOpen,
    title: 'Religious Classes',
    description: 'Weekly scripture study sessions',
    time: 'Saturdays 5:00 PM'
  }
];

export function TempleServices() {
  return (
    <div className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-12">Temple Services & Timings</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-orange-50 rounded-lg">
                <div className="w-16 h-16 rounded-full bg-orange-600 flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-2">{service.description}</p>
                <span className="text-sm text-orange-600">{service.time}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
