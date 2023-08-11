import React from "react";
import FormInput from "./FormInput";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaRegBuilding } from "react-icons/fa";
import { GiHumanTarget } from "react-icons/gi";
import BasicButton from "../common/BasicButton";

const Form = () => {
  return (
    <div className="border border-[#e7e9ee] bg-white rounded-2xl h-full font-sans">
      <form className="mx-10 my-10 flex flex-wrap justify-center gap-10">
        <FormInput
          placeholder="Surname"
          className="w-10/12 lg:w-5/12"
          inputClassName="w-2/3"
        >
          <AiOutlineMail />
        </FormInput>
        <FormInput
          placeholder="e-mail"
          className="w-10/12 lg:w-5/12"
          inputClassName="w-2/3"
        >
          <GiHumanTarget />
        </FormInput>
        <FormInput
          placeholder="phone"
          className="w-10/12 lg:w-5/12"
          inputClassName="w-2/3"
        >
          <AiOutlinePhone />
        </FormInput>
        <FormInput
          placeholder="Pursue"
          className="w-10/12 lg:w-5/12"
          inputClassName="w-2/3"
        >
          <FaRegBuilding />
        </FormInput>
        <FormInput
          placeholder="What is it about?"
          className="w-10/12"
          inputClassName="w-11/12"
        />
        <FormInput
          placeholder="Your message..."
          className="w-10/12 h-32"
          inputClassName="w-11/12"
        />
      </form>
      <div className="mb-10">
        <BasicButton className="bg-[#055f5b] hover:bg-[#0c1c1b] w-40 h-10">
          submit
        </BasicButton>
      </div>
    </div>
  );
};

export default Form;
