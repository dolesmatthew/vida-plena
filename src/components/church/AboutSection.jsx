import React from 'react';
import { motion } from 'framer-motion';

const COMMUNITY_IMG =
  'https://media.base44.com/images/public/69e79428dcd983c7719be231/78a710736_generated_2dc1ccc5.png';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-36 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16">
          <p className="font-sans text-sm tracking-[0.25em] uppercase text-terracotta mb-6">
            About
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-obsidian leading-[1.1] max-w-3xl mx-auto">
            People from various heritages connected by <span className="italic">Jesus</span> and His
            mission.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={COMMUNITY_IMG}
              alt="Church community working together in a garden"
              className="w-full aspect-[21/9] object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/40 to-transparent rounded-2xl" />
          <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-xl">
            <p className="font-sans text-base md:text-lg text-alabaster/90 leading-relaxed">
              Our vision is to become a planting church. We are particularly excited about planting
              a new church that gives a future for young people growing up in an immigrant church.
              We are starting here in Naperville, but we pray that God will lead us beyond this
              land, beyond this people group.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
