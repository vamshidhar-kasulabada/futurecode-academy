import { motion } from 'framer-motion';
import {
  UserPlus, BookOpen, FolderCode, Mic2, Rocket,
} from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Enroll',
    desc: 'Sign up and get a personalized learning roadmap based on your goals.',
  },
  {
    icon: BookOpen,
    title: 'Learn',
    desc: 'Attend live classes, access recorded sessions, and learn at your pace.',
  },
  {
    icon: FolderCode,
    title: 'Build Projects',
    desc: 'Work on real-world projects to strengthen your portfolio.',
  },
  {
    icon: Mic2,
    title: 'Interview Prep',
    desc: 'Mock interviews, resume reviews, and soft-skill coaching.',
  },
  {
    icon: Rocket,
    title: 'Get Placed',
    desc: 'Get connected with 500+ hiring partners and land your dream role.',
  },
];

export default function LearningPath() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-widest text-purple-400 mb-3">Your Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)]">
            From Beginner to <span className="gradient-text">Placed</span>
          </h2>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-16 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 opacity-30" />

          <div className="flex justify-between relative">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="flex flex-col items-center text-center w-48 group"
              >
                {/* Step number + icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-dark-900 border border-dark-600 flex items-center justify-center group-hover:border-purple-500/50 group-hover:bg-dark-800 transition-all duration-300 relative z-10">
                    <step.icon className="w-7 h-7 text-purple-400 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-xs font-bold z-20">
                    {i + 1}
                  </div>
                  {/* Glow */}
                  <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-400 to-purple-500 opacity-30" />

          <div className="flex flex-col gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex gap-6 group"
              >
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-dark-900 border border-dark-600 flex items-center justify-center group-hover:border-purple-500/50 transition-all">
                    <step.icon className="w-7 h-7 text-purple-400" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] mb-1">{step.title}</h3>
                  <p className="text-sm text-zinc-400">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
