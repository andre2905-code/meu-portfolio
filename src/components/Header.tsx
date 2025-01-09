import { useEffect, useRef, useState } from "react";

function Header() {
  const [activeLink, SetActiveLink] = useState('sobre');
  const headerRef = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if(window.scrollY > 0) {
          headerRef.current.classList.add('bg-zinc-900', 'py-4', 'bg-opacity-80');
          headerRef.current.classList.remove('py-8', 'bg-opacity-50');
        } else {
          headerRef.current.classList.remove('bg-zinc-900', 'py-4', 'bg-opacity-80');
          headerRef.current.classList.add('py-8', 'bg-opacity-50');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.addEventListener('scroll', handleScroll);
  }, [])

  return (
    <div className="bg-zinc-800 h-screen w-full">
      <header 
        className="fixed w-full flex justify-between items-center p-8 transition-all duration-500 ease-in-out bg-opacity-50" 
        ref={ headerRef }
      >
        <p className="text-lime-400 font-bold text-lg">@andresreis</p>
        <nav className="flex gap-2 text-white">
          <a 
            href="#sobre" 
            className={ `${activeLink === 'sobre' && 'text-lime-400'}` }
            onClick={ () => SetActiveLink('sobre') }
          >
            Sobre
          </a>
          <a 
            href="#projetos" 
            className={ `${activeLink === 'projetos' && 'text-lime-400'}` }
            onClick={ () => SetActiveLink('projetos') }
          >
            Projetos
          </a>
        </nav>
      </header>
    </div>
  )
}

export default Header;