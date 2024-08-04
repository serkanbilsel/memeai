import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import aiVideoHorizontal from '../../assets/whitepaper.mp4'; // Yatay video
import './WhitePaper.css';

const WhitepaperSection = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="whitepaper">
            <div className="video-container">
                {isMobile ? (
                    <ReactPlayer
                        url={aiVideoHorizontal}
                        playing
                        loop
                        muted
                     
                        className="react-player-mobile"
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
                ) : (
                    <ReactPlayer
                        url={aiVideoHorizontal}
                        playing
                        loop
                        muted
                        width="100%"
                        height="100%"
                        className="react-player-web"
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
                )}
            </div>
        </section>
    );
};

export default WhitepaperSection;
