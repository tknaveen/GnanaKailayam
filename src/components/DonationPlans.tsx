const donationPlans = [
  {
    name: 'Seva Contribution',
    amount: '₹500',
    features: [
      'Certificate of appreciation',
      'Name in monthly donor list',
      'Prasad by post',
      'Monthly newsletter'
    ]
  },
  {
    name: 'Temple Patron',
    amount: '₹5,000',
    features: [
      'Personalized certificate',
      'Name engraved on donor wall',
      'Special puja in your name',
      'Annual festival invitation',
      'Priority darshan pass',
      'Quarterly trust reports'
    ],
    popular: true
  },
  {
    name: 'Major Donor',
    amount: '₹50,000+',
    features: [
      'Lifetime patron status',
      'Name on temple plaque',
      'Monthly special puja',
      'VIP darshan privileges',
      'Temple trust membership',
      'Annual meeting with trustees',
      'Tax exemption certificate',
      'Legacy documentation'
    ]
  }
];

export function DonationPlans() {
  return (
    <div className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-4">Support Our Sacred Mission</h2>
        <p className="text-center text-gray-600 mb-12">
          Your generous donations help us maintain the temple and serve the community
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {donationPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white border-2 rounded-xl p-8 ${
                plan.popular ? 'border-orange-600 relative' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
              )}
              <h3 className="mb-2">{plan.name}</h3>
              <div className="mb-2">{plan.amount}</div>
              <p className="text-gray-600 mb-6">One-time Donation</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg transition-colors ${
                plan.popular 
                  ? 'bg-orange-600 text-white hover:bg-orange-700' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}>
                Donate Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
