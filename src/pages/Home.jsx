import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

function Home() {
  return (
    <section
      className="w-full h-[50vh] flex justify-center items-center bg-slate-800 min-h-[300px] min-w-[700px] mb-5" 
      id="home"
    >
      <div className="w-1/2 min-w-[500px]">
        <h1 className="text-4xl text-white">
          Hi! My name is Hongkun Guan. I am a new grad cs student. I am
          currently working with React.js, Django, AWS
        </h1>
        <div className="flex justify-center items-center mt-10">
          <a className="btn bg-base-100 m-3" href="https://github.com/Hongkun882?tab=repositories">
            <FaGithub /> Github
          </a>
          <a className="btn border border-gray-500 bg-black text-gray-300 m-3" href="https://myportfolio2391.s3.us-east-2.amazonaws.com/Resume.pdf">
           <IoDocumentTextOutline/> Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
