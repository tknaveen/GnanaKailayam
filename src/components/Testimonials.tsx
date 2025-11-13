import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    comment: 'A truly divine experience. The peaceful atmosphere and the devotion of the priests make every visit spiritually uplifting. The temple trust is doing excellent work in serving the community.',
    location: 'Mumbai'
  },
  {
    name: 'Priya Sharma',
    comment: 'I have been visiting this temple for years. The morning aarti is soul-stirring, and the cleanliness and organization are commendable. The charitable activities inspire me to contribute more.',
    location: 'Delhi'
  },
  {
    name: 'Anand Patel',
    comment: 'The temple architecture is magnificent and the spiritual energy is palpable. The trust\'s transparency in managing donations and their social service work is truly praiseworthy.',
    location: 'Ahmedabad'
  }
];

export function Testimonials() {
  return (
    <div className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-12">Devotee Testimonials</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-orange-50 p-6 rounded-lg relative">
              <Quote className="w-10 h-10 text-orange-300 mb-4" />
              <p className="text-gray-700 mb-4">{testimonial.comment}</p>
              <div>
                <p>{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
