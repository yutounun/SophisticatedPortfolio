import React from "react";
import Link from "next/link";
import { IconContext } from "react-icons";
import BasicButton from "./BasicButton";
import { AiOutlineLine } from "react-icons/ai";

type PropType = {
  subtitle: string;
  title: string;
  content: string;
  className: string;
  btn?: boolean;
  url: string;
};

const Explanation = ({
  className,
  subtitle,
  title,
  content,
  btn,
  url,
}: PropType) => {
  return (
    <div className={`${className}`}>
      <div className="lg:flex lg:flex-col lg:w-2/3">
        <p className="lg:mx-0 font-bold flex items-center text-[#055F5B] text-lg">
          <IconContext.Provider
            value={{ color: "primary", className: "mr-3 text-xl" }}
          >
            <AiOutlineLine />
          </IconContext.Provider>
          <span>{subtitle}</span>
        </p>
        <h2 className="lg:mx-0 w-full font-bold  text-primary tracking-wide text-4xl my-5">
          {title}
        </h2>
        <p className="leading-relaxed lg:mx-0 font-medium text-[#6F7278] text-[18px] mb-10">
          {content}
        </p>
        {btn && (
          <Link href={url}>
            <BasicButton className="bg-[#055f5b] hover:bg-[#0c1c1b] w-60 h-12">
              Explore More
            </BasicButton>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Explanation;
