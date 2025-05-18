// components/hero.tsx
'use client';

import { motion } from 'framer-motion';
import { FiMail, FiSmartphone, FiDownload } from 'react-icons/fi';

export function HeroSection() {
  return (
    <section className="min-h-[95vh] flex items-center py-16 relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 to-transparent"
      />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          {/* Name with gradient animation */}
          <motion.h1
            initial={{ backgroundPosition: '0% 50%' }}
            animate={{ backgroundPosition: '100% 50%' }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'linear'
            }}
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:300%_100%] mb-4"
          >
            Daniel Benisti
          </motion.h1>

          {/* Title with staggered animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-6">
              Full Stack Developer | React & Node.js Specialist
            </h2>
          </motion.div>

          {/* Contact info with fade-in */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col gap-3 mb-8"
          >
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
              <FiMail className="w-5 h-5" />
              <span>daniel_benisti@protonmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
              <FiSmartphone className="w-5 h-5" />
              <span>+420 775 604 918</span>
            </div>
          </motion.div>

          {/* Summary text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl"
          >
            Passionate full-stack developer with 3+ years of experience building scalable
            web applications using modern JavaScript technologies. Specializing in React,
            TypeScript, and Node.js ecosystems.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="/Daniel_Benisti-CV-application.pdf"
              download
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-50/50 dark:hover:bg-gray-800/50 transition-colors"
            >
              <FiDownload className="w-5 h-5" />
              Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* Floating avatar placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, type: 'spring' }}
          className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96"
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse" />
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <div className="w-64 h-64 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-400">DB</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}