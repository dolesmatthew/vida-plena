import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MINISTRIES = [
  {
    title: 'Youth Group',
    time: 'Fridays 8–9:30pm',
    description: 'A place for students to grow in their love for Jesus Christ.',
    image:
      'https://media.base44.com/images/public/69e79428dcd983c7719be231/80191af7c_generated_e59cc011.png'
  },
  {
    title: 'College',
    time: 'Summers / Fridays 8–10pm',
    description: "Growing in faithfulness amidst today's challenges.",
    image:
      'https://media.base44.com/images/public/69e79428dcd983c7719be231/ef40cfef9_generated_664709c2.png'
  },
  {
    title: "Men & Women's Groups",
    time: 'Bimonthly',
    description: 'Intergenerational fellowship over food and life together.',
    image:
      'https://media.base44.com/images/public/69e79428dcd983c7719be231/e6c7f298d_generated_7e84ca19.png'
  },
  {
    title: 'Young Adults',
    time: 'Various Times',
    description: 'Grad students & young professionals meeting for fun and fellowship.',
    image:
      'https://media.base44.com/images/public/69e79428dcd983c7719be231/2fe8618cb_generated_46dbac9b.png'
  },
  {
    title: 'Counseling',
    time: 'By appointment',
    description: 'Our lay counselors are here to listen, guide, and pray with you.',
    image:
      'https://media.base44.com/images/public/69e79428dcd983c7719be231/06fc4b471_generated_364d1952.png'
  }
];

export default function MinistriesSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="ministries" className="py-24 md:py-36 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <p className="font-sans text-sm tracking-[0.25em] uppercase text-terracotta mb-4">
              Ministries
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-obsidian leading-[1.1]">
              The Common <span className="italic">Table</span>
            </h2>
          </motion.div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-obsidian/20 flex items-center justify-center hover:bg-obsidian hover:text-alabaster transition-colors"
              aria-label="Scroll left">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-obsidian/20 flex items-center justify-center hover:bg-obsidian hover:text-alabaster transition-colors"
              aria-label="Scroll right">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal scroll gallery */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-6 md:px-12 pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {MINISTRIES.map((ministry, i) => (
          <motion.div
            key={ministry.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex-shrink-0 w-72 md:w-80 snap-start group">
            <div className="relative portal-shape overflow-hidden cursor-pointer">
              <img
                src={ministry.image}
                alt={ministry.title}
                className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/20 to-transparent" />
              <div className="absolute inset-0 bg-terracotta/0 group-hover:bg-terracotta/20 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-alabaster/60 mb-2">
                  {ministry.time}
                </p>
                <h3 className="font-serif text-2xl text-alabaster mb-2">{ministry.title}</h3>
                <p className="font-sans text-sm text-alabaster/70 leading-relaxed">
                  {ministry.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-10">
        <a
          href="https://discord.gg/DtMWJ6MStZ"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-obsidian text-alabaster font-sans text-sm font-medium rounded-full hover:bg-obsidian/80 transition-colors">
          Join our Discord to get involved
        </a>
      </div>
    </section>
  );
}
