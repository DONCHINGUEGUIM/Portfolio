import React from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

export default function HeroSection({ setActiveSection }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Gradient overlays */}
      <div className="absolute inset-0 hero-gradient-overlay z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-[1]" />

      {/* Portrait Image */}
      <div className="absolute right-0 top-0 h-full w-full md:w-3/5 z-0 hero-portrait-fade opacity-70 md:opacity-100">
        <img
          src="/hero-portrait.png"
          alt=""
          className="h-full w-full object-cover object-center"
          loading="eager"
        />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-8 md:px-16 max-w-7xl mx-auto w-full pt-32 pb-24">
        <div className="max-w-2xl">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 bg-neutral-900/80 border border-neutral-800/80 rounded-full px-4 py-1.5 mb-6 text-xs md:text-sm text-neutral-400 backdrop-blur-sm">
            <span className="w-2 h-2 bg-[#e05236] rounded-full animate-pulse" />
            Available for projects
          </div>

          {/* Main Title */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none text-white mb-5">
            John
            <br />
            <span className="text-[#e05236]">Doe</span>
          </h1>

          {/* Role */}
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs sm:text-sm px-4 py-2 rounded-full font-medium backdrop-blur-sm">
              Front End Developer
            </div>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-neutral-800 to-transparent hidden sm:block" />
          </div>

          {/* Description */}
          <p className="text-neutral-400 text-sm sm:text-base max-w-md mb-10 leading-relaxed">
            Crafting digital experiences with clean code and modern design.
            Specializing in React, Tailwind CSS, and building accessible,
            high-performance web applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                setActiveSection('portfolio');
                document
                  .getElementById('portfolio')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-neutral-200 transition-all duration-300 flex items-center gap-2 text-sm"
            >
              Portfolio
              <ArrowUpRight
                size={18}
                className="group-hover:rotate-45 transition-transform duration-300"
              />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setActiveSection('contact');
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm text-neutral-300 hover:text-white transition-colors duration-200 border border-neutral-800 hover:border-neutral-600 rounded-full px-8 py-3 flex items-center gap-2"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-neutral-600 animate-bounce">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} />
      </div>
    </section>
  );
}
