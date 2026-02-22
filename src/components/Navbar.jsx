import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, GraduationCap } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Courses', href: '#courses' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Success Stories', href: '#success' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold font-[family-name:var(--font-heading)] tracking-tight">
            Future<span className="gradient-text">Code</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-zinc-400 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#cta"
            className="relative px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-cyan-400 hover:shadow-[0_0_25px_rgba(108,92,231,0.5)] transition-all duration-300 hover:scale-105"
          >
            Enroll Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-2 mx-4 rounded-2xl overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="mt-2 text-center px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-cyan-400"
              >
                Enroll Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
