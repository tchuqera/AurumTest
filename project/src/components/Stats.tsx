import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Reveal } from './Reveal';

type Stat = { value: number; suffix: string; label: string };

const STATS: Stat[] = [
  { value: 120, suffix: '+', label: 'Projects Crafted' },
  { value: 40, suffix: 'M', label: 'Users Reached' },
  { value: 18, suffix: '', label: 'Awards & Honors' },
  { value: 99, suffix: '%', label: 'Client Retention' },
];

/** Counts from 0 to `value` over ~1.6s when scrolled into view. */
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1600;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-copper-300">
            The Maison
          </span>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-neutral-50 sm:text-5xl">
            Numbers that <span className="text-gradient-gold">linger</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className="glass edge-glow relative rounded-3xl p-7 text-center sm:p-9"
            >
              <div className="font-serif text-5xl font-semibold text-gradient-gold sm:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-sm font-medium uppercase tracking-[0.15em] text-neutral-400">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
