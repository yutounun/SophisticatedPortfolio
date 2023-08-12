import React from "react";
import AnimateInView from "../common/AnimateInView";
import { motion } from "framer-motion";
import variants from "../common/Animation";
import Explanation from "../common/Explanation";
import Link from "../../../node_modules/next/link";

const Project = ({
  reverse,
  subtitle,
  title,
  content,
  src,
  imgClassName,
  url,
}: {
  reverse?: boolean;
  subtitle: string;
  title: string;
  content: string;
  src: string;
  imgClassName: string;
  url: string;
}) => {
  return (
    <div className="block lg:flex lg:justify-center lg:gap-32 mx-10 my-10">
      {reverse ? (
        // image on the right
        <>
          <Explanation
            subtitle={subtitle}
            url={url}
            content={content}
            title={title}
            className="w-full lg:w-1/2 lg:flex lg:justify-end lg:mt-40"
            btn
          />
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            variants={variants.fadeInDown}
            className={`w-full lg:flex lg:justify-start lg:w-1/2`}
          >
            <Link href={url} className="h-full w-full">
              <img
                src={src}
                alt="colleagues"
                className={`rounded-2xl mb-10 lg:mb-0 h-full ${imgClassName} `}
              />
            </Link>
          </motion.div>
        </>
      ) : (
        // image on the left
        <>
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            variants={variants.fadeInDown}
            className={`w-full lg:w-1/2`}
          >
            <Link href={url} className="h-full w-full lg:flex lg:justify-end">
              <img
                src={src}
                alt="colleagues"
                className={`rounded-2xl mb-10 lg:mb-0 h-full ${imgClassName}`}
              />
            </Link>
          </motion.div>
          <Explanation
            subtitle={subtitle}
            content={content}
            title={title}
            url={url}
            className="w-full lg:w-1/2 lg:flex lg:justify-start lg:mt-40"
            btn
          />
        </>
      )}
    </div>
  );
};

export default Project;
