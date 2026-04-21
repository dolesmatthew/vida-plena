import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Heart } from 'lucide-react';

const GIVING_IMG =
  'https://media.base44.com/images/public/69e79428dcd983c7719be231/06fc4b471_generated_364d1952.png';

export default function GivingSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('TheKindredChurch@yahoo.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="giving" className="py-24 md:py-36 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <div className="portal-shape-alt overflow-hidden">
              <img
                src={GIVING_IMG}
                alt="Warm light through stained glass"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </motion.div>

          {/* Right - Giving widget */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}>
            <p className="font-sans text-sm tracking-[0.25em] uppercase text-terracotta mb-6">
              Offering
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-obsidian leading-[1.1] mb-6">
              The Generosity <span className="italic">Flow</span>
            </h2>
            <p className="font-sans text-lg text-obsidian/60 leading-relaxed mb-12 max-w-md">
              Through your generosity, you help spread the gospel message and support the life of
              our community.
            </p>

            <div className="bg-muted/50 rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-5 h-5 text-terracotta" />
                <p className="font-sans text-sm font-medium text-obsidian/70 uppercase tracking-wide">
                  Give via Zelle
                </p>
              </div>

              <p className="font-sans text-base text-obsidian/60 mb-4">
                Send donations via Zelle to:
              </p>

              <div className="flex items-center gap-3 bg-background rounded-xl px-5 py-4 border border-border">
                <p className="font-sans text-lg font-medium text-obsidian flex-1 truncate">
                  TheKindredChurch@yahoo.com
                </p>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-4 py-2 bg-terracotta text-alabaster text-sm font-sans font-medium rounded-full hover:bg-terracotta/90 transition-all">
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
