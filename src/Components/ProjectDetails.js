import { useLocation } from "react-router-dom";


const ProjectDetails = () => {

  //const { data: blogs, isPending, error} = useFetch('/data.txt');
  const location = useLocation();
  const project = location.state?.project;

  return (
    <div className="project-details">
      <h2>{project.title}</h2>
      <img src={project.img1} alt={project.title} />

      <div className="webscraping-introduction">
        <h2>In this project, I tried familiarizing
          myself with the general framework of BeautifulSoup. After trying to scrape 
          multiple website like Etsy where websites often had dynamic html elements, I 
          searched for multiple solutions and stuck with Selenium Webdriver. By combining BeautifulSoup
          and selenium webdriver, I was able to automate web browser scraping of tennis statistics
          via the tennisabstract website. I focused on the perfomances of the current top 10 ATP ranked players.
           </h2>
      </div>

      <div className="webscraping-meat">
        <h2> I focused on extracting match statistics across top 10 atp players,
          hoping that by gathering this data, combining factors and excluding less meaningful statistics
          by filtering the data through MySQL workbench, I can possibly use a machine learning model to 
          attempt predicting match outcomes.
           </h2>
      </div>
    </div>
  );
}
 
export default ProjectDetails;

