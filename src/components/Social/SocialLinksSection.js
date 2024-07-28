import React from 'react';
import ReactPlayer from 'react-player';
import contactBg from '../../assets/contactbg.mp4'; // Arka plan videosu
import './Social.css';

const SocialLinksSection = () => {
    return (
        <section id="social" className="bg-gray-900 text-white py-4 md:py-6 relative">
            <ReactPlayer
                url={contactBg}
                playing
                loop
                muted
                width="100%"
                height="100%"
                className="socialbgvideo"
                config={{
                    file: {
                        attributes: {
                            preload: 'auto',
                            playsInline: true,
                            controls: false,
                        },
                    },
                }}
            />
            <div className="container mx-auto text-center px-4 relative z-10">
                <h2 className="text-lg md:text-xl font-bold mb-2">Contact Us</h2>
                <div className="flex justify-center space-x-4 mb-2">
                    <a href="https://x.com/MemeAIreal" className="text-blue-400 hover:text-blue-500 icon" aria-label="Twitter">
                        <i className="fab fa-twitter fa-lg md:fa-xl"></i>
                    </a>
                    <a href="mailto:mememaxai@gmail.com" className="text-blue-400 hover:text-gray-300 icon" aria-label="Email">
                        <i className="fas fa-envelope fa-lg md:fa-xl"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SocialLinksSection;
