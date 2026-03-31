'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, CheckCircle } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch(`https://formspree.io/f/${personalInfo.formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Boston, MA',
      href: '',
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-24 bg-warm-50 dark:bg-warm-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-teal-600 dark:text-teal-400 font-medium tracking-widest uppercase">
            // 06. contact
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-warm-900 dark:text-warm-50 mt-3">
            Let's Build Something Together
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-teal-500 to-amber-500" />
          <p className="mt-4 text-warm-500 dark:text-warm-400 max-w-xl mx-auto text-lg">
            I'm currently open to{' '}
            <span className="text-teal-600 dark:text-teal-400 font-medium">
              Data Engineer and Data Analyst opportunities
            </span>
            . Let's connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {contacts.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-warm-500 dark:text-warm-400 uppercase tracking-wide mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-warm-800 dark:text-warm-100 font-medium hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-warm-800 dark:text-warm-100 font-medium">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="pt-4 border-t border-warm-200 dark:border-warm-700">
              <p className="text-sm font-semibold text-warm-600 dark:text-warm-300 mb-3">Connect with me</p>
              <div className="flex gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-warm-200 dark:border-warm-700 text-warm-600 dark:text-warm-300 hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 text-sm font-medium transition-all"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-warm-200 dark:border-warm-700 text-warm-600 dark:text-warm-300 hover:border-warm-900 dark:hover:border-warm-200 hover:text-warm-900 dark:hover:text-warm-50 text-sm font-medium transition-all"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </div>
            </div>

            {/* Decorative availability card */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="glass-card rounded-2xl p-5 border border-teal-200 dark:border-teal-800"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500" />
                </span>
                <span className="text-sm font-semibold text-teal-700 dark:text-teal-300">
                  Available for opportunities
                </span>
              </div>
              <p className="text-xs text-warm-500 dark:text-warm-400">
                Open to full-time Data Engineer and Data Analyst roles. Response within 24 hours.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white dark:bg-warm-800 rounded-2xl p-10 text-center border border-warm-100 dark:border-warm-700 shadow-card"
              >
                <CheckCircle size={48} className="text-teal-500 mx-auto mb-4" />
                <h3 className="font-display font-bold text-xl text-warm-900 dark:text-warm-50 mb-2">
                  Message Sent!
                </h3>
                <p className="text-warm-500 dark:text-warm-400">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium transition-colors"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white dark:bg-warm-800 rounded-2xl p-8 border border-warm-100 dark:border-warm-700 shadow-card space-y-5"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-warm-700 dark:text-warm-200 mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className="w-full px-4 py-3 rounded-xl border border-warm-200 dark:border-warm-600 bg-warm-50 dark:bg-warm-700 text-warm-900 dark:text-warm-100 placeholder-warm-400 dark:placeholder-warm-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-warm-700 dark:text-warm-200 mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-warm-200 dark:border-warm-600 bg-warm-50 dark:bg-warm-700 text-warm-900 dark:text-warm-100 placeholder-warm-400 dark:placeholder-warm-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-warm-700 dark:text-warm-200 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="I'd love to discuss a Data Engineer role..."
                    className="w-full px-4 py-3 rounded-xl border border-warm-200 dark:border-warm-600 bg-warm-50 dark:bg-warm-700 text-warm-900 dark:text-warm-100 placeholder-warm-400 dark:placeholder-warm-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                  />
                </div>
                {status === 'error' && (
                  <p className="text-red-500 text-sm">
                    Something went wrong. Please email me directly at{' '}
                    <a href={`mailto:${personalInfo.email}`} className="underline">
                      {personalInfo.email}
                    </a>
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 disabled:opacity-60 text-white font-semibold transition-all duration-200 hover:shadow-glow-teal"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
