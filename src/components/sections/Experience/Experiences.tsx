import { FaAngleRight } from "react-icons/fa";
import './experiences.css';

const experiences = [
  {
    id: 1,
    date: "Jun 2023",
    title: "wBuy - Lojas virtuais",
    office: "Analista de suporte computacional",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus, odio ab quia quidem ad molestias assumenda, mollitia tempore repellat officia quam neque facilis. Magni, temporibus odit! Sed, omnis possimus!"
  },
  {
    id: 2,
    date: "Jun 2023",
    title: "wBuy - Lojas virtuais",
    office: "Analista de suporte computacional",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus, odio ab quia quidem ad molestias assumenda, mollitia tempore repellat officia quam neque facilis. Magni, temporibus odit! Sed, omnis possimus!"
  }
]

function Experiences() {
  return (
    <div>
      <ul>
        {experiences.map((exp) => (
          <li key={ exp.id } className="">
            <div className="flex gap-4">
              <div className="text-sm text-gray-400">{ exp.date }</div>
              <div className="fa-angle-right"><FaAngleRight className="text-green-500" size={ 35 } /></div>
              <div className="">
                <h3 className="text-green-500 font-bold text-lg mb-2">{ exp.title }</h3>
                <p className="text-gray-400 pb-6" id="exp-description">{ exp.description }</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Experiences;