import React from "react";
import AnimateInView from "../common/AnimateInView";
import variants from "../common/Animation";
import CompanyLogo from "./CompanyLogo";

const Skills = () => {
  const skills = [
    { id: 1, logo: "./tailwind-css.svg" },
    { id: 2, logo: "./css.svg" },
    { id: 3, logo: "./javascript.svg" },
    { id: 4, logo: "./python.svg" },
    { id: 5, logo: "./html.svg" },
    { id: 6, logo: "./vue-js.svg" },
    { id: 7, logo: "./typescript.svg" },
    { id: 8, logo: "./vitejs.svg" },
    { id: 9, logo: "./fastapi.svg" },
    { id: 10, logo: "./nextjs.svg" },
    { id: 11, logo: "./aws.svg" },
    { id: 12, logo: "./aws-rds.svg" },
    { id: 13, logo: "./aws-dynamodb.svg" },
    { id: 14, logo: "./framer-motion.svg" },
    { id: 15, logo: "./slack.svg" },
    { id: 16, logo: "./github.svg" },
    { id: 17, logo: "./nodejs.svg" },
    { id: 18, logo: "./figma.svg" },
    { id: 19, logo: "./firebase.svg" },
    { id: 20, logo: "./storybook.svg" },
    { id: 21, logo: "./jest.svg" },
    { id: 22, logo: "./gatsby.svg" },
    { id: 23, logo: "./redux.svg" },
    { id: 24, logo: "./mysql.svg" },
    { id: 25, logo: "./postgresql.svg" },
  ];
  return (
    <>
      <div className="h-full mx-auto pt-20 ml-5 lg:px-32 pb-10">
        {/* <AnimateInView
          tag="p"
          variants={variants.fadeInDown}
          className="mx-5 lg:my-10 text-4xl  font-bold lg:mx-auto lg:flex justify-center mb-10"
        >
          My Skills
        </AnimateInView> */}
        <AnimateInView
          tag="div"
          variants={variants.stagger}
          className="w-full flex flex-wrap gap-8 mx-5 lg:mx-0 lg:gap-16"
        >
          {skills.map((skill) => {
            return (
              <CompanyLogo
                variants={variants.fadeInDown}
                image={skill.logo}
                key={skill.id}
              />
            );
          })}
        </AnimateInView>
      </div>
    </>
  );
};

export default Skills;
