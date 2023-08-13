import React from "react";
import Link from "next/link";
import AnimateInView from "../common/AnimateInView";
import variants from "../common/Animation";
import { MdMail } from "react-icons/md";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
import Form from "./Form";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="h-full bg-[#fbf9f8] mx-auto pt-10 lg:lg:px-32 lg:flex justify-center pb-10"
      >
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
              I am look forward to hearing your lovely message!
            </h2>
            <p className=" w-10/12 mx-10 lg:mx-0 text-[#6F7278] text-[18px] mb-5">
              Would you like to find out more about me, do you have any
              questions or suggestions? Please send me an email or use our
              contact form.
            </p>
            <div className="flex justify-center items lg:inline-block lg:w-full">
              <motion.button
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.9 }}
                className=" rounded-full h-16 bg-[#055f5b] text-xl text-white hover:bg-[#0c1c1b] mt-5 lg:flex gap-3 items-center"
              >
                <div className="flex justify-center items-center mx-5">
                  <IconContext.Provider
                    value={{
                      color: "white",
                      className: "text-4xl mr-2",
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
                </div>
              </motion.button>
            </div>
            {/* Accounts */}
            <div className="flex gap-4 ml-5 mt-3 justify-center lg:justify-start">
              <IconContext.Provider
                value={{
                  color: "#292c32",
                  className: "text-4xl",
                }}
              >
                <Link href="https://github.com/yutounun">
                  <AiFillGithub />
                </Link>
              </IconContext.Provider>
              <IconContext.Provider
                value={{
                  color: "#292c32",
                  className: "text-4xl",
                }}
              >
                <Link href="https://www.linkedin.com/in/yuto-ichihara-426800217/">
                  <AiFillLinkedin />
                </Link>
              </IconContext.Provider>
              <IconContext.Provider
                value={{
                  color: "#292c32",
                  className: "text-4xl",
                }}
              >
                <Link href="https://twitter.com/Robin_Ich_y">
                  <AiFillTwitterCircle />
                </Link>
              </IconContext.Provider>
            </div>
          </div>
        </AnimateInView>
        <AnimateInView
          tag="div"
          variants={variants.fadeInDown}
          className="lg:w-1/2 lg:my-20"
        >
          <Form />
        </AnimateInView>
      </div>
    </>
  );
};

export default Contact;
