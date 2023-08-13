"use client";

import React from "react";
import { motion } from "framer-motion";
import Outline from "./Outline";
import ProjectList from "./ProjectList";
import Contact from "./Contact";
import Skills from "./Skills";
import Career from "./Career";

export default function Home() {
  return (
    <>
      <motion.div initial="initial" animate="animate">
        {/* summary about me */}
        <Outline />

        <Skills />

        {/* project list */}
        <ProjectList />

        {/* Career */}
        <Career />

        {/* contact page */}
        <Contact />
      </motion.div>
    </>
  );
}
