import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';

type Item = {
  img: string;
  alt: string;
  title: string;
  category: string;
  span: string;
};

const ITEMS: Item[] = [
  {
    img: 'https://images.pexels.com/photos/36779953/pexels-photo-36779953.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Luxury perfume bottle on textured fabric',
    title: 'Maison Noir',
    category: 'Fragrance',
    span: 'sm:col-span-2 sm:row-span-2',
  },
  {
    img: 'https://images.pexels.com/photos/13186049/pexels-photo-13186049.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Black cosmetic bottles with ribbon on dark backdrop',
    title: 'Velvet Edition',
    category: 'Cosmetics',
    span: '',
  },
  {
    img: 'https://images.pexels.com/photos/26180163/pexels-photo-26180163.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Minimalist packaging box on dark background',
    title: 'Monolith',
    category: 'Packaging',
    span: '',
  },
  {
    img: 'https://images.pexels.com/photos/7814940/pexels-photo-7814940.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'White pump bottle on marble with dramatic lighting',
    title: 'Calacatta',
    category: 'Skincare',
    span: '',
  },
  {
    img: 'https://images.pexels.com/photos/4271688/pexels-photo-4271688.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Sleek black boxes arranged on white surface',
    title: 'Obsidian Set',
    category: 'Objects',
    span: '',
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-copper-300">
              The Craft
            </span>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-neutral-50 sm:text-5xl">
              A gallery of <span className="text-gradient-gold">refinement</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-neutral-400">
            Selected works from our atelier — each piece a conversation between
            material, light, and intention.
          </p>
        </Reveal>

        <div className="mt-14 grid auto-rows-[200px] gap-4 sm:auto-rows-[240px] sm:grid-cols-3">
          {ITEMS.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 ${item.span}`}
              data-cursor="hover"
            >
              <img
                src={item.img}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
              />
              {/* gradient veil */}
              <div className="absolute inset-0 bg-gradient-to-t from-carbon-950 via-carbon-950/30 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

              {/* overlay info */}
              <div className="absolute inset-x-0 bottom-0 translate-y-3 p-6 opacity-90 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-copper-200">
                  {item.category}
                </span>
                <div className="mt-1 flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-semibold text-neutral-50">
                    {item.title}
                  </h3>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-neutral-200 backdrop-blur transition-all duration-300 group-hover:border-copper-400/50 group-hover:bg-copper-400/10 group-hover:text-copper-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
