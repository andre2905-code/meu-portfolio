export type ProjectCardProps = {
  projectName: string;
  tags: string[];
	image: string;
	descricao: string;
	link_repositorio: string;
	link_projeto: string;
}

function ProjectCard({ projectName, tags, image, descricao, link_repositorio, link_projeto }: ProjectCardProps) {
  return (
    <div className="rounded-2xl shadow-lg overflow-hidden bg-dark-900 flex flex-col h-full">
      <img src={ image } alt="" className="w-auto object-cover aspect-square" />
      <div className="p-4 flex flex-col flex-grow gap-2">
        <h2 className="text-xl font-bold text-white">{ projectName }</h2>
        <div className="flex flex-wrap mt-2">
          { tags.map((tag, i) => (
            <div key={ i } className="mb-3 text-blue-400">
              <span className="text-sm py-1 mr-2 mb-2">{tag}</span>
              <span className="pr-2 text-sm">{ i < tags.length-1 && '|' }</span>
            </div>
          )) }
				</div>
				
				<div className="flex mb-auto px-2">
					<p className="text-gray-300 text-sm">{ descricao }</p>
				</div>

				<div>
					{link_projeto ? (
						<a
							href={`${link_projeto}`}
							className="bg-blue-500 text-white font-bold mt-4 w-full py-2 rounded-lg block text-center"
							target="_blank"
						>
							Acessar projeto
						</a>) : (
							<span className="bg-blue-500 text-white font-bold mt-4 w-full py-2 rounded-lg block text-center cursor-not-allowed">Em breve...</span>
						)
					}

					{
						link_repositorio ? (
							<a
								href={`${link_repositorio}`}
								className="text-blue-500 font-bold  border-2 border-blue-500 mt-4 w-full py-2 rounded-lg block text-center"
								target="_blank"
							>
								Acessar respositório
							</a>
						) : (
							<span className="text-blue-500 font-bold  border-2 border-blue-500 mt-4 w-full py-2 rounded-lg block text-center">Em breve...</span>
						)
					}
				</div>
      </div>
    </div>
  )
}

export default ProjectCard; 