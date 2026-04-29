import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accoridion';

const BELIEFS = [
  {
    id: 'what-is-a-covenant-church',
    title: 'What is a Covenant Church?',
    text: [
      'The Evangelical Covenant Church is a rapidly growing multiethnic denomination in the United States and Canada with ministries on five continents of the world.',
      'Founed in 1885 by Swedish immigrants, the ECC values the Bible as the word of God, the gift of God’s grace and ever-deepening spiritial life that comes through faith with Jesus Christ, the importance of extending God’s love and compassion to a hurting world, and the strength that comes from unity within diversity.'
    ]
  },
  {
    id: 'what-do-we-affirm',
    title: 'What Do We Affirm?',
    text: [
      'The Evangelical Covenant Church seeks to form and nurture communities that are deeply committed to Jesus Christ and passionately engaged in Christ’s mission in the world.',
      'The purpose of Covenant affirmations is to make clear the values and principles that have guided the Evangelical Covenant Chrurch since its founding in 1885. For Covenant people, our essesntial beleifs are summed up in what we call Covenant Affirmations:',
      'We affirm that the centrality of the word of God.',
      'We affirm the necessity of the new birth.',
      'We affirm a commitment to the whole mission of the church.',
      'We affirm the church as a fellowship of believers.',
      'We affirm a conscious dependence on the Holy Spirit.',
      'We affirm the reality of freedom in Christ.'
    ]
  }
];

export default function BeliefsSection() {
  return (
    <section id="beliefs" className="py-24 md:py-36 bg-muted overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <p className="font-sans text-sm tracking-[0.25em] uppercase text-terracotta mb-6">
            What We Believe
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-obsidian leading-[1.1]">
            Our <span className="italic">Beliefs</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          <Accordion type="single" collapsible className="space-y-3">
            {BELIEFS.map((belief) => (
              <AccordionItem
                key={belief.id}
                value={belief.id}
                className="bg-background rounded-xl border-none px-6 py-1 shadow-sm">
                <AccordionTrigger className="font-serif text-xl md:text-2xl text-obsidian hover:text-terracotta hover:no-underline transition-colors py-5">
                  {belief.title}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-base text-obsidian/60 leading-relaxed pb-5">
                  {belief.text.map((paragraph, idx) => (
                    <p key={idx} className="mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
