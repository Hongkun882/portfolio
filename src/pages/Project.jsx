import React from "react";

import TableContent from "../component/TableContent";
import { useSelector } from "react-redux";
import WebProject from "../projects/WebProject";
import Homelab from "../projects/Homelab";
import AcademicProject from "../projects/AcademicProject";


function Project() {

  const projectChoice = useSelector(state => state.projectChoice)
  return (
    <section className="w-full h-auto flex-col justify-center items-center mb-5 min-h-screen" id="project">
      <h1 className="text-4xl text-center mb-5">Projects</h1>

      <div className="flex flex-col justify-center items-center w-full">

        <TableContent title={"Project"} />

        

          {
            projectChoice === "Web" ? <WebProject/>: projectChoice === "Lab" ? <Homelab/> : <AcademicProject/>
          }

        
      </div>

    </section>
  );
}

export default Project;
