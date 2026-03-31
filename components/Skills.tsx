'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Code2, Cloud, GitBranch, Database, BarChart3, Settings,
} from 'lucide-react';
import { skills } from '@/lib/data';

const iconMap: Record<string, React.ElementType> = {
  Code2, Cloud, GitBranch, Database, BarChart3, Settings,
};

const colorMap: Record<string, { bg: string; border: string; iconBg: string; iconText: string; badge: string }> = {
  teal: {
    bg: 'bg-teal-50 dark:bg-teal-900/20',
    border: 'border-teal-100 dark:border-teal-800/50',
    iconBg: 'bg-teal-100 dark:bg-teal-900/40',
    iconText: 'text-teal-600 dark:text-teal-400',
    badge: 'bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300',
  },
  amber: {
    bg: 'bg-amber-50 dark:bg-amber-900/10',
    border: 'border-amber-100 dark:border-amber-800/30',
    iconBg: 'bg-amber-100 dark:bg-amber-900/30',
    iconText: 'text-amber-600 dark:text-amber-400',
    badge: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300',
  },
};

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" ref={ref} className="py-24 bg-warm-50 dark:bg-warm-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-teal-600 dark:text-teal-400 font-medium tracking-widest uppercase">
            // 02. tech_stack
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-warm-900 dark:text-warm-50 mt-3">
            Skills & Tools
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-teal-500 to-amber-500" />
          <p className="mt-4 text-warm-500 dark:text-warm-400 max-w-xl mx-auto">
            A comprehensive toolkit spanning data engineering, cloud platforms, machine learning, and BI.
          </p>
        </motion.div>

        {/* Bento grid — responsive layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => {
            const Icon = iconMap[skill.icon] ?? Code2;
            const c = colorMap[skill.color] ?? colorMap.teal;

            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                className={`group rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${c.bg} ${c.border}`}
                // Make first card span 2 columns on large screens for bento effect
                style={i === 0 ? { gridColumn: 'span 1' } : {}}
              >
                {/* Card header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl ${c.iconBg}`}>
                    <Icon size={20} className={c.iconText} />
                  </div>
                  <h3 className="font-display font-semibold text-warm-800 dark:text-warm-100 text-sm leading-tight">
                    {skill.category}
                  </h3>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-1.5">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200 group-hover:scale-105 ${c.badge}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Proficiency overview bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Python / SQL', pct: 95 },
            { label: 'Cloud (Azure/AWS/GCP)', pct: 88 },
            { label: 'Data Pipelines', pct: 92 },
            { label: 'ML / Analytics', pct: 82 },
          ].map(({ label, pct }, i) => (
            <div key={label} className="bento-card">
              <div className="flex justify-between text-xs font-medium mb-2">
                <span className="text-warm-700 dark:text-warm-200">{label}</span>
                <span className="text-teal-600 dark:text-teal-400">{pct}%</span>
              </div>
              <div className="h-1.5 bg-warm-200 dark:bg-warm-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-teal-500 to-amber-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${pct}%` } : {}}
                  transition={{ delay: 0.8 + i * 0.1, duration: 1, ease: 'easeOut' }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
