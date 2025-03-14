import React from "react";
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const VideosOfWork = () => {
  return (
    <div className="text-center bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 min-h-screen">
      <div id="page-container">
        <div id="main-content">
          <article id="post-258129" className="page type-page status-publish">
            <div className="entry-content">
              <div className="et-l et-l--post">
                <div className="et_builder_inner_content">
                  {/* Header Section */}
                  <section className="relative bg-gradient-to-r from-indigo-500 via-purple-600 to-blue-500 py-16 shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div> {/* Background overlay */}
                    <div className="text-center relative z-10">
                      <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wide drop-shadow-lg">
                        Happy Customers
                      </h1>
                      <p className="text-2xl md:text-4xl text-blue-200 font-medium mt-4 tracking-wider">
                        Video Reviews
                      </p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                      <div className="w-20 h-20 bg-white rounded-full shadow-md opacity-90 animate-bounce"></div>
                    </div>
                  </section>

                  {/* Video Reviews Section */}
                  <section className="bg-BLUE-200 py-10">
                    <div className="text-center mb-10">
                      <p className="text-4xl font-extrabold text-blue-600 shadow-md">
                        Video Reviews
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-16">
                      {/* List of videos */}
                      {[
                        {
                          title: "CUSTOM FOLDABLE SHOWER HEAD",
                          src: "https://www.youtube.com/embed/Q8RXdpXce64",
                        },
                        {
                          title: "RAILING AND STEPS SANDED AND STAINED",
                          src: "https://www.youtube.com/embed/oeKsbYezH-I",
                        },
                        {
                          title: "WINDOW FRAMING",
                          src: "https://www.youtube.com/embed/Ri4uzDy2lV4",
                        },
                        {
                          title: "FLOOR REPAIR",
                          src: "https://www.youtube.com/embed/kl51mnLLUWU",
                        },
                        {
                          title: "SINK MODIFICATION",
                          src: "https://www.youtube.com/embed/dHinzRjrwaw",
                        },
                        {
                          title: "VOLUME 21 ALL KINDS OF STUFF",
                          src: "https://www.youtube.com/embed/KdgZizcVExI",
                        },
                        {
                          title: "MORE DECK REPAIRS",
                          src: "https://www.youtube.com/embed/jfRLPSWD9OI",
                        },
                        {
                          title: "Les the Handyman, Toronto Canada",
                          src: "https://www.youtube.com/embed/x8U9wLsYlrQ",
                        },
                        {
                          title: "Deck Repairs",
                          src: "https://www.youtube.com/embed/9phr0bXMnPM",
                        },
                        {
                          title: "Flooring Installation",
                          src: "https://www.youtube.com/embed/PWjUunEhdBc",
                        },
                        {
                          title: "Cabinet Repairs",
                          src: "https://www.youtube.com/embed/cEMkeMpr7Lg",
                        },
                        {
                          title: "Cabinet Repairs",
                          src: "https://www.youtube.com/embed/tmoI9V0EG_s",
                        },
                        {
                          title: "Cabinet Repairs",
                          src: "https://www.youtube.com/embed/LqFYgrxThp0",
                        },
                        {
                          title: "Cabinet Repairs",
                          src: "https://www.youtube.com/embed/RRlTSXt3h2o",
                        },
                        {
                          title: "Cabinet Repairs",
                          src: "https://www.youtube.com/embed/T9K2FML_Swg",
                        },
                        {
                          title: "Cabinet Repairs",
                          src: "https://www.youtube.com/embed/AZam_ASg5PY",
                        },
                        {
                          title: "Cabinet Repairs",
                          src: "https://www.youtube.com/embed/IVZoFfnR97w?feature=oembed",
                        },
                      ].map((video, index) => (
                        <div key={index} className="shadow-lg rounded-lg overflow-hidden">
                          <iframe
                            title={video.title}
                            src={video.src}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="w-full aspect-video rounded-md"
                          ></iframe>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Back to Top Button */}
                  <div
                    className="fixed bottom-8 right-8  cursor-pointer transform transition hover:scale-110"
                    onClick={scrollToTop}
                  >
                    <img
                      src="/assets/images/button page up.webp"
                      alt="Go Back"
                      className="w-[110px] h-[130px] hover:opacity-80 transition duration-300 transform hover:scale-110"
                    />
                  </div>

                  {/* Back Button */}
                  <div className="fixed bottom-8 left-8">
                    <a href="/LESTHEHANDYMAN" className="inline-block">
                      <img
                        src="/assets/images/button back.webp"
                        alt="Go Back"
                        className="w-[134px] h-[134px] hover:opacity-80 transition duration-300 transform hover:scale-110"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default VideosOfWork;
