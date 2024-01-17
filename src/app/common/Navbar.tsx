"use client";

import React, { useState } from "react";

import Link from "next/link";
import { Link as Scroll } from "react-scroll";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [selected, setSelected] = useState("about");
  return (
    <div className="h-32 lg:flex justify-between border-b sticky w-full top-0 z-50 bg-white">
      {/* Burger Menu */}
      {isOpen}
      <div
        className="lg:hidden absolute top-12 right-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </div>
      {/* Drawer */}
      {isOpen && (
        <div className="w-full lg:hidden absolute mt-32">
          <ul className="flex flex-col gap-5 pt-5 bg-gray-10 h-screen opacity-95">
            <Scroll
              to="about"
              smooth={true}
              duration={600}
              offset={-30}
              className={`text-xl ml-7 w-1/3 font-semibold hover:border-b-2 hover:border-b-[#ff6d3f] hover:bg-white h-1/8 ${
                selected === "about" && "border-b-2 border-b-[#ff6d3f]"
              }`}
              onClick={() => {
                setSelected("about");
              }}
            >
              About
            </Scroll>
            <Scroll
              to="skills"
              smooth={true}
              duration={600}
              offset={-30}
              className={`text-xl ml-7 w-1/3 font-semibold hover:border-b-2 hover:border-b-[#ff6d3f] hover:bg-white h-1/8 ${
                selected === "skills" && "border-b-2 border-b-[#ff6d3f]"
              }`}
              onClick={() => {
                setSelected("skills");
              }}
            >
              Skills
            </Scroll>
            <Scroll
              to="projects"
              smooth={true}
              duration={600}
              offset={-30}
              className={`text-xl ml-7 w-1/3 font-semibold hover:border-b-2 hover:border-b-[#ff6d3f] hover:bg-white h-1/8 ${
                selected === "projects" && "border-b-2 border-b-[#ff6d3f]"
              }`}
              onClick={() => {
                setSelected("projects");
              }}
            >
              Projects
            </Scroll>
            <Scroll
              to="about"
              smooth={true}
              duration={600}
              offset={-30}
              className={`text-xl ml-7 w-1/3 font-semibold hover:border-b-2 hover:border-b-[#ff6d3f] hover:bg-white h-1/8 ${
                selected === "home" && "border-b-2 border-b-[#ff6d3f]"
              }`}
              onClick={() => {
                setSelected("career");
              }}
            >
              Career
            </Scroll>
            <Scroll
              to="contact"
              smooth={true}
              duration={600}
              offset={-30}
              className={`text-xl ml-7 w-1/3 font-semibold hover:border-b-2 hover:border-b-[#ff6d3f] hover:bg-white h-1/8 ${
                selected === "/contact" && "border-b-2 border-b-[#ff6d3f]"
              }`}
              onClick={() => {
                setSelected("contact");
              }}
            >
              Contact
            </Scroll>
            <Link
              href="https://robin-blog-mu.vercel.app/"
              className={`text-xl ml-7 w-1/3 font-semibold hover:border-b-2 hover:border-b-[#ff6d3f] hover:bg-white hover: ${
                selected === "blog" && "border-b-2 border-b-[#ff6d3f]"
              }`}
            >
              Blog
            </Link>
          </ul>
        </div>
      )}

      {/* Logo */}
      <div className="lg:flex w-1/2 my-auto ml-10 pt-9">
        <Link href="/home" className="my-auto">
          <img src="./logo.svg" alt="logo" className="" />
        </Link>
      </div>
      <div className="hidden w-1/2 lg:flex justify-end mr-32 my-auto">
        <Scroll
          to="about"
          smooth={true}
          duration={600}
          offset={-30}
          className={`text-xl ml-7 my-auto  font-semibold hover:border-b-2 hover:border-b-[#ff6d3f] hover:bg-white ${
            selected === "about" && "border-b-2 border-b-[#ff6d3f]"
          }`}
          onClick={() => {
            setSelected("about");
          }}
        >
          About
        </Scroll>
        <Scroll
          to="skills"
          smooth={true}
          duration={600}
          offset={-30}
          className={`text-xl ml-7 my-auto  font-semibold hover:border-b-2 hover:border-b-[#ff6d3f] hover:bg-white ${
            selected === "skills" && "border-b-2 border-b-[#ff6d3f]"
          }`}
          onClick={() => {
            setSelected("skills");
          }}
        >
          Skills
        </Scroll>
        <Scroll
          to="projects"
          smooth={true}
          duration={600}
          offset={-30}
          className={`text-xl ml-7 my-auto  font-semibold hover:border-b-2 hover:border-b-[#ff6d3f] hover:bg-white ${
            selected === "projects" && "border-b-2 border-b-[#ff6d3f]"
          }`}
          onClick={() => {
            setSelected("projects");
          }}
        >
          Projects
        </Scroll>
        <Scroll
          to="career"
          smooth={true}
          duration={600}
          offset={-30}
          className={`text-xl ml-7 my-auto  font-semibold hover:border-b-2 hover:border-b-[#ff6d3f] hover:bg-white ${
            selected === "career" && "border-b-2 border-b-[#ff6d3f]"
          }`}
          onClick={() => {
            setSelected("career");
          }}
        >
          Career
        </Scroll>
        <Scroll
          to="contact"
          smooth={true}
          duration={600}
          offset={-30}
          className={`text-xl ml-7 my-auto  font-semibold hover:border-b-2 hover:border-b-[#ff6d3f] hover:bg-white ${
            selected === "contact" && "border-b-2 border-b-[#ff6d3f]"
          }`}
          onClick={() => {
            setSelected("contact");
          }}
        >
          Contact
        </Scroll>
        <Link
          href="https://robin-blog-mu.vercel.app/"
          className={`text-xl ml-7 my-auto  font-semibold hover:border-b-2 hover:border-b-[#ff6d3f] hover:bg-white hover: ${
            selected === "blog" && "border-b-2 border-b-[#ff6d3f]"
          }`}
        >
          Blog
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
