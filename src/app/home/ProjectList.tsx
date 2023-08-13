import React from "react";
import Project from "./Project";

const ProjectList = () => {
  return (
    <>
      <div className="h-full bg-gray-10 py-10" id="projects">
        {/* Website Template */}
        <Project
          subtitle="Responsive Static Website"
          title="Static Website Template showcase."
          content="A showcase of my expertise in crafting organized and sophisticated static web pages."
          imgClassName="lg:h-2/3 lg:w-10/12 mt-40  border border-1 border-success "
          src="webpage.png"
          url="https://website-sigma-ruddy-88.vercel.app/home"
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
          imgClassName="lg:h-5/12 lg:w-1/3 lg:ml-20"
        />

        {/* SplitSip */}
        <Project
          src="./split-sip.png"
          subtitle="Responsive Web Application"
          title="SplitSip"
          url="https://spectacular-boba-b2aad2.netlify.app/"
          content="An app calculating the payment amount for each member at drinking party"
          imgClassName="lg:h-5/12 lg:w-1/3 lg:mr-40"
        />
      </div>
    </>
  );
};

export default ProjectList;
