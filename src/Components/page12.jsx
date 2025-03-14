import React, { useState } from "react";
import { motion } from "framer-motion";

const ProgrammingPage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to navigate back
  const navigateBack = () => {
    window.history.back();
  };

  const [step, setStep] = useState(1);

  // Function to go to the next step
  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 3));
  };

  // Function to go to the previous step
  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 shadow-lg">
        <motion.div
          className="container mx-auto text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl font-extrabold mb-4 drop-shadow-xl">
            Programming Services
          </h1>
          <p className="text-3xl font-semibold drop-shadow-lg">
            Custom solutions for development and design
          </p>
        </motion.div>
      </header>

      <main className="container mx-auto py-16 space-y-16">
        {/* Wizard */}
        <motion.section
          className="bg-white p-10 rounded-lg shadow-2xl border border-gray-200"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-center mb-10 text-purple-600">
            Project Wizard
          </h2>

          {step === 1 && (
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-700">
                Step 1: Project Type
              </h3>
              <p className="text-2xl font-semibold mb-8">
                What kind of project are you looking for?
              </p>
              <ul className="space-y-6">
                <li>
                  <label className="flex items-center text-2xl font-semibold text-blue-600">
                    <input
                      type="radio"
                      name="projectType"
                      value="web"
                      className="mr-3"
                    />
                    Web Development
                  </label>
                </li>
                <li>
                  <label className="flex items-center text-2xl font-semibold text-green-600">
                    <input
                      type="radio"
                      name="projectType"
                      value="mobile"
                      className="mr-3"
                    />
                    Mobile App Development
                  </label>
                </li>
                <li>
                  <label className="flex items-center text-2xl font-semibold text-purple-600">
                    <input
                      type="radio"
                      name="projectType"
                      value="automation"
                      className="mr-3"
                    />
                    Automation / Scripting
                  </label>
                </li>
                <li>
                  <label className="flex items-center text-2xl font-semibold text-pink-600">
                    <input
                      type="radio"
                      name="projectType"
                      value="design"
                      className="mr-3"
                    />
                    Graphic Design
                  </label>
                </li>
              </ul>
            </div>
          )}

         
          {step === 2 && (
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-700">
                Step 3: Deadline
              </h3>
              <p className="text-2xl font-semibold mb-8">When do you need the project completed?</p>
              <input
                type="date"
                className="w-full border rounded p-4 text-xl"
                placeholder="Select a date"
              />
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-10">
            {step > 1 && (
              <motion.button
                onClick={prevStep}
                className="bg-gray-300 text-gray-800 py-3 px-6 rounded-lg shadow-lg text-xl font-bold"
                whileHover={{ scale: 1.05 }}
              >
                Previous
              </motion.button>
            )}
            {step < 3 && (
              <motion.button
                onClick={nextStep}
                className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg text-xl font-bold"
                whileHover={{ scale: 1.05 }}
              >
                Next
              </motion.button>
            )}
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          className="bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 p-10 rounded-lg shadow-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-center mb-12 text-blue-600">
            My Services
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <li className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold mb-6 text-blue-600">Web Development</h3>
              <p className="text-2xl font-semibold">Responsive, user-friendly websites tailored to your needs.</p>
            </li>
            <li className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold mb-6 text-green-600">Mobile Apps</h3>
              <p className="text-2xl font-semibold">
                Cross-platform or native mobile apps for iOS and Android.
              </p>
            </li>
            <li className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold mb-6 text-purple-600">Automation</h3>
              <p className="text-2xl font-semibold">Custom scripts to automate your business processes.</p>
            </li>
            <li className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold mb-6 text-pink-600">Graphic Artist</h3>
              <p className="text-2xl font-semibold">Designing stunning visuals, logos, and illustrations.</p>
            </li>
          </ul>
        </motion.section>

        {/* Contact Form */}
        <motion.section
          className="bg-white p-10 rounded-lg shadow-2xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-center mb-12 text-blue-600">
            Contact Me
          </h2>
          <form className="space-y-8">
            <div>
              <label className="block mb-3 text-2xl font-bold text-gray-700">Your Name</label>
              <input
                type="text"
                className="w-full border rounded p-4 text-2xl font-semibold"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block mb-3 text-2xl font-bold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border rounded p-4 text-2xl font-semibold"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block mb-3 text-2xl font-bold text-gray-700">Message</label>
              <textarea
                rows="5"
                className="w-full border rounded p-4 text-2xl font-semibold"
                placeholder="Write your message here"
              />
            </div>
            <motion.button
              type="submit"
              className="bg-purple-600 text-white py-4 px-10 rounded-lg text-2xl font-bold shadow-xl"
              whileHover={{ scale: 1.1 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.section>
      </main>
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

export default ProgrammingPage;
