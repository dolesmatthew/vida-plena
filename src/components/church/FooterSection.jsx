import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function FooterSection() {
  const { t } = useTranslation();

  return (
    <footer className="bg-evergreen text-alabaster py-24 md:py-32 relative grain-overlay overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Closing Benediction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-light text-alabaster leading-[1.2] max-w-4xl mx-auto italic">
            {t('footer.verse')}
          </h2>
          <p className="font-sans text-sm text-alabaster/50 mt-6 tracking-wide">
            {t('footer.verseReference')}
          </p>
        </motion.div>

        <div className="w-full h-px bg-alabaster/10 mb-16" />

        {/* Footer grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-semibold tracking-wide mb-4">
              {t('churchName')}
            </h3>
            <p className="font-sans text-sm text-alabaster/60 leading-relaxed">{t('hero.about')}</p>
          </div>

          {/* Service Info */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-terracotta mb-6">
              {t('sundays.sundays')}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-alabaster/40 mt-0.5" />
                <p className="font-sans text-sm text-alabaster/70">
                  {t('sundays.timeDescription')}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-alabaster/40 mt-0.5" />
                <p className="font-sans text-sm text-alabaster/70">
                  {t('footer.addressLine1')} <br /> {t('footer.addressLine2')}
                </p>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <a
                href="https://maps.app.goo.gl/muheeJTbSW1FRgNK8"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs text-alabaster/50 hover:text-terracotta transition-colors">
                Google Maps
              </a>
              <span className="text-alabaster/20">|</span>
              <a
                href="https://maps.apple/p/LV3M2nWnFXue_4"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs text-alabaster/50 hover:text-terracotta transition-colors">
                Apple Maps
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-terracotta mb-6">
              {t('footer.connect')}
            </h4>
            <div className="space-y-3">
              {[
                { label: t('navbar.about'), href: '#about' },
                { label: t('navbar.beliefs'), href: '#beliefs' },
                { label: t('navbar.leadership'), href: '#leadership' },
                { label: t('navbar.ministries'), href: '#ministries' }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block font-sans text-sm text-alabaster/70 hover:text-terracotta transition-colors">
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:theVidaPlenachurch@gmail.com"
                className="flex items-center gap-2 font-sans text-sm text-alabaster/70 hover:text-terracotta transition-colors mt-4">
                <Mail className="w-4 h-4" />
                {t('footer.email')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
