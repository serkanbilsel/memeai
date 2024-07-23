import React from 'react';

const SocialLinksSection = () => {
    return (
        <section id="social" className="bg-gray-900 text-white py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Social Links</h2>
                <div className="flex justify-center space-x-6">
                    <a href="https://twitter.com/realmemeai" className="text-blue-400 hover:underline">Twitter</a>
                    <a href="https://discord.gg/realmemeai" className="text-blue-400 hover:underline">Discord</a>
                    <a href="https://medium.com/realmemeai" className="text-blue-400 hover:underline">Medium</a>
                </div>
            </div>
        </section>
    );
};

export default SocialLinksSection;
