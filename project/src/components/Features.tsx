import { motion } from 'framer-motion';
import { Gem, Layers, ShieldCheck, Sparkles, Wand2, Zap } from 'lucide-react';
import { Reveal } from './Reveal';

type Feature = {
  icon: typeof Gem;
  title: string;
  desc: string;
  span: string;
};

const FEATURES: Feature[] = [
  {
    icon: Gem,
    title: 'Bespoke Craftsmanship',
    desc: 'Every interface is hand-sculpted to your brand — no templates, no compromises. Tailored down to the last pixel.',
    span: 'lg:col-span-2',
  },
  {
    icon: Zap,
    title: 'Fluid by Design',
    desc: 'Animations tuned to 120fps with GPU-accelerated transitions that feel effortless.',
    span: 'lg:col-span-1',
  },
  {
    icon: Layers,
    title: 'Layered Depth',
    desc: 'Glassmorphism, parallax, and dimensionality woven into a cohesive visual language.',
    span: 'lg:col-span-1',
  },
  {
    icon: ShieldCheck,
    title: 'Built to Endure',
    desc: 'Accessible, performant, and future-proof. Crafted with rigorous engineering standards so your presence lasts.',
    span: 'lg:col-span-2',
  },
  {
    icon: Wand2,
    title: 'Signature Motion',
    desc: 'Micro-interactions and scroll choreography that guide the eye and reward attention.',
    span: 'lg:col-span-1',
  },
  {
    icon: Sparkles,
    title: 'Light & Shadow',
    desc: 'A restrained palette of carbon, lead, and copper — luminous accents on a dark canvas.',
    span: 'lg:col-span-2',
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-copper-300">
            The Atelier
          </span>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-neutral-50 sm:text-5xl">
            Where vision becomes <span className="text-gradient-gold">form</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-neutral-400 sm:text-lg">
            Six disciplines, one obsession: crafting digital experiences that
            feel as rare as the brands they represent.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
              className={`edge-glow glass group relative overflow-hidden rounded-3xl p-7 ${f.span}`}
            >
              {/* hover sheen */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-copper-400/10 via-transparent to-transparent" />
              </div>

              <div className="relative">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-copper-200 transition-all duration-500 group-hover:border-copper-400/40 group-hover:text-copper-100 group-hover:shadow-[0_0_24px_-4px_rgba(212,175,55,0.4)]">
                  <f.icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-neutral-50">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
