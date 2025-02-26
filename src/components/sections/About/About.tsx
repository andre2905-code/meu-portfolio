import HardSkills from "./HardSkills";
import SoftSkills from "./SoftSkills";

function About() {
  return (
    <div className="bg-dark-900">
      <section className="max-w-screen-xl mx-auto p-8 text-white">
        <div className="flex justify-between mb-24">
          <h2 className="text-center text-3xl mb-4 text-white font-bold">
            Sobre mim
          </h2>
          <div className="max-w-4xl w-3/4 ">
            <p>
              Olá! Sou André Reis, desenvolvedor web apaixonado por tecnologia. Tenho certificações em JavaScript, HTML5 e CSS3, além de curta experiência com PHP, SQL e React.js. Atualmente, me aprofundo em Laravel e React.js no desenvolvimento de interfaces escaláveis.
              <br /><br />
              Curso Engenharia da Computação na UNIVESP (Universidade Virtual do Estado de São Paulo) e Fundamentos de Front-end na Trybe, sempre buscando desafios para crescer e criar soluções inovadoras.
            </p>
          </div>
        </div>  

        <div className="flex justify-between">
          <h1 className="text-center text-3xl text-white font-bold">
            Habilidades
          </h1>
          <div className="max-w-4xl w-3/4">
            <HardSkills />
            <SoftSkills />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
