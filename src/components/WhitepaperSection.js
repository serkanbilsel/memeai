import React from 'react';
import ReactPlayer from 'react-player';
import aiVideo from '../assets/whitepaper.mp4';

const WhitepaperSection = () => {
    return (

        <section id="roadmap" className="bg-gray-200 py-16">
            <div className="container mx-auto text-center">
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
            </div>
        </section>
    );
};



export default WhitepaperSection;
