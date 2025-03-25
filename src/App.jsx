import Header from "./component/header";
import React from "react";
import Project from "./pages/Project";
import Home from "./pages/Home";
import Skill from "./pages/Skill";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import { ToastContainer } from "react-toastify";
import Footer from "./component/Footer";

function App() {
  
  return (
    <div className="app relative font-semibold">
      <Header />
      <main className="flex flex-col ">
        <Home />
        <Project />
        <Skill />
        
        <Education />
        <Experience />
        <Contact/>
      </main>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
