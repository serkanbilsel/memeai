import React from 'react';

const SocialLinksSection = () => {
    return (
        <section id="social" className="bg-gray-900 text-white py-4 md:py-6">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-lg md:text-xl font-bold mb-2">Contact Us</h2>
                <div className="flex justify-center space-x-4 mb-2">
                    <a href="https://x.com/MemeAIreal" className="text-blue-400 hover:text-blue-500" aria-label="Twitter">
                        <i className="fab fa-twitter fa-lg md:fa-xl"></i>
                    </a>
                   
                    <a href="mailto:mememaxai@gmail.com" className="text-blue-400 hover:text-gray-300" aria-label="Email">
                        <i className="fas fa-envelope fa-lg md:fa-xl"></i>
                   </a>
                  
                </div>
            </div>
        </section>
    );
};

export default SocialLinksSection;
