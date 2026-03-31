'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { personalInfo } from '@/lib/data';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollTo = (href: string) => {
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-warm-900 dark:bg-warm-950 text-warm-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <button
              onClick={scrollTop}
              className="font-display font-bold text-2xl text-teal-400 hover:text-teal-300 transition-colors"
            >
              KA<span className="text-amber-400">.</span>
            </button>
            <p className="text-sm text-warm-500 mt-1 max-w-xs">
              Building scalable data pipelines &amp; ML-driven analytics.
            </p>
          </div>

          {/* Quick nav */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm text-warm-400 hover:text-teal-400 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-warm-500 hover:text-blue-400 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-warm-500 hover:text-warm-50 transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <button
              onClick={scrollTop}
              aria-label="Back to top"
              className="ml-2 p-2 rounded-lg border border-warm-700 text-warm-500 hover:border-teal-600 hover:text-teal-400 transition-all"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-8 border-t border-warm-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-warm-600">
          <p>
            © {new Date().getFullYear()} Keshika Arunkumar. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with Next.js &amp; <Heart size={12} className="text-red-500 fill-red-500" /> using Tailwind + Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
