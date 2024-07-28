import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import aiVideoHorizontal from '../../assets/whitepaper.mp4'; // Yatay video
import aiVideoVertical from '../../assets/whitapepervertical.mp4'; // Dikey video
import "./WhitePaper.css";

const WhitepaperSection = () => {
    const [videoUrl, setVideoUrl] = useState(() => {
        return window.innerWidth <= 767 ? aiVideoVertical : aiVideoHorizontal;
    });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 767 && videoUrl !== aiVideoVertical) {
                setVideoUrl(aiVideoVertical);
            } else if (window.innerWidth > 767 && videoUrl !== aiVideoHorizontal) {
                setVideoUrl(aiVideoHorizontal);
            }
        };

        // Pencere boyutunu dinleyerek güncelle
        window.addEventListener('resize', handleResize);

        // Temizleme işlevi ile olay dinleyicisini kaldır
        return () => window.removeEventListener('resize', handleResize);
    }, [videoUrl]);

    return (
        <section id="whitepaper" className="relative">
            <div className="video-container">
                <ReactPlayer
                    url={videoUrl}
                    playing
                    loop
                    muted
                    width="100%"
                    height="100%"
                    className="object-cover react-player"
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
            </div>
        </section>
    );
};

export default WhitepaperSection;
