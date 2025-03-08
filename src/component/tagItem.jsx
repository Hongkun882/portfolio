import React from "react";

function TagItem({ name }) {
  switch (name) {
    case "Express.js":
      return (
        <img
          src="./asset/language/expressjs.svg"
          alt="express"
          className="m-1"
          style={{ height: "30px", width: "50px" }}
        />
      );

    case "Leaflet.js":
      return (
        <img
          src="./asset/language/leafletjs.png"
          alt="leaflet"
          className="m-1"
          style={{ height: "30px", width: "80px" }}
        />
      );

    case "MongoDB":
      return (
        <img
          src="./asset/language/mongodb.png"
          alt="mongodb"
          className="m-1"
          style={{ height: "30px", width: "80px" }}
        />
      );

    case "Node.js":
      return (
        <img
          src="./asset/language/nodejs.svg"
          alt="nodejs"
          className="m-1"
          style={{ height: "30px", width: "50px" }}
        />
      );

    case "Django":
      return (
        <img
          src="./asset/language/django.svg"
          alt="django"
          className="m-1"
          style={{ height: "30px", width: "50px" }}
        />
      );

    case "PostgreSql":
      return (
        <img
          src="./asset/language/postgre.svg"
          alt="PostgreSql"
          className="m-1"
          style={{ height: "30px", width: "50px" }}
        />
      );

    case "AWS":
      return (
        <img
          src="./asset/language/aws-icon.svg"
          alt="AWS"
          className="m-1"
          style={{ height: "30px", width: "50px" }}
        />
      );

    case "Python":
      return (
        <img
          src="./asset/language/python.svg"
          alt="Python"
          className="m-1"
          style={{ height: "30px", width: "50px" }}
        />
      );
    case "JavaScript":
      return (<img
        src="./asset/language/javascript.svg"
        alt="Javascript"
        className="m-1"
        style={{ height: "30px", width: "50px" }}
      />)

    case "HTML":
      return (

        <img
          src="./asset/language/html.svg"
          alt="HTML"
          className="m-1"
          style={{ height: "30px", width: "50px" }}
        />

      );

      case "CSS":
      return (
        
          <img
            src="./asset/language/css.svg"
            alt="CSS"
            className="m-1"
            style={{ height: "30px", width: "50px" }}
          />
          
        
      );

    default:
      return (
        <img
          src="./asset/language/react.svg"
          alt="react"
          className="m-1"
          style={{ height: "30px", width: "50px" }}
        />
      );
  }
}

export default TagItem;
