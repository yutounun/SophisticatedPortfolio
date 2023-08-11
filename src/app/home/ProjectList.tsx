import React from "react";
import Project from "./Project";

const ProjectList = () => {
  return (
    <>
      <div className="h-full bg-gray-10 py-10">
        <Project
          subtitle="Backend"
          title="By patients for patients."
          content="A web application to help patients with rheumatology problems with their appointments."
          imgClassName="lg:h-10/12 lg:w-2/3"
        />
        <Project
          reverse
          subtitle="Backend"
          title="By patients for patients."
          content="A web application to help patients with rheumatology problems with their appointments."
          imgClassName="lg:h-1/2 lg:w-10/12 mt-40"
        />
      </div>
    </>
  );
};

export default ProjectList;
