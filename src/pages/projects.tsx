import ProjectCard from "../components/project_card";

function Projects() {
    return (
        <div className="flex flex-wrap justify-center gap-4 p-4">
            <ProjectCard 
                title="My Awesome Project" 
                description="This is a description of my awesome project. It has many features and is very useful for a variety of tasks. This is just typing to see if it cuts off when its too long. This should be cut off at some point."
                coverImage="https://www.eftepedia.nl/lemma/images/thumb/8/87/Pardoesdetovernar.jpg/200px-Pardoesdetovernar.jpg"
            />
            <ProjectCard 
                title="Another Project" 
                description="This is another project with a shorter description."
                coverImage="https://airmagique.net/wp-content/uploads/2024/09/danse-macabre-efteling-concept-art-zoomed-in-joseph-charlatan.jpg?w=1024"
            />
        </div>
    );
}

export default Projects;