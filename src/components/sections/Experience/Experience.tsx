import Experiences from "./Experiences";

function Experience () {
  return (
    <div className="bg-dark-900">
      <section className="max-w-screen-xl mx-auto  p-8 text-white">
        <div className="flex mb-24 flex-col items-center gap-6 md:justify-between md:gap-0 md:items-start md:flex-row">
          <h2 className="text-center text-3xl mb-4 text-white font-bold">
            Experiência
          </h2>
          <div className="max-w-4xl md:w-3/4 ">
            <Experiences />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;