import { useEffect, useRef, useState } from "react";
import profileImage from '../assets/andre-reis-web-developer.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa'

function Header() {
  const [activeLink, SetActiveLink] = useState('sobre');
  const headerRef = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if(window.scrollY > 0) {
          headerRef.current.classList.add('bg-dark-900', 'py-4', 'bg-opacity-80');
          headerRef.current.classList.remove('py-8', 'bg-opacity-50');
        } else {
          headerRef.current.classList.remove('bg-dark-900', 'py-4', 'bg-opacity-80');
          headerRef.current.classList.add('py-8', 'bg-opacity-50');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.addEventListener('scroll', handleScroll);
  }, [])

  return (
    <div className="bg-dark-600 h-screen w-full" id="sobre">
      <header 
        className="fixed w-full flex justify-around items-center py-8 px-12 transition-all duration-500 ease-in-out bg-opacity-50" 
        ref={ headerRef }
      >
        <p className="text-green-500 font-bold text-lg">@andresreis</p>
        <nav className="flex gap-2 text-white">
          <a 
            href="#sobre" 
            className={ `${activeLink === 'sobre' && 'text-green-500'}` }
            onClick={ () => SetActiveLink('sobre') }
          >
            Sobre
          </a>
          <a 
            href="#projetos" 
            className={ `${activeLink === 'projetos' && 'text-green-500'}` }
            onClick={ () => SetActiveLink('projetos') }
          >
            Projetos
          </a>
        </nav>
      </header>
      <div className="h-full flex items-center justify-between gap-4 max-w-screen-xl mx-auto p-8">
        <div className="text-white">
          <h1 className="text-6xl font-bold">André Reis</h1>
          <p className="text-2xl text-green-500">Desenvolvedor full-stack</p>

          <div className="flex gap-4 mt-8">
            <a href="https://" className="flex items-center gap-2 hover:text-green-500 transition-all duration-300 ease-in-out">
              <FaLinkedin size={ 24 }/>
              Linkedin
            </a>
            <a href="https://" className="flex items-center gap-2 hover:text-green-500 transition-all duration-300 ease-in-out">
              <FaGithub size={ 24 }/>
              Github
            </a>
          </div>
        </div>
        <div>
          <img src={ profileImage } alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header;