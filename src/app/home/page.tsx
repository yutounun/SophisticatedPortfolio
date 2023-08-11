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

export default function Home() {
  const companies = [
    { id: 1, logo: "./microsoft.svg" },
    { id: 2, logo: "./spotify.svg" },
    { id: 3, logo: "./logo.svg" },
    { id: 4, logo: "./tinder.svg" },
    { id: 5, logo: "./tiktok.svg" },
    { id: 6, logo: "./ethereum.svg" },
    { id: 7, logo: "./heineken.svg" },
    { id: 8, logo: "./linkedin.svg" },
    { id: 9, logo: "./netflix.svg" },
    { id: 10, logo: "./slack.svg" },
    { id: 11, logo: "./soundcloud.svg" },
    { id: 12, logo: "./nike.svg" },
  ];

  return (
    <>
      <motion.div initial="initial" animate="animate">
        <Outline />

        {/* project list */}
        <ProjectList />

        {/* contact page */}
        <Contact />
      </motion.div>
    </>
  );
}
