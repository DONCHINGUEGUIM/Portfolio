import React from 'react';
import { Dribbble, Instagram, Linkedin, Globe } from 'lucide-react';

export default function SocialBar() {
  const socials = [
    {
      name: 'Dribbble',
      icon: <Dribbble size={18} />,
      url: 'https://dribbble.com',
    },
    {
      name: 'Instagram',
      icon: <Instagram size={18} />,
      url: 'https://instagram.com',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={18} />,
      url: 'https://linkedin.com',
    },
    {
      name: 'Behance',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.098 1.189.098 1.847h-8.082c.089 1.784 1.252 2.734 2.82 2.734 1.201 0 2.112-.483 2.502-1.412h2.486zm-5.275-5.926c-1.282 0-2.193.738-2.392 1.986h4.633c-.088-1.121-.861-1.986-2.241-1.986zm-11.726-2.074h-6.725v12h6.812c3.213 0 5.188-1.503 5.188-3.902 0-1.729-1.002-2.932-2.392-3.398 1.122-.483 1.88-1.502 1.88-2.932 0-2.183-1.848-3.768-4.763-3.768zm-3.725 3.109h2.82c1.121 0 1.88.483 1.88 1.34 0 .897-.759 1.398-1.88 1.398h-2.82v-2.738zm0 4.887h3.042c1.221 0 2.052.506 2.052 1.502 0 1.021-.831 1.503-2.052 1.503h-3.042v-3.005z"/>
        </svg>
      ),
      url: 'https://behance.net',
    },
    {
      name: 'Global',
      icon: <Globe size={18} />,
      url: 'https://github.com',
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
