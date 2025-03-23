import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import TableContent from "../component/TableContent";
import { useSelector } from "react-redux";
import WebProject from "../projects/WebProject";
import Homelab from "../projects/Homelab";
import AcademicProject from "../projects/AcademicProject";


function Project() {
  const variants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.5 } },
  };
  const projectChoice = useSelector(state => state.projectChoice)
  return (
    <section className="w-full h-auto flex flex-col items-center mb-5 min-h-screen" id="Projects">
      
        <h1 className="text-4xl text-center mb-5">Projects</h1>
        <TableContent title={"Project"} />
            
      <AnimatePresence mode="wait">
        <motion.div className="flex flex-col justify-center items-center w-full"
          key={projectChoice}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"

        >



          {
            projectChoice === "Web" ? <WebProject /> : projectChoice === "Lab" ? <Homelab /> : <AcademicProject />
          }


        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default Project;
