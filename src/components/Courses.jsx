import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2, Database, BarChart3, Megaphone, Brain, Palette,
  Clock, Star, ArrowRight, Layers
} from 'lucide-react';

const courses = [
  {
    title: 'Full-Stack Web Development',
    category: 'IT',
    icon: Code2,
    duration: '6 Months',
    rating: 4.9,
    students: '3.2K+',
    color: 'from-purple-500 to-blue-500',
    topics: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
  },
  {
    title: 'Data Science & ML',
    category: 'IT',
    icon: Brain,
    duration: '5 Months',
    rating: 4.8,
    students: '2.8K+',
    color: 'from-cyan-400 to-blue-500',
    topics: ['Python', 'TensorFlow', 'Pandas', 'SQL'],
  },
  {
    title: 'DSA & Programming',
    category: 'IT',
    icon: Layers,
    duration: '4 Months',
    rating: 4.9,
    students: '4.1K+',
    color: 'from-green-400 to-cyan-400',
    topics: ['C++', 'Java', 'Algorithms', 'LeetCode'],
  },
  {
    title: 'Digital Marketing',
    category: 'Non-IT',
    icon: Megaphone,
    duration: '3 Months',
    rating: 4.7,
    students: '1.5K+',
    color: 'from-orange-400 to-pink-500',
    topics: ['SEO', 'Google Ads', 'Social Media', 'Analytics'],
  },
  {
    title: 'Data Analytics',
    category: 'Non-IT',
    icon: BarChart3,
    duration: '4 Months',
    rating: 4.8,
    students: '2.1K+',
    color: 'from-yellow-400 to-orange-500',
    topics: ['Excel', 'Power BI', 'Tableau', 'SQL'],
  },
  {
    title: 'UI/UX Design',
    category: 'Non-IT',
    icon: Palette,
    duration: '3 Months',
    rating: 4.7,
    students: '1.8K+',
    color: 'from-pink-400 to-purple-500',
    topics: ['Figma', 'Wireframing', 'Prototyping', 'Research'],
  },
  {
    title: 'Cloud & DevOps',
    category: 'IT',
    icon: Database,
    duration: '5 Months',
    rating: 4.8,
    students: '1.9K+',
    color: 'from-blue-400 to-indigo-500',
    topics: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    title: 'Cyber Security',
    category: 'IT',
    icon: Database,
    duration: '5 Months',
    rating: 4.9,
    students: '1.4K+',
    color: 'from-red-400 to-purple-500',
    topics: ['Ethical Hacking', 'Networks', 'OWASP', 'Linux'],
  },
];

const filters = ['All', 'IT', 'Non-IT'];

export default function Courses() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? courses
    : courses.filter((c) => c.category === active);

  return (
    <section id="courses" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-purple-400 mb-3">Our Programs</p>
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)]">
            Master <span className="gradient-text">In-Demand</span> Skills
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Choose from our wide range of industry-relevant courses designed to fast-track your career
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-3 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                active === f
                  ? 'bg-gradient-to-r from-purple-500 to-cyan-400 text-white glow-purple'
                  : 'border border-dark-600 text-zinc-400 hover:border-purple-500/50 hover:text-white'
              }`}
            >
              {f === 'All' ? 'All Courses' : `${f} Courses`}
            </button>
          ))}
        </motion.div>

        {/* Course Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((course) => (
              <motion.div
                key={course.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group glass glass-hover rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300"
              >
                {/* Card top gradient */}
                <div className={`h-2 bg-gradient-to-r ${course.color}`} />

                <div className="p-6">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <course.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] mb-3 group-hover:text-white transition-colors">
                    {course.title}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.topics.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-full bg-dark-800 text-xs text-zinc-400 border border-dark-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-zinc-500 mb-5">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" /> {course.rating}
                    </span>
                  </div>

                  {/* CTA */}
                  <button className="w-full py-2.5 rounded-xl border border-dark-600 text-sm font-medium text-zinc-300 hover:border-purple-500/50 hover:text-white group/btn flex items-center justify-center gap-2 transition-all cursor-pointer">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
