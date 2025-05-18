'use client';

import { motion } from 'framer-motion';
import { education } from '@/app/data/education';

export function Education() {
  return (
    <section className="py-20" id="education">
      <h2 className="text-3xl font-bold mb-12">Education</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
          >
            <h3 className="text-xl font-bold mb-2">{edu.institution}</h3>
            <p className="text-blue-600 dark:text-blue-400 mb-1">
              {edu.program}
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              {edu.location}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}