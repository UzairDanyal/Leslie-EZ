import React from "react";
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const NewsArticles = () => {
  return (
    <div className="bg-gradient-to-b from-gray-200 to-gray-400 min-h-screen">
      <div id="page-container">
        <div id="main-content">
          <article className="post-258412 page type-page status-publish hentry">
            <div className="entry-content">
              <div className="et-l et-l--post">
                {/* Section Header */}
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 py-16 shadow-2xl">
                  <div className="text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-white animate-bounce">
                      NEWS ARTICLES
                    </h1>
                    <h3 className="text-2xl md:text-3xl text-gray-200 mt-4 animate-fadeIn">
                      About Les The Handyman
                    </h3>
                  </div>
                </div>

                {/* Image Section */}
                <div className="bg-white py-12 px-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {[
                      "https://proof.ez123.eu/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-24-at-12.23.43-PM.jpeg",
                      "https://proof.ez123.eu/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-24-at-12.22.44-PM.jpeg",
                      "https://proof.ez123.eu/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-24-at-12.22.44-PM-1.jpeg",
                      "https://proof.ez123.eu/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-24-at-12.22.26-PM.jpeg",
                      "https://proof.ez123.eu/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-24-at-12.22.26-PM-1.jpeg",
                      "https://proof.ez123.eu/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-24-at-12.19.59-PM.jpeg",
                      "https://proof.ez123.eu/wp-content/uploads/2022/05/french-article-980x773.jpg",
                      "https://proof.ez123.eu/wp-content/uploads/2022/05/09JUL2002recum.jpg",
                    ].map((src, index) => (
                      <div
                        className={`bg-white rounded-2xl overflow-hidden shadow-2xl transform transition duration-300 hover:scale-105 shadow-${
                          index % 2 === 0 ? "rgb(255, 99, 71)" : "rgb(135, 206, 250)"
                        }`}
                        key={index}
                      >
                        <div className="p-4">
                          <img
                            src={src}
                            alt={`Image ${index}`}
                            loading="lazy"
                            className="w-full h-96 object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Back to Top Button */}
                <div
                  className="fixed bottom-8 right-8 p-4 cursor-pointer transition transform hover:scale-110"
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
          </article>
        </div>
      </div>
    </div>
  );
};

export default NewsArticles;