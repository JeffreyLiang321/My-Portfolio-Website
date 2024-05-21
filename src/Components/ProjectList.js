import { Link } from "react-router-dom";
import { useState } from "react";
import Popup from "./Popup";
import ProjectHeader from "./ProjectHeader";

const ProjectList = ({ projects }) => {
  const [buttonPopups, setButtonPopups] = useState(Array(projects.length).fill(false));
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = (index) => {
    const newPopups = [...buttonPopups];
    newPopups[index] = true;
    setButtonPopups(newPopups);
    setIsPopupOpen(true);
  };

  const closePopup = (index) => {
    const newPopups = [...buttonPopups];
    newPopups[index] = false;
    setButtonPopups(newPopups);
    setIsPopupOpen(newPopups.some((status) => status));
  };

  const togglePopup = (index) => {
    const newPopups = [...buttonPopups];
    newPopups[index] = !newPopups[index]; // This will toggle the state
    setButtonPopups(newPopups);
    setIsPopupOpen(newPopups.some((status) => status));
  };

  return (
    <div className = "overall" > 
      <ProjectHeader/>
    <div className={`project-list ${isPopupOpen ? 'popup-open' : ''}`}>
      
      {projects.map((project, index) => (
        <div className="project-preview" key={project.id} onClick={() => togglePopup(index)}>
          <button onClick={() => openPopup(index, project)} style={{ textDecoration: 'none' }}>
            <h2>{project.title}</h2>
          </button>
          {buttonPopups[index] && (
            <Popup
              trigger={buttonPopups[index]}
              setTrigger={() => closePopup(index)}
              project={project}
            >
              {/* <h3>{project.title} Popup</h3>
              <p>This is the popup for {project.title}</p> */}
            </Popup>
          )}
        </div>
      ))}
    </div>
    </div>
  );
}


export default ProjectList;

 

