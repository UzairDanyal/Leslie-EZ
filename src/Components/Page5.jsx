import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const PageContent = () => {
  const [expandedText, setExpandedText] = useState({});

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateBack = () => {
    window.history.back();
  };

  const toggleText = (index) => {
    setExpandedText((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="bg-yellow-50">
      <div id="page-container" className="container mx-auto px-6">
        <div id="main-content">
          <article id="post-258018" className="post-258018 page type-page status-publish hentry">
            <div className="entry-content">
              <div className="et-l et-l--post">
                <div className="et_builder_inner_content et_pb_gutters3">
                  {/* Section 1 */}
                  <section className="bg-[#e0e0e0dc] py-16 text-center">
                    <h1 className="text-5xl font-bold animate-pulse text-gray-800 drop-shadow-lg shadow-black">
                      Clinical Engineering
                    </h1>
                  </section>
                  {/* Section 2 */}
                  <section className="bg-white py-16 flex justify-center">
                    <img
                      className="w-[600px] rounded-lg shadow-xl transition-transform hover:scale-105"
                      src="/assets/images/C7.jpg"
                      alt="Clinical Engineering"
                    />
                  </section>

                  {/* Section 3 */}
                  <section
                    className="bg-cover bg-center py-16"
                    style={{ backgroundImage: 'url("https://ez12.hu//wp-content/uploads/2022/03/119888-engineering-wallpaper-data-src-img-982927-hi-tech-1440x900-1.jpg")' }}
                  >
                    <div className="text-center shadow-2xl shadow-blue-500 px-6">
                      <p className="text-3xl font-bold text-black">
                        {expandedText[1] ? (
                          "I have worked under Mr. Ed Prentke at Metro-Health Medical Centre in the United States. I also did a few things for the Cleveland Clinic. Ed was the founder of Prentke-Romac in the U.S. He was also like me but an older version when We met. And we have designed many things together while I was there."
                        ) : (
                          "I have worked under Mr. Ed Prentke at Metro-Health Medical Centre..."
                        )}
                      </p>
                      <button
                        onClick={() => toggleText(1)}
                        className="text-yellow-800 py-4 px-8 mt-4 flex justify-center items-center"
                      >
                        {expandedText[1] ? <ChevronUp size={50} /> : <ChevronDown size={50} />}
                      </button>
                    </div>
                  </section>

                  {/* Section 4 */}
                  <section className="bg-[#FAFAFA] py-16 flex flex-wrap">
                    <div className="w-full md:w-1/2 px-4">
                      <p className="text-3xl font-semibold shadow-2xl shadow-purple-800 text-gray-700">
                        {expandedText[2] ? (
                          "This is a hobby that I want to make eventually into a full-time profession. But I cannot do anything here for free. Perhaps one day I will figure out how OHIP can pay me. Until then this is why it will have to be."
                        ) : (
                          "This is a hobby that I want to make eventually into a full-time..."
                        )}
                      </p>
                      <button
                        onClick={() => toggleText(2)}
                        className="py-4 px-8 mt-4 flex justify-center items-center"
                      >
                        {expandedText[2] ? <ChevronUp size={50} /> : <ChevronDown size={50} />}
                      </button>
                    </div>
                    <div className="w-full md:w-1/2 px-4 mt-6 md:mt-0">
                      <img
                        className="w-full h-[500px] rounded-lg shadow-xl"
                        src="/assets/images/C1.jpg"
                        alt="Sailing"
                      />
                    </div>
                  </section>

                  {/* Section 5 */}
                  <section className="bg-yellow-50 mb-24 shadow-2xl shadow-blue-300 py-10 flex justify-center items-center">
                    <div className="text-center px-">
                      <p className="text-3xl font-bold shadow-xl shadow-green-400 text-gray-700">
                        {expandedText[3] ? (
                          " Mr. Ed Prentke and I designed all kinds of things together He was 82 some 20 years ago when this pictu Mr. Ed Prentke and I designed all kinds of things together.re was taken. Today he is 102. But I will always remember him in my heart and all the fun we had sailing in his Ketch, and all the devices we designed and built for all the disabled people who really needed to have things made. And who loved us for it designed and made in one day. The patient got it the next day. So completely shocked he was and the rest of the department, I ended up making about 3 more before they were sourced out to another company. It was called a “gurney adapter.” When patients are on a gurney facing up for part of the time and then facing down part of the time. When they are facing down, there used to be a tray that would hold their food and if they wanted to read, they could not because the leftover food was there. So I made a round tray so it could swivel out of the way. Now the patient did not have to wait for the nurse to take the tray. The patients loved it. And it wasn’t long before my phone was ringing off the hook from many different departments."
                        ) : (
                          "Mr. Ed Prentke and I designed all kinds of things together..."
                        )}
                      </p>
                     
                    
                      <button
                        onClick={() => toggleText(3)}
                        className="py-4 px-8 mt-4 flex justify-center items-center"
                      >
                        {expandedText[3] ? <ChevronUp size={50} /> : <ChevronDown size={50} />}
                      </button>
                    </div>
                  </section>

                  <div className="w-full ml-[330px] md:w-1/2 px-4 mt-6 md:mt-0">
                      <img
                        className="w-[600px] h-[250px] rounded-lg shadow-xl"
                        src="/assets/images/c10.jpg"
                        alt="Sailing"
                      />
                      
                    </div>


                    <p className="text-3xl font-bold mt-24 shadow-neutral-700 shadow-2xl bg-slate-300 text-gray-700">
                        {expandedText[4] ? (
                           "This is Ed above showing the arm I designed. It could be used to push, pull and twist at the same time the resistance could be adjusted with a small screw. There was also a soft rubber stopper at either end to cushion the shock when it reached it’s end or beginning of the stroke. The O.T. (occupational therapists) Department used this one and I made three others too. As well a the really big one which 20 people could use all at the same time. I left Metro-health before it was finished but Ed sent me a picture of it. It was cool. It was exactly how I envisioned it.I want to thank Vince, wherever he may be. For all the great pictures he took of all our inventions. He and I and Ed had a conversation several months before he died. About some of the things I am building up here, in Canada and I would like someone to see them so they can be sold in the states and told me to contact Prenke-Romac but no one ever called me back. I left several messages for his old partner. The name escapes me now.Ed sent me a collection of all his designs, with schematics and all and told me to use them to do my clinical engineering business here in Toronto. It is very difficult to do it here. If anyone needs a good clinical engineer, please let me know. I was ED’S MINI ME.."
                        ) : (
                          "This is Ed above showing the arm I designed. It could be used to push, pull and twist at the same time...."
                        )}
                      </p>
                      <button
                        onClick={() => toggleText(4)}
                        className="py-4 px-8 mt-4 flex justify-center items-center"
                      >
                        {expandedText[4] ? <ChevronUp size={50} /> : <ChevronDown size={50} />}
                      </button>



                    <section className="bg-blue-50 py-16 mb-24 shadow-2xl shadow-purple-500 flex justify-center items-center">
                    <div className="text-center px-6">
                    <p className="text-3xl font-bold text-gray-700">
                        {expandedText[5] ? (
                          "Designed and built by Ed.  An easel to hold paper, to print on that could be adjusted up or down.  Great idea.  Things we take for granted, people with limited mobility have lots of problems with.."
                        ) : (
                          "Designed and built by Ed.  An easel to hold paper,...."
                        )}
                      </p>
                      <button
                        onClick={() => toggleText(5)}
                        className="py-4 px-8 mt-4 flex justify-center items-center"
                      >
                        {expandedText[5] ? <ChevronUp size={50} /> : <ChevronDown size={50} />}
                      </button>
                    </div>
                  </section>


                  <div className="w-full ml-[330px] shadow-2xl shadow-pink-600 mb-24 md:w-1/2 px-4 mt-6 md:mt-0">
                      <img
                        className="w-[400px] h-[550px] rounded-lg shadow-xl"
                        src="/assets/images/C2.jpg"
                        alt="Sailing"
                      />
                      
                    </div>


                  {/* Section 6 */}
                  <section className="bg-gray-300 py- flex justify-center items-center">
                    <div className="text-center px-6">
                      <p className="text-3xl font-bold text-gray-700">
                        {expandedText[6] ? (
                          "With limited hand mobility, Something Ed made for someone who had problems dialing the phone. Ed gave me all these things, in case I wanted to use them.."
                        ) : (
                          "With limited hand mobility, Something Ed made for ..."
                        )}
                      </p>
                      <button
                        onClick={() => toggleText(6)}
                        className="py-4 px-8 mt-4 flex justify-center items-center"
                      >
                        {expandedText[6] ? <ChevronUp size={50} /> : <ChevronDown size={50} />}
                      </button>
                    </div>
                  </section>

                 
                      <img
                        className="w-[500px] h-[200px] flex ml-[370px] mt-4 mb-24 rounded-lg shadow-xl  shadow-pink-600"
                        src="/assets/images/C4.jpg"
                        alt="Sailing"
                      />
                       <img
                        className="w-[500px] h-[200px] flex ml-[370px] mt-4 mb-24 rounded-lg shadow-xl  shadow-pink-600"
                        src="/assets/images/C5.jpg"
                        alt="Sailing"
                      />
                      
                    

                </div>
                <section className="bg-yellow-100  mb-24 shadow-2xl shadow-purple-500 flex justify-center items-center">
                    <div className="text-center ">
                    <p className="text-3xl font-bold text-gray-700">
                        {expandedText[7] ? (
                          "Designed by me and built by me but I wanted both our names on it.   THIS WAS CALLED  THE PRENTKE BUBIK ARM I also designed all kinds of other things which are not here but I will make new ones here.  A cup and cell phone holder.  I was 32 here.."
                        ) : (
                          "Designed by me and built by me but I wanted both our names on it.   THIS...."
                        )}
                      </p>
                      <button
                        onClick={() => toggleText(7)}
                        className="py-4 px-8 mt-4 flex justify-center items-center"
                      >
                        {expandedText[7] ? <ChevronUp size={50} /> : <ChevronDown size={50} />}
                      </button>
                    </div>
                  </section>


                
                      <img
                        className="w-[500px] h-[350px] shadow-2xl shadow-pink-600  ml-[330px] rounded-lg mb-24"
                        src="/assets/images/C6.jpg"
                        alt="Sailing"
                      />
                      
                  
                      <section className="  mb-24 shadow-2xl shadow-purple-500 flex justify-center items-center">
                    <div className="text-center ">
                    <p className="text-3xl font-bold mt-20 text-gray-700">
                        {expandedText[8] ? (
                          "This was a gurney adapter that fit under the bed where the quad or paraplegic was, where they were facing up, it was not so bad but when they were facing down, there was a tray that clipped into the bottom so the patient could eat. However, when they finished eating, they has to wait for the nurse to return, to remove the tray. I created a rotating tray so the patient could move the tray themselves and it gave them space to do other things like reading. I designed it so anyone could install it. I came completely assembled. I heard later they were being used in places like the Cleveland Clinic. I gave the design for free to help those less fortunate..."
                        ) : (
                          "This was a gurney adapter that fit under the bed where the quad or paraplegic was, where.."
                        )}
                      </p>
                      <button
                        onClick={() => toggleText(8)}
                        className="py- px- mt-4 flex justify-center items-center"
                      >
                        {expandedText[8] ? <ChevronUp size={50} /> : <ChevronDown size={50} />}
                      </button>
                    </div>
                  </section>
                
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Fixed Back Button */}
      <button
        onClick={navigateBack}
        className="fixed bottom-5 left-5 p-4 rounded-full transition-transform transform hover:scale-110 flex items-center justify-center "
      >
        <img
          src="/assets/images/button back.webp"
          alt="Back"
          className="h-[164px] w-[164px]"
        />
      </button>

      {/* Fixed Scroll-to-Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 p-4 rounded-full transition-transform transform hover:scale-110 flex items-center justify-center "
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

export default PageContent;
