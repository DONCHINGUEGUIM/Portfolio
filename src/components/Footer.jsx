import React from 'react';
import { Dribbble, Instagram, Linkedin, ChevronUp, Globe } from 'lucide-react';

const socials = [
  { icon: <Globe size={16} />, label: 'Dribbble', url: '#' },
  { icon: <Instagram size={16} />, label: 'Instagram', url: '#' },
  { icon: <Linkedin size={16} />, label: 'LinkedIn', url: '#' },
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
              <span className="text-[#e05236]">V</span>ELO
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
