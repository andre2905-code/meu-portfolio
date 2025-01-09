type ProjectCardProps = {
  projectName: string;
  tags: string[];
  slug: string;
  image: string;
}

function ProjectCard({ projectName, tags, slug, image }: ProjectCardProps) {
  return (
    <div className="rounded-2xl shadow-lg overflow-hidden bg-zinc-500">
      <img src={ image } alt="" className="w-full object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold ">{ projectName }</h2>
        <div className="flex flex-wrap mt-2">
          { tags.map((tag, i) => (
            <>
              <span key={ tag } className="text-zinc-100 text-base px-2 py-1">{tag}</span>
              <span key={ tag } className="text-zinc-100 py-1">{ i < tags.length-1 && '|' }</span>
            </>
          )) }
        </div>
        <a href={`${slug}`} className="bg-lime-400 mt-4 w-full py-2 rounded-lg block text-center">Ver mais detalhes</a>
      </div>
    </div>
  )
}

export default ProjectCard