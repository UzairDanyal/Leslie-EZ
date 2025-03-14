import React, { useState } from "react";
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const Paage2 = () => {
  // State to manage whether the paragraph is expanded or not
  const [isExpandedParagraph1, setIsExpandedParagraph1] = useState(false);
  const [isExpandedParagraph2, setIsExpandedParagraph2] = useState(false);
  const [isExpandedParagraph3, setIsExpandedParagraph3] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // Function to toggle the expanded state
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to navigate back
  const navigateBack = () => {
    window.history.back();
  };

  return (
    <div className="bg-gray-50 font-sans">
    <div id="page-container" className="min-h-screen">
      <div id="main-content">
        <article className="post page">
          <div className="entry-content">
            {/* Section 1 */}
            <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-10 relative">
              <div className="flex items-center">
                {/* Big solid "2" on the far left */}
                <div className="absolute left-0 down-10 h-full flex items-start">
                  <span className="text-[130px] font-bold text-white leading-none">
                    2
                  </span>
                </div>
                {/* Content on the right */}
                <div className="w-full mx-auto px-4">
                  <div className="text-center">
                    <h2 className="text-6xl font-bold text-white animate-pulse shadow-2xl hover:shadow-4xl transition-shadow duration-300 transform hover:scale-105">
                      <span className="inline-block">
                        Fashion And All Type Of Photography
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
            </section>
  
    

             {/* Section 2 */}
{/* Section 2 */}
<section className="bg-black py-10">
  <div className="max-w-7xl mx-auto px-4 text-center text-white">
    {/* First Paragraph */}
    <div className="mb-8 relative">
      <p className="text-gray-300 text-3xl font-bold leading-relaxed inline-block">
        {/* Show only one line if not expanded, otherwise show full text */}
        {isExpandedParagraph1 ? (
          <>
            I started a photographic company when I was 14 years old and ended up doing fashion photography for 25 years. I even had my own darkroom and developed all my own prints and films.
            <button
              onClick={() => setIsExpandedParagraph1(!isExpandedParagraph1)}
              className="inline-flex items-center ml-2 align-middle relative top-[3px]"
            >
              <ChevronUp className="text-yellow-400 w-[80px] h-[80px]" />
            </button>
          </>
        ) : (
          <>
            I started a photographic company when I was...
            <button
              onClick={() => setIsExpandedParagraph1(!isExpandedParagraph1)}
              className="inline-flex items-center ml-2 align-middle relative top-[3px]"
            >
              <ChevronDown className="text-yellow-400 w-[80px] h-[80px]" />
            </button>
          </>
        )}
      </p>
    </div>

    {/* Second Paragraph */}
    <div className="mb-8 relative">
      <p className="text-gray-300 text-3xl font-bold leading-relaxed inline-block">
        {/* Show only one line if not expanded, otherwise show full text */}
        {isExpandedParagraph2 ? (
          <>
            I ended up working for some police agencies in the U.S. because I merged with a Company that got Military Intelligence contracts from the Americans. THE WORK WAS VERY DANGEROUS BUT THE MONEY WAS VERY GOOD. We even had our own aircraft to fly over Columbia to photograph the poppy fields. That was before drones. After a few close calls, I decided that I would go back to the fashion world and ended up creating all kinds of professional photographic Equipment with my partner using lots of Electronics.
            <button
              onClick={() => setIsExpandedParagraph2(!isExpandedParagraph2)}
              className="inline-flex items-center ml-2 align-middle relative top-[3px]"
            >
              <ChevronUp className="text-yellow-400 w-[80px] h-[80px]" />
            </button>
          </>
        ) : (
          <>
            I ended up working for some police agencies in the U.S..
            <button
              onClick={() => setIsExpandedParagraph2(!isExpandedParagraph2)}
              className="inline-flex items-center ml-2 align-middle relative top-[3px]"
            >
              <ChevronDown className="text-yellow-400 w-[80px] h-[80px]" />
            </button>
          </>
        )}
      </p>
    </div>
   {/* Second Paragraph */}
   <div className="mb-8 relative">
      <p className="text-gray-300 text-3xl font-bold leading-relaxed inline-block">
        {/* Show only one line if not expanded, otherwise show full text */}
        {isExpandedParagraph3 ? (
          <>
             He was an Electronics and Electrical Engineer and designed all the telecommunications for all the police organizations. So I went back to school to Take electronics and I had so many job offers, that when I got out of school, I decided not to go back to my company. But we had one of the best photo studios in Toronto, with some of the best hair stylists and makeup artists in the business. Our Mandate was simple. Give excellent service, deliver an excellent product for a reasonable price, and make sure every customer is happy when they walk out the door. A happy customer is always a return customer.
            <button
              onClick={() => setIsExpandedParagraph3(!isExpandedParagraph3)}
              className="inline-flex items-center ml-2 align-middle relative top-[3px]"
            >
              <ChevronUp className="text-yellow-400 w-[80px] h-[80px]" />
            </button>
          </>
        ) : (
          <>
             He was an Electronics and Electrical Engineer and designed...
            <button
              onClick={() => setIsExpandedParagraph3(!isExpandedParagraph3)}
              className="inline-flex items-center ml-2 align-middle relative top-[3px]"
            >
              <ChevronDown className="text-yellow-400 w-[80px] h-[80px]" />
            </button>
          </>
        )}
      </p>
    </div>
  
    


    {/* Image Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <img
        src="https://proof.ez123.eu/wp-content/uploads/2022/03/pasted-image-688x635-1.jpg"
        alt="Photography"
        className="w-full h-auto object-cover rounded shadow-md"
      />
      <img
        src="https://proof.ez123.eu/wp-content/uploads/2022/03/pasted-image-703x462-1.jpg"
        alt="Photography"
        className="w-full h-auto object-cover rounded shadow-md"
      />
      <img
        src="https://proof.ez123.eu/wp-content/uploads/2022/03/pasted-image-278x606-1.jpg"
        alt="Photography"
        className="w-[150px] h-auto object-cover rounded shadow-md"
      />
      <img
        src="https://proof.ez123.eu/wp-content/uploads/2022/03/pasted-image-402x583-1.jpg"
        alt="Photography"
        className="w-[200px] h-auto object-cover rounded shadow-md"
      />
    </div>
  </div>
</section>
<section className="bg-blue-400 py-10">
      <div className="max-w-7xl mx-auto px-4 text-center text-white">
        {/* Text Section */}
        <div className="mb-[100px]">
          <p className="text-gray-300 text-6xl font-bold leading-relaxed">
            MY OLD PICTURE
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center relative">
          {/* Left Arrow */}
          <div className="absolute left-[350px] top-[20%] transform -translate-y-1/2 text-center">
    <ChevronLeft className="text-yellow-400 w-[100px] h-[100px]" />
    <p className="text-yellow-400 absolute right-[80px] top-[-10px] text-4xl font-bold mt-2">HIS GIRLFRIEND</p>
  </div>

  {/* Right Arrow with Text */}
  <div className="absolute right-[350px] top-[10%] transform -translate-y-1/2 text-center">
    <ChevronRight className="text-yellow-400 w-[100px] h-[100px]" />
    <p className="text-yellow-400  absolute left-[80px] top-[-10px] text-4xl font-bold mt-2">BUSINESS PARTNER </p>
  </div>

  {/* Upward Arrow with Text */}
  <div className="absolute top-[-70px] left-[48%] transform -translate-x-1/2 text-center">
    <ChevronUp className="text-yellow-400 w-[100px] h-[100px]" />
    <p className="text-yellow-400 absolute left-[-10px] top-[-20px] text-4xl font-bold mt-2">MYSELF</p>
  </div>

          {/* Image */}
          <img
            src="/assets/images/lorna.jpg"
            alt="Photography"
            className="w-[400px] h-auto object-cover rounded shadow-md transition-transform transform cursor-pointer "
            onClick={toggleModal}
          />
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="relative">
              <img
                src="/assets/images/lorna.jpg"
                alt="Enlarged Photography"
                className="w-auto max-w-[90vw] max-h-[90vh] object-contain rounded shadow-lg"
              />
              {/* Close Button */}
              <button
                onClick={toggleModal}
                className="absolute top-2 right-2 text-white bg-red-500 p-2 rounded-full hover:bg-red-600"
              >
                ✕
              </button>
            </div>
          </div>
        )}

    {/* Border Line Animation Section */}
    <div className="mt-8 relative">
      <div className="absolute inset-x-0 bottom-0 h-[25px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-80 animate-pulse"></div>
    </div>




  </div>
  </section>
<section className="bg-blue-400 py-10">
  <div className="max-w-7xl mx-auto px-4 text-center text-white">
    {/* Text Section */}
    <div className="mb-[50px]">
    <p className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 leading-tight drop-shadow-2xl">
        PORTFOLIO
      </p>
    </div>

    {/* Image Section */}
    <div className="flex justify-center items-center">
      <img
        src="/assets/images/fashio2.gif"
        alt="Photography"
        className="w-[600px] h-auto object-cover rounded shadow-md transition-transform transform hover:scale-110 hover:translate-y-[-20px]"
      />
    </div>

    {/* Border Line Animation Section */}
    <div className="mt-8 relative">
      <div className="absolute inset-x-0 bottom-0 h-[25px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-80 animate-pulse"></div>
    </div>




  </div>
  </section>
<section className="bg-blue-400 py-10">
  <div className="max-w-7xl mx-auto px-4 text-center text-white">
    {/* Text Section */}
    <div className="mb-[50px]">
    <p className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 leading-tight drop-shadow-2xl">
        CONTACT SHEETS
      </p>
    </div>

    {/* Image Section */}
    <div className="flex justify-center items-center">
      <img
        src="https://proof.ez123.eu/wp-content/uploads/2022/03/Image0002s.jpg"
        alt="Photography"
        className="w-[700px] h-auto object-cover rounded shadow-md transition-transform transform hover:scale-110 hover:translate-y-[-20px]"
      />
    </div>

    




  </div>
  </section>
  <section className="bg-blue-400 py-10">
  <div className="max-w-7xl mx-auto px-4 text-center text-white">
    {/* Text Section */}
    <div className="mb-[50px]">
      <p className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 leading-tight drop-shadow-2xl">
        PORTRAITS
      </p>
    </div>

    {/* Main Image Section */}
    <div className="flex justify-center items-center">
      <img
        alt="Photography"
        src="/assets/images/fasho7.jpg"
        className="w-[700px] h-auto object-cover rounded shadow-md transition-transform transform hover:scale-110 hover:translate-y-[-20px]"
      />
    </div>

    

    {/* Additional Images Section */}
    <div className="mt-10 space-y-8">
      {[
        "port2.jpg",
        "port3.jpg",
        "port4.jpeg",
        "port5.jpg",
        "port6.jpg",
        "port7.jpeg",
        "port8.jpg",
        "port9.jpg",
        "port10.jpeg",
      ].map((fileName, index) => (
        <div key={index} className="flex justify-center items-center">
          <img
            alt={`port ${index + 1}`}
            src={`/assets/images/${fileName}`}
            className="w-[700px] h-auto object-cover rounded shadow-md transition-transform transform hover:scale-110 hover:translate-y-[-20px]"
          />
        </div>
      ))}

      {/* Border Line Animation Section */}
    <div className="mt-8 relative">
      <div className="absolute inset-x-0 bottom-0 h-[25px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-80 animate-pulse"></div>
    </div>
    </div>
  </div>









  </section>
  <section className="bg-blue-400 mb-11 py-10">
  <div class="relative max-w-5xl mx-auto px-4 text-center">
  <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-6xl lg:text-7xl dark:text-white">
     <mark class="px-2 text-white bg-yellow-400 rounded-sm dark:bg-yellow-500">FASION PICTURES</mark>
  </h1>
  


    {/* Main Image Section */}
    <div className="flex justify-center mt-24 items-center">
      <img
        alt="Photography"
        src="/assets/images/fash1.jpg"
        className="w-[700px] h-auto object-cover rounded shadow-md  "
      />
    </div>

    

    {/* Additional Images Section */}
    <div className="mt-10 space-y-8">
      {[
        "fash2.jpg",
        "fash3.gif",
        "fash4.jpg",
        "fash5.jpg",
        "fash6.jpg",
        "fash7.jpg",
        "fash8.jpg",
       
      ].map((fileName, index) => (
        <div key={index} className="flex justify-center items-center">
          <img
            alt={`port ${index + 1}`}
            src={`/assets/images/${fileName}`}
            className="w-[700px] h-auto object-cover rounded shadow-md transition-transform transform "
          />
        </div>
        
      ))}
      {/* Border Line Animation Section */}
    <div className="mt-8 relative">
      <div className="absolute inset-x-0 bottom-0 h-[25px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-80 animate-pulse"></div>
    </div>
    </div>
  </div>

</section>
              {/* Additional Section */}
              <section className="bg-gray-600 py-10">
                <div className="max-w-7xl mx-auto px-4">
                  <h3 className="text-5xl font-semibold text-blue-800 mb-4">
                    About Me
                  </h3>
                  <p className="text-yellow-500 text-3xl font-bold leading-relaxed">
                    With a passion for photography, I have explored various
                    facets of this art form, from portraits to landscapes.
                    Every click captures a story, a moment frozen in time. Join
                    me in celebrating the beauty of life through the lens.
                  </p>
                </div>
              </section>
            </div>
          </article>
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

export default Paage2;
