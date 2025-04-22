import { useEffect, useState } from "react";
import { getProjects } from "../../../services/api";
import ProjectCard from "./ProjectCard";

type ProjectListProps = {
  metadata: {
    descricao: string;
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
          {projects?.map((project) => (
            <ProjectCard
              key={ project.slug }
              projectName={ project.title }
              tags={ (project.metadata.tags).split(',').map(tag => tag.trim()) }
              image={ project.metadata.imagem_do_projeto.url }
							slug={project.slug}
							descricao={project.metadata.descricao}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectList;
