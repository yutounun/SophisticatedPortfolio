import React from "react";
import Project from "./Project";

const ProjectList = () => {
  return (
    <>
      <div className="h-full bg-gray-10 py-10" id="projects">
        {/* Coffices.co */}
        <Project
          subtitle="Responsive Full Stack Web Application"
          title="Coffices.co"
          content="Your ultimate guide to discovering and registering cafés that are perfect for PC work"
          imgClassName="lg:h-2/3 lg:w-10/12 lg:mt-40"
          src="coffices.png"
          url="https://coffices-co.vercel.app/"
          gitRepo="https://github.com/yutounun/coffices.co"
          tags={[
            "TypeScript",
            "Next14",
            "React",
            "NodeJS",
            "MUI",
            "Vercel",
            "Google Search API",
          ]}
        />

        {/* Task Management */}
        <Project
          reverse
          src="taskmanagiment.png"
          subtitle="Web Full Stack Application"
          title="Task Management Web Application"
          url="https://doloveworkout.com/login"
          content="An web application for freelancer to see tasks and hours on each project and task."
          imgClassName="lg:h-2/3 lg:w-10/12 mt-40"
          gitRepo="https://github.com/yutounun/TaskManagementFrontEnd"
          tags={[
            "Next13",
            "React",
            "TypeScript",
            "Docker",
            "AWS",
            "Route53",
            "Amplify",
            "CI/CD",
            "testing-library",
            "TailwindCSS",
            "Github-Actions",
            "Amplify Hosting",
          ]}
        />

        {/* Website Template */}
        <Project
          subtitle="Responsive Static Website with SGG"
          title="Static Website Template showcase."
          content="A showcase of my expertise in crafting organized and sophisticated static web pages."
          imgClassName="lg:h-2/3 lg:w-10/12 lg:mt-40"
          src="webpage.png"
          url="https://website-sigma-ruddy-88.vercel.app/home"
          gitRepo="https://github.com/yutounun/website"
          tags={["Next13", "SGG", "TailwindCSS", "TypeScript", "Framer Motion"]}
        />
        {/* <Project
          subtitle="Static Website"
          title="Static Website Template showcase."
          content="A showcase of my expertise in crafting organized and sophisticated static web pages."
          imgClassName="lg:h-2/3 lg:w-10/12 mt-40"
          src="webpage.png"
          reverse
          url="https://website-sigma-ruddy-88.vercel.app/home"
        /> */}

        {/* Workout Tracker */}
        <Project
          reverse
          src="workout-tracker.png"
          subtitle="PWA FullStack Web Application"
          title="Workout tracker"
          url="https://doloveworkout.com/login"
          content="An app to monitor workouts and dietary intake"
          imgClassName="h-4/12 w-7/12 mx-auto lg:h-5/12 lg:w-1/3 lg:ml-20"
          gitRepo="https://github.com/yutounun/WorkOutTrackingApp"
          tags={[
            "Vue3",
            "Nuxt3",
            "FireBase",
            "StoryBook",
            "PWA",
            "TailwindCSS",
            "Google Domain",
            "TypeScript",
            "DaisyUI",
          ]}
        />

        {/* SplitSip */}
        <Project
          src="./split-sip.png"
          subtitle="Responsive Web Application"
          title="SplitSip"
          url="https://spectacular-boba-b2aad2.netlify.app/"
          content="An app calculating the payment amount for each member at drinking party"
          imgClassName="h-4/12 w-7/12 mx-auto lg:h-5/12 lg:w-1/3 lg:mr-40"
          gitRepo="https://github.com/yutounun/NomiKan"
          tags={[
            "React",
            "Testing Library",
            "Docker",
            "CI/CD",
            "Figma",
            "TDD",
            "MUI",
            "DevContainer",
          ]}
        />
      </div>
    </>
  );
};

export default ProjectList;
