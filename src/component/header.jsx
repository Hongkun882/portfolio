import React, { useState } from "react";

function Header() {
  const [tab, setTab] = useState("Home");

  const handleClick = (val) => {
    setTab(val);
  };

  const navlist = ["Home","Project", "Skill", "Experience", "Education","Contact"];
  return (
    <header className="w-full fixed z-10 bg-white">
      <div className="container mx-auto flex justify-between items-center p-2">
        {navlist.map((item) => (

<a
          
          className={`tab ${tab === item ? "tab-active" : ""} hover:bg-slate-300`}
          href={`/#${item}`}
          onClick={(e) => handleClick(item)}
        >
          {item}
        </a>

        ))}
        
        
      </div>
    </header>
  );
}

export default Header;
