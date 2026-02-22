import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '4,999',
    period: '/month',
    desc: 'Perfect for beginners exploring a new skill',
    features: [
      'Access to 1 course',
      'Recorded sessions',
      'Community access',
      'Weekly doubt sessions',
      'Course certificate',
    ],
    popular: false,
    gradient: 'from-zinc-600 to-zinc-500',
  },
  {
    name: 'Pro',
    price: '9,999',
    period: '/month',
    desc: 'Most popular choice for career changers',
    features: [
      'Access to all courses',
      'Live + recorded sessions',
      'Priority doubt support',
      'Resume building',
      'Mock interviews',
      'Placement assistance',
      'Industry certificates',
    ],
    popular: true,
    gradient: 'from-purple-500 to-cyan-400',
  },
  {
    name: 'Premium',
    price: '14,999',
    period: '/month',
    desc: 'For serious professionals seeking top placements',
    features: [
      'Everything in Pro',
      '1-on-1 mentorship',
      'Guaranteed referrals',
      'Portfolio review',
      'LinkedIn optimization',
      'Soft skills training',
      'Lifetime access',
      'Priority job alerts',
    ],
    popular: false,
    gradient: 'from-cyan-400 to-blue-500',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-purple-400 mb-3">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)]">
            Invest in Your <span className="gradient-text">Future</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            Flexible plans designed for every learner. No hidden fees.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={item}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? 'glass border-purple-500/40 glow-purple'
                  : 'glass glass-hover'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-xs font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-1">{plan.name}</h3>
                <p className="text-sm text-zinc-500">{plan.desc}</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-bold font-[family-name:var(--font-heading)]">
                  <span className="text-lg align-top">₹</span>{plan.price}
                </span>
                <span className="text-zinc-500 text-sm">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-zinc-300">
                    <Check className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-400 text-white hover:shadow-[0_0_30px_rgba(108,92,231,0.4)] hover:scale-[1.02]'
                    : 'border border-dark-600 text-zinc-300 hover:border-purple-500/50 hover:text-white'
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
