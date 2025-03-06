import React, { useState } from "react";

function Header() {
  const [tab, setTab] = useState("Home");

  const handleClick = (val) => {
    setTab(val);
  };

  return (
    <header className="flex justify-center w-full fixed z-10">
      <div role="tablist" className="tabs tabs-md tabs-boxed w-3/4 min-w-[550px] max-w-[750px]">
        <a
          role="tab"
          className={`tab ${tab === "Home" ? "tab-active" : ""} `}
          href="/#home"
          onClick={(e) => handleClick("Home")}
        >
          Home
        </a>
        <a
          role="tab"
          className={`tab ${tab === "Project" ? "tab-active" : ""}`}
          href="/#project"
          onClick={() => {
            handleClick("Project");
          }}
        >
          Projects
        </a>
        <a
          role="tab"
          className={`tab ${tab === "Skill" ? "tab-active" : ""}`}
          href="/#skill"
          onClick={() => {
            handleClick("Skill");
          }}
        >
          Skills
        </a>
        <a
          role="tab"
          className={`tab ${tab === "Experience" ? "tab-active" : ""}`}
          href="/#experience"
          onClick={() => {
            handleClick("Experience");
          }}
        >
          Experience
        </a>
        <a
          role="tab"
          className={`tab ${tab === "Education" ? "tab-active" : ""}`}
          href="/#education"
          onClick={() => {
            handleClick("Education");
          }}
        >
          Education
        </a>
        <a
          role="tab"
          className={`tab ${tab === "Contact" ? "tab-active" : ""}`}
          href="/#contact"
          onClick={() => {
            handleClick("Contact");
          }}
        >
          Contact
        </a>
      </div>
    </header>
  );
}

export default Header;
