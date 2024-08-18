"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const colors = [
  "--sky-300",
  "--pink-300",
  "--green-300",
  "--yellow-300",
  "--red-300",
  "--purple-300",
  "--blue-300",
  "--indigo-300",
  "--violet-300",
];

// Memoize the color picker to prevent re-creation on every render
const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const MemoizedBox = React.memo(({ i, j }) => (
  <motion.div
    whileHover={{
      backgroundColor: `var(${getRandomColor()})`,
      transition: { duration: 0 },
    }}
    animate={{
      transition: { duration: 2 },
    }}
    className="relative w-16 h-8 border-t border-r border-slate-700"
  >
    {j % 2 === 0 && i % 2 === 0 ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-700 stroke-[1px] pointer-events-none"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    ) : null}
  </motion.div>
));

export const BoxesCore = ({ className, ...rest }) => {
  const rows = useMemo(() => new Array(150).fill(1), []);
  const cols = useMemo(() => new Array(100).fill(1), []);

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "flex absolute -top-1/4 left-1/4 z-0 p-4 w-full h-full -translate-x-1/2 -translate-y-1/2",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div key={`row` + i} className="relative w-16 h-8 border-l border-slate-700">
          {cols.map((_, j) => (
            <MemoizedBox key={`col` + j} i={i} j={j} />
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
