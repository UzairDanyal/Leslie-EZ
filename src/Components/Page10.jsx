import React from "react";
import { useNavigate } from "react-router-dom"; // Updated for react-router-dom v6+

const BecomeFranchisePartner = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/FreeRegistration1"); // Replace with the correct route for the partner page
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to navigate back
  const navigateBack = () => {
    window.history.back();
  };


  return (
    <div className="min-h-screen bg-blue-100 text-gray-800 flex flex-col items-center justify-center p-8">
      {/* Title */}
      <h1 className="text-5xl font-bold text-gray-900 shadow-2xl mb-8 text-center">
        BECOME A FRANCHISE PARTNER IN VIRTUAL HOUSE
      </h1>

      {/* Introduction Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl text-center">
        <p className="text-3xl font-semibold text-gray-700 leading-relaxed">
          Virtual House is a growing global network, offering unique opportunities for aspiring entrepreneurs to join our exciting franchise model. 
          By becoming a franchise partner, you'll have access to an innovative platform, comprehensive support, and a proven business model. Click below to learn how you can join us and become a valuable part of the Virtual House family!
        </p>
      </div>

      {/* Call to Action Section */}
      <div
        onClick={handleNavigation}
        className="flex flex-col items-center mt-10 cursor-pointer"
      >
        <h1 className="text-5xl font-bold text-gray-900 shadow-2xl mb-8 text-center">
        FRANCHISE PARTNER
      </h1>
        {/* Virtual House Icon */}
        <img
          src="/assets/images/vh.png" // Replace with the actual path to your Virtual House icon
          alt="Virtual House Icon"
          className="w-[200px] h-[200px] mb-4 hover:scale-105 transition-transform duration-300"
        />
        {/* Link Text */}
        <p className="text-3xl font-medium text-blue-600 hover:underline">
          Click here to become a franchise partner
        </p>
      </div>
       {/* Fixed Back Button */}
     <button
     onClick={navigateBack}
     className="fixed bottom-5 left-5 p-4 rounded-full shadow-lg  transition-transform transform hover:scale-110 flex items-center justify-center"
   >
     <img
      src="/assets/images/button back.webp"
      alt="Top"
      className="h-[124px] w-[124px]"
     />
   </button>
   
   {/* Fixed Scroll-to-Top Button */}
   <button
     onClick={scrollToTop}
     className="fixed bottom-5 right-5  p-4 rounded-full   transition-transform transform hover:scale-110 flex items-center justify-center "
   >
     <img
       src="/assets/images/button page up.webp"
       alt="Top"
       className="h-[150px] w-[124px]"
     />
   </button>
    </div>
    
  );
};

export default BecomeFranchisePartner;
