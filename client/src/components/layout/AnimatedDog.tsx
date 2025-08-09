import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface AnimatedDogProps {
  scrollYStart: number;
  scrollYEnd: number;
  dogColor?: string;
  ownerDescription: string;
}

export function AnimatedDog({ scrollYStart, scrollYEnd, dogColor = "#ED8936", ownerDescription }: AnimatedDogProps) {
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
    [0.8, 1.2]
  );

  const rotation = useTransform(
    scrollY,
    [scrollYStart, scrollYEnd],
    [0, 360]
  );

  return (
    <motion.div
      ref={ref}
      className="fixed right-[10%] top-1/3 w-[300px] h-[300px]"
      style={{ opacity }}
    >
      <motion.svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ scale, rotate: rotation }}
      >
        {/* Guide dog body */}
        <motion.path
          d="M200 280C260 280 300 240 300 180C300 120 260 80 200 80C140 80 100 120 100 180C100 240 140 280 200 280Z"
          fill={dogColor}
        />
        {/* Head */}
        <motion.path
          d="M180 160C200 140 240 140 260 160C280 180 280 220 260 240C240 260 200 260 180 240C160 220 160 180 180 160Z"
          fill={dogColor}
          fillOpacity="0.8"
        />
        {/* Harness */}
        <motion.path
          d="M160 180H240M200 160V240"
          stroke="#4A5568"
          strokeWidth="12"
          strokeLinecap="round"
        />
        {/* Eyes */}
        <motion.circle cx="190" cy="180" r="6" fill="#1A202C" />
        <motion.circle cx="230" cy="180" r="6" fill="#1A202C" />
        {/* Smile */}
        <motion.path
          d="M200 200C210 210 230 210 240 200"
          stroke="#1A202C"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Tail */}
        <motion.path
          d="M120 200C140 220 140 240 120 260"
          stroke={dogColor}
          strokeWidth="20"
          strokeLinecap="round"
        />
        {/* Ears */}
        <motion.path
          d="M170 140C180 120 190 110 210 100"
          stroke={dogColor}
          strokeWidth="20"
          strokeLinecap="round"
        />
        <motion.path
          d="M250 140C240 120 230 110 210 100"
          stroke={dogColor}
          strokeWidth="20"
          strokeLinecap="round"
        />
      </motion.svg>
      <div className="text-right mt-4 text-2xl font-medium tracking-tight text-gray-900">
        {ownerDescription}
      </div>
    </motion.div>
  );
}