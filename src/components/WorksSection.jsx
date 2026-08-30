import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'KOST Marketplace',
    category: 'development',
    tags: ['Flutter', 'Firebase', 'GetX'],
    description:
      'Full-stack e-commerce marketplace for Cameroon. Customer/seller app with product listings, cart, checkout, order tracking, and mobile money payments via NotchPay.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Alter Chat',
    category: 'development',
    tags: ['Next.js', 'Socket.io', 'TypeScript'],
    description:
      'Real-time chat application built with Next.js 15, React 19, Express, and Socket.io. Features auth, channels, typing indicators, and image uploads.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Conversational RAG',
    category: 'development',
    tags: ['Python', 'LangChain', 'Docker'],
    description:
      'Conversational RAG app with FastAPI, LangChain, Groq LLM, and Qdrant vector DB. Upload PDFs, ask questions, get context-aware answers — fully Dockerized.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'NotchPay Gateway',
    category: 'development',
    tags: ['Python', 'Flask', 'Fintech'],
    description:
      'Payment gateway tester and integration tool for NotchPay mobile money APIs. Auth verification, payment initialization, checkout, and status tracking.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 5,
    title: 'KOST Admin Panel',
    category: 'development',
    tags: ['Flutter Web', 'Firebase', 'DataTable2'],
    description:
      'Responsive admin dashboard for managing KOST marketplace — CRUD operations for products, orders, brands, categories, and banners with Firebase backend.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 6,
    title: 'Capture',
    category: 'development',
    tags: ['Flutter', 'OCR', 'Mobile'],
    description:
      'Fully offline OCR app that recognises text from images and documents on-device. Built with Flutter, no internet required for text extraction.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
    liveUrl: '#',
    githubUrl: '#',
  },
];

const filters = [
  { id: 'all', label: 'All' },
  { id: 'design', label: 'Design' },
  { id: 'development', label: 'Development' },
];

export default function WorksSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = projects.filter(
    (p) => activeFilter === 'all' || p.category === activeFilter
  );

  return (
    <section id="portfolio" className="relative py-24 md:py-32 px-8 md:px-16">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 text-[#e05236] text-sm font-medium tracking-wider uppercase mb-4">
            <span className="w-8 h-[2px] bg-[#e05236]" />
            Portfolio
            <span className="w-8 h-[2px] bg-[#e05236]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            My <span className="text-[#e05236]">Works</span>
          </h2>
          <p className="text-neutral-400 text-sm max-w-lg mx-auto">
            These are all the projects that I have worked on so far — spanning
            design, development, and brand identity.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 bg-neutral-900/80 border border-neutral-800/60 rounded-full p-1.5 backdrop-blur-sm">
            {filters.map((f) => {
              const isActive = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-300 capitalize ${
                    isActive
                      ? 'bg-[#e05236] text-white shadow-lg shadow-[#e05236]/20'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group glass-card rounded-xl overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-transparent z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Overlay actions */}
                <div className="absolute inset-0 z-[2] flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black p-2.5 rounded-full hover:bg-neutral-200 transition-colors"
                    title="Live Preview"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black p-2.5 rounded-full hover:bg-neutral-200 transition-colors"
                    title="Source Code"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] text-neutral-500 bg-neutral-800/80 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-bold text-white text-sm group-hover:text-[#e05236] transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-neutral-500 text-sm">
            No projects found for this category.
          </div>
        )}
      </div>
    </section>
  );
}
