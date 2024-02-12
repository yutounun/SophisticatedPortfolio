import React from "react";
import { motion } from "framer-motion";
import Link from "../../../node_modules/next/link";

type tag = {
  key: string;
  value: string;
};
type content = {
  key: string;
  value: string;
};

type PropTypes = {
  className?: string;
  title: string;
  contents: content[];
  tags: tag[];
  from: string;
  to: string;
  url: string;
};

const CareerUnit = (props: PropTypes) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.9 }}
      className={`${props.className} hover:bg-[#d6d5d5] hover:rounded-3xl hover:border lg:px-4 py-5 border-white`}
    >
      <Link href={props.url}>
        <div className="text-[#6F7278] text-xl font-semibold">
          {props.from} - {props.to}
        </div>
        <div className="">
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-bold">{props.title}</h3>
            <div className="lg:my-5 flex flex-col gap-2">
              {props.contents.map((content) => (
                <p key={content.key} className="text-primary text-lg">
                  ・{content.value}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {props.tags.map((tag) => (
                <span
                  key={tag.key}
                  className="lg:my-5 border-2 border-[#caccd1] font-semibold px-3 py-1 rounded-2xl"
                >
                  {tag.value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CareerUnit;
