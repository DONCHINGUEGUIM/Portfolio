import React from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'UI/UX Design',
    badge: 'Very Good',
    badgeColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    experience: '2 years experience',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Phasellus interdum justo nec libero venenatis tincidunt.',
    stack: 'Figma, Adobe XD, Adobe Photoshop, Adobe Illustrator',
  },
  {
    title: 'Web Development',
    badge: 'Excellent',
    badgeColor: 'text-[#e05236] bg-[#e05236]/10 border-[#e05236]/20',
    experience: '3 years experience',
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    stack: 'React, Next.js, Tailwind CSS, Node.js, Express',
  },
  {
    title: 'Digital Design',
    badge: 'Good',
    badgeColor: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    experience: '2 years experience',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    stack: 'Adobe Creative Suite, Blender, Figma, After Effects',
  },
  {
    title: 'Photo & Video Editing',
    badge: 'Very Good',
    badgeColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    experience: '4 years experience',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    stack: 'Premiere Pro, DaVinci Resolve, Lightroom, Photoshop',
  },
];

function ServiceCard({ title, badge, badgeColor, experience, description, stack, index }) {
  return (
    <div
      className="glass-card glass-card-hover rounded-xl p-5 md:p-6 flex flex-col justify-between group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div>
        {/* Header */}
        <div className="flex justify-between items-start gap-3 mb-1.5">
          <h3 className="font-bold text-base md:text-lg text-white group-hover:text-[#e05236] transition-colors duration-200">
            {title}
          </h3>
          <span
            className={`text-[10px] font-medium px-2 py-0.5 rounded-full border whitespace-nowrap ${badgeColor}`}
          >
            {badge}
          </span>
        </div>
        <span className="text-xs text-neutral-500">{experience}</span>
        <p className="text-xs text-neutral-400 mt-3 leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-5 pt-4 border-t border-neutral-800/80">
        <p className="text-[11px] text-neutral-500">{stack}</p>
      </div>
    </div>
  );
}

export default function ServicesSection({ setActiveSection }) {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 px-8 md:px-16"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#e05236]/3 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 relative z-10">
        {/* Left Column */}
        <div className="md:col-span-4 space-y-5 md:sticky md:top-32 md:self-start">
          <div className="inline-flex items-center gap-2 text-[#e05236] text-sm font-medium tracking-wider uppercase">
            <span className="w-8 h-[2px] bg-[#e05236]" />
            What I Do
          </div>

          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            <span className="text-white">Services</span>
          </h2>

          <p className="text-neutral-400 text-sm leading-relaxed">
            Here are my services that I can do, my skills, and my experience.
            From design to development, I bring your ideas to life.
          </p>

          <div className="flex flex-col gap-2 pt-2">
            <div className="flex items-center gap-2 text-xs text-neutral-500">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e05236]" />
              20+ projects delivered
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-500">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e05236]" />
              15+ satisfied clients
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-500">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e05236]" />
              99% on-time delivery
            </div>
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
            className="group inline-flex items-center gap-2 text-sm text-[#3b82f6] hover:text-blue-300 transition-colors font-medium pt-2"
          >
            Hire me
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </a>
        </div>

        {/* Right Column: Service Cards Grid */}
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
