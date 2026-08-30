import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function AboutSection({ setActiveSection }) {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 px-8 md:px-16"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#e05236]/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center relative z-10">
        {/* Left: Image */}
        <div className="md:col-span-5 relative">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-b from-[#e05236]/30 to-transparent rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
            <img
              src="/hero-portrait.png"
              alt="About me — Hiker looking at mountains"
              className="relative rounded-2xl object-cover w-full h-[400px] md:h-[500px] border border-neutral-800/60 shadow-2xl"
            />
            {/* Decorative tag */}
            <div className="absolute bottom-4 left-4 bg-neutral-900/90 backdrop-blur-md border border-neutral-800/80 rounded-xl px-4 py-2 text-xs text-neutral-400">
              <span className="text-white font-semibold">5+</span> years coding
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="md:col-span-7 space-y-6">
          {/* Section label */}
          <div className="inline-flex items-center gap-2 text-[#e05236] text-sm font-medium tracking-wider uppercase">
            <span className="w-8 h-[2px] bg-[#e05236]" />
            About Me
          </div>

          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            Turning ideas into{' '}
            <span className="text-[#e05236]">digital reality</span>
          </h2>

          <div className="space-y-4 text-neutral-400 text-sm leading-relaxed max-w-xl">
            <p>
              I'm a passionate Front End Developer with a keen eye for design
              and a love for crafting seamless user experiences. With years of
              experience in the industry, I've honed my skills in modern
              JavaScript frameworks, responsive design, and accessibility.
            </p>
            <p>
              When I'm not pushing pixels or debugging code, you'll find me
              exploring nature — hiking through mountains, seeking inspiration
              from the world around me. I believe the best digital products come
              from a blend of technical precision and creative curiosity.
            </p>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 pt-4">
            <div>
              <span className="text-2xl font-black text-white">50+</span>
              <p className="text-xs text-neutral-500 mt-1">Projects Done</p>
            </div>
            <div>
              <span className="text-2xl font-black text-white">30+</span>
              <p className="text-xs text-neutral-500 mt-1">Happy Clients</p>
            </div>
            <div>
              <span className="text-2xl font-black text-white">5+</span>
              <p className="text-xs text-neutral-500 mt-1">Years Exp.</p>
            </div>
          </div>

          {/* Hire me block */}
          <div className="pt-6 border-t border-neutral-800/80">
            <div className="flex flex-wrap items-center gap-4">
              <div>
                <h3 className="text-lg font-bold text-white">Hire me</h3>
                <p className="text-neutral-400 text-xs mt-0.5">
                  Open for collaborations & freelance work
                </p>
              </div>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection('contact');
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group ml-auto flex items-center gap-2 text-sm text-[#3b82f6] hover:text-blue-300 transition-colors font-medium"
              >
                Hire me
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
