'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { ReactNode } from 'react';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: ReactNode;
}

export function ButtonPrimary({ children, ...props }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium flex items-center gap-2 hover:shadow-lg transition-all duration-300 group"
      {...props}
    >
      {children}
      <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
    </motion.button>
  );
}

export function ButtonSecondary({ children, ...props }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 border-2 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 rounded-xl font-medium flex items-center gap-2 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-all duration-300 group"
      {...props}
    >
      {children}
      <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
    </motion.button>
  );
}