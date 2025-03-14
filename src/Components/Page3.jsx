import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react"; // Icon library (you can use others too)

const Page = () => {
  const [showFullParagraph, setShowFullParagraph] = useState(false);
  const [showImageSectionParagraph, setShowImageSectionParagraph] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Function to navigate back
  const navigateBack = () => {
    window.history.back();
  };


  const toggleParagraph = () => {
    setShowFullParagraph(!showFullParagraph);
  };

  const toggleImageSectionParagraph = () => {
    setShowImageSectionParagraph(!showImageSectionParagraph);
  };

  return (
    <div className="min-h-screen bg-gray-200 text-gray-900">
      {/* Fixed Header */}
      <header className="bg-gray-100 fixed w-full z-30">
        <div className="flex flex-col md:flex-row justify-around py-4 bg-gradient-to-b from-[#FFCC00] to-[#FF6600] text-black text-3xl font-bold text-center gap-6">
          <div className="w-1/2 mt-6">
            <a href="#section1">1. MY ENGINEERING + INVENTIONS</a>
          </div>
          <div className="w-1/2 mt-6">
            <a href="#section2">2. JOINT VENTURES WITH MY FATHER</a>
          </div>
          <div className="w-1/2 mt-6">
            <a href="#section3">3. MY FATHER'S ENGINEERING ONLY</a>
          </div>
        </div>
      </header>

      {/* Content Area */}
      <main className="pt-60 p-6">
        {/* Animated Titles */}
        <div className="text-center mb-">
          <motion.h1
            className="text-7xl shadow-green-500 shadow-xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 p-4 rounded-lg "
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            CRADLE SNATCHER
          </motion.h1>
          <motion.h2
            className="text-5xl font-bold shadow-purple-500 shadow-2xl text-gray-700 bg-white p-4 rounded-lg "
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
           TOWNTRUCK
          </motion.h2>
          <div className="mt-8 mb-[100px] bg-gray-200 p-6 rounded-lg shadow-blue-700 shadow-2xl border border-gray-300 w-3/4 mx-auto">
      {/* Paragraph */}
      <p className="text-3xl font-semibold leading-relaxed">
        {showFullParagraph
          ? `Yes General Motors came to my father and told him that they’re going to start to change the way they make cars so that they won’t have the Chrome bumpers anymore they’re going to use plastic on the outside were the bumpers used to be and they need a new way to tow the car’s so that because conventional towing would damage the bumpers. Conventional towing in those days was using a rubber sling which would damage the new plastic bumpers. It took me all but 15 seconds to come up with the idea that to tow by the tires using the shocks of the car in combination with the tow truck that’s pulling at will greatly reduce the stress on the rear part of a tow truck and on the car itself. This just makes common sense to me anybody can figure this out is not a big deal designing and building that’s the big deal I just came up with the idea.`
          : `Yes General Motors came to my father and told...`}
      </p>

      {/* Arrow Button */}
      <div
        onClick={toggleParagraph}
        className="mt-4 flex justify-center items-center cursor-pointer"
      >
        {showFullParagraph ? (
          <ChevronUp className="text-blue-500  w-[100px] h-[100px]" />
        ) : (
          <ChevronDown className="text-blue-500  w-[100px] h-[100px]" />
        )}
      </div>
    </div>
        </div>

        <section className="p-6 rounded-lg w-4/4 mx-auto shadow-md mb-16">
      <div className="flex items-center justify-between">
        {/* Left Side with Paragraph */}
        <div className="w-1/2 pr-8">
          <p className="text-3xl font-semibold shadow-purple-500 shadow-2xl leading-relaxed">
            {showImageSectionParagraph
              ? `A device at the end of a boom that would prevent under that boom and the boom must be telescopic so that it can be adjusted to the type of vehicle you’re towing and that’s all that my dad needed to create the picture underneath. My arms that came out to hold the tire had to be changed because those rigid arms weren’t good enough to tow all types of vehicles like vans and other things that were unusual sizes so my father came up with the sling which was made out of plastic fiber but it was extremely strong to lift cars in the cradle snatcher was born. You can read the story below but eventually, my father was also the first one to figure out how to tow two cars at the same time using the same’s the same idea but now from underneath the vehicle rather than over the top which you will see the pictures as the tow trucks progressed below now the whole world is using the same kind of method for towing cars. It is safer, more practical, faster, and damage-free.`
              : `A device at the end of a boom that would prevent ...`}
          </p>
          {/* Arrow Button */}
          <div
            onClick={toggleImageSectionParagraph}
            className="mt-4 flex items-center cursor-pointer"
          >
            {showImageSectionParagraph ? (
              <ChevronUp className="text-blue-500  w-[100px] h-[100px]" />
            ) : (
              <ChevronDown className="text-blue-500 ml-[250px] mb-[200px] w-[100px] h-[100px]" />
            )}
          </div>
        </div>

        {/* Right Side with Image */}
        <div>
          <img
            src="/assets/images/My.jpg" // Replace with your image URL
            alt="Engineering"
            className="w-[600px] h-[500px] rounded-lg shadow-[0_10px_20px_rgba(255,69,96,0.5),0_6px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>


    <section className="p-6 rounded-lg w-4/4 mx-auto shadow-md mb-16">
      <div className="flex items-center justify-between">
        {/* Left Side with Paragraph */}
        <div className="w-1/2 pr-8">
          <p className="text-3xl font-semibold shadow-purple-500 shadow-2xl leading-relaxed">
            {showImageSectionParagraph
              ? `I designed the handy-hoist in 20 minutes, It took 3 years to get a patent and 4 guys from the government to screw up a deal. Here a petite woman illustrates how easy it is to lift a bike onto the top of a car with great ease.
              
              After producing the prototype, I found a partner by walking in off the street to a car park producing company who develops their own stamping forms for the automotive industry. He took one look at the device and said, "I will be your partner," and he started to manufacture and produce it. I went in on weekends to help, and we made a much more beautiful-looking unit—and that’s the one sitting on top of my old car when the model came to demonstrate it.`
              : `I designed the handy-hoist in 20...`}
          </p>
          {/* Arrow Button */}
          <div
            onClick={toggleImageSectionParagraph}
            className="mt-4 flex items-center cursor-pointer"
          >
            {showImageSectionParagraph ? (
              <ChevronUp className="text-blue-500 w-8 h-8" />
            ) : (
              <ChevronDown className="text-blue-500 w-8 h-8" />
            )}
          </div>
        </div>

        {/* Right Side with Image */}
        <div>
          <img
            src="/assets/images/m1.jpg" // Replace with your image URL
            alt="Engineering"
            className="w-[600px] h-[500px] rounded-lg shadow-[0_10px_20px_rgba(255,69,96,0.5),0_6px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>


    <div className="mt-8 mb-[100px] bg-gray-200 p-6 rounded-lg shadow-blue-700 shadow-2xl border border-gray-300 w-3/4 mx-auto">
      {/* Paragraph */}
      <p className="text-3xl font-semibold leading-relaxed">
        {showFullParagraph
          ? `And the only reason that Canadian tire ordered so many was I know the owner of one of the Canadian tire stores who told me that I could demonstrate my product for free outside his store which was a pretty big store and I got lots of people that were interested in it including the corporate executives at Canadian tire.`
          : ` And the only reason that Canadian tire ordered so many was I know the owner..`}
      </p>

      {/* Arrow Button */}
      <div
        onClick={toggleParagraph}
        className="mt-4 flex justify-center items-center cursor-pointer"
      >
        {showFullParagraph ? (
          <ChevronUp className="text-blue-500  w-[100px] h-[100px]" />
        ) : (
          <ChevronDown className="text-blue-500  w-[100px] h-[100px]" />
        )}
      </div>
    </div>

        

    
    {/* Image below Paragraph */}
    <div className="mb-6 flex items-center justify-center">
      <img
        src="/assets/images/m2.jpg" // Replace with the actual image URL
        alt="Overcoming Obstacles"
        className="w-[500px] h-[400px]  rounded-lg shadow-[0_10px_20px_rgba(255,69,96,0.5),0_6px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105"
      />
      <img
        src="/assets/images/m3.jpg" // Replace with the actual image URL
        alt="Overcoming Obstacles"
        className="w-[500px] ml-11 h-[400px]  rounded-lg shadow-[0_10px_20px_rgba(255,69,96,0.5),0_6px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105"
      />
    </div>


    

    <div className="mt-8 mb-[100px] bg-gray-200 p-6 rounded-lg shadow-blue-700 shadow-2xl border border-gray-300 w-3/4 mx-auto">
      {/* Paragraph */}
      <p className="text-3xl font-semibold leading-relaxed">
        {showFullParagraph
          ? ` 50 years ahead of it’s time. Canadian Tire Ordered 19,000 units and in the middle of the deal told us to provide them with a colours box. Just before the signing of the deal, my mother got sick and I had to walk away from the deal..`
          : ` 50 years ahead of it’s time. Canadian Tire Ordered..`}
      </p>

      {/* Arrow Button */}
      <div
        onClick={toggleParagraph}
        className="mt-4 flex justify-center items-center cursor-pointer"
      >
        {showFullParagraph ? (
          <ChevronUp className="text-blue-500  w-[100px] h-[100px]" />
        ) : (
          <ChevronDown className="text-blue-500  w-[100px] h-[100px]" />
        )}
      </div>
    </div>

    {/* Subsection 2 */}

    
   
    
    {/* Image below Paragraph */}
    <div className="mb-6 flex items-center justify-center">
      <img
        src="/assets/images/m4.jpg" // Replace with the actual image URL
        alt="Overcoming Obstacles"
        className="w-[500px] h-[400px]  rounded-lg shadow-[0_10px_20px_rgba(255,69,96,0.5),0_6px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105"
      />
      </div>


      <div className="mb-12 mx-auto">
      {/* Title */}
      <motion.h3
        className="text-4xl font-bold mb-4 text-center shadow-2xl shadow-red-500 bg-yellow-200 p-4 rounded-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        The Handy-Hoist bike and Tandem Lifting Assistant
      </motion.h3>

      {/* Expandable Paragraph */}
      <div className="mb-6 w-3/4 mx-auto mt-11">
        <p
          className={`text-3xl font-semibold shadow-xl shadow-purple-500 leading-relaxed ${
            isExpanded ? "" : "line-clamp-1"
          }`}
        >
          Because I was also the new product development guy, I came up with the
          tandem lifter prototype which by the end when we decided not to
          produce this product because of the dangers of the consumer not
          installing these properly on their vehicles and the insurance company
          giving us scenarios the types of accidents that could happen. We
          decided not to go through with the project in the end and a Chinese
          dentist bought the tandem version is seen here below and he was the
          happiest guy in the world because he was able to lift it up onto the
          top of his minivan by himself. Even though we had to make him an
          extension rod to be old to push the bike up and we made it spring
          assisted because his tandem was so heavy. But it worked extremely
          well.
        </p>

        {/* Toggle Button */}
        <div
          className="flex justify-center items-center mt-4 cursor-pointer"
          onClick={toggleExpand}
        >
          {isExpanded ? (
            <ChevronUp className="text-red-500  w-[100px] h-[100px]" />
          ) : (
            <ChevronDown className="text-red-500  w-[100px] h-[100px]" />
          )}
        </div>
      </div>

      {/* Images */}
      <div className="mb-6 gap-24 flex justify-center items-center">
        <img
          src="/assets/images/m5.jpg" // Replace with the actual image URL
          alt="Key Innovations"
          className="w-[400px] h-[400px] rounded-lg shadow-lg shadow-red-700"
        />
        <img
          src="/assets/images/m6.jpg" // Replace with the actual image URL
          alt="Key Innovations"
          className="w-[400px] h-[400px] rounded-lg shadow-lg shadow-red-700"
        />
      </div>

  </div>



      <div className="mt-8 mb-[100px] bg-gray-200 p-6 rounded-lg shadow-blue-700 shadow-2xl border border-gray-300 w-3/4 mx-auto">
      {/* Paragraph */}
      <p className="text-3xl font-semibold leading-relaxed">
        {showFullParagraph
          ? `Has a U.S. and Canadian Patent

This one above was the tandem lifter. One was made to see if a short Chinese person could lift it up onto a minivan

It worked.`
          : `Has a U.S. and Canadian Patent..`}
      </p>

      {/* Arrow Button */}
      <div
        onClick={toggleParagraph}
        className="mt-4 flex justify-center items-center cursor-pointer"
      >
        {showFullParagraph ? (
          <ChevronUp className="text-blue-500  w-[100px] h-[100px]" />
        ) : (
          <ChevronDown className="text-blue-500  w-[100px] h-[100px]" />
        )}
      </div>
    </div>
        
    <div className="mt-8 mb-[100px] bg-gray-200 p-6 rounded-lg shadow-blue-700 shadow-2xl border border-gray-300 w-3/4 mx-auto">
      {/* Paragraph */}
      <p className="text-3xl font-semibold leading-relaxed">
        {showFullParagraph
          ? `Now the U.S. Military has copied the HANDY HOIST to put missiles onto the top of Hummers. I can design and build just about anything,  And if I can’t I will find someone who will.`
          : `Now the U.S. Military has copied the HANDY HOIST to ..`}
      </p>

      {/* Arrow Button */}
      <div
        onClick={toggleParagraph}
        className="mt-4 flex justify-center items-center cursor-pointer"
      >
        {showFullParagraph ? (
          <ChevronUp className="text-blue-500  w-[100px] h-[100px]" />
        ) : (
          <ChevronDown className="text-blue-500  w-[100px] h-[100px]" />
        )}
      </div>
    </div>
        

    <div className="mb-6 gap-24 flex justify-center items-center">
        <img
          src="/assets/images/m7.jpg" // Replace with the actual image URL
          alt="Key Innovations"
          className="w-[600px] h-[600px] rounded-lg shadow-lg shadow-red-700"
        />
       

  </div>





  <div className="mb-12 mx-auto">
      {/* Title */}
      <motion.h3
        className="text-4xl font-bold mb-4 text-center shadow-2xl shadow-red-500 bg-yellow-200 p-4 rounded-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
       Here are a few other things I designed and built without my father’s assistance
      </motion.h3>

      {/* Expandable Paragraph */}
      <div className="mb-6 w-3/4 mx-auto mt-11">
        <p
          className={`text-3xl font-semibold shadow-xl shadow-purple-500 leading-relaxed ${
            isExpanded ? "" : "line-clamp-1"
          }`}
        >
          I have 2 patents and as far as I am concerned, I have two too many. Do you know how long it takes to get a u.s Patent? 1 Year. In Canada 12 years!! 12 Years!!! What the heck!.
        </p>

        {/* Toggle Button */}
        <div
          className="flex justify-center items-center mt-4 cursor-pointer"
          onClick={toggleExpand}
        >
          {isExpanded ? (
            <ChevronUp className="text-red-500  w-[100px] h-[100px]" />
          ) : (
            <ChevronDown className="text-red-500  w-[100px] h-[100px]" />
          )}
        </div>
      </div>

      {/* Images */}
      <div className="mb-6 gap-24 flex justify-center items-center">
        <img
          src="/assets/images/m8.jpg" // Replace with the actual image URL
          alt="Key Innovations"
          className="w-[400px] h-[400px] rounded-lg shadow-lg shadow-red-700"
        />

<img
          src="/assets/images/m9.jpg" // Replace with the actual image URL
          alt="Key Innovations"
          className="w-[600px] h-[500px]  rounded-lg shadow-lg shadow-red-700"
        />
      </div>
      </div>

       {/* Expandable Paragraph */}
       <div className="mb-6 w-3/4 mx-auto mt-11">
        <p
          className={`text-3xl font-semibold shadow-xl shadow-purple-500 leading-relaxed ${
            isExpanded ? "" : "line-clamp-1"
          }`}
        >
         LIFT AND GO HOOK LIFT. VULCAN SOLD THIS FOR TWO MILLION BUT IF THEY WAITED JUST 4 YEARS THEY COULD HAVE SOLD IT FOR 20. But let’s not forget the Alm kids were running the show now, they had no idea what they were doing. I wanted to buy one for myself but they didn’t want to give me one, since the different variations and the military version are shown below, I have figured out a few things. After my dad left Vulcan. It DIDN’T TAKE LONG TO FALL APART.

Military hook lift. One truck and 15 containers, tool shops to move around for mobile hospitals, and more
        </p>

        {/* Toggle Button */}
        <div
          className="flex justify-center items-center mt-4 cursor-pointer"
          onClick={toggleExpand}
        >
          {isExpanded ? (
            <ChevronUp className="text-red-500  w-[100px] h-[100px]" />
          ) : (
            <ChevronDown className="text-red-500  w-[100px] h-[100px]" />
          )}
        </div>
      </div>

      {/* Images */}
      <div className="mb-6 gap-24 flex justify-center items-center">
        

<img
          src="/assets/images/m10.jpg" // Replace with the actual image URL
          alt="Key Innovations"
          className="w-[600px] h-[500px]  rounded-lg shadow-lg shadow-red-700"
        />
      </div>
      







      <div className="mb-12 mx-auto">
      {/* Title */}
      <motion.h3
        className="text-4xl font-bold mb-4 text-center shadow-2xl shadow-red-500 bg-yellow-200 p-4 rounded-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
       What DID I DO TWO YEARS AGO?
      </motion.h3>

      {/* Expandable Paragraph */}
      <div className="mb-6 w-3/4 mx-auto mt-11">
        <p
          className={`text-3xl font-semibold shadow-xl shadow-purple-500 leading-relaxed ${
            isExpanded ? "" : "line-clamp-1"
          }`}
        >
          This is a self powering solar trailer Specifically designed to provide additional power for an electric Tricycle which I did not design but modified. (I added another solar panel to the top)
        </p>

        {/* Toggle Button */}
        <div
          className="flex justify-center items-center mt-4 cursor-pointer"
          onClick={toggleExpand}
        >
          {isExpanded ? (
            <ChevronUp className="text-red-500  w-[100px] h-[100px]" />
          ) : (
            <ChevronDown className="text-red-500  w-[100px] h-[100px]" />
          )}
        </div>
      </div>

      {/* Images */}
      <div className="mb-6 gap-24 flex justify-center items-center">
        <img
          src="/assets/images/m11.jpg" // Replace with the actual image URL
          alt="Key Innovations"
          className="w-[400px] h-[400px] rounded-lg shadow-lg shadow-red-700"
        />
       
      </div>

  </div>



 {/* Expandable Paragraph */}
 <div className="mb-6 w-3/4 mx-auto mt-11">
        <p
          className={`text-3xl font-semibold shadow-xl shadow-purple-500 leading-relaxed ${
            isExpanded ? "" : "line-clamp-1"
          }`}
        >
         This is what it looks like. it goes 20 km/hr. for 60km. Though it will not break any speed records, it is the first “off-grid” designed system that actually works. I use this prototype to buy groceries and run errands. I use it when I am not in a hurry. I save on parking and fuel and even time because I don’t have to look for parking. It produces no carbon or any pollutants. It is completely GREEN.

And it is always charging. This is the best thing.
        </p>

        {/* Toggle Button */}
        <div
          className="flex justify-center items-center mt-4 cursor-pointer"
          onClick={toggleExpand}
        >
          {isExpanded ? (
            <ChevronUp className="text-red-500  w-[100px] h-[100px]" />
          ) : (
            <ChevronDown className="text-red-500  w-[100px] h-[100px]" />
          )}
        </div>
      </div>

      {/* Images */}
      <div className="mb-6 gap-24 flex justify-center items-center">
        <img
          src="/assets/images/m12.jpg" // Replace with the actual image URL
          alt="Key Innovations"
          className="w-[400px] h-[400px] rounded-lg shadow-lg shadow-red-700"
        />
       
      </div>









 {/* Expandable Paragraph */}
 <div className="mb-6 w-3/4 mx-auto mt-11">
        <p
          className={`text-3xl font-semibold shadow-xl shadow-purple-500 leading-relaxed ${
            isExpanded ? "" : "line-clamp-1"
          }`}
        >
         The trailer can be detached and re-attached to something else like a regular bicycle to be used as a power source for a campsite or to power a laptop and a cell phone.

The trailer hitch is lockable but now I am working on a lighter solution.

I believe such a vehicle could be used in small towns for the postman, a visiting nurse, older people just to get around. Tourist organizations to make groups more mobile. I can figure out how to even carry camping gear to take a small trip out of the city and even to pull children on their bicycles when they get tired.
        </p>

        {/* Toggle Button */}
        <div
          className="flex justify-center items-center mt-4 cursor-pointer"
          onClick={toggleExpand}
        >
          {isExpanded ? (
            <ChevronUp className="text-red-500  w-[100px] h-[100px]" />
          ) : (
            <ChevronDown className="text-red-500  w-[100px] h-[100px]" />
          )}
        </div>
      </div>

      {/* Images */}
      <div className="mb-6 gap-24 flex justify-center items-center">
        <img
          src="/assets/images/m13.jpg" // Replace with the actual image URL
          alt="Key Innovations"
          className="w-[400px] h-[400px] rounded-lg shadow-lg shadow-red-700"
        />
          <img
          src="/assets/images/m14.jpg" // Replace with the actual image URL
          alt="Key Innovations"
          className="w-[400px] h-[400px] rounded-lg shadow-lg shadow-red-700"
        />
       
      </div>


       
        <section id="section2" className="mb-16">
  <motion.h2
    className="text-6xl font-extrabold mb-4 text-center bg-yellow-100 p-4 rounded-lg shadow-md"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    JOINT VENTURES WITH MY FATHER
  </motion.h2>

  <div className="mt-8 bg-gray-200 p-6 rounded-lg shadow-md border  border-gray-300 w-3/4 mx-auto">
            <p className="text-2xl leading-relaxed">
              {showFullParagraph
                ? `My father has created some pretty amazing things, and together we created truly magnificent things as well. But we had a very big problem. We could not work together. We were a great team, when we could work together because I dreamed it up, he designed it, we prototyped it, and then it went into production after it was patented. We listened to our suppliers, distributors, and customers; improving it.`
                : `My father has created some pretty amazing things, and together we created truly...`}
            </p>
            <button
              onClick={toggleParagraph}
              className="mt-4 text-blue-500 font-bold underline"
            >
              {showFullParagraph ? "Show Less" : "Show More"}
            </button>
          </div>




          <div className="mt-8 bg-gray-200 p-6 rounded-lg shadow-md border border-gray-300 w-3/4 mx-auto">
            <p className="text-2xl leading-relaxed">
              {showFullParagraph
                ? `The three innovations which I did with my father have to be put into separate pages because is just too much information here you can have a little picture of each thing if you want I don’t know if you have a picture of the electric car anymore I have it somewhere but I don’t exactly know it is a picture not available or something like that and the information somewhere else that doesn’t take away from the rest of the page I leave it up to you to figure it out I can see that your creative enough`
                : `The three innovations which I did with my father have to be put into separate pages...`}
            </p>
            <button
              onClick={toggleParagraph}
              className="mt-4 text-blue-500 font-bold underline"
            >
              {showFullParagraph ? "Show Less" : "Show More"}
            </button>
          </div>

          

  {/* Subsection 1 */}
  <div className="mb-12 mt-12">
    <motion.h3
      className="text-6xl font-bold mb-4 text-center bg-yellow-200 p-4 rounded-lg shadow-md"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
     THE TOWNTRUCK OF THE FUTURE
    </motion.h3>
    
    {/* Paragraph in Subsection 1 */}
    <div className="mb-12">
      <p className="text-4xl shadow-purple-500 shadow-2xl w-3/4 mx-auto leading-relaxed">
      Within 4 seconds I came up with this except my concept design (I was too young to be an engineer) was the back boom was made entirely of metal.
      </p>
    </div>

   {/* Image below Paragraph */}
<div className="mb-6 flex items-center justify-center">
  <img
    src="/assets/images/le1.jpg" // Replace with the actual image URL
    alt="First Major Project"
    className="w-[400px] h-[400px] rounded-lg shadow-[0_10px_20px_rgba(255,69,96,0.5),0_6px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105"
  />
</div>
</div>

  {/* Subsection 2 */}
  <div className="mb-12">
    <motion.h3
      className="text-6xl font-bold mb-4 text-center bg-yellow-200 p-4 rounded-lg shadow-md"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
     MODIFICATION TO THE TOWTRUCK
    </motion.h3>
    
    {/* Paragraph in Subsection 2 */}
    <div className="mb-6 w-3/4 mx-auto">
      <p className="text-3xl font-bold leading-relaxed">
      My dad made the design much better by putting straps on it. Below was one of the first ones we made for testing purposes. Later we added colors and other toys. It didn’t have a name yet in the picture below. I didn’t come up with the name but tow truck drivers loved the product. We listened to what our distributors told us and made the modifications to the tow truck to make it more appealing to both the tow truck independent and the big companies.
      </p>
    </div>

    {/* Image below Paragraph */}
    <div className="mb-6 flex items-center justify-center">
      <img
        src="/assets/images/le2.jpg" // Replace with the actual image URL
        alt="Overcoming Obstacles"
        className="w-[500px] h-[400px]  rounded-lg shadow-[0_10px_20px_rgba(255,69,96,0.5),0_6px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105"
      />
    </div>
  </div>

  {/* Subsection 3 */}
  <div className="mb-12 mx-auto">
    <motion.h3
      className="text-4xl font-bold mb-4 text-center shadow-2xl shadow-red-500 bg-yellow-200 p-4 rounded-lg "
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Subsection 3: Key Innovations and Ideas
    </motion.h3>
    
    {/* Paragraph in Subsection 3 */}
    <div className="mb-6 w-3/4 mx-auto mt-11">
      <p className="text-3xl font-semibold shadow-xl shadow-purple-500 leading-relaxed">
      I created the idea behind this mechanism above when I was 15 Not bad for a kid, eh??? My company my dad was working for made Millions The Company? Vulcan Equipment I remember that Vulcan Equipment, that that time on 95 Research Rd., and had a prototype within 6 months and had sold a whole whack of them to the Police. I am very sorry to admit to the fact that you can thank me for designing the first town truck, that could tow a car out of a parked place.
      </p>
    </div>

    {/* Image below Paragraph */}
    <div className="mb-6 flex justify-center items-center">
      <img
        src="/assets/images/le3.jpg" // Replace with the actual image URL
        alt="Key Innovations"
        className="w-[500px] h-[500px] rounded-lg shadow-lg shadow-red-700"
      />
    </div>
  </div>

  {/* Subsection 2 */}
  <div className="mb-12">
    <motion.h3
      className="text-6xl font-bold mb-4 text-center bg-yellow-200 p-4 rounded-lg shadow-md"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
     MODIFICATION TO THE TOWTRUCK
    </motion.h3>
    
    {/* Paragraph in Subsection 2 */}
    <div className="mb-6 w-3/4 mx-auto">
      <p className="text-3xl font-bold leading-relaxed">
      Later models were made with fancier colors and other newly improved features. My dad came up with many innovative variations to what this thing could lift.
      </p>
    </div>

    {/* Image below Paragraph */}
    <div className="mb-6 flex items-center justify-center">
      <img
        src="/assets/images/le4.jpg" // Replace with the actual image URL
        alt="Overcoming Obstacles"
        className="w-[500px] h-[400px]  rounded-lg shadow-[0_10px_20px_rgba(255,69,96,0.5),0_6px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105"
      />
    </div>
  </div>
</section>

 {/* Subsection 2 */}
 <div className="mb-12">
    <motion.h3
      className="text-6xl font-bold mb-4 text-center bg-yellow-200 p-4 rounded-lg shadow-md"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
     MODIFICATION TO THE TOWTRUCK
    </motion.h3>
    
    {/* Paragraph in Subsection 2 */}
    <div className="mb-6 w-3/4 mx-auto">
      <p className="text-3xl font-bold shadow-xl shadow-green-500 leading-relaxed">
      After going into the tow truck business we created the world’s first tow truck that could take a car out of a parked place. This joint venture with my dad and I put Vulcan on the map. I regret having come up with this idea. The police forces around the world particularly liked this one.
      </p>
    </div>

{/* Subsection 2 */}
<div className="mb-12">
    <motion.h3
      className="text-4xl font-bold mt-10 mb-4 text-center shadow-xl shadow-purple-600 bg-blue-200 p-4 rounded-lg "
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
   The best welder in the business Jeff Hooper
    </motion.h3>
    
    {/* Paragraph in Subsection 2 */}
    
    </div>
    
    {/* Image below Paragraph */}
    <div className="mb-6 flex items-center justify-center">
      <img
        src="/assets/images/les1.jpg" // Replace with the actual image URL
        alt="Overcoming Obstacles"
        className="w-[500px] h-[400px]  rounded-lg shadow-[0_10px_20px_rgba(255,69,96,0.5),0_6px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105"
      />
      <img
        src="/assets/images/les2.jpg" // Replace with the actual image URL
        alt="Overcoming Obstacles"
        className="w-[500px] ml-11 h-[400px]  rounded-lg shadow-[0_10px_20px_rgba(255,69,96,0.5),0_6px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105"
      />
    </div>

  </div>




<div className="mb-12">
    <motion.h3
      className="text-4xl font-bold mt-10 mb-4 text-center shadow-xl shadow-purple-600 bg-yellow-100 p-4 rounded-lg "
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
   This Was Mounted on the body of pick-up Track 
    </motion.h3>
    
    {/* Paragraph in Subsection 2 */}
    
    </div>
    
    {/* Image below Paragraph */}
    <div className="mb-6 flex items-center justify-center">
      <img
        src="/assets/images/les4.jpg" // Replace with the actual image URL
        alt="Overcoming Obstacles"
        className="w-[500px] h-[400px]  rounded-lg shadow-[0_10px_20px_rgba(255,69,96,0.5),0_6px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105"
      />
     
    </div>

    {/* Image below Paragraph */}
    <div className="mb-6 flex gap-24 mt-24 items-center justify-center">
      <img
        src="/assets/images/les5.jpg" // Replace with the actual image URL
        alt="Overcoming Obstacles"
        className="w-[350px] h-[300px]  rounded-lg shadow-[0_10px_20px_rgba(255,69,96,0.5),0_6px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105"
      />

<img
        src="/assets/images/les6.jpg" // Replace with the actual image URL
        alt="Overcoming Obstacles"
        className="w-[350px] h-[300px]  rounded-lg shadow-[0_10px_20px_rgba(255,69,96,0.5),0_6px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105"
      />

<img
        src="/assets/images/les7.jpg" // Replace with the actual image URL
        alt="Overcoming Obstacles"
        className="w-[350px] h-[300px]  rounded-lg shadow-[0_10px_20px_rgba(255,69,96,0.5),0_6px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105"
      />
     
    </div>


   
    {/* Paragraph in Subsection 2 */}
    <div className="mb-11 w-3/4  mt-24 shadow-2xl shadow-blue-400 mx-auto">
      <p className="text-3xl font-bold leading-relaxed">
      It was very versatile. In the end, they were selling all over the world, even Japan
It was the only one that could tow a motorcycle
with the special wheel dolly by father designed, cars that were completely damaged could still be towed.


      </p>
    </div>


    {/* Paragraph in Subsection 2 */}
    <div className="mb-11 mt-24 w-3/4 shadow-2xl shadow-blue-400 mx-auto">
      <p className="text-3xl font-bold leading-relaxed">
      them improvements followed and then too and the company grew and grew fast. Everyone wanted the type of towtrucks
      </p>
    </div>


    {/* Subsection 2 */}
<div className="mb-12">
    <motion.h3
      className="text-6xl font-bold mt-10 mb-4 text-center shadow-xl shadow-purple-600 bg-yellow-100 p-4 rounded-lg "
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
   NEW VULCAN
    </motion.h3>
    
    {/* Paragraph in Subsection 2 */}
    
    </div>
    
    {/* Image below Paragraph */}
    <div className="mb-6 flex items-center justify-center">
      <img
        src="/assets/images/l1.jpg" // Replace with the actual image URL
        alt="Overcoming Obstacles"
        className="w-[500px] h-[400px]  rounded-lg shadow-[0_10px_20px_rgba(255,69,96,0.5),0_6px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105"
      />
    </div>


    <div className="mb-6 flex items-center justify-center">
      <img
        src="/assets/images/l2.jpg" // Replace with the actual image URL
        alt="Overcoming Obstacles"
        className="w-[500px] h-[400px]  rounded-lg shadow-[0_10px_20px_rgba(255,69,96,0.5),0_6px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105"
      />
    </div>

    
    <div className="mb-12">
    <motion.h3
      className="text-6xl font-bold mt-10 mb-4 text-center shadow-xl shadow-purple-600 bg-yellow-100 p-4 rounded-lg "
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
   then those tow trucks got bigger and bigger
    </motion.h3>
    
    {/* Paragraph in Subsection 2 */}
    
    </div>
   
    
    <div className="mb-11 mt-24 w-3/4 shadow-2xl shadow-blue-400 mx-auto">
      <p className="text-3xl font-bold leading-relaxed">
      Later there was a military version created but by this time there were too many people working on this project and Vulcan screwed it up but that is just my opinion.

2
      </p>
    </div>
      
      

       {/* Image below Paragraph */}
    <div className="mb-6 flex items-center justify-center">
      <img
        src="/assets/images/l3.jpeg" // Replace with the actual image URL
        alt="Overcoming Obstacles"
        className="w-[500px] h-[400px]  rounded-lg shadow-[0_10px_20px_rgba(255,69,96,0.5),0_6px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105"
      />
    </div>

   
   

    
    <div className="mb-11 mt-24 w-3/4 shadow-2xl shadow-blue-400 mx-auto">
      <p className="text-3xl font-bold leading-relaxed">
      My dad also designed a tire repair machine that would fix defects in the rubber on the outside.

2
      </p>
    </div>


    <div className="mb-12 mt-12">
    <motion.h3
      className="text-6xl font-bold mt-10 mb-4 text-center shadow-xl shadow-purple-600 bg-yellow-100 p-4 rounded-lg "
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
  Flier
    </motion.h3>
    
    {/* Paragraph in Subsection 2 */}
    
    </div>

    <div className="mb-11 flex items-center justify-center">
      <img
        src="/assets/images/f1.jpeg" // Replace with the actual image URL
        alt="Overcoming Obstacles"
        className="w-[600px] h-[600px]  rounded-lg shadow-[0_10px_20px_rgba(255,69,96,0.5),0_6px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105"
      />
    </div>


    <div className="mb-6  mt-11 flex items-center justify-center">
      <img
        src="/assets/images/f2.jpeg" // Replace with the actual image URL
        alt="Overcoming Obstacles"
        className="w-[700px] h-[500px]  rounded-lg shadow-[0_10px_20px_rgba(255,69,96,0.5),0_6px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105"
      />
    </div>

   

    <div className="mb-12">
    <motion.h3
      className="text-6xl font-bold mt-10 mb-4 text-center shadow-xl shadow-purple-600 bg-yellow-100 p-4 rounded-lg "
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
  Below is another Flier of my dad’s
    </motion.h3>
    
    {/* Paragraph in Subsection 2 */}
    
    </div>

    <div className="mb-6  mt-22 flex items-center justify-center">
      <img
        src="/assets/images/f3.jpeg" // Replace with the actual image URL
        alt="Overcoming Obstacles"
        className="w-[700px] h-[500px]  rounded-lg shadow-[0_10px_20px_rgba(255,69,96,0.5),0_6px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105"
      />
    </div>


    <div className="mb-12 mt-12">
    <motion.h3
      className="text-6xl font-bold mt-10 mb-4 text-center shadow-xl shadow-purple-600 bg-yellow-100 p-4 rounded-lg "
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
  HOOKLIFT
    </motion.h3>
    
    {/* Paragraph in Subsection 2 */}
    
    </div>

    
      {/* Expandable Paragraph */}
      <div className="mb-6 w-3/4 mx-auto mt-11">
        <p
          className={`text-3xl font-semibold shadow-xl shadow-purple-500 leading-relaxed ${
            isExpanded ? "" : "line-clamp-1"
          }`}
        >
         We didn’t go out with the intention of changing the world. It just happened. It was a byproduct of what we created. The money was also a byproduct of what we created. But many of these inventions unfortunately are used for evil purposes rather than the good. And the inventor has no control over that. One of these inventions as an amazing thing that was that everybody uses for good almost and the other one is something that was truly amazing that was used for evil purposes. What I mean by evil purposes is that police and other organizations who love to tow your cars when you parked in bad places I’m talking about that kind of evil because I invented a tow truck to take the car out of a Park Place were no other tow truck could ever do before and now the whole world uses exactly that type of technology.
        </p>

        {/* Toggle Button */}
        <div
          className="flex justify-center items-center mt-4 cursor-pointer"
          onClick={toggleExpand}
        >
          {isExpanded ? (
            <ChevronUp className="text-red-500  w-[100px] h-[100px]" />
          ) : (
            <ChevronDown className="text-red-500  w-[100px] h-[100px]" />
          )}
        </div>
      </div>





       {/* Expandable Paragraph */}
       <div className="mb-6 w-3/4 mx-auto mt-11">
        <p
          className={`text-3xl font-semibold shadow-xl shadow-purple-500 leading-relaxed ${
            isExpanded ? "" : "line-clamp-1"
          }`}
        >
      Changed the way a support line works in any military operation
with the hook lift truck, which we created together. We originally Licensed a variation of it from a French company to make improvements on theirs and this is what we came up with. But no one wanted it in Canada, so we sold the patents for the new device back to the French company and not even realizing it, changed the way goods are transported throughout Europe and also changed the way, the military moves its’ support lines forward.
I quit doing work for them and my father, after they sold it, because I wanted one for myself. I wanted to develop mobile offices and specialty containers but the company didn’t think it would go anywhere. No body is perfect!
        </p>

        {/* Toggle Button */}
        <div
          className="flex justify-center items-center mt-4 cursor-pointer"
          onClick={toggleExpand}
        >
          {isExpanded ? (
            <ChevronUp className="text-red-500  w-[100px] h-[100px]" />
          ) : (
            <ChevronDown className="text-red-500  w-[100px] h-[100px]" />
          )}
        </div>
      </div>


      <div className="mb-6  mt-22 flex items-center justify-center">
      <img
        src="/assets/images/h1.jpg" // Replace with the actual image URL
        alt="Overcoming Obstacles"
        className="w-[700px] h-[500px]  rounded-lg shadow-[0_10px_20px_rgba(255,69,96,0.5),0_6px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105"
      />
    </div>

       {/* Expandable Paragraph */}
       <div className="mb-6 w-3/4 mx-auto mt-11">
        <p
          className={`text-3xl font-semibold shadow-xl shadow-purple-500 leading-relaxed ${
            isExpanded ? "" : "line-clamp-1"
          }`}
        >
      Now electrical generating plants can be picked up with ease and delivered anywhere. I spoke to a soldier who told me that this type of vehicle is great because it is only a target 1/2 the time. He said that when the truck is transporting something it is a target, but when it is going back to pick up another container, it is not, so the trucks last much longer in battle. Cool eh???
        </p>

        {/* Toggle Button */}
        <div
          className="flex justify-center items-center mt-4 cursor-pointer"
          onClick={toggleExpand}
        >
          {isExpanded ? (
            <ChevronUp className="text-red-500  w-[100px] h-[100px]" />
          ) : (
            <ChevronDown className="text-red-500  w-[100px] h-[100px]" />
          )}
        </div>
      </div>





      
      {/* Expandable Paragraph */}
      <div className="mb-6 w-3/4 mx-auto mt-11">
        <p
          className={`text-3xl font-semibold shadow-xl shadow-purple-500 leading-relaxed ${
            isExpanded ? "" : "line-clamp-1"
          }`}
        >
        Here are some other cool variations I have seen, but you know, in almost 40 years, I have only seen one improvement to the original hook, and since then I have come up with another 40 and when I try to contact companies here in Europe to see if we can do something together, no one ever called me  back. Hmmm.  Something is wrong with Europe.
        </p>

        {/* Toggle Button */}
        <div
          className="flex justify-center items-center mt-4 cursor-pointer"
          onClick={toggleExpand}
        >
          {isExpanded ? (
            <ChevronUp className="text-yellow-400  w-[100px] h-[100px]" />
          ) : (
            <ChevronDown className="text-yellow-400  w-[100px] h-[100px]" />
          )}
        </div>
      </div>



      <div className="mb-6  mt-22 flex items-center justify-center">
      <img
        src="/assets/images/h2.jpg" // Replace with the actual image URL
        alt="Overcoming Obstacles"
        className="w-[700px] h-[500px]  rounded-lg shadow-[0_10px_20px_rgba(255,69,96,0.5),0_6px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105"
      />
    </div>


    <div className="mb-12 mt-12">
    <motion.h3
      className="text-6xl font-bold mt-10 mb-4 text-center shadow-xl shadow-purple-600 bg-yellow-100 p-4 rounded-lg "
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
  Here is a cool looking one (below)
    </motion.h3>
    </div>

    <div className="mb-6  mt-22 flex items-center justify-center">
      <img
        src="/assets/images/h3.jpg" // Replace with the actual image URL
        alt="Overcoming Obstacles"
        className="w-[700px] h-[500px]  rounded-lg shadow-[0_10px_20px_rgba(255,69,96,0.5),0_6px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105"
      />
    </div>

      {/* Expandable Paragraph */}
      <div className="mb-6 w-3/4 mx-auto mt-11">
        <p
          className={`text-3xl font-semibold shadow-xl shadow-purple-500 leading-relaxed ${
            isExpanded ? "" : "line-clamp-1"
          }`}
        >
       What is so cool about the military truck I was told by a colonel in the U.S. Army and another in the German army told me that these hook lifts are fantastic because they are not but targets while they are not transporting goods so they have a better chance of surviving a war unlike other trucks that have things on them that are fixed for example indications truck is a good target to hit or other things. But a hook lift that is caring things like medical supplies containers are only a target when they have something on the back of them and when they don’t people don’t concern themselves with them so they end up saving more machines saving also costs of machines down the road for the governments that ordered them.
        </p>

        {/* Toggle Button */}
        <div
          className="flex justify-center items-center mt-4 cursor-pointer"
          onClick={toggleExpand}
        >
          {isExpanded ? (
            <ChevronUp className="text-yellow-400  w-[100px] h-[100px]" />
          ) : (
            <ChevronDown className="text-yellow-400  w-[100px] h-[100px]" />
          )}
        </div>
      </div>




        {/* Section 3 */}
        <section id="section3" className="mb-16">
          <motion.h2
            className="text-6xl font-extrabold mb-4 text-center bg-yellow-100 p-4 rounded-lg shadow-md"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            MY FATHER'S ENGINEERING ONLY
          </motion.h2>
          <p className="text-4xl font-bold w-2/3 ml-[270px] shadow-2xl shadow-yellow-600 leading-relaxed">
          IF YOU ARE A MECHANICAL ENGINEER, I HAVE LOTS MORE IDEAS.
          </p>
        </section>
        <div className="mb-6  mt-22 flex items-center justify-center">
      <img
        src="/assets/images/d1.jpg" // Replace with the actual image URL
        alt="Overcoming Obstacles"
        className="w-[700px] h-[500px]  rounded-lg shadow-[0_10px_20px_rgba(255,69,96,0.5),0_6px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105"
      />
    </div>
    <div className="mb-6  mt-24 flex items-center justify-center">
      <img
        src="/assets/images/d2.jpg" // Replace with the actual image URL
        alt="Overcoming Obstacles"
        className="w-[700px] h-[500px]  rounded-lg shadow-[0_10px_20px_rgba(255,69,96,0.5),0_6px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105"
      />
    </div>
     {/* Expandable Paragraph */}
     <div className="mb-6 w-3/4 mx-auto mt-11">
        <p
          className={`text-3xl font-semibold shadow-xl shadow-purple-500 leading-relaxed ${
            isExpanded ? "" : "line-clamp-1"
          }`}
        >
      Get your mind out to the gutter. This is a concrete vibrator used to take the care out of concrete as it is being poured, and allowing it to settle properly in it’s mould.
        </p>

        {/* Toggle Button */}
        <div
          className="flex justify-center items-center mt-4 cursor-pointer"
          onClick={toggleExpand}
        >
          {isExpanded ? (
            <ChevronUp className="text-yellow-400  w-[100px] h-[100px]" />
          ) : (
            <ChevronDown className="text-yellow-400  w-[100px] h-[100px]" />
          )}
        </div>
      </div>

      <p className="text-4xl font-bold w-2/3 ml-[270px] shadow-2xl shadow-yellow-600 leading-relaxed">
      Then came the really big tow trucks to tow the really big things like buses and cranes.
          </p>

          <div className="mb-6  mt-24 flex items-center justify-center">
      <img
        src="/assets/images/d3.jpg" // Replace with the actual image URL
        alt="Overcoming Obstacles"
        className="w-[1100px] h-[300px]  rounded-lg shadow-[0_10px_20px_rgba(255,69,96,0.5),0_6px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105"
      />
    </div>
    <div className="mb-6  mt-24 flex items-center justify-center">
      <img
        src="/assets/images/d4.jpg" // Replace with the actual image URL
        alt="Overcoming Obstacles"
        className="w-[400px] h-[800px]  rounded-lg shadow-[0_10px_20px_rgba(255,69,96,0.5),0_6px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105"
      />
    </div>

     {/* Expandable Paragraph */}
     <div className="mb-6 w-3/4 mx-auto mt-11">
        <p
          className={`text-3xl font-semibold shadow-xl shadow-purple-500 leading-relaxed ${
            isExpanded ? "" : "line-clamp-1"
          }`}
        >
     He was one of the first to use robots. which he also designed, to move heavy laminates from one part of an automated assembly line which he also designed.
        </p>

        {/* Toggle Button */}
        <div
          className="flex justify-center items-center mt-4 cursor-pointer"
          onClick={toggleExpand}
        >
          {isExpanded ? (
            <ChevronUp className="text-yellow-400  w-[100px] h-[100px]" />
          ) : (
            <ChevronDown className="text-yellow-400  w-[100px] h-[100px]" />
          )}
        </div>
      </div>


      <div className="mb-6  mt-24 flex items-center justify-center">
      <img
        src="/assets/images/d5.jpg" // Replace with the actual image URL
        alt="Overcoming Obstacles"
        className="w-[500px] h-[400px]  rounded-lg shadow-[0_10px_20px_rgba(255,69,96,0.5),0_6px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105"
      />
    </div>







       {/* Expandable Paragraph */}
     <div className="mb-6 w-3/4 mx-auto mt-11">
        <p
          className={`text-3xl font-semibold shadow-xl shadow-purple-500 leading-relaxed ${
            isExpanded ? "" : "line-clamp-1"
          }`}
        >
    But we are basically only limited by the laws of physics, so if you need something designed and it does not matter what it is, I can assure you of that, (anything mechanical or electro-mechanical) I have a new design for a new revolutionary tow truck but I think I will just keep it to myself this time.
        </p>

        {/* Toggle Button */}
        <div
          className="flex justify-center items-center mt-4 cursor-pointer"
          onClick={toggleExpand}
        >
          {isExpanded ? (
            <ChevronUp className="text-yellow-400  w-[100px] h-[100px]" />
          ) : (
            <ChevronDown className="text-yellow-400  w-[100px] h-[100px]" />
          )}
        </div>
      </div>



      <div className="mb-11  mt-24 flex items-center justify-center">
      <img
        src="/assets/images/d6.jpg" // Replace with the actual image URL
        alt="Overcoming Obstacles"
        className="w-[400px] h-[800px]  rounded-lg shadow-[0_10px_20px_rgba(255,69,96,0.5),0_6px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105"
      />
    </div>
    <p className="text-4xl font-bold w-[1200px] ml-[70px] shadow-2xl shadow-yellow-600 leading-relaxed">
    Here is the Jiffy Jack which lifts a car in 1 second. Here they put 4 seconds because they thought no one would believe the ad. But 4 seconds was much too long.
          </p>

          <div className="mb-6  mt-4 flex items-center justify-center">
      <img
        src="/assets/images/d7.jpg" // Replace with the actual image URL
        alt="Overcoming Obstacles"
        className="w-[600px] h-[300px]  rounded-lg shadow-[0_10px_20px_rgba(255,69,96,0.5),0_6px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105"
      />
    </div>

    <p className="text-4xl font-bold w-[1200px] ml-[70px] shadow-2xl shadow-yellow-600 leading-relaxed">
    Here the “jiffy Jack” would lift a car off the ground in about 1 or 2 seconds.  Later used by the Racing industry to lift race cars
          </p>

          <div className="mb-6  mt-4 flex items-center justify-center">
      <img
        src="/assets/images/d8.jpg" // Replace with the actual image URL
        alt="Overcoming Obstacles"
        className="w-[600px] h-[400px]  rounded-lg shadow-[0_10px_20px_rgba(255,69,96,0.5),0_6px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105"
      />
    </div>

      </main>
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

export default Page;
