import React from 'react';
import { Linkedin, ChevronUp, Twitter } from 'lucide-react';

const socials = [
  { icon: <Twitter size={16} />, label: 'Twitter / X', url: 'https://x.com' },
  { icon: <Linkedin size={16} />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/ngueguim-donchi-896296356' },
  { icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3" />
      </svg>
    ), label: 'GitHub', url: 'https://github.com/DONCHINGUEGUIM' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-neutral-800/60 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-10 md:py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="text-xl font-black tracking-widest text-white"
            >
              <span className="text-[#e05236]">D</span>N
            </a>
            <p className="text-xs text-neutral-500 mt-1.5">
              Crafting digital experiences with purpose.
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-[#e05236] hover:bg-neutral-900/80 p-2 rounded-full transition-all duration-200 border border-transparent hover:border-neutral-800/80"
                title={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-xs text-neutral-600 text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} DN. All rights reserved.</p>
            <p className="mt-0.5">
              Designed & Built with{' '}
              <span className="text-[#e05236]">React</span> &{' '}
              <span className="text-[#e05236]">Tailwind</span>
            </p>
          </div>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="mx-auto mt-8 flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-[#e05236] hover:bg-[#e05236]/10 transition-all duration-300"
          aria-label="Back to top"
        >
          <ChevronUp size={16} />
        </button>
      </div>
    </footer>
  );
}
