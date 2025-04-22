export type ProjectCardProps = {
  projectName: string;
  tags: string[];
  slug: string;
	image: string;
	descricao: string;
}

function ProjectCard({ projectName, tags, slug, image, descricao }: ProjectCardProps) {
  return (
    <div className="rounded-2xl shadow-lg overflow-hidden bg-dark-900 flex flex-col h-full">
      <img src={ image } alt="" className="w-auto object-cover aspect-square" />
      <div className="p-4 flex flex-col flex-grow gap-2">
        <h2 className="text-xl font-bold text-white">{ projectName }</h2>
        <div className="flex flex-wrap mt-2 mb-auto">
          { tags.map((tag, i) => (
            <div key={ i }>
              <span className="text-zinc-100 text-base px-2 py-1 mr-2 mb-2">{tag}</span>
              <span className="text-zinc-100 py-1">{ i < tags.length-1 && '|' }</span>
            </div>
          )) }
				</div>
				
				<p className="text-gray-300 text-sm">{ descricao }</p>

        <a href={`projects/${slug}`} className="bg-lime-400 mt-4 w-full py-2 rounded-lg block text-center">Ver mais detalhes</a>
      </div>
    </div>
  )
}

export default ProjectCard; 