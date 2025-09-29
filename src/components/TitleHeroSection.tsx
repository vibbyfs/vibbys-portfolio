"use client";
import React from "react";
import ColourfulText from "@/components/ui/colourful-text";
import { motion } from "motion/react";

export function TitleHeroSection() {
  return (
    <>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      />
      <h1 className="text-3xl md:text-5xl lg:text-7xl text-left md:text-center text-black relative z-2 font-sans font-extrabold">
        Hi, Im <ColourfulText text="Vibby Febriyan" />
      </h1>
    </>
  );
}
