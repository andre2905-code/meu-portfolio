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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              recusandae veniam dolor aperiam rerum! Libero, illum eos
              laudantium quo facilis dolores, excepturi iste laborum possimus id
              adipisci totam, repudiandae repellendus! Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Soluta commodi impedit fuga
              consequuntur ea inventore reprehenderit, dolore molestiae eaque,
              quisquam odio accusantium sint dolor cum, minima vitae saepe
              nostrum aut?
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
