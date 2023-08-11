import React from "react";
import AnimateInView from "../common/AnimateInView";
import variants from "../common/Animation";
import Explanation from "../common/Explanation";

const ProjectList = () => {
  return (
    <>
      <div className="h-full bg-gray-10 py-10">
        <div className="block lg:flex lg:justify-center lg:gap-32 mx-10 my-10">
          <div className="block lg:flex lg:justify-center lg:gap-32 mx-10 my-10">
            <AnimateInView
              variants={variants.scaleUp}
              tag="div"
              className="w-full lg:flex lg:justify-end lg:w-1/2"
            >
              <img
                src="./colleagues.png"
                alt="colleagues"
                className="rounded-2xl mb-10 lg:mb-0 h-full w-full lg:h-10/12 lg:w-2/3"
              />
            </AnimateInView>
            <Explanation
              subtitle="BACKGROUND"
              content="Started as a patient initiative, we are now developing solutions for tomorrow's rheumatology in a team of six, made up of patients who are themselves affected, business economists, psychologists and software developers, together with self-help organisations, rheumatologists and health care providers."
              title="By patients for patients."
              className="w-full lg:w-1/2 lg:flex lg:justify-start lg:mt-40"
              btn
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectList;
