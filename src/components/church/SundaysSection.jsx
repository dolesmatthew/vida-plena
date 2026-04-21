import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Shirt, Users } from 'lucide-react';

const MEAL_IMG = 'https://media.base44.com/images/public/69e79428dcd983c7719be231/456c88871_generated_2421f7b9.png';

const INFO_ITEMS = [
  { icon: Clock, label: 'Time', value: '11am' },
  { icon: MapPin, label: 'Location', value: '23W550 Hobson Rd. #1, Naperville, IL 60540' },
  { icon: Shirt, label: 'Attire', value: 'Come as you are' },
  { icon: Users, label: 'Childcare', value: 'Available during service' },
];

export default function SundaysSection() {
  return (
    <section id="sundays" className="relative py-24 md:py-36 bg-evergreen overflow-hidden grain-overlay">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="portal-shape-alt overflow-hidden">
              <img
                src={MEAL_IMG}
                alt="Community sharing a meal together"
                className="w-full aspect-4/5 object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <p className="font-sans text-sm tracking-[0.25em] uppercase text-terracotta mb-6">
              Sundays
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-alabaster leading-[1.1] mb-8">
              Connect to <span className="italic">God.</span>
              <br />
              Connect to <span className="italic">one another.</span>
            </h2>
            <p className="font-sans text-lg text-alabaster/70 leading-relaxed mb-12 max-w-xl">
              Join us as we worship together as a family. After each service we gather 
              for lunch in a time of fellowship; we'd love for you to join us.
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
                    <p className="font-sans text-base text-alabaster font-medium">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="https://maps.app.goo.gl/eF8fkyL7cgupxaFk7"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-alabaster/30 text-alabaster font-sans text-sm font-medium rounded-full hover:bg-alabaster/10 transition-colors"
              >
                Google Maps
              </a>
              <a
                href="https://maps.apple.com/place?place-id=ICC1AECC2083FFB15&_provider=9902"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-alabaster/30 text-alabaster font-sans text-sm font-medium rounded-full hover:bg-alabaster/10 transition-colors"
              >
                Apple Maps
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}