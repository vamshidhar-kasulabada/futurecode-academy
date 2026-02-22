import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Popup */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute bottom-20 right-0 w-72 glass rounded-2xl p-6 mb-2"
              >
                <h4 className="font-bold font-[family-name:var(--font-heading)] mb-2">Need Guidance?</h4>
                <p className="text-sm text-zinc-400 mb-4">
                  Book a free 1-on-1 counseling session with our career experts.
                </p>
                <a
                  href="#cta"
                  onClick={() => setOpen(false)}
                  className="block w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-400 text-center text-sm font-semibold hover:shadow-[0_0_20px_rgba(108,92,231,0.4)] transition-all"
                >
                  Book Free Session
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <button
            onClick={() => setOpen(!open)}
            className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-white shadow-lg pulse-glow hover:scale-110 transition-transform cursor-pointer"
          >
            {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
