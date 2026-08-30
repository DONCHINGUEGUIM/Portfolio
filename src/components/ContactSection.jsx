import React from 'react';
import { Mail, MapPin, Send, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-8 md:px-16">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#e05236]/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-[#e05236] text-sm font-medium tracking-wider uppercase mb-4">
            <span className="w-8 h-[2px] bg-[#e05236]" />
            Contact
            <span className="w-8 h-[2px] bg-[#e05236]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            Let's{' '}
            <span className="text-[#e05236]">work together</span>
          </h2>
          <p className="text-neutral-400 text-sm max-w-lg mx-auto">
            Have a project in mind or just want to say hi? Drop me a message
            and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-6">
            <div className="glass-card rounded-xl p-5 space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#e05236]/10 border border-[#e05236]/20 rounded-lg">
                  <Mail size={18} className="text-[#e05236]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Email</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    donchingueguim@gmail.com
                  </p>
                </div>
              </div>
              <div className="w-full h-[1px] bg-neutral-800/80" />
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#e05236]/10 border border-[#e05236]/20 rounded-lg">
                  <MapPin size={18} className="text-[#e05236]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Location</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Cameroon / Remote
                  </p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="glass-card rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-emerald-400">
                  Available for work
                </span>
              </div>
              <p className="text-xs text-neutral-500">
                Currently open to freelance projects and full-time
                opportunities. Response time: within 24 hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <form
              className="glass-card rounded-xl p-6 md:p-8 space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-neutral-400 mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-neutral-900/80 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#e05236]/60 focus:ring-1 focus:ring-[#e05236]/30 transition-all duration-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-neutral-400 mb-1.5"
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="hello@example.com"
                    className="w-full bg-neutral-900/80 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#e05236]/60 focus:ring-1 focus:ring-[#e05236]/30 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-medium text-neutral-400 mb-1.5"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Project Collaboration"
                  className="w-full bg-neutral-900/80 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#e05236]/60 focus:ring-1 focus:ring-[#e05236]/30 transition-all duration-200"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-neutral-400 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-neutral-900/80 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#e05236]/60 focus:ring-1 focus:ring-[#e05236]/30 transition-all duration-200 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group w-full bg-[#e05236] hover:bg-[#c4462e] text-white font-semibold rounded-lg px-6 py-3 text-sm transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message
                <Send
                  size={16}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
