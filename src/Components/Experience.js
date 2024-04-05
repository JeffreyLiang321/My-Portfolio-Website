// Experience.js
import ExperienceHeader from "./ExperienceHeader";
import { FaDotCircle } from "react-icons/fa";

const Experience = () => {
  return (
    <div className="experience">
      <ExperienceHeader />
      <div className="rows">
        <FaDotCircle size={25} className="icon" />
        <img src="/data/Kognitiv-Edge.png" alt="Kognitiv Edge" />
        <div className="info">
          <div className="details">
            <h2> Kognitiv Edge </h2>
            <h3> January 2024 - Present, Internship </h3>
          </div>
          <p>
            - Working with startup company Kognitiv Edge on backup development.<br />
            - Using terraform and microsoft azure with an intern team.<br />
            - Applying skills of continuous integration and continuous delivery, infrastructure as code.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;

