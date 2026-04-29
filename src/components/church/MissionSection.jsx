import React from 'react';
import { motion } from 'framer-motion';

const TEXTURE_IMG =
  'https://media.base44.com/images/public/69e79428dcd983c7719be231/2af60a05a_generated_93489b7b.png';

export default function MissionSection() {
  return (
    <section className="relative py-24 md:py-36 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}>
            <p className="font-sans text-sm tracking-[0.25em] uppercase text-terracotta mb-6">
              We Are
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-obsidian leading-[1.1]">
              A church that transforms the
              <br />
              <span className="italic">community.</span>
            </h2>
            <div className="w-16 h-px bg-terracotta mt-8 mb-8" />
            <p className="font-sans text-lg text-obsidian/60 leading-relaxed max-w-lg">
              To impact out community through service, justice, and the love of Christ, being a
              light in the midst of the city.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative">
            <div className="portal-shape overflow-hidden aspect-square">
              <img
                src={TEXTURE_IMG}
                alt="Warm light on wooden church textures"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-2 border-terracotta/20 portal-shape-alt" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
