import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

function Home() {
  return (
    <section
      className="w-full h-screen flex justify-center items-center bg-slate-800 mb-5 min-h-[700px]"
      id="Home"
    >
      <div className="w-2/3 flex min-w-[700px]">
        <div className="avatar m-3 ">
          <div className="w-64 rounded-full max-h-96">

            <img src="./asset/project/profilePic.png" alt="" />
          </div>

        </div>
        <div>
          <h1 className="text-2xl text-white m-3">
           <p className="text-4xl">Hi!</p> <p className="text-6xl">I'm Hongkun Guan</p>  a passionate and motivated Computer Science graduate from the University of California, San Diego. With a solid foundation in IT,
            I have hands-on experience with various technologies, including web development, system administration, and networking.
          </h1>
          <div className="flex justify-center items-center mt-10">
            <a className="btn bg-base-100 m-3" href="https://github.com/Hongkun882?tab=repositories">
              <FaGithub /> Github
            </a>
            <a className="btn border border-gray-500 bg-black text-gray-300 m-3" href="https://portfolio2391.s3.us-east-2.amazonaws.com/Resume.pdf">
              <IoDocumentTextOutline /> Resume
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;
