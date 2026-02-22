import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Do I need prior experience to enroll?',
    a: 'Absolutely not! Our courses are designed for complete beginners as well as intermediate learners. We start from the fundamentals and gradually move to advanced topics. All you need is a laptop and the willingness to learn.',
  },
  {
    q: 'How does the placement assistance work?',
    a: "We have a dedicated placement cell with 500+ hiring partners. Once you complete your course, we help with resume building, mock interviews, soft skill training, and directly connect you with companies. We provide placement support until you're placed.",
  },
  {
    q: 'Are the classes live or recorded?',
    a: 'Our Pro and Premium plans include live interactive classes with expert instructors. All live sessions are also recorded and made available within 24 hours for revision. The Starter plan provides access to recorded sessions.',
  },
  {
    q: 'What if I miss a class?',
    a: "No worries! All live sessions are recorded and uploaded to your dashboard. You can also attend the same topic in the next batch at no additional cost. We believe flexibility is key to effective learning.",
  },
  {
    q: 'Can I switch between courses?',
    a: "Yes! Pro and Premium plan subscribers can access all courses. If you're on the Starter plan, you can upgrade anytime and the difference will be adjusted. We want you to explore and find your perfect career path.",
  },
  {
    q: 'Is there an EMI option available?',
    a: 'Yes, we offer flexible EMI options starting from ₹1,999/month with zero interest for select tenure options. We also provide scholarships for meritorious students. Contact our counselors for details.',
  },
];

function FaqItem({ faq, isOpen, toggle }) {
  return (
    <div className="border-b border-dark-700 last:border-none">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
      >
        <span className={`text-lg font-medium pr-8 transition-colors ${isOpen ? 'text-white' : 'text-zinc-300 group-hover:text-white'}`}>
          {faq.q}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
          isOpen ? 'border-purple-500 bg-purple-500/20 text-purple-400' : 'border-dark-600 text-zinc-500 group-hover:border-purple-500/50'
        }`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-zinc-400 leading-relaxed pr-12">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-purple-400 mb-3">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)]">
            Got <span className="gradient-text">Questions?</span>
          </h2>
          <p className="mt-4 text-zinc-400">
            Everything you need to know about our courses and placement programs.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl px-6 md:px-8"
        >
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
