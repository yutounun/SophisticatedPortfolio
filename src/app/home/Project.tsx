import React from "react";
import AnimateInView from "../common/AnimateInView";
import variants from "../common/Animation";
import Explanation from "../common/Explanation";

const Project = ({
  reverse,
  subtitle,
  title,
  content,
  imgClassName,
}: {
  reverse?: boolean;
  subtitle: string;
  title: string;
  content: string;
  imgClassName: string;
}) => {
  return (
    <div className="block lg:flex lg:justify-center lg:gap-32 mx-10 my-10">
      {reverse ? (
        <>
          <Explanation
            subtitle={subtitle}
            content={content}
            title={title}
            className="w-full lg:w-1/2 lg:flex lg:justify-end lg:mt-40"
            btn
          />
          <AnimateInView
            variants={variants.scaleUp}
            tag="div"
            className={`w-full lg:flex lg:justify-start lg:w-1/2`}
          >
            <img
              src="./colleagues.png"
              alt="colleagues"
              className={`rounded-2xl mb-10 lg:mb-0 h-full w-full ${imgClassName}`}
            />
          </AnimateInView>
        </>
      ) : (
        <>
          <AnimateInView
            variants={variants.scaleUp}
            tag="div"
            className={`w-full lg:flex lg:justify-end lg:w-1/2`}
          >
            <img
              src="./colleagues.png"
              alt="colleagues"
              className={`rounded-2xl mb-10 lg:mb-0 h-full  ${imgClassName}`}
            />
          </AnimateInView>
          <Explanation
            subtitle={subtitle}
            content={content}
            title={title}
            className="w-full lg:w-1/2 lg:flex lg:justify-start lg:mt-40"
            btn
          />
        </>
      )}
    </div>
  );
};

export default Project;
