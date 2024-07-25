import React from 'react';
import roadmapImage from '../../assets/roadmap.png'; 
const RoadmapSection = () => {
    return (
        <section id="roadmap" className="relative bg-gray-200 py-36">
            <div className="container mx-auto text-center">
            
            </div>
            <div className="absolute inset-0">
                <img
                    src={roadmapImage}
                    alt="Roadmap"
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    );
};

export default RoadmapSection;
