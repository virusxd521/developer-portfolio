import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
  }
};

export const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

export const cardHover: Variants = {
  rest: {
    scale: 1,
    y: 0,
    transition: { duration: 0.4, type: "tween" }
  },
  hover: {
    scale: 1.03,
    y: -10,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut"
    }
  }
};

export const textVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

export const gradientVariant: Variants = {
  hidden: {
    backgroundPosition: '0% 50%'
  },
  visible: {
    backgroundPosition: '100% 50%',
    transition: {
      duration: 4,
      ease: "linear",
      repeat: Infinity,
      repeatType: "mirror"
    }
  }
};

export const rotate3D: Variants = {
  hidden: {
    opacity: 0,
    rotateX: 45,
    translateZ: -40
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    translateZ: 0,
    transition: {
      duration: 0.6,
      ease: "backOut"
    }
  }
};

export const revealFromLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
  }
};

// Special animation for skills cards
export const skillCardAnimation: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotateY: -15
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  },
  hover: {
    rotateY: 5,
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  }
};