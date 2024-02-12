import React from "react";
import Link from "next/link";
import { IconContext } from "react-icons";
import BasicButton from "./BasicButton";
import { AiOutlineLine } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

type PropType = {
  subtitle: string;
  title: string;
  content: string;
  className: string;
  btn?: boolean;
  url: string;
  gitRepo?: string;
  tags?: string[];
};

const Explanation = ({
  className,
  subtitle,
  title,
  content,
  btn,
  url,
  gitRepo,
  tags,
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
        <div className="flex gap-4">
          <h2 className="lg:mx-0 w-full font-bold  text-primary tracking-wide text-4xl my-5">
            {title}
          </h2>
          {gitRepo && (
            <IconContext.Provider
              value={{
                color: "#292c32",
                className: "text-4xl",
              }}
            >
              <Link href={gitRepo}>
                <AiFillGithub />
              </Link>
            </IconContext.Provider>
          )}
        </div>

        {/* Main Content */}
        <p className="leading-relaxed lg:mx-0 font-medium text-[#6F7278] text-[18px] mb-10">
          {content}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 lg:mb-7 mb-10">
          {tags?.map((tag) => (
            <span
              key={tag}
              className="lg:my-2 border-2 border-[#caccd1] font-semibold px-3 py-1 rounded-2xl"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Explore Button */}
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
