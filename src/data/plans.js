export const plans = [
  {
    id: 1,
    name: 'Standard',
    price: '$49',
    period: '/month',
    description: 'Perfect for beginners starting their fitness journey.',
    features: [
      'Access to gym equipment during off-peak hours',
      '1 Group class per week',
      'Basic fitness assessment'
    ],
    isPopular: false,
    ctaText: 'Start Standard'
  },
  {
    id: 2,
    name: 'Pro',
    price: '$99',
    period: '/month',
    description: 'Our most sought-after plan for dedicated individuals.',
    features: [
      '24/7 access to all gym facilities',
      'Unlimited group classes',
      '1 Personal Training session/month',
      'Advanced biometrics analysis',
      'Sauna & Recovery zone access'
    ],
    isPopular: true,
    ctaText: 'Go Pro'
  },
  {
    id: 3,
    name: 'Elite',
    price: '$189',
    period: '/month',
    description: 'The ultimate package for uncompromised results.',
    features: [
      'Everything in Pro plan',
      '4 Personal Training sessions/month',
      'Customized nutrition planning',
      'Locker & laundry service',
      'Priority booking & dedicated support'
    ],
    isPopular: false,
    ctaText: 'Become Elite'
  }
];
