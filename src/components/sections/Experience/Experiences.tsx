import { FaAngleRight } from "react-icons/fa";
import './experiences.css';

const experiences = [
  {
    id: 1,
    date: "Jun 2023",
    title: "wBuy - Lojas virtuais - Analista de suporte computacional",
    office: "Analista de suporte computacional",
    description: "Atuando como analista de suporte computacional, prestando suporte à plataforma de ecommerce desenvolvida por wBuy. Nessa experiência desenvolvi de forma sólida a Soft Skill de comunicação, uma vez que, para um bom atendimento, é imprescindível uma boa comunicação e clareza nas palavras. Além disso, pude aprender conceitos voltados a infraestrutura, redes de computadores, e consultas a APIs."
	},
]

function Experiences() {
  return (
    <div>
      <ul>
        {experiences.map((exp) => (
          <li key={ exp.id } className="">
            <div className="flex gap-4">
              <div className="text-sm text-gray-400">{ exp.date }</div>
              <div className="fa-angle-right"><FaAngleRight className="text-blue-500" size={ 35 } /></div>
              <div className="">
                <h3 className="text-blue-500 font-bold text-lg mb-2">{ exp.title }</h3>
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