// app/pricing/page.tsx
import Link from 'next/link';
import { Check } from 'lucide-react';

export default function PricingPage() {
  const plans = [
    {
      name: 'First Lesson',
      price: '£20',
      duration: '50 minutes',
      features: [
        'Level assessment',
        'Learning plan discussion',
        'Sample teaching style',
        'Q&A session'
      ]
    },
    {
      name: 'Individual Classes',
      price: '£25',
      duration: '50 minutes',
      features: [
        '1-on-1 personalized lessons',
        'Flexible scheduling',
        'Custom curriculum',
        'Homework & materials',
      ],
      popular: true
    },
    {
      name: 'Package Deal',
      price: '£120',
      duration: '5 classes',
      features: [
        'All individual class benefits',
        'Priority scheduling',
        'Bonus conversation sessions'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600">Choose the plan that works for you</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-8 ${
                plan.popular ? 'ring-2 ring-indigo-600 relative' : ''
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </span>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-indigo-600">{plan.price}</div>
                <p className="text-gray-600">{plan.duration}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`block text-center py-3 px-6 rounded-lg font-semibold transition ${
                  plan.popular
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}