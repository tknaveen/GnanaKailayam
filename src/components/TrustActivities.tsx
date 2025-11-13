import { Check } from 'lucide-react';

const activities = [
  'Free meal service (Annadaan) for devotees',
  'Educational scholarships for underprivileged children',
  'Medical camps and healthcare support',
  'Religious scripture classes and satsangs',
  'Maintenance of temple infrastructure',
  'Festival celebrations and cultural programs',
  'Support for elderly and disabled devotees',
  'Environmental conservation initiatives'
];

export function TrustActivities() {
  return (
    <div className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center mb-12">Our Trust Activities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center mt-1">
                <Check className="w-4 h-4 text-white" />
              </div>
              <p>{activity}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
