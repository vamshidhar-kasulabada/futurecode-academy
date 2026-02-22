import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const stories = [
  {
    name: 'Priya Sharma',
    role: 'Frontend Developer',
    company: 'Google',
    quote: 'FutureCode completely transformed my career. From a non-tech background, I became a frontend developer at Google within 8 months. The mentors are incredible!',
    initials: 'PS',
    gradient: 'from-purple-500 to-blue-500',
  },
  {
    name: 'Rahul Verma',
    role: 'Data Scientist',
    company: 'Microsoft',
    quote: 'The data science program was everything I needed. Hands-on projects, real datasets, and the placement team connected me with Microsoft. Best investment ever!',
    initials: 'RV',
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    name: 'Ananya Patel',
    role: 'Digital Marketing Lead',
    company: 'Amazon',
    quote: "I was skeptical at first, but the digital marketing course was thorough. Within 3 months I had a certification and job offer from Amazon. Highly recommended!",
    initials: 'AP',
    gradient: 'from-orange-400 to-pink-500',
  },
  {
    name: 'Karthik Reddy',
    role: 'Full-Stack Developer',
    company: 'Flipkart',
    quote: 'The full-stack program covers everything from basics to deployment. I went from zero coding knowledge to building production apps. Got placed at Flipkart!',
    initials: 'KR',
    gradient: 'from-green-400 to-cyan-400',
  },
  {
    name: 'Sneha Gupta',
    role: 'Data Analyst',
    company: 'Deloitte',
    quote: 'The data analytics course gave me practical skills employers actually want. The capstone project became my portfolio highlight. Now thriving at Deloitte!',
    initials: 'SG',
    gradient: 'from-yellow-400 to-orange-500',
  },
];

export default function SuccessStories() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? stories.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === stories.length - 1 ? 0 : c + 1));

  const story = stories[current];

  return (
    <section id="success" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[128px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-purple-400 mb-3">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)]">
            From Students to <span className="gradient-text">Professionals</span>
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-3xl p-8 md:p-12"
            >
              <Quote className="w-12 h-12 text-purple-500/30 mb-6" />

              <p className="text-xl md:text-2xl text-zinc-200 leading-relaxed mb-10 font-light">
                "{story.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${story.gradient} flex items-center justify-center text-white font-bold text-lg`}>
                  {story.initials}
                </div>
                <div>
                  <p className="font-semibold text-white">{story.name}</p>
                  <p className="text-sm text-zinc-400">
                    {story.role} at <span className="text-purple-400">{story.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-dark-600 flex items-center justify-center text-zinc-400 hover:border-purple-500/50 hover:text-white transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {stories.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === current
                      ? 'w-8 bg-gradient-to-r from-purple-500 to-cyan-400'
                      : 'w-2 bg-dark-600 hover:bg-dark-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-dark-600 flex items-center justify-center text-zinc-400 hover:border-purple-500/50 hover:text-white transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
