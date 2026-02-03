import { useState } from "react";

export default function Navbar(){

    const [isOpen, setIsOpen] = useState(false);

    return(
        <nav className="m-5 flex justify-between gap-10 items-center relative box-shadow-bottom">
            <img src="src/assets/logo.png" alt="KPN logo" className="logo-navbar"></img>

            {/* Hamburger button - visibile solo su mobile */}
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="lg:hidden flex flex-col space-y-1 p-2"
                aria-label="Toggle menu"
            >
                <span className={`block h-0.5 w-6 bg-lime-400 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-lime-400 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block h-0.5 w-6 bg-lime-400 transition-transform duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>

            <ul className={`nav-voices-font gap-10 text-xl text-lime-400 font-semibold italic uppercase
            ${isOpen ? 'flex flex-col absolute top-full left-0 w-full backdrop-blur shadow-lg py-4 md:relative md:flex md:flex-row md:py-0 md:bg-transparent md:shadow-none' : 'hidden md:flex'}`
            }>
                <li>Home</li>
                <li>il park</li>
                <li>la sala prove</li>
                <li>Contatti</li>
            </ul>
        </nav>
    )
}