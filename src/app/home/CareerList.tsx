import React from "react";
import CareerUnit from "./CareerUnit";

type PropTypes = {
  className?: string;
};

const CareerList = (props: PropTypes) => {
  const careers = [
    {
      title: "Full Stack Developer / Project Manager Iret,Inc. ",
      contents: [
        {
          key: "key1",
          value:
            "Spearheaded the upgrade from Nuxt2 to Nuxt3 for a business idea solicitation platform. This was accomplished through significant improvements in UI / UX, along with the introduction of new features like notification and restriction functionalities. Utilized a comprehensive stack including Vue2,3, Python, FastAPI, and AWS services (DynamoDB, CloudFormation, Lambda).",
        },
        {
          key: "key2",
          value:
            "Led the front-end development of a travel planning application, focusing on a user-friendly interface that allows for easy sharing of travel plans among friends and efficient map searches to calculate travel times. This project was built using Vue3 and integrated with the Google Map API, leveraging Tailwind CSS for responsive design.",
        },
        {
          key: "key3",
          value:
            "Contributed as a full-stack developer to an internal AI chat application designed for client-specific use, incorporating advanced text categorization and search functionalities through the integration of Google Cloud's Vertex AI and PaLM2, and LangChain for AI-driven interactions. The development process involved using React and NodeJS, including the implementation of text filtering and soft deletion rules.",
        },
      ],
      tags: [
        { key: "key1", value: "NuxtJs" },
        { key: "key2", value: "Vue2/3" },
        { key: "key3", value: "TypeScript" },
        { key: "key4", value: "Project Management" },
        { key: "key5", value: "Python" },
        { key: "key6", value: "FastAPI" },
        { key: "key7", value: "DynamoDB" },
        { key: "key8", value: "AWS" },
        { key: "key9", value: "Docker" },
        { key: "key10", value: "Git" },
      ],
      from: "2022/08",
      to: "current",
      url: "https://www.iret.co.jp/en/",
    },
    {
      title: "Software Developer, Arara, Inc.",
      content: "Software Developer, Arara, Inc.",
      tags: [
        { key: "key1", value: "Vue2" },
        { key: "key2", value: "JavaScript" },
        { key: "key3", value: "ShellScript" },
        { key: "key4", value: "Docker" },
        { key: "key5", value: "AWS" },
        { key: "key6", value: "PostgreSQL" },
        { key: "key7", value: "Git" },
      ],
      contents: [
        {
          key: "key1",
          value:
            "Contributed as a front-end developer to an antibody testing app, facilitating test result storage and method guidance, utilizing AWS (Cognito, Lambda, Serverless, IAM, CloudWatch), Vue2, and GitHub for a seamless user experience.",
        },
        {
          key: "key2",
          value:
            "Automated testing for a widely used payment card API across Japanese supermarkets, initially leveraging PostMan, then transitioning to Shell Script to eliminate environmental discrepancies, achieving a 99% reduction in testing time.",
        },
      ],
      from: "2020/07",
      to: "2022/07",
      url: "https://www.arara.com/news/english/",
    },
  ];
  return (
    <div className={`${props.className} flex flex-col gap-10`}>
      {careers.map((career) => (
        <CareerUnit {...career} key={career.title} />
      ))}
    </div>
  );
};

export default CareerList;
