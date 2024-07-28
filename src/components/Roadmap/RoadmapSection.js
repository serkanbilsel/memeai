import React, { useState, useEffect } from 'react';
import roadmapImage from '../../assets/roadmap.png'; 
import roadmapImageVertical from '../../assets/roadmapvertical.png'; 

import './Roadmap.css'; // CSS dosyanızı bu şekilde ekleyin

const RoadmapSection = () => {
    const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);

    const handleResize = () => {
        setIsPortrait(window.innerHeight > window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section id="roadmap" className="roadmap-container relative h-screen w-screen overflow-hidden">
            <img
                src={roadmapImage}
                alt="Roadmap"
                className="roadmap-image absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
            />
            <img
                src={roadmapImageVertical}
                alt="Roadmap Vertical"
                className="roadmap-image-vertical absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
            />
         
        </section>
    );
};

export default RoadmapSection;
