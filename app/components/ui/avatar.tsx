'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function FloatingAvatar() {
  return (
    <motion.div
      className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8, type: 'spring' }}
    >
      <div className="relative w-96 h-96">
        <Image
          src="/avatar.png"
          alt="Profile"
          fill
          className="object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine" />
      </div>
    </motion.div>
  );
}