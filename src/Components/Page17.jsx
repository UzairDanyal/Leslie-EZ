import React from "react";
import { motion } from "framer-motion";

const BeforeAfterGalleryWithText = () => {
  const sections = [
    {
      title: "THIS IS WHAT IT LOOKED LIKE WHEN THE FIRST MOTORHOME WAS ALL DONE",
      images: ["/assets/images/q1 (2).jpeg"],
    },
    {
      title: "Working on FIRST TRAILER",
      images: [
        "/assets/images/q1 (1).jpeg",
        "/assets/images/q1 (3).jpeg",
        "/assets/images/q1 (4).jpeg",
        "/assets/images/q1 (5).jpeg",
      ],
    },
    {
      title: "Electricity work",
      images: [
        "/assets/images/q1 (6).jpeg",
        "/assets/images/q1 (7).jpeg",
        "/assets/images/q1 (8).jpeg",
        "/assets/images/q1 (9).jpeg",
      ],
    },
    {
      title: "WORKING ON SPECIAL LEGS TO ADJUST THE HEIGHT. AND A MOVIER WITH A REMOTE TO PARK THE TRAILER EASILY",
      images: [
        "/assets/images/y1 (6).jpeg",
        "/assets/images/y1 (7).jpeg",
        "/assets/images/y1 (8).jpeg",
        "/assets/images/y1 (9).jpeg",
      ],
    },
    {
      title: "HOW TWO SOLAR PANEL TRAILER LOOK LIKE",
      images: ["/assets/images/y1 (20).jpeg"],
    },
    {
      title: "WORKING ON TWO SOLAR PANEL TRAILER",
      images: [
        "/assets/images/y1 (1).jpeg",
        "/assets/images/y1 (3).jpeg",
        "/assets/images/y1 (4).jpeg",
        "/assets/images/y1 (5).jpeg",
      ],
    },
   
    {
      title: "Electricity work",
      images: [
        "/assets/images/y1 (10).jpeg",
        "/assets/images/y1 (11).jpeg",
        "/assets/images/y1 (12).jpeg",
      ],
    },
    {
      title: "CHINOOK TRAILER",
      images: ["/assets/images/y1 (21).jpeg"],
    },
    {
      title: "workING",
      images: [
        "/assets/images/y1 (17).jpeg",
        "/assets/images/y1 (18).jpeg",
        "/assets/images/y1 (19).jpeg",
      ],
    },
    {
      title: "10000.MESTER.COM",
      images: [
        "/assets/images/y1 (14).jpeg",
        "/assets/images/y1 (15).jpeg",
        "/assets/images/y1 (23).jpeg",
        "/assets/images/y1 (17).jpeg",
      ],
    },
    
   
  ];
   // Scroll to top function
   const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 py-10 px-4">
      {/* Header Section */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-6xl font-extrabold mb-16 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text shadow-lg"
      >
        CUSTOM MADE MOTORHOME TRAILERS
      </motion.h1>

      {/* Sections */}
      <div className="space-y-16">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.2 }}
            className="bg-white shadow-2xl shadow-blue-600 rounded-2xl p-8 space-y-6 mx-auto w-[95%]"
          >
            {/* Title */}
            {section.title && (
              <h2 className="text-4xl font-bold text-gray-800 text-center border-b-8 border-purple-500 pb-4">
                {section.title}
              </h2>
            )}

            {/* Images */}
            <div
              className={`grid ${
                section.images.length === 1
                  ? "grid-cols-1"
                  : "grid-cols-1 sm:grid-cols-2"
              } gap-4 justify-center`}
            >
              {section.images?.map((image, imgIndex) => (
                <motion.div
                  key={imgIndex}
                  whileHover={{ scale: 1.05 }}
                  className={`w-full ${
                    section.images.length === 1
                      ? "max-w-[700px]"
                      : "max-w-[400px]"
                  } mx-auto`}
                >
                  <img
                    src={image}
                    alt={`Image ${imgIndex + 1} in section ${index + 1}`}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
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
  );
};

export default BeforeAfterGalleryWithText;
