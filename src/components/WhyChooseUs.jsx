import { motion } from 'framer-motion';
import {
  MonitorPlay, Users, Briefcase, CalendarClock,
  Award, FolderKanban,
} from 'lucide-react';

const features = [
  {
    icon: MonitorPlay,
    title: 'Live Interactive Classes',
    desc: 'Learn in real-time with industry experts through engaging live sessions, not pre-recorded videos.',
    span: 'md:col-span-2',
  },
  {
    icon: Users,
    title: 'Industry Expert Mentors',
    desc: 'Get guided by professionals from top MNCs with 10+ years of experience.',
    span: '',
  },
  {
    icon: Briefcase,
    title: '100% Placement Assistance',
    desc: 'Dedicated placement cell with 500+ hiring partners. Mock interviews, resume building, and direct referrals.',
    span: '',
  },
  {
    icon: CalendarClock,
    title: 'Flexible Schedule',
    desc: 'Weekend and weekday batches to fit your life. Learn at your own pace.',
    span: '',
  },
  {
    icon: Award,
    title: 'Recognized Certificates',
    desc: 'Earn industry-recognized certificates that add real value to your resume.',
    span: '',
  },
  {
    icon: FolderKanban,
    title: 'Real-World Projects',
    desc: 'Build portfolio-worthy projects from day one. Capstone projects reviewed by industry mentors.',
    span: 'md:col-span-2',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-purple-400 mb-3">Why FutureCode</p>
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)]">
            Why Students <span className="gradient-text">Choose Us</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className={`group glass glass-hover rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 ${f.span}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-400/20 border border-purple-500/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-purple-500/40 transition-all">
                <f.icon className="w-7 h-7 text-purple-400 group-hover:text-cyan-400 transition-colors" />
              </div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-2">
                {f.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
