import React from "react";
import Link from "next/link";
import Explanation from "../common/Explanation";
import CareerList from "./CareerList";
import { FaArrowRightToBracket } from "react-icons/fa6";

const Career = () => {
  return (
    <div id="career" className="py-10 px-10 lg:px-52 lg:py-20 bg-gray-10">
      <Explanation
        subtitle="Career"
        url="url"
        content="I have been working in this field since 2018."
        title="Working Experience"
        className="w-full lg:flex"
      />
      <Link
        href="https://drive.google.com/file/d/132fy9P9HZEABCewmGAL0IRi5JfEFysuR/view?usp=sharing"
        className="text-xl font-semibold rounded-lg w-80 mb-10"
      >
        <span className="mb-5 flex items-center gap-2">
          <FaArrowRightToBracket /> open my resume
        </span>
      </Link>
      <CareerList className="mt-5" />
    </div>
  );
};

export default Career;
