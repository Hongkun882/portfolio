import React from "react";
import { projectData } from "../projectdetails";
import ProjectItem from "../component/ProjectItem";
import TableContent from "../component/TableContent";
import { useSelector } from "react-redux";

function Project() {

  const projectChoice = useSelector(state => state.projectChoice)
  return (
    <section className="w-full h-auto flex-col justify-center items-center mb-5" id="project">
      <h1 className="text-4xl text-center mb-5">Projects</h1>

      <div className="flex justify-center items-center">

        <TableContent title={"Project"} />

        <div className=" flex flex-col w-1/2 min-w-[700px] mt-12" >

          {
            projectChoice === "Web" ? projectData.map((project) => (
              <ProjectItem info={project} key={project.name}></ProjectItem>
            )) : (<h1>N/A</h1>)
          }

        </div>
      </div>

    </section>
  );
}

export default Project;
