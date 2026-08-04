import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles, Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const COLUMNS = [
  {
    title: 'Atelier',
    links: ['Philosophy', 'Process', 'Team', 'Careers'],
  },
  {
    title: 'Craft',
    links: ['Branding', 'Digital', 'Motion', 'Packaging'],
  },
  {
    title: 'Studio',
    links: ['About', 'Journal', 'Press', 'Contact'],
  },
];

const SOCIALS = [
  { icon: Instagram, label: 'Instagram' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Github, label: 'GitHub' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 3500);
  };

  return (
    <footer className="relative border-t border-white/10 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand + newsletter */}
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-copper-300 to-copper-600 text-carbon-950">
                <Sparkles className="h-4 w-4" strokeWidth={2.2} />
              </span>
              <span className="font-serif text-2xl font-semibold tracking-tight text-neutral-50">
                Aurum
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-400">
              A digital atelier crafting luxury experiences where craftsmanship
              meets light.
            </p>

            <form onSubmit={onSubmit} className="mt-7 max-w-sm">
              <label className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                Newsletter
              </label>
              <div className="relative mt-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="your@email.com"
                  className="w-full rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 pr-14 text-sm text-neutral-100 placeholder-neutral-500 backdrop-blur transition-colors focus:border-copper-400/50 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1.5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-copper-300 to-copper-500 text-carbon-950 transition-transform duration-300 hover:scale-105"
                >
                  <ArrowRightSmall />
                </button>
              </div>

              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="mt-3 flex items-center gap-2 text-sm text-emerald-300"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/15">
                      <Check className="h-3 w-3" />
                    </span>
                    Welcome to the atelier. Check your inbox.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="mt-3 text-sm text-red-300"
                  >
                    Please enter a valid email address.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="group relative text-sm text-neutral-400 transition-colors hover:text-neutral-100"
                    >
                      {link}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-copper-400 transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Socials */}
        <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-8">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Aurum Studio. Crafted with light.
          </p>
          <div className="flex items-center gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-neutral-400 transition-all duration-300 hover:border-copper-400/40 hover:text-copper-200"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function ArrowRightSmall() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
