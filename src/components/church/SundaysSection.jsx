import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Shirt, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const MEAL_IMG = './images/bell-tower.jpg';

export default function SundaysSection() {
  const { t } = useTranslation();

  const INFO_ITEMS = [
    { icon: Clock, label: t('sundays.time'), value: t('sundays.timeDescription') },
    { icon: MapPin, label: t('sundays.location'), value: t('sundays.locationDescription') },
    { icon: Shirt, label: t('sundays.attire'), value: t('sundays.attireDescription') },
    { icon: Users, label: t('sundays.childcare'), value: t('sundays.childcareDescription') }
  ];
  return (
    <section
      id="sundays"
      className="relative py-24 md:py-36 bg-evergreen overflow-hidden grain-overlay">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex items-center justify-center w-full">
            <div className="portal-shape-alt overflow-hidden">
              <img
                src={MEAL_IMG}
                alt="Community sharing a meal together"
                className="h-100 lg:h-full w-100 lg:w-full aspect-4/5 object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3">
            <p className="font-sans text-sm tracking-[0.25em] uppercase text-terracotta mb-6">
              {t('sundays.sundays')}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-alabaster leading-[1.1] mb-8">
              {t('sundays.line1')}
              <span className="italic">{t('sundays.line1Italics')}</span>
              <br />
              {t('sundays.line2')}
              <span className="italic">{t('sundays.line2Italics')}</span>
            </h2>
            <p className="font-sans text-lg text-alabaster/70 leading-relaxed mb-12 max-w-xl">
              {t('sundays.description')}
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {INFO_ITEMS.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-alabaster/10 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-terracotta" />
                  </div>
                  <div>
                    <p className="font-sans text-xs tracking-[0.2em] uppercase text-alabaster/50 mb-1">
                      {item.label}
                    </p>
                    <p className="font-sans text-base text-alabaster font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="https://maps.app.goo.gl/muheeJTbSW1FRgNK8"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-alabaster/30 text-alabaster font-sans text-sm font-medium rounded-full hover:bg-alabaster/10 transition-colors">
                Google Maps
              </a>
              <a
                href="https://maps.apple/p/LV3M2nWnFXue_4"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-alabaster/30 text-alabaster font-sans text-sm font-medium rounded-full hover:bg-alabaster/10 transition-colors">
                Apple Maps
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
