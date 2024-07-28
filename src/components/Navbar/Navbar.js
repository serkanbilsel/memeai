import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleLinkClick = (path) => {
        setIsOpen(false); // Menü kapanıyor
        if (window.location.pathname === '/') {
            document.getElementById(path)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.hash = `#${path}`;
        }
    };


    return (
        <nav className="bg-gray-900 d-sm-flex text-white  py-2 w-full top-0 left-0 z-50">
            <div className="container mx-auto flex items-center justify-between ">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="navbar-logo-img" />
                    <NavLink to="/" className="navbar-logo">
                        <span className="text-white">MEME</span> AI
                    </NavLink>
                </div>
                <button
                    className="block md:hidden text-white ml-auto"
                    onClick={toggleMenu}
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                <ul className="hidden md:flex flex-col ml- md:flex-row md:space-x-6 space-y-4 md:space-y-0 mt-4 md:mt-0 md:justify-center w-full ">
                    <li>
                        <NavLink
                            to="/"
                            className="cursor-pointer"
                            onClick={() => handleLinkClick('hero')}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/"
                            className="cursor-pointer"
                            onClick={() => handleLinkClick('about')}
                        >
                            ABOUT
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/tokenomics"
                            className="cursor-pointer"
                            onClick={() => handleLinkClick('tokenomics')}
                        >
                            TOKENOMICS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/roadmap"
                            className="cursor-pointer"
                            onClick={() => handleLinkClick('roadmap')}
                        >
                            ROADMAP
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/whitepaper"
                            className="cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            WHITEPAPER
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/"
                            className="cursor-pointer"
                            onClick={() => handleLinkClick('social')}
                        >
                            SOCIAL LINKS
                        </NavLink>
                    </li>
                </ul>
                <a 
                    href="https://pancakeswap.finance/swap?outputCurrency=0x64c13d943CF06611542805E5074495aAc43Fc6F0" 
                    target='_blank'  
                    rel="noopener noreferrer" 
                    className="buy-now-button"
                >
                    Buy Now
                </a>
            </div>
            <div className={`side-menu ${isOpen ? 'open' : ''}`}>
                <button className="close-button" onClick={toggleMenu}>&times;</button>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className="cursor-pointer"
                            onClick={() => handleLinkClick('hero')}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/"
                            className="cursor-pointer"
                            onClick={() => handleLinkClick('about')}
                        >
                            ABOUT
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/tokenomics"
                            className="cursor-pointer"
                            onClick={() => handleLinkClick('tokenomics')}
                        >
                            TOKENOMICS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/roadmap"
                            className="cursor-pointer"
                            onClick={() => handleLinkClick('roadmap')}
                        >
                            ROADMAP
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/whitepaper"
                            className="cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            WHITEPAPER
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/"
                            className="cursor-pointer"
                            onClick={() => handleLinkClick('social')}
                        >
                            SOCIAL LINKS
                        </NavLink>
                    </li>
                </ul>
                
            </div>
        </nav>
    );
};

export default Navbar;
