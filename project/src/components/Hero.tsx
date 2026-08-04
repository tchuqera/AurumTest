import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Play, Star } from 'lucide-react';
import type { MouseEvent } from 'react';

const EASE = [0.22, 1, 0.36, 1] as const;

const headlineLines = ['Crafted in', 'Light & Shadow'];

/** 3D tilt card that follows the cursor, with a floating preview of a "collection". */
function TiltCard() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), { stiffness: 150, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 150, damping: 18 });
  const gx = useTransform(mx, [-0.5, 0.5], ['20%', '80%']);
  const gy = useTransform(my, [-0.5, 0.5], ['20%', '80%']);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div className="perspective-1000">
      <motion.div
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
        className="glass-strong edge-glow relative aspect-[4/5] w-full max-w-md rounded-3xl p-6 sm:p-8"
      >
        {/* glow that follows cursor */}
        <motion.div
          style={{ background: useTransform([gx, gy], ([x, y]) => `radial-gradient(400px circle at ${x} ${y}, rgba(212,175,55,0.18), transparent 60%)`) }}
          className="pointer-events-none absolute inset-0 rounded-3xl"
        />

        {/* floating tag */}
        <motion.div
          style={{ transform: 'translateZ(60px)' }}
          className="absolute -top-4 left-6 rounded-full border border-copper-400/40 bg-carbon-900/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-copper-200 backdrop-blur"
        >
          Collection 01
        </motion.div>

        {/* visual */}
        <div
          style={{ transform: 'translateZ(40px)' }}
          className="relative h-3/5 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-lead-700 to-carbon-800"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.25),transparent_55%)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-serif text-7xl font-semibold text-gradient-gold">A</span>
          </div>
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-neutral-400">
            <span>Aurum Signature</span>
            <span className="flex items-center gap-1 text-copper-200">
              <Star className="h-3 w-3 fill-copper-300 text-copper-300" /> 4.9
            </span>
          </div>
        </div>

        {/* meta */}
        <div style={{ transform: 'translateZ(30px)' }} className="mt-6">
          <h3 className="font-serif text-2xl font-semibold text-neutral-50">Lumière Edition</h3>
          <p className="mt-1 text-sm text-neutral-400">
            A study in restraint — brushed copper, obsidian glass, and light.
          </p>
          <div className="mt-5 flex items-center justify-between">
            <span className="text-sm font-medium text-neutral-300">From €2,400</span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300">
              Limited to 100
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32 lg:pt-52">
      {/* ambient gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-copper-500/10 blur-[120px]" />
        <div className="absolute top-20 right-1/4 h-80 w-80 rounded-full bg-copper-700/10 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left: copy */}
        <div className="text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-neutral-300 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-copper-300" />
            Modern Luxury Studio
          </motion.span>

          {/* Headline with line-by-line reveal */}
          <h1 className="mt-7 font-serif text-5xl font-semibold leading-[1.05] tracking-tightest text-neutral-50 sm:text-6xl lg:text-7xl">
            {headlineLines.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.9, ease: EASE, delay: 0.15 + i * 0.12 }}
                  className={`block ${i === 1 ? 'text-gradient-gold' : ''}`}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg lg:mx-0"
          >
            Aurum is a digital atelier for brands that refuse to be ordinary. We
            sculpt interfaces where craftsmanship meets light — refined,
            immersive, and unmistakably yours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.65 }}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <a
              href="#contact"
              className="shine-on-hover group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-copper-300 to-copper-500 px-7 py-3.5 text-sm font-semibold text-carbon-950 transition-all duration-300 hover:glow-gold"
            >
              Begin Your Atelier
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#showcase"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-neutral-200 backdrop-blur transition-all duration-300 hover:border-copper-400/40 hover:bg-white/[0.06]"
            >
              <Play className="h-4 w-4 fill-copper-300 text-copper-300" />
              View the Craft
            </a>
          </motion.div>
        </div>

        {/* Right: 3D tilt card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.4 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="animate-float-slow">
            <TiltCard />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
