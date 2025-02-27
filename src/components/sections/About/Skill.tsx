import { useEffect } from "react";
import * as Icons from "react-icons";

type SkillProps = {
  title: string;
  Icon?: Icons.IconType;
};

function Skill({ title, Icon }: SkillProps) {
  useEffect(() => {
    // console.log(Icon)
  })

  return (
    <div className={`bg-dark-600 flex flex-col justify-center items-center ${ Icon ? 'p-5 w-28' : 'py-2 px-4' }  rounded-lg gap-4 `}>
      {Icon ? <Icon size={32} color="#1EB720" className="max-w-7" /> : null}
      <h3>{title}</h3>
    </div>
  );
}

export default Skill;
