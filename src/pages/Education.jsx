import React from "react";

function Education() {
  return (
    <section
      className="w-full min-h-screen flex justify-center pt-12 h-auto"
      id="Degree & Certs"
    >
      <div className=" flex flex-col w-1/2 min-w-[700px] items-center ">
        <h1 className="text-4xl text-center">Degree</h1>
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

        <h1 className="text-4xl text-center">Certification</h1>
        <div className="flex flex-row border border-gray-400 bg-gray-100 rounded-md w-3/4 m-3">
          <img
            src="./asset/comptiaA.png"
            alt="ucsd"
            style={{ height: "150px", width: "200px" }}
            className="m-4"
          />

          <div className="flex flex-col m-5 justify-center w-3/4">
            <h3 className="text-lg">
              <strong>Comptia A+</strong>
            </h3>
            
            <p>Issued Date: 01/03/2025</p>
            <p>Expired Date: 01/03/2028</p>
          </div>

          
        </div>

        <div className="flex flex-row border border-gray-400 bg-gray-100 rounded-md w-3/4 m-3">
          <img
            src="./asset/networkplus.png"
            alt="ucsd"
            style={{ height: "150px", width: "200px" }}
            className="m-4"
          />

          <div className="flex flex-col m-5 justify-center w-3/4">
            <h3 className="text-lg">
              <strong>Comptia Network+</strong>
            </h3>
            
            <p>Expected Date: 05/2025</p>
          </div>

          
        </div>

      </div>
    </section>
  );
}

export default Education;
