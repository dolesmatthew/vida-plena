import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const HERO_IMG = './images/np-campus.png';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end overflow-hidden grain-overlay">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Congregation worshiping together in golden hour light"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-obsidian/80 via-obsidian/30 to-obsidian/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-32 md:pb-40 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-alabaster leading-[1.05]">
            {t('hero.fullChurchName')}
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-10">
            <a
              href="#sundays"
              className="inline-flex items-center px-8 py-4 bg-terracotta text-alabaster font-sans font-medium rounded-full hover:bg-terracotta/90 transition-colors text-base">
              {t('hero.visit')}
            </a>
            <a
              href="#beliefs"
              className="inline-flex items-center gap-2 px-6 py-4 text-alabaster font-sans font-medium hover:text-terracotta transition-colors text-base">
              {t('aboutUs')} <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Sunday Pulse Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute bottom-0 left-0 right-0 z-10">
        <div className="bg-obsidian/90 backdrop-blur-md border-t border-alabaster/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
              <p className="font-sans text-sm text-alabaster/80">
                <span className="font-medium text-alabaster">{t('hero.nextService')}</span>{' '}
                {t('hero.nextServiceTime')}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
