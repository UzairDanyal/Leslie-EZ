import React from "react";



const Paage19 = () => {

   // Scroll to top function
   const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="min-h-screen bg-yellow-50 text-gray-800 flex flex-col items-center justify-center p-6">
      {/* Title */}
      <h1 className="text-5xl font-bold text-gray-900 mb-12 drop-shadow-md">
        Letter of Reference
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {/* Left Column: Description */}
        <div className="flex flex-col justify-center items-start rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold drop-shadow-xl whitespace-nowrap mb-4 text-gray-800">
            Why a Letter of Reference Matters
          </h2>
          <p className="text-gray-600 font-bold text-2xl">
            A letter of reference is a powerful endorsement that provides insight into your character, skills, and accomplishments. Watch the video to learn more about crafting a compelling reference.
          </p>
        </div>

        {/* Right Column: YouTube Video */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="w-full h-64 sm:h-80 md:h-[500px]">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/0B7x1nsGz6E"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
          {/* Back to Top Button (Bottom-right) */}
      <div
        className="fixed bottom-8 right-8 p-4 rounded-full cursor-pointer transition transform hover:scale-110"
        onClick={scrollToTop}
      >
         <img
            src="/assets/images/button page up.webp"
            alt="Go Back"
            className="w-[110px] h-[130px] hover:opacity-80 transition duration-300 transform hover:scale-110"
          />
        
      </div>

      {/* Back Button (Bottom-left) */}
      <div className="fixed bottom-8 left-8">
        <a href="/Proof" className="inline-block">
          <img
            src="/assets/images/button back.webp"
            alt="Go Back"
            className="w-[120px] h-[120px] hover:opacity-80 transition duration-300 transform hover:scale-110"
          />
        </a>
      </div>
      </div>
    </div>
  );
};

export default Paage19;
