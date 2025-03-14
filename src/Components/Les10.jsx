import React from "react";
import { motion } from "framer-motion";

const BeforeAfterGalleryWithText = () => {
  const sections = [
    {
      title: "Before during and after the picture of rotted steps which were replaced, all the old paint was stripped off then sanded smooth., then primed and painted with three coats of paint with sanding in-between each coat. And finally, a “runner” put on the steps which are non-slip.",
      description: "What does it look like now, after 20 years later, see the level still the same  Removal of the old deck so roof over garage could be fixed",
      before: "/assets/images/a1.jpeg",
      after: "/assets/images/a2.jpeg",
    },
    {
      title: "FLOOR AFTER",
      combined: "/assets/images/a4.jpeg",
    },
    {
    
      combined: "/assets/images/a5.jpeg",
    },
    {
     
      combined: "/assets/images/a7.jpeg",
    },
    {
      title: "Rotted Floor? Not Anymore!",
      combined: "/assets/images/a9.jpeg",
    },
    {
      title: "We Need You to Close Off the Cabinet Top",
      combined: "/assets/images/a11.jpeg",
    },
    {
      title: "Can You Do a Garden Clean-Up? Yes, I Can!",
      combined: "/assets/images/a13.jpg",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 py-10 px-4">
      {/* Header Section */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-6xl font-extrabold mb-16 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text shadow-lg"
      >
        Before & After Gallery
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
            className="bg-white shadow-2xl shadow-blue-600 rounded-2xl shadow-2xl p-8 space-y-6 md:max-w-5xl mx-auto"
          >
            {/* Title */}
            {section.title && (
              <h2 className="text-4xl font-bold text-gray-800 text-center border-b-8 border-purple-500 pb-4">
                {section.title}
              </h2>
            )}

            {/* Description */}
            {section.description && (
              <p className="text-3xl  text-gray-600 font-bold mb-24 shadow-2xl shadow-amber-200 text-center">
                {section.description}
              </p>
            )}

            {/* Images */}
            {index === 0 ? (
              // First Section: Two images for "Before" and "After"
              <div className="flex flex-col md:flex-row gap-6 items-center">
                {/* Before Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-full md:w-1/2"
                >
                  <img
                    src={section.before}
                    alt={`Before ${index + 1}`}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                  <p className="text-center mt-2 font-medium text-gray-600">
                    Before
                  </p>
                </motion.div>

                {/* After Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-full md:w-1/2"
                >
                  <img
                    src={section.after}
                    alt={`After ${index + 1}`}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                  <p className="text-center mt-2 font-medium text-gray-600">
                    After
                  </p>
                </motion.div>
              </div>
            ) : (
              // Remaining Sections: Single combined image
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full flex justify-center items-center"
              >
                <div className="flex flex-col items-center w-[80%]">
                  <img
                    src={section.combined}
                    alt={`Before and After ${index + 1}`}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <p className="text-center mt-4 text-4xl font-medium text-gray-600">
                    Before & After
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BeforeAfterGalleryWithText;
