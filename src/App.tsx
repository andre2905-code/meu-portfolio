
import './App.css'
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import project1 from './assets/aamdias_movie_streaming_platform_react_john_travolta_web_develo_c9ada2f7-8e03-4a17-8611-6041939fc03a 1.png'

function App() {

  return (
    <>
      <Header/>
      <div className="mt-8 grid gap-4 p-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(auto-fill,320px)]">
        <ProjectCard projectName="Plataforma de Streaming de Filmes" tags={ ['React.js', 'Tailwind', 'HTML'] } slug='#' image={ project1 }/>
        <ProjectCard projectName="Plataforma de Streaming de Filmes" tags={ ['React.js', 'Tailwind', 'HTML'] } slug='#' image={ project1 } />
        <ProjectCard projectName="Plataforma de Streaming de Filmes" tags={ ['React.js', 'Tailwind', 'HTML'] } slug='#' image={ project1 } />
      </div>
    </>
  )
}

export default App;
