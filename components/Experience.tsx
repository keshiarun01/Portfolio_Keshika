'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { experiences } from '@/lib/data';

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" ref={ref} className="py-24 bg-white dark:bg-warm-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-teal-600 dark:text-teal-400 font-medium tracking-widest uppercase">
            // 03. experience
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-warm-900 dark:text-warm-50 mt-3">
            Work Experience
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-teal-500 to-amber-500" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-400 via-teal-300/50 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  exp, index, inView,
}: {
  exp: (typeof experiences)[0];
  index: number;
  inView: boolean;
}) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
      className={`relative flex flex-col md:flex-row gap-6 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Content card */}
      <div className={`w-full md:w-[calc(50%-28px)] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
        <div className="group relative bg-white dark:bg-warm-800 border border-warm-100 dark:border-warm-700 rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          {/* Accent bar */}
          <div className={`absolute top-0 left-0 w-1 h-full rounded-l-2xl ${index === 0 ? 'bg-teal-500' : 'bg-amber-500'}`} />

          {/* Header */}
          <div className="pl-3">
            <div className="flex items-start justify-between gap-2 flex-wrap">
              <div>
                <h3 className="font-display font-bold text-xl text-warm-900 dark:text-warm-50">
                  {exp.company}
                </h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <Briefcase size={14} className="text-teal-500" />
                  <span className="text-teal-600 dark:text-teal-400 font-semibold text-sm">
                    {exp.role}
                  </span>
                </div>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                exp.type === 'Full-time'
                  ? 'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300'
                  : 'bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400'
              }`}>
                {exp.type}
              </span>
            </div>

            {/* Meta info */}
            <div className="flex flex-wrap gap-3 mt-2 text-xs text-warm-500 dark:text-warm-400">
              <span className="flex items-center gap-1">
                <MapPin size={11} /> {exp.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={11} /> {exp.period}
              </span>
            </div>

            {/* Highlights */}
            <ul className="mt-4 space-y-2">
              {exp.highlights.map((h, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-warm-600 dark:text-warm-300 leading-relaxed">
                  <ChevronRight size={14} className="text-teal-500 mt-0.5 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 mt-4">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-md bg-warm-100 dark:bg-warm-700 text-warm-600 dark:text-warm-300 text-xs font-medium font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Center dot on timeline */}
      <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 items-center justify-center z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: 0.3 + index * 0.2, type: 'spring', stiffness: 300 }}
          className={`w-4 h-4 rounded-full border-2 border-white dark:border-warm-900 shadow-md ${
            index === 0 ? 'bg-teal-500' : 'bg-amber-500'
          }`}
        />
      </div>

      {/* Empty side for alternating layout */}
      <div className="hidden md:block w-[calc(50%-28px)]" />
    </motion.div>
  );
}
