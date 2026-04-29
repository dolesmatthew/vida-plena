import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Heart, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const GIVING_IMG =
  'https://media.base44.com/images/public/69e79428dcd983c7719be231/06fc4b471_generated_364d1952.png';

export default function GivingSection() {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation();

  const handleCopy = () => {
    navigator.clipboard.writeText('TheVidaPlenaChurch@yahoo.com');
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
              {t('giving.title')}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-obsidian leading-[1.1] mb-6">
              {t('giving.line1')} <span className="italic">{t('giving.line1Italics')}</span>
            </h2>
            <p className="font-sans text-lg text-obsidian/60 leading-relaxed mb-12 max-w-md">
              {t('giving.description')}
            </p>

            <div className="bg-muted rounded-2xl mb-6 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-5 h-5 text-terracotta" />
                <p className="font-sans text-sm font-medium text-obsidian/70 uppercase tracking-wide">
                  {t('giving.zelleTitle')}
                </p>
              </div>

              <p className="font-sans text-base text-obsidian/60 mb-4">
                {t('giving.zelleDescription')}
              </p>

              <div className="flex items-center gap-3 bg-background rounded-xl px-5 py-4 border border-gray-300">
                <p className="font-sans text-lg font-medium text-obsidian flex-1 truncate">
                  {t('giving.zelleEmail')}
                </p>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-4 py-2 bg-terracotta text-alabaster text-sm font-sans font-medium rounded-full hover:bg-terracotta/90 transition-all">
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      {t('giving.zelleCardButtonClicked')}
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      {t('giving.zelleCardButton')}
                    </>
                  )}
                </button>
              </div>
            </div>
            <div className="bg-muted rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="w-5 h-5 text-terracotta" />
                <p className="font-sans text-sm font-medium text-obsidian/70 uppercase tracking-wide">
                  {t('giving.mailTitle')}
                </p>
              </div>

              <p className="font-sans text-base text-obsidian/60 mb-4">
                {t('giving.mailDescription')}
              </p>

              <div className="flex items-center gap-3 bg-background rounded-xl px-5 py-4 border border-gray-300">
                <p className="font-sans text-lg font-medium text-obsidian flex-1 truncate">
                  {t('giving.mailAddressLine')} <br /> {t('giving.mailAttentionLine')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
