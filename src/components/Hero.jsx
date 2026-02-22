import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Code2, Laptop, BrainCircuit } from 'lucide-react';

function Counter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const start = Date.now();
          const step = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className="shimmer text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)]">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const floatingIcons = [
  { icon: Code2, x: '10%', y: '20%', delay: 0, size: 40 },
  { icon: Laptop, x: '85%', y: '15%', delay: 1, size: 36 },
  { icon: BrainCircuit, x: '75%', y: '70%', delay: 2, size: 44 },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[128px] animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-400/15 rounded-full blur-[128px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-purple-400/10 rounded-full blur-[128px] animate-blob animation-delay-4000" />
      </div>

      {/* Floating icons */}
      {floatingIcons.map(({ icon: Icon, x, y, delay, size }, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:block text-purple-500/20"
          style={{ left: x, top: y }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay, ease: 'easeInOut' }}
        >
          <Icon size={size} />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-zinc-300 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          New Batch Starting Soon — Limited Seats
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-heading)] leading-[1.1] tracking-tight"
        >
          Code Your Future.
          <br />
          <span className="gradient-text">Land Your Dream Job.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto"
        >
          Industry-ready courses with guaranteed placement assistance for IT & Non-IT streams.
          Transform your career in as little as 90 days.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#courses"
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-white font-semibold text-lg hover:shadow-[0_0_30px_rgba(108,92,231,0.5)] hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            Explore Courses
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#success"
            className="group px-8 py-4 rounded-full border border-dark-600 text-zinc-300 font-semibold text-lg hover:border-purple-500/50 hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            <Play className="w-5 h-5 text-purple-400" />
            Watch Demo
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: 10000, suffix: '+', label: 'Students Trained' },
            { value: 500, suffix: '+', label: 'Placements Done' },
            { value: 50, suffix: '+', label: 'Expert Courses' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent" />
    </section>
  );
}
