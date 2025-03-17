import React from "react";
import TagItem from "./tagItem";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
function ProjectItem({ info }) {
  const { img, name, description, tags, url, github, groupSize, classes } = info;
  return (
    <div className="flex mb-3 min-w-[500px] max-w-[900px] md:flex-row flex-col border border-gray-300 rounded-md bg-gray-100 max-h-[400px]">
      <figure>
        <img
          src={img}
          alt="Project Image"
          className="m-3 min-h-[200px] min-w-[400px] max-w-[400px] max-h-[300px]"
        />
      </figure>
      <div className="flex flex-col">
        <h2 className="text-2xl mt-2 mb-1">{name}</h2>
        { classes && <p><b>Class:</b> {classes}</p>}
        <div className="flex flex-row mb-1">
          <h3 className="text-md pt-2"> <b>Made with</b></h3>
          {tags.map((tag) => (
            <TagItem name={tag} key={tag} />
          ))
          }
        </div>
        {groupSize && <div className="flex flex-row">
          <h3 className="text-md text-black"><b>Group Size: </b>{groupSize}</h3>


        </div>}
        <p><b>Description:</b></p>
        <p className="mb-3">{description}</p>
        <div className="flex flex-row">
          {github && <a href={github} className="m-3 hover:scale-110">
            <FaGithub style={{ height: "25px", width: "25px" }} />
          </a>}

          {url && <a href={url} className="m-3 hover:scale-110">
            <FaExternalLinkAlt style={{ height: "25px", width: "25px" }} />
          </a>}

        </div>

        
      </div>
    </div>
  );
}

export default ProjectItem;
