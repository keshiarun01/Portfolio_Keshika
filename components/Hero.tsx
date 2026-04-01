'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Download, ArrowDown } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import { personalInfo } from '@/lib/data';

// Floating data-node particle
function DataNode({ x, y, delay, size = 6 }: { x: string; y: string; delay: number; size?: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-teal-400/30 dark:bg-teal-400/20 border border-teal-500/40"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{ y: [0, -14, 0], opacity: [0.3, 0.8, 0.3] }}
      transition={{ duration: 4 + delay, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}


const socialLinks = [
  { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn', color: 'hover:text-blue-500' },
  { icon: FaGithub,   href: personalInfo.github,   label: 'GitHub',   color: 'hover:text-warm-900 dark:hover:text-white' },
];

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-warm-50 dark:bg-warm-900"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-teal-400/10 dark:bg-teal-400/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-amber-400/10 dark:bg-amber-400/5 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal-500/5 blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Floating data nodes decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <DataNode x="8%"  y="20%" delay={0}   size={8} />
        <DataNode x="15%" y="60%" delay={1.5} size={5} />
        <DataNode x="88%" y="15%" delay={0.8} size={7} />
        <DataNode x="92%" y="55%" delay={2}   size={4} />
        <DataNode x="75%" y="80%" delay={1}   size={6} />
        <DataNode x="5%"  y="80%" delay={2.5} size={5} />
        <DataNode x="50%" y="5%"  delay={0.5} size={6} />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text content */}
          <div>
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-700 text-teal-700 dark:text-teal-300 text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
              </span>
              Open to Data Engineer & Analyst roles
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-warm-900 dark:text-warm-50 leading-tight mb-4"
            >
              Hi, I'm{' '}
              <span className="gradient-text">
                Keshika
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-xl sm:text-2xl font-semibold text-warm-600 dark:text-warm-300 mb-2"
            >
              {personalInfo.title} —{' '}
              <span className="text-teal-600 dark:text-teal-400">{personalInfo.tagline}</span>
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex items-center gap-1.5 text-warm-500 dark:text-warm-400 text-sm mb-6"
            >
              <MapPin size={14} />
              <span>{personalInfo.location}</span>
            </motion.div>

            {/* Intro paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-warm-600 dark:text-warm-300 text-base leading-relaxed mb-8 max-w-lg"
            >
              I design data architectures that transform raw data into business intelligence.
              Graduated with MS in Data Analytics Engineering at{' '}
              <span className="font-semibold text-teal-600 dark:text-teal-400">Northeastern University</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold transition-all duration-200 hover:shadow-glow-teal hover:-translate-y-0.5"
              >
                View My Work
              </button>
              <a
                href={personalInfo.resumePath}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-teal-600 dark:border-teal-500 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 font-semibold transition-all duration-200 hover:-translate-y-0.5"
              >
                <Download size={16} />
                Download Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4"
            >
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`text-warm-400 dark:text-warm-500 ${color} transition-colors duration-200`}
                >
                  <Icon size={24} />
                </a>
              ))}
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="text-warm-400 dark:text-warm-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                <Mail size={22} />
              </a>
            </motion.div>
          </div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Spinning ring decoration */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-teal-400/30 dark:border-teal-500/20"
                style={{ margin: '-20px' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />
              {/* Amber accent ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-amber-400/20"
                style={{ margin: '-10px' }}
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              />

              {/* Profile image */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-warm-800 shadow-2xl shadow-teal-500/20">
                <Image
                  src={personalInfo.photoPath}
                  alt="Keshika Arunkumar"
                  fill
                  className="object-cover object-top"
                  priority
                  onError={(e) => {
                    // Fallback: show initials if photo not found
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.initials-fallback')) {
                      const div = document.createElement('div');
                      div.className = 'initials-fallback absolute inset-0 flex items-center justify-center bg-gradient-to-br from-teal-500 to-teal-700 text-white text-6xl font-bold font-display';
                      div.textContent = 'KA';
                      parent.appendChild(div);
                    }
                  }}
                />
              </div>

              {/* Floating data badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-8 glass-card px-3 py-2 rounded-xl shadow-card text-xs font-mono font-medium text-teal-700 dark:text-teal-300 whitespace-nowrap"
              >
                {'{ pipelines: "scalable" }'}
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, delay: 0.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-8 glass-card px-3 py-2 rounded-xl shadow-card text-xs font-mono font-medium text-amber-600 dark:text-amber-400 whitespace-nowrap"
              >
                SELECT * FROM insights
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-warm-400 dark:text-warm-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          aria-label="Scroll to about"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
