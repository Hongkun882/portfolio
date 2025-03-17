import React from "react";
import { skill } from "../skilldetails";
import SkillItem from "../component/SkillItem";

function Skill() {
  return (
    <section className="w-full h-auto flex justify-center" id="Skill">
      <div className=" flex flex-col w-1/2 min-w-[700px] items-center mt-12" >
        <h1 className="text-4xl text-center">My Skills</h1>
        <div className="flex flex-row flex-wrap w-3/4">

          {skill.map(lan =>(<SkillItem name={lan} key={lan}/>))}
        </div>
        
      </div>
    </section>
  );
}

export default Skill;
