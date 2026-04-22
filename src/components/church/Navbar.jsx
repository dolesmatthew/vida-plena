import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import LanguageSelector from '../ui/languageSelector';

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  const NAV_LINKS = [
    { label: t('navbar.home'), href: '#hero' },
    { label: t('navbar.sundays'), href: '#sundays' },
    { label: t('navbar.ministries'), href: '#ministries' },
    { label: t('navbar.about'), href: '#about' },
    { label: t('navbar.beliefs'), href: '#beliefs' },
    { label: t('navbar.leadership'), href: '#leadership' },
    { label: t('navbar.giving'), href: '#giving' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setVisible(y < 200 || y < lastY);
      setScrolled(y > 50);
      setLastY(y);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastY]);

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-alabaster/80 backdrop-blur-xl shadow-sm`}>
        <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          <a
            href="#hero"
            className="font-serif text-2xl md:text-3xl font-semibold tracking-wide text-obsidian">
            Vida Plena
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-sans font-medium tracking-wide text-obsidian/70 hover:text-terracotta transition-colors duration-200">
                {link.label}
              </a>
            ))}
            <LanguageSelector />
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-obsidian"
            aria-label="Toggle menu">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-alabaster/98 backdrop-blur-xl pt-20">
            <div className="flex flex-col items-center gap-6 py-12">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-3xl text-obsidian hover:text-terracotta transition-colors">
                  {link.label}
                </a>
              ))}
              <LanguageSelector />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
