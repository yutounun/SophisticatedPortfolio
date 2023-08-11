"use client";

import React from "react";
import CompanyLogo from "./CompanyLogo";
import AnimateInView from "../common/AnimateInView";
import variants from "../common/Animation";
import { motion } from "framer-motion";
import Explanation from "../common/Explanation";
import Outline from "./Outline";
import ProjectList from "./ProjectList";
import Contact from "./Contact";
import Skills from "./Skills";

export default function Home() {
  return (
    <>
      <motion.div initial="initial" animate="animate">
        {/* summary about me */}
        <Outline />

        <Skills />

        {/* project list */}
        <ProjectList />

        {/* contact page */}
        <Contact />
      </motion.div>
    </>
  );
}
