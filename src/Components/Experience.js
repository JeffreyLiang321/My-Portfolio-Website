// Experience.js
import ExperienceHeader from "./ExperienceHeader";
import { FaDotCircle } from "react-icons/fa";

const Experience = () => {
  return (
    <div className="experience">
      <ExperienceHeader />

      <div className="rows">
        <FaDotCircle size={25} className="icon" />
        <img src={`${process.env.PUBLIC_URL}/data/Xiaomi1.png`} alt="image?" />
        <div className="info">
          <div className="details">
            <h2> Xiaomi Technology </h2>
            <h3> June 2024 - August 2024, Internship </h3>
          </div>
          <p>
            - Worked within Xiaomi phone department in exploring and dictating current leading AI models for multiple medias <br />
            - Helped form technical reports stating the fundamental strengths within model architectures, and methods for improving inference performance.<br />
          </p>
        </div>
      </div>
      <div className="rows">
        <FaDotCircle size={25} className="icon" />
        <img src={`${process.env.PUBLIC_URL}/data/Kognitiv-Edge.png`} alt="image?" />
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
      
      <div className="rows">
        <FaDotCircle size={25} className="icon" />
        <img src={`${process.env.PUBLIC_URL}/data/Brown.jpg`} alt="image?" />
        <div className="info">
          <div className="details">
            <h2> Brown University </h2>
            <h3> September 2023 - Present, Undergraduate Degree </h3>
          </div>
          <p>
            - Concentrating in Computer Science and Economics joint major
          </p>
        </div>
      </div>
      
      <div className="rows">
        <FaDotCircle size={25} className="icon" />
        <img src={`${process.env.PUBLIC_URL}/data/SAS.jpg`} alt="image?" />
        <div className="info">
          <div className="details">
            <h2> Shanghai American School Pudong </h2>
            <h3> August 2019 - June 2023, High School Degree </h3>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default Experience;

