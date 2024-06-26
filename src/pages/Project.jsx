import React from "react";
import { projectData } from "../projectdetails";
import ProjectItem from "../component/ProjectItem";

function Project() {
  return (
    <section className="w-full h-auto flex justify-center items-center mb-5" id="project">
      <div className=" flex flex-col w-1/2 min-w-[700px] mt-12" >
        <h1 className="text-4xl text-center mb-5">Projects</h1>
       
        {projectData.map((project) => (
          <ProjectItem info={project} key={project.name}></ProjectItem>
        ))}
      </div>
    </section>
  );
}

export default Project;
