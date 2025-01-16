
import './App.css'
import Header from './components/Header';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { Experience } from './components/sections/Experience';
import { ProjectList } from './components/sections/Projects';


function App() {

  return (
    <>
      <Header/>
      <About />
      <ProjectList />
      <Experience />
      <Contact />
    </>
  )
}
       
export default App;
