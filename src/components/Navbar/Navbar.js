import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleLinkClick = (path) => {
        if (location.pathname === '/') {
            document.getElementById(path)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="bg-gray-900 text-white py-4 fixed w-full top-0 left-0 z-50">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="navbar-logo-img" />
                    <a href="/" className="navbar-logo">
                        MemeAI
                    </a>
                    
                </div>

                <button
                    className="block md:hidden text-white"
                    onClick={toggleMenu}
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>

                <ul className={`md:flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 mt-4 md:mt-0 ${isOpen ? 'block' : 'hidden'} md:justify-center w-full`}>
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
                            to="/"
                            className="cursor-pointer"
                            onClick={() => handleLinkClick('tokenomics')}
                        >
                            TOKENOMICS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/"
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

                <a href="https://pancakeswap.finance/swap?outputCurrency=0x64c13d943CF06611542805E5074495aAc43Fc6F0" target='_blank' className="buy-now-button">
                    Buy Now
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
