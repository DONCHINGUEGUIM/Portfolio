import React from 'react';
import { Linkedin } from 'lucide-react';

export default function SocialBar() {
  const socials = [
    {
      name: 'Twitter / X',
      icon: (
        <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      url: 'https://x.com',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={18} />,
      url: 'https://www.linkedin.com/in/ngueguim-donchi-896296356',
    },
    {
      name: 'GitHub',
      icon: (
        <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
          <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3" />
        </svg>
      ),
      url: 'https://github.com/DONCHINGUEGUIM',
    },
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-6">
      <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-neutral-700 to-neutral-700/60" />
      <div className="flex flex-col items-center gap-5 bg-neutral-900/60 backdrop-blur-md border border-neutral-800/80 p-3 rounded-full shadow-2xl">
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            title={s.name}
            className="text-neutral-400 hover:text-[#e05236] hover:scale-110 transition-all duration-200 p-1.5 rounded-full hover:bg-neutral-800/60"
          >
            {s.icon}
          </a>
        ))}
      </div>
      <div className="w-[1px] h-16 bg-gradient-to-t from-transparent via-neutral-700 to-neutral-700/60" />
    </div>
  );
}
