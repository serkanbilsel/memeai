
import roadmapImage from '../../assets/roadmap.png'; 

import './Roadmap.css'; // CSS dosyanızı bu şekilde ekleyin

const RoadmapSection = () => {
  

    return (
        <section id="roadmap" className="roadmap-container  bg-gradient-to-t from-blue-900 to-cyan-700">
            <img
                src={roadmapImage}
                alt="Roadmap"
                className="roadmap-image absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
            />
 
        </section>
    );
};

export default RoadmapSection;
