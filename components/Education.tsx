'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';
import { education } from '@/lib/data';

export default function Education() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" ref={ref} className="py-24 bg-white dark:bg-warm-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-teal-600 dark:text-teal-400 font-medium tracking-widest uppercase">
            // 05. education
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-warm-900 dark:text-warm-50 mt-3">
            Academic Background
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-teal-500 to-amber-500" />
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.2 }}
              className="group relative bg-warm-50 dark:bg-warm-800 border border-warm-100 dark:border-warm-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Background decoration */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-5 ${
                i === 0 ? 'bg-teal-500' : 'bg-amber-500'
              }`} />

              {/* GPA badge */}
              <div className={`absolute top-6 right-6 px-3 py-1.5 rounded-xl text-sm font-bold ${
                i === 0
                  ? 'bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400'
                  : 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400'
              }`}>
                GPA {edu.gpa}
              </div>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                i === 0
                  ? 'bg-teal-100 dark:bg-teal-900/40'
                  : 'bg-amber-100 dark:bg-amber-900/20'
              }`}>
                <GraduationCap
                  size={24}
                  className={i === 0 ? 'text-teal-600 dark:text-teal-400' : 'text-amber-600 dark:text-amber-400'}
                />
              </div>

              {/* Institution */}
              <h3 className="font-display font-bold text-xl text-warm-900 dark:text-warm-50 mb-1">
                {edu.institution}
              </h3>

              {/* Degree */}
              <p className={`font-medium text-sm mb-3 ${
                i === 0 ? 'text-teal-600 dark:text-teal-400' : 'text-amber-600 dark:text-amber-400'
              }`}>
                {edu.degree}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap gap-3 text-xs text-warm-500 dark:text-warm-400 mb-5">
                <span className="flex items-center gap-1">
                  <MapPin size={11} /> {edu.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={11} /> {edu.period}
                </span>
              </div>

              {/* Courses */}
              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-warm-600 dark:text-warm-300 mb-2 uppercase tracking-wide">
                  <BookOpen size={12} />
                  Key Courses
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {edu.courses.map((course) => (
                    <span
                      key={course}
                      className="px-2 py-1 rounded-lg bg-white dark:bg-warm-700 border border-warm-200 dark:border-warm-600 text-xs text-warm-600 dark:text-warm-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
