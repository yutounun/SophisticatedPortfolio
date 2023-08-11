"use client";
import React from "react";
import { IconContext } from "react-icons";
import { AiFillCheckCircle, AiOutlineLine } from "react-icons/ai";
import { GiJapan } from "react-icons/gi";
import Link from "next/link";
import AnimateInView from "../common/AnimateInView";
import variants from "../common/Animation";
import SquareButton from "../common/SquareButton";

const Outline = () => {
  return (
    <>
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
    </>
  );
};

export default Outline;
