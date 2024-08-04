import React from 'react';
import './HeroSection.css';
import ReactPlayer from 'react-player';
import aiVideo from '../../assets/bgscience.mp4'; 
import logo from "../../assets/logo.png";
import Slider from "react-slick"; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import dexImage from '../../assets/static/dex.webp';
import dexScannerImage from '../../assets/static/dexscanner.webp';
import metaImage from '../../assets/static/meta.webp';
import cmc from '../../assets/static/cmc.webp';
import coingecko from '../../assets/static/coingecko.png';
import poo from '../../assets/static/poo.webp';
import trust from '../../assets/static/trust.png'; 
import pancake from '../../assets/static/pancake.png'; 


const HeroSection = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 1000, // Kaymanın süresi
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000, // Her 5 saniyede bir kayma
        arrows: false,
    };

    return (
        <section id="hero" className="relative flex flex-col items-center justify-center h-screen">
             <div className="absolute inset-0 overflow-hidden">
                <ReactPlayer
                    url={aiVideo}
                    playing
                    loop
                    muted
                    width="100%"
                    height="100%"
                    className="object-cover"
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
                <div className="bg-black"></div> 
            </div> *

            <div className="relative z-10 flex flex-col md:flex-row items-start justify-between w-full max-w-screen-lg px-4 md:px-8 py-8 md:py-16">
              
                <div className="flex-1 flex flex-col justify-center space-y-4 text-left">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 hero-title">
                         <span className="text-white">MEME</span> AI 
                    </h1>
                    <p className="text-lg md:text-2xl mb-8 text-white">
                        We are diversifying community - created memes with artificial intelligence!
                    </p>
                    <p className="text-white mb-4">Automatic Meme Generator</p>
                    <p className="text-white mb-4">Converting memes into animated videos</p>
                    <p className="text-white mb-4">AI support for Meme Coins</p>
                    <p className="text-white">And developing meme coins through our partnership.</p>
                </div>

         
                <div className="flex-none ml-auto mb-8">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
            </div>

            <div className="relative z-10 flex flex-col w-full px-4 md:px-8 py-8 md:py-16">
        
                <div className="slider-container flex-1 mt-8 md:mt-0">
                    <Slider {...sliderSettings}>
         
                        <div><img src={dexImage} alt="Dex UI" className="slider-image" /></div>
                        <div><img src={dexScannerImage} alt="Dex Scanner UI" className="slider-image" /></div>
                        <div><img src={metaImage} alt="Meta UI" className="slider-image" /></div>
                        <div><img src={trust} alt="Trustwallet" className="slider-image" /></div>
                        <div><img src={cmc} alt="Coinmarketcap" className="slider-image" /></div>
                        <div><img src={pancake} alt="Pancakeswap" className="slider-image" /></div>
                        <div><img src={poo} alt="Poocoin" className="slider-image" /></div>
                        <div><img src={coingecko} alt="Coingecko" className="slider-image" /></div>
                    </Slider>
                </div>
            </div>
            <button className='scroll-to-top'
                onClick={scrollToTop}
                aria-label='Scroll to top'>
                <svg className="w-6 h-6 text-gray-300 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M5.575 13.729C4.501 15.033 5.43 17 7.12 17h9.762c1.69 0 2.618-1.967 1.544-3.271l-4.881-5.927a2 2 0 0 0-3.088 0l-4.88 5.927Z" clipRule="evenodd" />
                </svg>
            </button>
        </section>
    );
};

export default HeroSection;
