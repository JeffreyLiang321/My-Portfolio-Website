import { Link } from "react-router-dom";
import useFetch from "./useFetch";
import ProjectList from "./ProjectList"


const Projects = ({}) => {
    const { data, isPending, error} = useFetch('/data.txt');
    
    //const projects = data?.projects;
    return (
        <div className="projects">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && <ProjectList projects={data.projects} title = "All Projects!" />} 
        </div>
    );
}
export default Projects;

