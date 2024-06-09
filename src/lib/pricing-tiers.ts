export const emailTiers = [
  {
    id: 'basic',
    href: '#',
    name: 'Basic',
    description: 'Great for small teams just getting started',
    priceMonthly: '$1.99',
    users: 5,
    mostPopular: false,
  },
  {
    id: 'pro',
    href: '#',
    name: 'Pro',
    description: 'For larger teams with more complex needs',
    priceMonthly: '$2.99',
    users: 10,
    mostPopular: true,
  },
];

export const emailSections = [
  {
    name: 'Basic',
    features: [
      { name: 'Freee SSL', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: 'Freee Script Installer', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: 'Free WordPress Installer', tiers: { Essential: true, Premium: true } },
      { name: 'Divi WordPress Builder', tiers: { Essential: true, Premium: true } },
    ],
  },
  {
    name: 'Suite',
    features: [
      { name: '30 Day Money Back', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: '24/7 online support', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: 'Priority Support', tiers: { Premium: true } },
    ],
  },

]

export const tiers = [
  {
    name: 'Basic',
    id: 'tier-basic',
    href: '#',
    priceMonthly: '$5.99',
    description: 'Quis suspendisse ut fermentum neque vivamus non tellus.',
    mostPopular: false,
  },
  {
    name: 'Essential',
    id: 'tier-essential',
    href: '#',
    priceMonthly: '$10.99',
    description: 'Quis eleifend a tincidunt pellentesque. A tempor in sed.',
    mostPopular: true,
  },
  {
    name: 'Premium',
    id: 'tier-premium',
    href: '#',
    priceMonthly: '$15.99',
    description: 'Orci volutpat ut sed sed neque, dui eget. Quis tristique non.',
    mostPopular: false,
  },
]
export const sections = [
  {
    name: 'Features',
    features: [
      { name: 'Diskspace', tiers: { Basic: '4GB', Essential: '12GB', Premium: 'Unlimited' } },
      { name: 'Bandwidth', tiers: { Basic: 'Unlimited', Essential: 'Unlimited', Premium: 'Unlimited' } },
      { name: 'Email Accounts', tiers: { Basic: '5', Essential: '10', Premium: 'Unlimited' } },
      { name: 'MySql Databases', tiers: { Basic: '1', Essential: '5', Premium: 'Unlimited' } },
    ],
  },
  {
    name: 'Software',
    features: [
      { name: 'Freee SSL', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: 'Freee Script Installer', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: 'Free WordPress Installer', tiers: { Essential: true, Premium: true } },
      { name: 'Divi WordPress Builder', tiers: { Essential: true, Premium: true } },
    ],
  },
  {
    name: 'Support',
    features: [
      { name: '30 Day Money Back', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: '24/7 online support', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: 'Priority Support', tiers: { Premium: true } },
    ],
  },
]
