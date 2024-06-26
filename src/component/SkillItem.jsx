import React from "react";

function SkillItem({ name }) {
  switch (name) {
    case "Express.js":
      return (
        <div className="flex flex-col m-3 hover:scale-110">
          <img
            src="./asset/language/expressjs.svg"
            alt="express"
            className="m-2"
            style={{ height: "75px", width: "100px" }}
          />
          <h2>{name}</h2>
        </div>
      );

    case "Leaflet.js":
      return (
        <div className="flex flex-col m-3 hover:scale-110">
          <img
            src="./asset/language/leafletjs.png"
            alt="leaflet"
            className="m-2"
            style={{ height: "75px", width: "75px" }}
          />
          <h2>{name}</h2>
        </div>
      );

    case "MongoDB":
      return (
        <div className="flex flex-col m-3 hover:scale-110">
          <img
            src="./asset/language/mongodb.png"
            alt="mongodb"
            className="m-2"
            style={{ height: "75px", width: "150px" }}
          />
          <h2>{name}</h2>
        </div>
      );

    case "Node.js":
      return (
        <div className="flex flex-col m-3 hover:scale-110">
          <img
            src="./asset/language/nodejs.svg"
            alt="nodejs"
            className="m-2"
            style={{ height: "75px", width: "75px" }}
          />
          <h2>{name}</h2>
        </div>
      );

    case "Django":
      return (
        <div className="flex flex-col m-3 hover:scale-110">
          <img
            src="./asset/language/django.svg"
            alt="django"
            className="m-2"
            style={{ height: "75px", width: "75px" }}
          />
          <h2>{name}</h2>
        </div>
      );

    case "PostgreSql":
      return (
        <div className="flex flex-col m-3 hover:scale-110">
          <img
            src="./asset/language/postgre.svg"
            alt="PostgreSql"
            className="m-2"
            style={{ height: "75px", width: "75px" }}
          />
          <h2>{name}</h2>
        </div>
      );

    case "AWS":
      return (
        <div className="flex flex-col m-3 hover:scale-110">
          <img
            src="./asset/language/aws-icon.svg"
            alt="AWS"
            className="m-2"
            style={{ height: "75px", width: "75px" }}
          />
          <h2>{name}</h2>
        </div>
      );
      case "Python":
      return (
        <div className="flex flex-col m-3 hover:scale-110">
          <img
            src="./asset/language/python.svg"
            alt="Python"
            className="m-2"
            style={{ height: "75px", width: "75px" }}
          />
          <h2 className="pl-4">{name}</h2>
        </div>
      );

      case "Java":
      return (
        <div className="flex flex-col m-3 hover:scale-110">
          <img
            src="./asset/language/java.svg"
            alt="Java"
            className="m-2"
            style={{ height: "75px", width: "75px" }}
          />
          <h2 className="pl-5">{name}</h2>
        </div>
      );

      case "C++":
      return (
        <div className="flex flex-col m-3 hover:scale-110">
          <img
            src="./asset/language/cpp.svg"
            alt="cpp"
            className="m-2"
            style={{ height: "75px", width: "75px" }}
          />
          <h2 className="pl-6">{name}</h2>
        </div>
      );

      case "HTML":
      return (
        <div className="flex flex-col m-3 hover:scale-110">
          <img
            src="./asset/language/html.svg"
            alt="HTML"
            className="m-2"
            style={{ height: "75px", width: "75px" }}
          />
          <h2>{name}</h2>
        </div>
      );

      case "CSS":
      return (
        <div className="flex flex-col m-3 hover:scale-110">
          <img
            src="./asset/language/css.svg"
            alt="CSS"
            className="m-2"
            style={{ height: "75px", width: "75px" }}
          />
          <h2>{name}</h2>
        </div>
      );

      case "JavaScript":
      return (
        <div className="flex flex-col m-3 hover:scale-110">
          <img
            src="./asset/language/javascript.svg"
            alt="JavaScript"
            className="m-2"
            style={{ height: "75px", width: "75px" }}
          />
          <h2>{name}</h2>
        </div>
      );

      case "C":
      return (
        <div className="flex flex-col m-3 hover:scale-110">
          <img
            src="./asset/language/c.svg"
            alt="C"
            className="m-2"
            style={{ height: "75px", width: "75px" }}
          />
          <h2>{name}</h2>
        </div>
      );

    default:
      return (
        <div className="flex flex-col m-3 hover:scale-110">
          <img
            src="./asset/language/react.svg"
            alt="react"
            className="m-2"
            style={{ height: "75px", width: "75px" }}
          />
          <h2>{name}</h2>
        </div>
      );
  }
}

export default SkillItem;
