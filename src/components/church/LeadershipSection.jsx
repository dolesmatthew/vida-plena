import React from 'react';
import { motion } from 'framer-motion';

const PASTOR_IMG =
  'https://media.base44.com/images/public/69e79428dcd983c7719be231/f77f5ce9a_generated_a7ab8e5b.png';

const TEAM = [
  {
    name: 'Esther Kim',
    role: 'Communication Lead',
    bio: "Esther is currently pursuing a Master's degree in nursing. She serves as communication lead and is passionate about cultivating an inclusive community."
  },
  {
    name: 'Aaron Rhee',
    role: 'Ministry Associate',
    bio: 'Aaron graduated from Wheaton College with a degree in Psychology and aspires to serve the Lord in ministry. "There is no greater joy than knowing Jesus!"'
  }
];

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-24 md:py-36 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16">
          <p className="font-sans text-sm tracking-[0.25em] uppercase text-terracotta mb-6">
            Leadership
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-obsidian leading-[1.1]">
            Meet our <span className="italic">team</span>
          </h2>
        </motion.div>

        {/* Pastor feature */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-5 gap-10 md:gap-16 items-center mb-20">
          <div className="md:col-span-2">
            <div className="portal-shape overflow-hidden">
              <img
                src={PASTOR_IMG}
                alt="Pastor Jin Lee"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-terracotta mb-3">
              Pastor
            </p>
            <h3 className="font-serif text-3xl md:text-4xl text-obsidian mb-2">Jin Lee</h3>
            <p className="font-sans text-sm text-obsidian/40 mb-6">
              M.A. Counseling, M. Div, D. Min
            </p>
            <p className="font-sans text-lg text-obsidian/60 leading-relaxed max-w-lg">
              Pastor Jin Lee received his training in pastoral studies and professional counseling
              and has served in a diverse ministry context, including immigrant and multi-ethnic
              churches. He is passionate about creating a spiritual home for the lost and helping
              future generations know the joy of knowing Jesus.
            </p>
          </div>
        </motion.div>

        {/* Team grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-muted/50 rounded-xl p-8">
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-terracotta mb-2">
                {member.role}
              </p>
              <h3 className="font-serif text-2xl text-obsidian mb-4">{member.name}</h3>
              <p className="font-sans text-base text-obsidian/60 leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>

        {/* Volunteer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center">
          <p className="font-serif text-2xl md:text-3xl text-obsidian mb-8 italic">
            We invite you to use your gifts!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:thekindredchurch24@gmail.com?subject=Volunteering%20at%20The%20Kindred%20Church"
              className="px-8 py-3 bg-terracotta text-alabaster font-sans text-sm font-medium rounded-full hover:bg-terracotta/90 transition-colors">
              Volunteer
            </a>
            <a
              href="mailto:thekindredchurch24@gmail.com?subject=Internships%20at%20The%20Kindred%20Church"
              className="px-8 py-3 border border-obsidian/20 text-obsidian font-sans text-sm font-medium rounded-full hover:bg-obsidian hover:text-alabaster transition-colors">
              Internships
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
