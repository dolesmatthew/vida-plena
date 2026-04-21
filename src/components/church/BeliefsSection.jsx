import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accoridion';

const BELIEFS = [
  {
    id: 'god',
    title: 'God',
    text: 'We believe in one God in three persons: Father, Son, and Holy Spirit. The trinity exemplifies the unity and co-equality of the three persons of the Godhead.'
  },
  {
    id: 'jesus',
    title: 'Jesus Christ',
    text: "We believe that Jesus Christ is fully God and fully human. We believe that Jesus' death and resurrection provide the means for redemption and reconciliation with God. He continues to mediate for us, prays for us."
  },
  {
    id: 'spirit',
    title: 'Holy Spirit',
    text: "We believe in the active work of the Holy Spirit in the lives of believers, including guidance, empowerment, and the impartation of spiritual gifts. God gives spiritual gifts according to His grace, and it is intended to build up God's people."
  },
  {
    id: 'salvation',
    title: 'Salvation',
    text: "We believe that salvation is a gift from God, received through faith in Jesus Christ, not by human works or merit. Salvation is given to those who've made a conscious decision to accept Jesus as Lord and Savior."
  },
  {
    id: 'scripture',
    title: 'Scripture',
    text: 'We believe that the Bible is the ultimate authority in all matters of faith and practice; it is divinely inspired, infallible, and inerrant in its original manuscripts.'
  },
  {
    id: 'commission',
    title: 'The Great Commission',
    text: "We are committed to sharing the Good News of the Gospel to everyone. We believe that this is God's command for His followers to go and make disciples of all nations."
  },
  {
    id: 'second-coming',
    title: 'Second Coming',
    text: "We believe in the future return of Jesus Christ to establish His kingdom, judge the world, and bring about the final consummation of God's plan."
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
                  {belief.text}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
