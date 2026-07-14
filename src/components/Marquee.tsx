"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
}

export default function Marquee({ items }: MarqueeProps) {
  return (
    <div className="w-full overflow-hidden flex whitespace-nowrap py-12 md:py-24 border-y border-secondary/30">
      <motion.div
        className="flex gap-16 md:gap-32 pr-16 md:pr-32"
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        {items.map((item, index) => (
          <span key={index} className="text-4xl md:text-7xl font-light tracking-tighter uppercase opacity-80">
            {item}
          </span>
        ))}
      </motion.div>
      <motion.div
        className="flex gap-16 md:gap-32 pr-16 md:pr-32"
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        {items.map((item, index) => (
          <span key={index} className="text-4xl md:text-7xl font-light tracking-tighter uppercase opacity-80">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
