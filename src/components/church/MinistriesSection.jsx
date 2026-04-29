import React from 'react';
import { motion } from 'framer-motion';

const MINISTRIES = [
  {
    title: 'Chidlren’s Ministry',
    time: 'Sundays during service',
    description:
      'Children are welcomed into a fun atomosphere where they can grow and learn to fall in love with Jesus.',
    image: './images/classroom.png'
  },
  {
    title: 'Counseling',
    time: 'By appointment',
    description: 'Our lay counselors are here to listen, guide, and pray with you.',
    image: './images/counseling.jpg'
  }
];

export default function MinistriesSection() {
  return (
    <section id="ministries" className="py-24 md:py-36 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <p className="font-sans text-sm tracking-[0.25em] uppercase text-terracotta mb-4">
              Ministries
            </p>
          </motion.div>
        </div>
      </div>

      {/* Horizontal scroll gallery */}
      <div
        className="grid md:flex items-center justify-center gap-6 overflow-x-auto px-6 md:px-12 pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {MINISTRIES.map((ministry, i) => (
          <motion.div
            key={ministry.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex-shrink-0 w-72 md:w-100 snap-start group">
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
    </section>
  );
}
