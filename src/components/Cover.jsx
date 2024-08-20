import React, { memo } from "react";
import { cn } from "../lib/utils";
import { LampContainer } from "./ui/lamp";
import { motion } from "framer-motion";

const Cover = memo(() => {
  return (
    <div className="flex overflow-hidden relative flex-col justify-center items-center w-full h-full rounded-lg cover bg-slate-900">
      <div className="z-20 w-full h-full" />
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col gap-5 items-center py-4 mt-8 text-4xl font-medium tracking-tight md:text-7xl"
        >
          <p className={cn("relative z-20 text-3xl text-white md:text-5xl")}>
            Front-End Software Developer{" "}
          </p>
          <p className="z-20 mt-2 text-xs leading-10 text-center sm:w-1/2 sm:text-2xl text-neutral-300">
            Resolving design problems, building smart user interfaces and useful interactions,
            developing rich web applications and seamless web experiences.
          </p>
        </motion.h1>
      </LampContainer>
    </div>
  );
});

export default Cover;
