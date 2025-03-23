import Header from "./component/header";
import React from "react";
import Project from "./pages/Project";
import Home from "./pages/Home";
import Skill from "./pages/Skill";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app relative font-mono">
      <Header />
      <main className="flex flex-col ">
        <Home />
        <Project />
        <Skill />
        
        <Education />
        <Experience />
        <Contact/>
      </main>
    </div>
  );
}

export default App;
