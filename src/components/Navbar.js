import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css'; // Özel CSS dosyasını ekleyin
import logo from '../assets/logo.png'; // Logonun dosya yolunu buraya ekleyin

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('about'); // Aktif bağlantı durumu

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-gray-900 text-white py-4 fixed w-full top-0 left-0 z-50">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center justify-between w-full md:w-auto">
                    <div className="hidden md:block"> {/* Sadece masaüstü görünümünde göster */}
                        <img src={logo} alt="Logo" className="navbar-logo-img" />
                    </div>
                    <a href="#top" className="navbar-logo">
                        Realmeme.ai
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
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            className={`cursor-pointer ${activeLink === 'about' ? 'active' : ''}`}
                            onClick={() => setActiveLink('about')}
                        >
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="tokenomics"
                            smooth={true}
                            duration={500}
                            className={`cursor-pointer ${activeLink === 'tokenomics' ? 'active' : ''}`}
                            onClick={() => setActiveLink('tokenomics')}
                        >
                            TOKENOMICS
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="roadmap"
                            smooth={true}
                            duration={500}
                            className={`cursor-pointer ${activeLink === 'roadmap' ? 'active' : ''}`}
                            onClick={() => setActiveLink('roadmap')}
                        >
                            ROADMAP
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="whitepaper"
                            smooth={true}
                            duration={500}
                            className={`cursor-pointer ${activeLink === 'whitepaper' ? 'active' : ''}`}
                            onClick={() => setActiveLink('whitepaper')}
                        >
                            WHITEPAPER
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="social"
                            smooth={true}
                            duration={500}
                            className={`cursor-pointer ${activeLink === 'social' ? 'active' : ''}`}
                            onClick={() => setActiveLink('social')}
                        >
                            SOCIAL LINKS
                        </Link>
                    </li>
                </ul>

                <a href="#buy-now" className="buy-now-button">
                    Buy Now
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
