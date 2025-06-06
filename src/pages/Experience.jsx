import React from "react";
import { FaCircleDot } from "react-icons/fa6";
function Experience() {
  return (
    <section
      className="w-full min-h-screen flex justify-center p-12 mt-3 text-white h-auto"
      id="Experience"
      style={{
        backgroundImage: "url('./asset/stars.gif')",
      }}
    >
      <div className=" flex flex-col w-1/2 min-w-[700px] items-center">
        <h1 className="text-4xl text-center">Experience</h1>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <FaCircleDot style={{ width: "25px", height: "25px" }} />
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">03/2020 - 04/2020</time>
              <div className="text-lg font-black">Tech Support Volunteer</div>
              Worked as a Tech Support Volunteer that provided technical support
              for elderly people at affordable housing in using applications in
              cell phone such as checking emails, video calling platforms, and
              messaging.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <FaCircleDot style={{ width: "25px", height: "25px" }} />
            </div>
            <div className="timeline-end md:mb-10">
              <time className="font-mono italic">01/2024 - 04/2024</time>
              <div className="text-lg font-black">Desktop Support</div>

              <p>
                Worked as a desktop support for a local advertising company in
                China
              </p>
              <br />
              <p>My Responsibility:</p>
              <p>
                Provided troubleshooting and support for desktop computers,
                printers, and mobile devices, and performed routine maintenance
                on devices
              </p>
              <br />
              <p>
                Assisted 10+ colleagues with device setup, application
                configuration, and general troubleshooting.
              </p>
              <br />
              <p>
                Diagnosed and resolved hardware and software malfunctions
                efficiently.
              </p>
            </div>
            <hr />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
