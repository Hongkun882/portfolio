import React from "react";
import { skills } from "../skilldetails";


function Skill() {

  const {programming, OS, Tool,Network} =skills
  return (
    <section className="w-full min-h-screen flex justify-center text-white h-auto" id="Skills" style={{

      backgroundImage: "url('./asset/stars.gif')"
    }} >
      <div className=" flex flex-col w-2/3 min-w-[700px] items-center mt-12 " >
        <h1 className="text-4xl text-center mb-10">Skills</h1>
        
        <h2 className="text-2xl">Programming</h2>
        <div className="flex flex-row flex-wrap w-3/4">
          
          {programming.map((lan) => <div
            className="border border-white rounded-md w-auto h-auto text-white m-3 p-3"
          >{lan}</div>)}
        </div>

        <h2 className="text-2xl mt-5">Operating System</h2>
        <div className="flex flex-row flex-wrap w-3/4">
          
          {OS.map((lan) => <div
            className="border border-white rounded-md w-auto h-auto text-white m-3 p-3"
          >{lan}</div>)}
        </div>

        <h2 className="text-2xl mt-5">Tool</h2>
        <div className="flex flex-row flex-wrap w-3/4">
          
          {Tool.map((lan) => <div
            className="border border-white rounded-md w-auto h-auto text-white m-3 p-3"
          >{lan}</div>)}
        </div>

        <h2 className="text-2xl mt-5">Network</h2>
        <div className="flex flex-row flex-wrap w-3/4">
          
          {Network.map((lan) => <div
            className="border border-white rounded-md w-auto h-auto text-white m-3 p-3"
          >{lan}</div>)}
        </div>

      </div>


      
    </section>
  );
}

export default Skill;
