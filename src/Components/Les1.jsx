import React from "react";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const VideosOfWork = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 min-h-screen">
      <div id="page-container">
        <div id="main-content">
          <article id="post-258129" className="page type-page status-publish">
            <div className="entry-content">
              <div className="et-l et-l--post">
                <div className="et_builder_inner_content">
                  {/* Header Section */}
                  <section className="relative bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 py-16">
                    <div className="text-center">
                      <h1 className="text-6xl font-extrabold text-gray-800 drop-shadow-lg animate-slideUp">
                        Videos of Work
                      </h1>
                      <p className="text-3xl text-gray-700 font-semibold mt-4 animate-pulse">
                        Before and After
                      </p>
                    </div>
                  </section>

                  {/* Introduction Videos */}
                  <section className="bg-gray-100 py-12">
                    <div className="text-center text-gray-800 mb-10">
                      <h2 className="text-5xl font-extrabold tracking-wide drop-shadow-md">
                        Introduction
                      </h2>
                      <p className="text-xl text-gray-600 mt-4 drop-shadow-sm">
                        Discover our vision and mission
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-12">
                      <div>
                        <iframe
                          title="new intro 001"
                          src="https://www.youtube.com/embed/vJHkVAFapxw?feature=oembed"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className="w-full aspect-video rounded-lg shadow-md hover:shadow-lg transition"
                        ></iframe>
                      </div>
                      <div>
                        <iframe
                          title="handyman"
                          src="https://www.youtube.com/embed/oeKsbYezH-I?feature=oembed"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className="w-full aspect-video rounded-lg shadow-md hover:shadow-lg transition"
                        ></iframe>
                      </div>
                    </div>
                  </section>

                  {/* Before and After Section */}
                  <section className="bg-gray-200 py-12">
                    <div className="text-center mb-8">
                      <h2 className="text-5xl font-bold text-gray-800 drop-shadow-lg">
                        Before and After Videos
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-8">
                      {[{
                        title: 'CUSTOM FOLDABLE SHOWER HEAD',
                        src: 'https://www.youtube.com/embed/n0LYWEXrYZ0?feature=oembed',
                      },
                      {
                        title: 'RAILING AND STEPS SANDED AND STAINED',
                        src: 'https://www.youtube.com/embed/Jt5TtM8SQ8E?feature=oembed',
                      },
                      {
                        title: 'WINDOW FRAMING',
                        src: 'https://www.youtube.com/embed/zXnB901TChw?feature=oembed',
                      },
                      {
                        title: 'FLOOR REPAIR',
                        src: 'https://www.youtube.com/embed/Mg3BX7qKYhM?feature=oembed',
                      },
                      {
                        title: 'SINK MODIFICATION',
                        src: 'https://www.youtube.com/embed/Ew8f1GY4FkA?feature=oembed',
                      },
                      {
                        title: 'VOLUME 21 ALL KINDS OF STUFF',
                        src: 'https://www.youtube.com/embed/s7OhBs5Xwng?feature=oembed',
                      },
                      {
                        title: 'MORE DECK REPAIRS',
                        src: 'https://www.youtube.com/embed/Bta1Qnfuaqw?feature=oembed',
                      },
                      {
                        title: 'Les the Handyman, Toronto Canada',
                        src: 'https://www.youtube.com/embed/Ow_Fpsy-LfY?feature=oembed',
                      },
                      {
                        title: 'Deck Repairs',
                        src: 'https://www.youtube.com/embed/Z2Up-MOykP4?feature=oembed',
                      },
                      {
                        title: 'Flooring Installation',
                        src: 'https://www.youtube.com/embed/YkP98bRBAMo?feature=oembed',
                      },
                      {
                        title: 'Cabinet Repairs',
                        src: 'https://www.youtube.com/embed/IVZoFfnR97w?feature=oembed',
                      }].map((video, index) => (
                        <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition">
                          <iframe
                            title={video.title}
                            src={video.src}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="w-full aspect-video rounded-md shadow-md"
                          ></iframe>
                          <p className="text-gray-800 text-center text-lg font-semibold mt-4 drop-shadow-sm">
                            {video.title}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Back to Top Button */}
                  <div
                    className="fixed bottom-8 right-8  cursor-pointer transition transform hover:scale-110"
                    onClick={scrollToTop}
                  >
                    <img
                      src="/assets/images/button page up.webp"
                      alt="Go Back"
                      className="w-[134px] h-[134px] hover:opacity-80 transition duration-300"
                    />
                  </div>

                  {/* Back Button */}
                  <div className="fixed bottom-8 left-8">
                    <a href="/LESTHEHANDYMAN" className="inline-block">
                      <img
                        src="/assets/images/button back.webp"
                        alt="Go Back"
                        className="w-[134px] h-[134px] hover:opacity-80 transition duration-300"
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
