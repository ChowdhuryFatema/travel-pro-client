

const Blogs = () => {
    return (
        <div className="max-w-7xl mx-auto px-5">
            <div className="dark:bg-gray-100 dark:text-gray-900">
                <div className="container grid grid-cols-12 mx-auto">
                    <div className="flex flex-col justify-center col-span-12 align-middle dark:bg-gray-300 bg-no-repeat bg-cover lg:col-span-6 lg:h-auto blog">
                        <div className="flex flex-col items-center p-8 py-12 text-center dark:text-gray-800 text-white">
                            <h1 className="w-4/5 py-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white">Exploring the Heart <span className="text-[#FF0000]">of Travel</span></h1>
                            <p className="pb-6">Embark on a transformative voyage through captivating landscapes, diverse cultures, and unforgettable experiences in Voyages of Discovery: Exploring the Heart of Travel</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 dark:divide-gray-300">
                        <div className="pt-6 pb-4 space-y-2">
                            <span>12 June</span>
                            <h1 className="text-3xl font-bold text">Tales of Adventure and Reflection</h1>
                            <p>Embark on a journey of self-discovery and exploration as you traverse the globe through Wanderlust Chronicles, where every destination becomes a chapter in the story of your life.</p>
                            <a rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-600">
                                <span>Read more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="pt-6 pb-4 space-y-2">
                            <span>15 March</span>
                            <h1 className="text-3xl font-bold">Beyond Borders: Unveiling the World Wonders</h1>
                            <p>Discover the magic that lies beyond borders in Beyond Borders, where each destination unveils the worlds wonders, connecting you to the diverse tapestry of humanity and nature.</p>
                            <a rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-600">
                                <span>Read more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;