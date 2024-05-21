import useFetch from "./useFetch";
import ProjectList from "./ProjectList";

const Projects = () => {
    const { data, isPending, error } = useFetch(`${process.env.PUBLIC_URL}/data/data.txt`);

    return (
        <div className="projects">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && <ProjectList projects={data.projects} title="All Projects!" />}
        </div>
    );
};

export default Projects;

