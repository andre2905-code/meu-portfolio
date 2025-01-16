import project1 from "../../../assets/aamdias_movie_streaming_platform_react_john_travolta_web_develo_c9ada2f7-8e03-4a17-8611-6041939fc03a 1.png";
import { useEffect, useState } from "react";
import { getProjects } from "../../../services/api";
import ProjectCard from "./ProjectCard";

type ProjectListProps = {
  metadata: {
    descricao_do_projeto: string;
    imagem_do_projeto: {
      url: string;
    };
    tags: string;
  };
  slug: string;
  title: string;
};

function ProjectList() {
  const [projects, setProjects] = useState<ProjectListProps[]>([]);
  useEffect(() => {
    getProjects().then((data) => setProjects(data));
  }, []);
  return (
    <section className="bg-dark-600" id="projetos">
      <div className="max-w-screen-xl mx-auto p-8">
        <h1 className="text-center text-2xl mb-4 text-white font-bold">
          Projetos
        </h1>
        <div className="grid gap-4 grid-cols-1 justify-center sm:grid-cols-2 md:grid-cols-[repeat(auto-fill,334px)]">
          <ProjectCard
            projectName="Plataforma de Streaming de Filmes"
            tags={["React.js", "Tailwind", "HTML"]}
            slug="#"
            image={project1}
          />
          {projects?.map((project) => (
            <ProjectCard
              key={ project.slug }
              projectName={ project.title }
              tags={ (project.metadata.tags).split(',').map(tag => tag.trim()) }
              image={ project.metadata.imagem_do_projeto.url }
              slug={project.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectList;
