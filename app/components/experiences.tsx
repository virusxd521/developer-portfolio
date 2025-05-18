'use client';

import { experiences } from '@/app/data/experience';
import { motion } from 'framer-motion';

// components/experience.tsx
export function Experience() {
  return (
    <section className="py-20" id="experience">
      <h2 className="text-3xl font-bold mb-12">Professional Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold">{exp.role}</h3>
                <p className="text-lg text-blue-600 dark:text-blue-400">
                  {exp.company}
                </p>
              </div>
              <span className="text-gray-500">{exp.duration}</span>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {exp.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="space-y-3 pl-6 list-disc">
              {exp.achievements.map((achievement, i) => (
                <li
                  key={i}
                  className="text-gray-600 dark:text-gray-300 leading-relaxed"
                >
                  {achievement}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}