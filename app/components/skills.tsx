// components/skills.tsx
'use client';

import { motion } from 'framer-motion';
import { skills } from '@/app/data/skills';
import { stagger, fadeInUp } from './ui/animations';

export function Skills() {
  return (
    <section className="py-20" id="skills">
      <motion.h2
        className="text-3xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Technical Expertise
      </motion.h2>

      <motion.div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {Object.entries(skills).map(([category, items]) => (
          <motion.div
            key={category}
            variants={fadeInUp}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
          >
            <h3 className="text-xl font-bold mb-4 capitalize">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900/20 dark:text-blue-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}