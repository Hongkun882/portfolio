import React from "react";

function Education() {
  return (
    <section
      className="w-full h-auto flex justify-center pt-12"
      id="Education"
    >
      <div className=" flex flex-col w-1/2 min-w-[700px] items-center">
        <h1 className="text-4xl text-center">My Eduction</h1>
        <div className="flex flex-row border border-gray-400 bg-gray-100 rounded-md w-3/4 m-3">
          <img
            src="./asset/ucsd.svg"
            alt="ucsd"
            style={{ height: "150px", width: "150px" }}
            className="m-4"
          />

          <div className="flex flex-col m-5 justify-center w-3/4">
            <h3 className="text-lg">
              <strong>B.S. Computer Science</strong>
            </h3>
            <h3>UC San Diego</h3>
            <h3>Graduate in Dec 2023</h3>
            <h3>Relvant Courses:</h3>
            <div className="text-sm">
              <li>Data Structure and Algorithm</li>
              <li>Object Orient Program</li>
              <li>Machine Learning</li>
              <li>Computer Architecture</li>
              <li>DataBase</li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
