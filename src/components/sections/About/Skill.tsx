import { IconType } from "react-icons";

type SkillProps = {
  title: string;
  icon?: IconType | null;
};

function Skill({ title, icon: Icon = null }: SkillProps) {
  return (
    <div className={`bg-dark-600 flex flex-col justify-center items-center ${ Icon ? 'p-5 w-28' : 'py-2 px-4' }  rounded-lg gap-4 `}>
      {Icon ? <Icon size={32} color="#1EB720" /> : null}
      <h3>{title}</h3>
    </div>
  );
}

export default Skill;
