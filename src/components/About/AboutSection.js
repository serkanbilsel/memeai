import React from 'react';
import ReactPlayer from 'react-player';
import { Zoom, Fade } from 'react-awesome-reveal';
import './AboutSection.css';
import logo from '../../assets/logo.png';
import aiVideo from '../../assets/bgspace.mp4'; 

const AboutSection = () => {
    return (
        <section id="about" className="about-section">
            <ReactPlayer 
                url={aiVideo} 
                playing 
                loop 
                muted 
                width="100%" 
                height="100%" 
                className="background-video"
                config={{
                    file: {
                        attributes: {
                            preload: 'auto',
                        },
                    },
                }}
            />
            <div className="container mx-auto text-center">
                <Zoom>
                    <img src={logo} alt="Realmeme.ai Logo" className="animated-logo" />
                </Zoom>
                <Fade cascade>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 hero-title">
                         <span className="text-white">MEME</span> AI
                    </h1>
                </Fade>
                <Fade cascade delay={300}>
                    <p className="text-lg leading-relaxed text-shadow">
                        We are diversifying community-created memes with artificial intelligence! At MemeAI, we're pioneering the future of memes with:
                    </p>
                </Fade>
                <Fade cascade delay={500}>
                    <ul className="list-disc list-inside text-left text-shadow mt-6">
                        <li><strong>Automatic Meme Generation:</strong> Instantly create hilarious and relevant memes with our AI-powered meme generator.</li>
                        <li><strong>Animated Meme Conversion:</strong> Turn your favorite memes into engaging animated videos.</li>
                        <li><strong>AI Support for Meme Coins:</strong> Enhance your meme coins with AI-driven insights and strategies.</li>
                        <li><strong>Meme Coin Development:</strong> Collaborate with us to develop innovative meme coins through our strategic partnerships.</li>
                    </ul>
                </Fade>
            </div>
        </section>
    );
};

export default AboutSection;
