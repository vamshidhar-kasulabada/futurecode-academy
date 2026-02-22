import { GraduationCap } from 'lucide-react';

const footerLinks = {
  Courses: ['Web Development', 'Data Science', 'Digital Marketing', 'Data Analytics', 'DSA & Programming', 'UI/UX Design'],
  Company: ['About Us', 'Careers', 'Blog', 'Press', 'Partners'],
  Support: ['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service', 'Refund Policy'],
};

const socials = [
  { name: 'Twitter', icon: 'X' },
  { name: 'LinkedIn', icon: 'in' },
  { name: 'Instagram', icon: 'IG' },
  { name: 'YouTube', icon: 'YT' },
];

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-8">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold font-[family-name:var(--font-heading)]">
                Future<span className="gradient-text">Code</span>
              </span>
            </a>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm mb-6">
              Empowering the next generation of professionals with industry-ready skills
              and guaranteed placement support. Your career transformation starts here.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href="#"
                  className="w-10 h-10 rounded-xl border border-dark-700 flex items-center justify-center text-zinc-500 text-sm font-bold hover:border-purple-500/50 hover:text-white hover:bg-dark-800 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold font-[family-name:var(--font-heading)] text-white mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-zinc-500 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-dark-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-600">
            &copy; {new Date().getFullYear()} FutureCode Academy. All rights reserved.
          </p>
          <p className="text-sm text-zinc-700">
            Designed with passion for the next generation.
          </p>
        </div>
      </div>
    </footer>
  );
}
