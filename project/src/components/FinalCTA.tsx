import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

export default function FinalCTA() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="glass-strong edge-glow relative overflow-hidden rounded-[2.5rem] px-6 py-20 text-center sm:px-12 sm:py-28">
            {/* dynamic background */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-copper-500/20 blur-[100px]" />
              <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-copper-700/15 blur-[100px]" />
              <div className="absolute right-1/4 top-1/3 h-56 w-56 rounded-full bg-copper-400/10 blur-[100px]" />
              {/* subtle grid */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                  backgroundSize: '48px 48px',
                }}
              />
            </div>

            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-neutral-300 backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-copper-300" />
              By Invitation
            </motion.span>

            <h2 className="mx-auto mt-7 max-w-3xl font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-neutral-50 sm:text-6xl">
              Let us craft something
              <span className="text-gradient-gold"> unforgettable</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
              We take on a limited number of partners each season. Tell us
              about your vision — we'll shape the light together.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <a
                href="mailto:atelier@aurum.studio"
                className="shine-on-hover group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-copper-300 to-copper-500 px-8 py-4 text-sm font-semibold text-carbon-950 transition-all duration-300 hover:glow-gold"
              >
                Request an Invitation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-neutral-200 backdrop-blur transition-all duration-300 hover:border-copper-400/40 hover:bg-white/[0.06]"
              >
                Explore the Atelier
              </a>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
