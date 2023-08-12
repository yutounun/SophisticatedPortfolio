import React from "react";
import AnimateInView from "../common/AnimateInView";
import variants from "../common/Animation";
import CompanyLogo from "./CompanyLogo";

const Skills = () => {
  const skills = [
    {
      id: 1,
      logo: "./tailwind-css.svg",
      src: "https://tailwindcss.com/docs",
      fav: true,
    },
    {
      id: 2,
      logo: "./css.svg",
      src: "https://www.w3.org/Style/CSS/Overview.en.html",
      fav: true,
    },
    {
      id: 3,
      logo: "./javascript.svg",
      src: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      fav: true,
    },
    {
      id: 4,
      logo: "./python.svg",
      src: "https://docs.python.org/3/",
      fav: true,
    },
    {
      id: 5,
      logo: "./html.svg",
      src: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      fav: true,
    },
    {
      id: 6,
      logo: "./vue-js.svg",
      src: "https://vuejs.org/v2/guide/",
      fav: true,
    },
    {
      id: 7,
      logo: "./typescript.svg",
      src: "https://www.typescriptlang.org/docs/",
      fav: true,
    },
    { id: 8, logo: "./vitejs.svg", src: "https://vitejs.dev/guide/" },
    {
      id: 9,
      logo: "./fastapi.svg",
      src: "https://fastapi.tiangolo.com/",
      fav: true,
    },
    { id: 10, logo: "./nextjs.svg", src: "https://nextjs.org/docs", fav: true },
    {
      id: 11,
      logo: "./aws.svg",
      src: "https://aws.amazon.com/documentation/",
      fav: true,
    },
    {
      id: 12,
      logo: "./aws-rds.svg",
      src: "https://docs.aws.amazon.com/rds/index.html",
    },
    {
      id: 13,
      logo: "./aws-dynamodb.svg",
      src: "https://docs.aws.amazon.com/dynamodb/index.html",
      fav: true,
    },
    {
      id: 14,
      logo: "./framer-motion.svg",
      src: "https://www.framer.com/api/motion/",
      fav: true,
    },
    { id: 15, logo: "./slack.svg", src: "https://api.slack.com/" },
    {
      id: 16,
      logo: "./github.svg",
      src: "https://docs.github.com/en",
      fav: true,
    },
    { id: 17, logo: "./nodejs.svg", src: "https://nodejs.org/en/docs/" },
    { id: 18, logo: "./figma.svg", src: "https://www.figma.com/files/recent" },
    { id: 19, logo: "./firebase.svg", src: "https://firebase.google.com/docs" },
    { id: 20, logo: "./storybook.svg", src: "https://storybook.js.org/docs/" },
    {
      id: 21,
      logo: "./jest.svg",
      src: "https://jestjs.io/docs/getting-started",
    },
    { id: 22, logo: "./gatsby.svg", src: "https://www.gatsbyjs.com/docs/" },
    {
      id: 23,
      logo: "./redux.svg",
      src: "https://redux.js.org/introduction/getting-started",
    },
    { id: 24, logo: "./mysql.svg", src: "https://dev.mysql.com/doc/" },
    {
      id: 25,
      logo: "./postgresql.svg",
      src: "https://www.postgresql.org/docs/",
    },
  ];

  return (
    <>
      <div className="h-full mx-auto pt-20 ml-5 lg:px-32 pb-10">
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
                src={skill.src}
                fav={skill.fav && true}
              />
            );
          })}
        </AnimateInView>
      </div>
    </>
  );
};

export default Skills;
