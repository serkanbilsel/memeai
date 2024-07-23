import React from 'react';
import './HeroSection.css'; // CSS dosyasını ekleyin
import ReactPlayer from 'react-player';
import aiVideo from '../assets/bgscience.mp4'; // Yeni video dosyanızın yolunu buraya ekleyin

const HeroSection = () => {
    return (
        <section id="hero" className="relative flex flex-col items-center justify-center">
            <div className="absolute inset-0 overflow-hidden">
                <ReactPlayer
                    url={aiVideo} // Yeni video URL'sini burada kullanın
                    playing
                    loop
                    muted
                    width="100%"
                    height="100%"
                    className="object-cover"
                />
                <div className="bg-black opacity-50"></div> {/* Karanlık efekti için */}
            </div>
            <div className="relative z-10 px-4 md:px-8 py-8 md:py-16 flex flex-col justify-center items-center">
                <div className="mt-8 space-y-2">
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-4 animate-text">Welcome to Realmeme.ai</h1>
                    <br />
                    <p className="text-lg md:text-2xl mb-8 animate-text">The Future of Meme Coins with AI Technology</p>
                    <p className="animate-text">We are diversifying community-created memes with artificial intelligence!</p>
                    <p className="animate-text">Automatic Meme Generator</p>
                    <p className="animate-text">Converting memes into animated videos</p>
                    <p className="animate-text">AI support for Meme Coins</p>
                    <p className="animate-text">And developing meme coins through our partnership.</p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
