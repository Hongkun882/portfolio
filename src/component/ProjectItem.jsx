import React from "react";
import TagItem from "./tagItem";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
function ProjectItem({ info }) {
  const { img, name, description, tags, url, github } = info;
  return (
    <div className="flex mb-3 min-w-[500px] max-w-[900px] md:flex-row flex-col border border-gray-300 rounded-md bg-gray-100 max-h-[400px]">
      <figure>
        <img
          src={img}
          alt="Project Image"
          className="m-3 min-h-[200px] min-w-[400px] max-w-[400px] max-h-[500px]"
        />
      </figure>
      <div className="flex flex-col">
        <h2 className="text-2xl mt-2 mb-2">{name}</h2>
        
        <div className="flex flex-row mb-3">
          <h3 className="text-md text-gray-400 pt-2">Made with</h3>
          {tags.map((tag) => (
            <TagItem name={tag} key={tag}/>
          ))  
          }
        </div>
        <p className="mb-3">{description}</p>
        <div className="flex flex-row">
          <a href={github} className="m-3 hover:scale-110">
            <FaGithub style={{height: "25px", width:"25px"}}/>
          </a>
          <a href={url} className="m-3 hover:scale-110">
            <FaExternalLinkAlt style={{height: "25px", width:"25px"}}/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
