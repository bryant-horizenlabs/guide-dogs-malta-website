import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface MorphingPawProps {
  scrollYStart: number;
  scrollYEnd: number;
  description: string;
}

export function MorphingPaw({ scrollYStart, scrollYEnd, description }: MorphingPawProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const opacity = useTransform(
    scrollY,
    [scrollYStart - 300, scrollYStart, scrollYEnd, scrollYEnd + 300],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollY,
    [scrollYStart, scrollYEnd],
    [0.95, 1.05]
  );

  const rotate = useTransform(
    scrollY,
    [scrollYStart, scrollYEnd],
    [-5, 5]
  );

  return (
    <motion.div
      ref={ref}
      className="fixed right-[5%] top-1/3 w-[300px] h-[300px]"
      style={{ opacity, scale, rotate }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Main pad */}
        <motion.path
          d="M50 85C65 85 75 75 75 60C75 45 65 35 50 35C35 35 25 45 25 60C25 75 35 85 50 85Z"
          className="fill-primary/20"
        />

        {/* Toe prints */}
        <motion.circle cx="40" cy="30" r="10" className="fill-primary/30" />
        <motion.circle cx="60" cy="30" r="10" className="fill-primary/30" />
        <motion.circle cx="35" cy="45" r="8" className="fill-primary/30" />
        <motion.circle cx="65" cy="45" r="8" className="fill-primary/30" />

        {/* Soft edges */}
        <motion.path
          d="M40 30C42 28 48 28 50 30"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-primary/40"
        />
      </svg>
      <div className="text-right mt-4 text-2xl font-medium tracking-tight text-primary/80">
        {description}
      </div>
    </motion.div>
  );
}