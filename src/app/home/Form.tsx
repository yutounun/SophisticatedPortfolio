import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import FormInput from "./FormInput";
import { AiOutlineMail, AiOutlineSend } from "react-icons/ai";
import { FaRegBuilding } from "react-icons/fa";
import { GiHumanTarget } from "react-icons/gi";
import { motion } from "framer-motion";
import AlertBar from "../common/AlertBar";
import { IconContext } from "react-icons";

const Form = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const userId = process.env.NEXT_PUBLIC_USER_ID as string;
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID as string;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;

  const sendEmail = (e: any) => {
    e.preventDefault();

    form.current &&
      emailjs.sendForm(serviceId, templateId, form.current, userId).then(
        (result: any) => {
          setShowAlert(true);
          setMessage("Your request has successfully reached to Yuto.");
          setTimeout(() => {
            setShowAlert(false);
          }, 2000);
        },
        (error: any) => {
          setShowAlert(true);
          setMessage(error.text);
          setTimeout(() => {
            setShowAlert(false);
          }, 2000);
        }
      );
  };

  return (
    <div className="border border-[#e7e9ee] bg-white rounded-2xl h-full font-sans">
      <form
        className="mx-10 my-10 flex flex-wrap justify-center gap-10"
        ref={form}
        onSubmit={sendEmail}
      >
        <FormInput
          name="name"
          placeholder="What is your name?"
          className="w-10/12"
          inputClassName="w-11/12"
        >
          <GiHumanTarget />
        </FormInput>
        <FormInput
          name="email"
          placeholder="What is your email?"
          className="w-10/12"
          inputClassName="w-11/12"
        >
          <AiOutlineMail />
        </FormInput>
        <FormInput
          name="company"
          placeholder="What is your company?"
          className="w-10/12"
          inputClassName="w-11/12"
        >
          <FaRegBuilding />
        </FormInput>
        <FormInput
          name="title"
          placeholder="What is it about?"
          className="w-10/12"
          inputClassName="w-11/12"
        />
        <FormInput
          name="content"
          placeholder="Your message..."
          className="w-10/12 h-32"
          inputClassName="w-11/12"
        />
        <div className="flex justify-center items lg:inline-block lg:w-full">
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            className="flex justify-center mx-auto text-center w-full rounded-xl lg:rounded-full h-16 bg-[#055f5b] text-xl text-white hover:bg-[#0c1c1b] mt-5 lg:flex gap-3 items-center lg:w-1/2"
          >
            <div className="flex justify-center gap-3 items-center mx-5">
              <IconContext.Provider
                value={{
                  color: "white",
                  className: "text-2xl lg:text-4xl",
                }}
              >
                <AiOutlineSend />
              </IconContext.Provider>
              <input
                value="Submit"
                type="submit"
                className={`mx-auto text-white font-bold text-md lg:text-xl lg:h-16 block h-10`}
              />
            </div>
          </motion.div>
        </div>
      </form>
      <AlertBar message={message} showAlert={showAlert} />
    </div>
  );
};

export default Form;
