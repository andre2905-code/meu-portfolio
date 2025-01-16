import Skill from "./Skill";

const softSkills = [
  {
    title: "Comunicação",
  },
  {
    title: "Trabalho em equipe",
  },
  {
    title: "Rápido aprendizado",
  },
  {
    title: "Raciocínio lógico",
  },
  {
    title: "Resolução de problemas",
  },
  // {
  //   title: "Resolução de conflitos",
  // }
  {
    title: "Gosto por aprender",
  }
]

function SoftSkills() {
  return (
    <div className="">
      <div>
        <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
        <div className="flex flex-wrap gap-4">
          {softSkills.map((skill) => (
            <Skill title={ skill.title } />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SoftSkills;
