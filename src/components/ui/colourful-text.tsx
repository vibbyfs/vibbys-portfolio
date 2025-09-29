"use client";
import React from "react";
import { motion } from "motion/react";

export default function ColourfulText({ text }: { text: string }) {
  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${index}`}
      initial={{ y: 0, opacity: 1 }}
      animate={{
        color: "#000",
        y: [0, -3, 0],
        scale: [1, 1.01, 1],
        filter: ["blur(0px)", `blur(3px)`, "blur(0px)"],
        opacity: [1, 0.9, 1],
      }}
      transition={{
        duration: 0.9,
        delay: index * 0.04,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
        repeatDelay: 3,
      }}
      className="inline-block whitespace-pre font-sans tracking-tight will-change-transform"
    >
      {char}
    </motion.span>
  ));
}
