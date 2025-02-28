import React from "react";

function Experience() {
  return (
    <section
      className="w-full h-auto flex justify-center p-12 mt-3"
      id="experience"
    >
      <div className=" flex flex-col w-1/2 min-w-[700px] items-center">
        <h1 className="text-4xl text-center">Experience</h1>

        <div class="border border-gray-400 bg-gray-100 rounded-md w-3/4 p-3 mt-3">
          <div className="flex w-full justify-between">
            <h2 className="text-lg">
              <strong>Frontend Developer Intern</strong>{" "}
              
            </h2>
            <h2 className="text-sm justify-end">Oct 2023 ~ Feb 2024</h2>
          </div>

          <h2>Fangma Advertising Ltd</h2>

          <p>
            Worked with the UI teams to develop features using React.js,
            Javascript, and Restful API. 
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
