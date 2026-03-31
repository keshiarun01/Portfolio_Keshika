'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { about } from '@/lib/data';

function CounterStat({
  value, suffix, label, delay,
}: { value: number; suffix: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="text-center">
      <motion.div
        className="stat-value gradient-text"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay, duration: 0.6 }}
      >
        {inView ? (
          <Counter target={value} suffix={suffix} />
        ) : (
          `0${suffix}`
        )}
      </motion.div>
      <p className="text-sm text-warm-500 dark:text-warm-400 mt-1 font-medium">{label}</p>
    </div>
  );
}

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useRef(() => {
    if (!ref.current) return;
    let start = 0;
    const duration = 1500;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      if (ref.current) ref.current.textContent = `${Math.floor(eased * target)}${suffix}`;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <AnimatedNumber target={target} suffix={suffix} />
    </motion.span>
  );
}

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.01 }}
      >
        <motion.span
          animate={inView ? { opacity: 1 } : {}}
          style={{ display: 'inline-block' }}
        >
          {target}
          {suffix}
        </motion.span>
      </motion.span>
    </motion.span>
  );
}

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="py-24 bg-white dark:bg-warm-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-teal-600 dark:text-teal-400 font-medium tracking-widest uppercase">
            // 01. about_me
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-warm-900 dark:text-warm-50 mt-3">
            Who I Am
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-teal-500 to-amber-500" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="space-y-5">
            {about.paragraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                className="text-warm-600 dark:text-warm-300 text-lg leading-relaxed"
              >
                {para}
              </motion.p>
            ))}

            {/* Quick fact tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-2 pt-2"
            >
              {[
                '🎓 MS @ Northeastern (GPA 3.84)',
                '📍 Boston, MA',
                '🚀 Sole Data Engineer @ Slay Inc.',
                '☁️ Azure & AWS Certified Skills',
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full bg-warm-100 dark:bg-warm-800 text-warm-700 dark:text-warm-300 text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {about.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="bento-card text-center group hover:border-teal-300 dark:hover:border-teal-600"
              >
                <div className="stat-value gradient-text">
                  {stat.value}
                  {stat.suffix}
                </div>
                <p className="text-xs text-warm-500 dark:text-warm-400 mt-2 font-medium leading-snug">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Decorative code snippet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="rounded-2xl bg-warm-900 dark:bg-warm-950 p-6 shadow-card-dark overflow-hidden">
            <div className="flex items-center gap-1.5 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-3 text-warm-500 text-xs font-mono">keshika.py</span>
            </div>
            <pre className="font-mono text-sm text-warm-300 overflow-x-auto">
              <code>
                <span className="text-amber-400">class</span>{' '}
                <span className="text-teal-400">DataEngineer</span>
                <span className="text-warm-400">:</span>
                {'\n'}
                {'  '}
                <span className="text-amber-400">def</span>{' '}
                <span className="text-blue-400">__init__</span>
                <span className="text-warm-400">(self):</span>
                {'\n'}
                {'    '}
                <span className="text-warm-300">self.name</span>
                <span className="text-warm-400"> = </span>
                <span className="text-green-400">"Keshika Arunkumar"</span>
                {'\n'}
                {'    '}
                <span className="text-warm-300">self.skills</span>
                <span className="text-warm-400"> = [</span>
                <span className="text-green-400">"Azure"</span>
                <span className="text-warm-400">, </span>
                <span className="text-green-400">"Airflow"</span>
                <span className="text-warm-400">, </span>
                <span className="text-green-400">"dbt"</span>
                <span className="text-warm-400">, </span>
                <span className="text-green-400">"Spark"</span>
                <span className="text-warm-400">]</span>
                {'\n'}
                {'    '}
                <span className="text-warm-300">self.passion</span>
                <span className="text-warm-400"> = </span>
                <span className="text-green-400">"data → insights"</span>
                {'\n\n'}
                {'  '}
                <span className="text-amber-400">def</span>{' '}
                <span className="text-blue-400">build_pipeline</span>
                <span className="text-warm-400">(self, raw_data):</span>
                {'\n'}
                {'    '}
                <span className="text-warm-400">return </span>
                <span className="text-teal-400">BusinessValue</span>
                <span className="text-warm-400">(raw_data)</span>
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
