'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronRight, Sparkles } from 'lucide-react';
import { projects } from '@/lib/data';

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [showAll, setShowAll] = useState(false);

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const visibleRest = showAll ? rest : rest.slice(0, 0);

  return (
    <section id="projects" ref={ref} className="py-24 bg-warm-50 dark:bg-warm-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-teal-600 dark:text-teal-400 font-medium tracking-widest uppercase">
            // 04. projects
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-warm-900 dark:text-warm-50 mt-3">
            Featured Work
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-teal-500 to-amber-500" />
          <p className="mt-4 text-warm-500 dark:text-warm-400 max-w-xl mx-auto">
            End-to-end data engineering systems, analytics platforms, and ML pipelines.
          </p>
        </motion.div>

        {/* Featured projects (large cards) */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {featured.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} large />
          ))}
        </div>

        {/* More projects toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mb-6"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-teal-200 dark:border-teal-800 text-teal-600 dark:text-teal-400 font-semibold text-sm hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-200"
          >
            <Sparkles size={16} />
            {showAll ? 'Show Less' : `View All Projects (+${rest.length} more)`}
          </button>
        </motion.div>

        {/* Additional projects */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {rest.map((project, i) => (
                  <ProjectCard key={project.title} project={project} index={i + featured.length} inView={inView} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProjectCard({
  project, index, inView, large = false,
}: {
  project: (typeof projects)[0];
  index: number;
  inView: boolean;
  large?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  const colorClass = project.color === 'teal'
    ? {
        gradient: 'from-teal-500/20 to-teal-600/5',
        badge: 'bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300',
        accent: 'border-teal-400/50 dark:border-teal-600/50',
        highlight: 'text-teal-600 dark:text-teal-400',
        dot: 'bg-teal-500',
      }
    : {
        gradient: 'from-amber-400/20 to-amber-500/5',
        badge: 'bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300',
        accent: 'border-amber-400/50 dark:border-amber-600/30',
        highlight: 'text-amber-600 dark:text-amber-400',
        dot: 'bg-amber-500',
      };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`group relative rounded-2xl border bg-white dark:bg-warm-800 transition-all duration-300 overflow-hidden
        ${hovered ? `shadow-xl -translate-y-2 ${colorClass.accent}` : 'border-warm-100 dark:border-warm-700 shadow-card'}
        ${large ? 'flex flex-col' : 'flex flex-col'}
      `}
    >
      {/* Top gradient banner */}
      <div className={`h-2 w-full bg-gradient-to-r ${colorClass.gradient}`} />

      {/* Visual header with abstract data visualization */}
      <div className={`relative h-28 bg-gradient-to-br ${colorClass.gradient} flex items-center justify-center overflow-hidden`}>
        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
        {/* Animated nodes */}
        {[...Array(4)].map((_, j) => (
          <motion.div
            key={j}
            className={`absolute w-2 h-2 rounded-full ${colorClass.dot} opacity-60`}
            style={{
              left: `${20 + j * 20}%`,
              top: `${30 + (j % 2) * 30}%`,
            }}
            animate={hovered ? {
              y: [0, -8, 0],
              opacity: [0.4, 1, 0.4],
            } : {}}
            transition={{ duration: 1.5, delay: j * 0.2, repeat: Infinity }}
          />
        ))}
        {/* Tech category label */}
        <span className={`relative z-10 font-mono text-xs font-bold uppercase tracking-widest ${colorClass.highlight} opacity-60`}>
          {project.tech[0]}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        {/* Title */}
        <h3 className={`font-display font-bold text-warm-900 dark:text-warm-50 leading-snug mb-2 ${large ? 'text-lg' : 'text-base'}`}>
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-warm-500 dark:text-warm-400 leading-relaxed mb-4 flex-1">
          {hovered ? project.longDescription : project.description}
        </p>

        {/* Highlights */}
        <div className="space-y-1 mb-4">
          {project.highlights.map((h) => (
            <div key={h} className="flex items-center gap-1.5 text-xs">
              <ChevronRight size={11} className={colorClass.highlight} />
              <span className="text-warm-600 dark:text-warm-300">{h}</span>
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, large ? 6 : 4).map((t) => (
            <span key={t} className={`px-2 py-0.5 rounded-md text-xs font-medium font-mono ${colorClass.badge}`}>
              {t}
            </span>
          ))}
          {project.tech.length > (large ? 6 : 4) && (
            <span className="px-2 py-0.5 rounded-md text-xs font-medium text-warm-500 dark:text-warm-400 bg-warm-100 dark:bg-warm-700">
              +{project.tech.length - (large ? 6 : 4)}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-2 border-t border-warm-100 dark:border-warm-700">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-warm-500 dark:text-warm-400 hover:text-warm-900 dark:hover:text-warm-50 transition-colors"
              aria-label={`${project.title} GitHub`}
            >
              <Github size={14} />
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 text-xs font-medium ${colorClass.highlight} transition-colors`}
              aria-label={`${project.title} Demo`}
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
