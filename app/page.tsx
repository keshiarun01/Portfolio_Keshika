'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function Loader() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-warm-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display font-extrabold text-4xl text-teal-400 mb-8"
      >
        KA<span className="text-amber-400">.</span>
      </motion.div>
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="loader-dot" style={{ animationDelay: `${i * 0.2}s` }} />
        ))}
      </div>
      <p className="mt-6 font-mono text-xs text-warm-500 tracking-widest">
        initializing pipeline...
      </p>
    </motion.div>
  );
}

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}
