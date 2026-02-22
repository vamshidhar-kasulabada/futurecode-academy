import { motion } from 'framer-motion';

const companies = [
  'Google', 'Microsoft', 'Amazon', 'Meta', 'TCS',
  'Infosys', 'Wipro', 'Accenture', 'Deloitte', 'IBM',
  'Cognizant', 'HCL',
];

export default function TrustedBy() {
  return (
    <section className="py-20 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <p className="text-sm uppercase tracking-widest text-zinc-500 mb-2">Trusted By Industry Leaders</p>
        <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)]">
          Our Students Work At
        </h2>
      </motion.div>

      {/* Infinite scroll logos */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-950 to-transparent z-10" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-950 to-transparent z-10" />

        <div className="flex animate-scroll">
          {[...companies, ...companies].map((company, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-8 flex items-center justify-center group"
            >
              <div className="px-8 py-4 rounded-xl border border-dark-700 bg-dark-900/50 text-zinc-500 font-semibold text-lg tracking-wide group-hover:text-white group-hover:border-purple-500/30 transition-all duration-300 whitespace-nowrap">
                {company}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
