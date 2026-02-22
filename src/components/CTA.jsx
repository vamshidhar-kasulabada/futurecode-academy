import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-dark-950 to-cyan-400/10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-[100px] animate-blob animation-delay-2000" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-zinc-300 mb-8">
            <Sparkles className="w-4 h-4 text-purple-400" />
            Limited Time Offer — 20% Off All Plans
          </div>

          <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-heading)] leading-tight">
            Ready to Start Your
            <br />
            <span className="gradient-text">Journey?</span>
          </h2>

          <p className="mt-6 text-lg text-zinc-400 max-w-xl mx-auto">
            Join thousands of students who transformed their careers with FutureCode.
            Your dream job is just one step away.
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-6 py-4 rounded-full bg-dark-800 border border-dark-600 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500/50 transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-white font-semibold hover:shadow-[0_0_30px_rgba(108,92,231,0.5)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
            >
              {submitted ? 'Sent!' : 'Get Started'}
              {!submitted && <ArrowRight className="w-5 h-5" />}
            </button>
          </form>

          <p className="mt-4 text-xs text-zinc-600">
            Free counseling session included. No spam, we promise.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
