import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock } from 'lucide-react';

export default function FooterSection() {
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
            "Go therefore and make disciples of all nations, baptizing them in the name of the
            Father and of the Son and of the Holy Spirit."
          </h2>
          <p className="font-sans text-sm text-alabaster/50 mt-6 tracking-wide">Matthew 28:19</p>
        </motion.div>

        <div className="w-full h-px bg-alabaster/10 mb-16" />

        {/* Footer grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-semibold tracking-wide mb-4">KINDRED</h3>
            <p className="font-sans text-sm text-alabaster/60 leading-relaxed">
              A missional church in Naperville, IL — where every heritage finds home through the
              love of Christ.
            </p>
          </div>

          {/* Service Info */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-terracotta mb-6">
              Sundays
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-alabaster/40 mt-0.5" />
                <p className="font-sans text-sm text-alabaster/70">11am</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-alabaster/40 mt-0.5" />
                <p className="font-sans text-sm text-alabaster/70">
                  23W550 Hobson Rd. #1
                  <br />
                  Naperville, IL 60540
                </p>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <a
                href="https://maps.app.goo.gl/eF8fkyL7cgupxaFk7"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs text-alabaster/50 hover:text-terracotta transition-colors">
                Google Maps
              </a>
              <span className="text-alabaster/20">|</span>
              <a
                href="https://maps.apple.com/place?place-id=ICC1AECC2083FFB15&_provider=9902"
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
              Connect
            </h4>
            <div className="space-y-3">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Beliefs', href: '#beliefs' },
                { label: 'Leadership', href: '#leadership' },
                { label: 'Ministries', href: '#ministries' }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block font-sans text-sm text-alabaster/70 hover:text-terracotta transition-colors">
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:thekindredchurch24@gmail.com"
                className="flex items-center gap-2 font-sans text-sm text-alabaster/70 hover:text-terracotta transition-colors mt-4">
                <Mail className="w-4 h-4" />
                Email Us
              </a>
              <a
                href="https://www.instagram.com/thekindredchurch/"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-sans text-sm text-alabaster/70 hover:text-terracotta transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-alabaster/10 mt-16 mb-8" />

        <p className="font-sans text-xs text-alabaster/30 text-center">
          &copy; {new Date().getFullYear()} The Kindred Church. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
