import React from 'react';
import ReactPlayer from 'react-player';
import aiVideo from '../../assets/whitepaper.mp4';
import "./WhitePaper.css"

const WhitepaperSection = () => {
    return (
        <section id="whitepaper" className="relative">
            <div className="">
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
                            },
                        },
                    }}
                />
            </div>
          
        </section>
    );
};

export default WhitepaperSection;
