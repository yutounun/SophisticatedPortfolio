import React from "react";
import Link from "next/link";
import Explanation from "../common/Explanation";
import CareerList from "./CareerList";

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
        href="https://www.canva.com/design/DAFjTqbd5eE/7-3UPLsbxCkbp3DULWMThA/edit?utm_content=DAFjTqbd5eE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        className="text-xl font-semibold rounded-lg w-80 mb-10"
      >
        <span className="mb-5">{`>`} open my resume</span>
      </Link>
      <CareerList className="mt-5" />
    </div>
  );
};

export default Career;
