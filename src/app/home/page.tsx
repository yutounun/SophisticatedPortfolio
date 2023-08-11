"use client";

import React from "react";
import CompanyLogo from "./CompanyLogo";
import { AiFillCheckCircle, AiOutlineLine } from "react-icons/ai";
import { GiJapan } from "react-icons/gi";
import { MdMail } from "react-icons/md";
import Impact from "./Impact";
import Form from "./Form";
import { IconContext } from "react-icons";
import Link from "next/link";
import AnimateInView from "../common/AnimateInView";
import variants from "../common/Animation";
import { motion } from "framer-motion";
import SquareButton from "../common/SquareButton";
import Explanation from "../common/Explanation";

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
        <div className="lg:flex">
          <div className="h-full bg-[#1c3534] lg:w-1/2 pb-20">
            <AnimateInView
              tag="div"
              variants={variants.fadeInRight}
              className="hidden lg:inline lg:h-[16rem] relative"
            >
              <div className="rounded-full h-30 w-30 lg:h-80 lg:w-80 absolute top-[-8rem] left-[-10rem] bg-[#ff6d3f]"></div>
              <div className="rounded-full h-30 w-30 lg:h-80 lg:w-80 absolute top-[-8.4rem] left-[-11rem] bg-[#b7e4c7]"></div>
            </AnimateInView>
            <AnimateInView
              tag="div🇯🇵"
              variants={variants.fadeInDown}
              className="px-5 lg:px-20 pt-10 lg:pt-10 lg:mt-40"
            >
              <AnimateInView
                tag="p"
                variants={variants.fadeInDown}
                className="text-white text-2xl font-bold mb-5 flex gap-5"
              >
                <IconContext.Provider
                  value={{ color: "primary", className: "text-4xl" }}
                >
                  <AiOutlineLine />
                </IconContext.Provider>
                Konnichiwa !!
                <IconContext.Provider
                  value={{
                    color: "success",
                    className: "text-4xl text-success",
                  }}
                >
                  <GiJapan />
                </IconContext.Provider>
              </AnimateInView>
              <p className="text-[2rem] lg:text-[3rem] text-white font-bold">
                Let's collaborate to elevate your business through tailored
                development!
              </p>
              <p className="text-white text-xl font-bold my-5">
                my name is Yuto and I am a full-stack developer with over three
                years experiences.
              </p>
              <div className="flex justify-center lg:inline-block lg:w-full">
                <SquareButton className="bg-[#fc764d] hover:bg-[hsl(14,99%,60%)] h-5 w-1/2 lg:w-1/3">
                  <Link href="/about">Learn more</Link>
                </SquareButton>
              </div>
            </AnimateInView>
          </div>
          <AnimateInView
            tag="div"
            variants={variants.scaleUp}
            className="lg:w-1/2 relative"
          >
            <img
              src="./yuto.jpg"
              alt="Picture of the author"
              className="lg:absolute h-full w-full object-cover"
            />
          </AnimateInView>
        </div>

        {/* project list */}
        <div className="h-full bg-gray-10 py-10">
          <div className="block lg:flex lg:justify-center lg:gap-32 mx-10 my-10">
            <div className="block lg:flex lg:justify-center lg:gap-32 mx-10 my-10">
              <AnimateInView
                variants={variants.scaleUp}
                tag="div"
                className="w-full lg:flex lg:justify-end lg:w-1/2"
              >
                <img
                  src="./colleagues.png"
                  alt="colleagues"
                  className="rounded-2xl mb-10 lg:mb-0 h-full w-full lg:h-10/12 lg:w-2/3"
                />
              </AnimateInView>
              <Explanation
                subtitle="BACKGROUND"
                content="Started as a patient initiative, we are now developing solutions for tomorrow's rheumatology in a team of six, made up of patients who are themselves affected, business economists, psychologists and software developers, together with self-help organisations, rheumatologists and health care providers."
                title="By patients for patients."
                className="w-full lg:w-1/2 lg:flex lg:justify-start lg:mt-40"
                btn
              />
            </div>
          </div>
        </div>

        {/* contact page */}
        <div className="h-full bg-[#fbf9f8] mx-auto pt-10 lg:lg:px-32 lg:flex justify-center pb-10">
          <AnimateInView
            tag="div"
            variants={variants.fadeInUp}
            className="lg:w-5/12 lg:flex justify-center mb-10 lg:mb-0"
          >
            <div className="">
              <p className="mx-10 lg:mx-0 font-bold  text-[#055F5B] text-lg">
                - CONTACT
              </p>
              <h2 className="mx-10 lg:mx-0 w-10/12 font-bold  text-primary tracking-wide text-4xl my-5">
                We look forward to hearing your lovely message!
              </h2>
              <p className=" w-10/12 mx-10 lg:mx-0 text-[#6F7278] text-[18px] mb-5">
                Would you like to find out more about us, do you have any
                questions or suggestions? Please send us an email or use our
                contact form.
              </p>
              <div className="flex justify-center lg:inline-block lg:w-full">
                <button className="flex rounded-full w-8/12 lg:w-7/12 h-16 bg-[#055f5b] text-xl text-white hover:bg-[#0c1c1b] mt-5 lg:flex gap-3 items-center">
                  <IconContext.Provider
                    value={{
                      color: "white",
                      className: "text-2xl lg:text-4xl ml-6",
                    }}
                  >
                    <MdMail />
                  </IconContext.Provider>
                  <Link
                    href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=geek.yuto%40gmail.com"
                    className="text-lg lg:ml-1"
                  >
                    geek.yuto@gmail.com
                  </Link>
                </button>
              </div>
            </div>
          </AnimateInView>
          <AnimateInView
            tag="div"
            variants={variants.fadeInDown}
            className="lg:w-1/2"
          >
            <Form />
          </AnimateInView>
        </div>
      </motion.div>
    </>
  );
}
