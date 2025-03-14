import React from "react";

// Function to scroll to the top of the page
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Function to navigate back
const navigateBack = () => {
  window.history.back();
};

const MotorHomePage = () => {
  return (
    <div id="main-content" className="bg-gray-50 text-gray-800">
      <article id="post-258991" className="page">
        <div className="entry-content">
          <div className="et-l">
            <div className="et_builder_inner_content">
              {/* Section 1 */}
              <div
                className="relative bg-cover bg-center h-[50vh] shadow-lg"
                style={{
                  backgroundImage:
                    "url(https://ez12.hu/wp-content/uploads/2022/05/business-14.jpg)",
                }}
              >
                <section className="bg-black bg-opacity-50 flex items-center justify-center h-full">
                  <div className="text-center px-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold shadow-red-400 text-white tracking-wide shadow-lg">
                      Motor Home Modification & Customization
                    </h1>
                    <p className="mt-14 text-5xl  font-semibold text-gray-300">
                      <span className="block text-3xl shadow-2xl shadow-purple-600 font-bold">We create environments you love.</span>
                      <span className=" text-3xl font-light mt-2">
                        You are only as good as the people around you.
                      </span>
                    </p>
                  </div>
                </section>
              </div>

              {/* Section 2 */}
              <div className="bg-white py-12 shadow-md rounded-2xl mx-4 mt-6">
                <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-800">
                  First Motor Home in Europe
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 px-4">
                  <div className="rounded overflow-hidden shadow">
                    <iframe
                      title="2nd MOTORHOME trailer IN EUROPE"
                      src="https://www.youtube.com/embed/88WEU3huBAs?feature=oembed"
                      className="w-full h-[250px] md:h-[350px]"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="rounded overflow-hidden shadow">
                    <iframe
                      title="My first Motorhome in Hungary"
                      src="https://www.youtube.com/embed/EzCvS4JkFtU?feature=oembed"
                      className="w-full h-[250px] md:h-[350px]"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="bg-white py-12 shadow-md rounded-2xl mx-4 mt-6">
                <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-800">
                  2nd Motor Home in Europe
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 px-4">
                  <div className="rounded overflow-hidden shadow">
                    <iframe
                      title="MY CHINOOK AMERICAN MOTORHOME IN EUROPE"
                      src="https://www.youtube.com/embed/On3WEyhwuL8?feature=oembed"
                      className="w-full h-[250px] md:h-[400px]"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="rounded overflow-hidden shadow">
                    <iframe
                      title="2000 chinook feature rich motor home"
                      src="https://www.youtube.com/embed/IWE2GiPVl0Q?feature=oembed"
                      className="w-full h-[250px] md:h-[400px]"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div className="bg-white py-12 shadow-md rounded-2xl mx-4 mt-6">
                <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-800">
                  My 3rd Motor Home
                </h2>
                <div className="flex flex-wrap justify-center gap-6 mt-8 px-4">
                  <div className="rounded overflow-hidden shadow-md">
                    <iframe
                      title="2024 NEWEST trailer and Motor home video"
                      src="https://www.youtube.com/embed/5ki5qxfnze4?feature=oembed"
                      className="w-full h-[300px] md:h-[450px]"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="rounded overflow-hidden shadow-md">
                    <iframe
                      title="Second Motor Home Video"
                      src="https://www.youtube.com/embed/iPK_dDBarO8?feature=oembed"
                      className="w-full h-[300px] md:h-[450px]"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="rounded overflow-hidden shadow-md">
                    <iframe
                      title="Third Motor Home Video"
                      src="https://www.youtube.com/embed/bti6i_CKu9o?feature=oembed"
                      className="w-full h-[300px] md:h-[450px]"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>

             {/* Section: 2024 Newest Trailer and Motor Home Video */}
             <div className="w-full bg-gray-50 text-gray-800 py-12 px-4 shadow-2xl">
                <div className="max-w-4xl mx-auto text-center md:text-left">
                  <h2 className="text-4xl md:text-5xl  shadow-2xl shadow-purple-600 font-extrabold mb-6">
                    2024 Newest Trailer and Motor Home Video
                  </h2>
                  <p className="text-xl md:text-3xl font-semibold mt-10 leading-relaxed">
                    Replacing the old antiquated German monstrosity of a trailer hitch to a much more modern, attractive, and lighter version for a reasonable cost.
                  </p>
                  <p className="mt-4 text-xl md:text-3xl font-semibold shadow-2xl shadow-gray-900 leading-relaxed">
                    I found a good Hungarian company who knows what they’re doing. They are honest, hard-working, and fast. Here will be a link here where you can make an appointment with them directly.
                  </p>
                </div>
              </div>

              {/* Section: The Latest Motor Home */}
              <div className="w-full bg-gray-100 text-gray-800 py-12 px-4 shadow-2xl mt-6">
                <div className="max-w-4xl mx-auto text-center md:text-left">
                  <h2 className="text-4xl shadow-blue-500 shadow-2xl md:text-5xl font-extrabold mb-6">
                    The Latest Motor Home
                  </h2>
                  <p className="text-xl md:text-3xl font-semibold shadow-2xl shadow-pink-400 leading-relaxed">
                    QC924 LeVoyageur Car 2018 version purchased in 2020. My version is LeVoyageur Plus.
                  </p>
                  <p className="mt-14 text-xl md:text-3xl font-semibold shadow-2xl shadow-gray-500 leading-relaxed">
                    Replacing the old antiquated German monstrosity of a trailer hitch to a much more modern, attractive, and lighter version for a reasonable cost, that a company in Hungary truly knows what they’re doing. They are honest, hard-working, and fast.
                  </p>
                  <p className="mt-14 text-xl md:text-3xl font-semibold shadow-2xl shadow-blue-200 leading-relaxed">
                    Adding a Victron solar system and battery system by a Hungarian company, who really knows their stuff and are surprisingly organized compared to everybody else I’ve met in Europe.
                  </p>
                  <p className="mt-14 text-xl md:text-3xl font-semibold shadow-2xl shadow-gray-900 leading-relaxed ">
                    Here in these pictures is installing a system which would later be expanded to quite a serious one. And although they can’t speak German or English, I’m going to provide a translator for them and work on their systems so that they can serve everybody else in Europe because these guys really deserve the business because they want it.
                  </p>
                  <p className="mt-20  md:text-3xl font-semibold shadow-2xl shadow-gray-900  leading-relaxed">
                    In the video below, because my vehicle was so big it wouldn’t fit by his store, he came to a place where my vehicle was parked and did the work there.
                  </p>
                </div>
              </div>

              {/* Section: Video Integration */}
              <div className="w-full bg-gray-200 text-gray-800 py-12 px-4 shadow-2xl mt-6">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                    Watch the Video
                  </h2>
                  <p className="text-3xl md: md:text-3xl font-semibold shadow-2xl shadow-red-700 leading-relaxed mb-18">
                    In the video below, because my vehicle was so big it wouldn’t fit by his store, he came to a place where my vehicle was parked and did the work there.
                  </p>
                  <div className="rounded overflow-hidden mt-24 shadow-lg">
                    <iframe
                      title="2024 NEWEST trailer and Motor home video"
                      src="https://www.youtube.com/embed/SAsfygxho2k?feature=oembed"
                      className="w-full h-[250px] md:h-[400px]"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Fixed Buttons */}
      <button
        onClick={navigateBack}
        className="fixed bottom-5 left-5  rounded-full focus:outline-none"
      >
        <img
          src="/assets/images/button back.webp"
          alt="Back"
          className="h-[164px] w-[164px]"
        />
      </button>

      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5   rounded-full focus:outline-none"
      >
        <img
          src="/assets/images/button page up.webp"
          alt="Top"
          className="h-[164px] w-[164px]"
        />
      </button>
    </div>
  );
};

export default MotorHomePage;
