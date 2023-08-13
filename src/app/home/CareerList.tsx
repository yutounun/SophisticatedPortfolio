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
            "Improved user experience by crafting several essential pages and fixing bugs, leveraging TypeScript,Vue2, Jest, and Nuxt.js, thereby ensuring a seamless and stable user experience.",
        },
        {
          key: "key2",
          value:
            "Streamlined development processes by proposing and implementing Github Actions and varioustemplates such as a PR template, significantly contributing to meeting project deadlines.",
        },
        {
          key: "key3",
          value:
            "Enhanced customer experience by designing and implementing APIs using Python, FastAPI, and DynamoDB, providing users with new and improved functionalities.",
        },
        {
          key: "key4",
          value:
            "Successfully managed a team of 6 members as a project manager, and maintained excellent clientrelationships, ensuring client needs were met and expectations exceeded. ",
        },
        {
          key: "key5",
          value:
            "Directed a team of 8 frontend developers in an Agile environment, closely collaborating with the designand backend teams to design REST APIs and implement double the expected functionalities in a travelplanning POC application using Vue3 and Tailwind.css.",
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
            "Developed responsive web pages working for both PC and mobile, improving user experience andaccessibility.",
        },
        {
          key: "key2",
          value:
            "Led a team of 4 newcomers to transit from existing infrastructure to a serverless architecture using AWSservices such as CloudFormation, DynamoDB, Lambda, and API Gateway for the company's cafeteriafood booking service, optimizing system performance and scalability, and reducing AWS service costs by50%",
        },
        {
          key: "key3",
          value:
            "Automated API testing using shell-script, reducing the time of API testing by more than 99%.",
        },
        {
          key: "key4",
          value:
            "Implemented APIs using Python and Django, providing users new functionalities.",
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
