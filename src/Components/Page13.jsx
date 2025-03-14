import React from "react";
import { motion } from "framer-motion";

const StoryPage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to navigate back
  const navigateBack = () => {
    window.history.back();
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
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-xl">
            THE JOURNEY WHICH BROUGHT ME HERE
          </h1>
          
        </motion.div>
      </header>
{/* Section 1 */}
<section className="px-6 py-12 md:py-16 lg:py-20 bg-gradient-to-r from-pink-100 to-blue-100 flex justify-center">
  <div className="w-[80%] bg-white rounded-2xl shadow-2xl shadow-purple-500 p-8">
    {/* Card for Title and Text */}
    <div className="bg-gradient-to-r from-yellow-100 to-green-100 p-6 rounded-xl shadow-lg shadow-purple-400">
      <h1 className="text-center text-4xl font-bold text-purple-600">
        I was Born on December 17, 1957
      </h1>
      <p className="text-2xl font-bold leading-relaxed text-center mt-4 text-purple-800">
        of Hungarian Parents, new immigrants to Canada they came from Hungary, 
        then Brazil, then Canada where I was born
      </p>
    </div>

    {/* Image Section */}
    <div className="mt-10 flex justify-center">
      <img
        src="assets/images/journey1.jpg"
        alt="Childhood photo"
        className="rounded-xl shadow-xl shadow-purple-500 w-[400px] h-auto"
      />
    </div>
  </div>
</section>

{/* Section 2 */}
<section className="px-6 py-12 md:py-16 lg:py-20 bg-gradient-to-r from-green-100 to-cyan-100 flex justify-center">
  <div className="w-[80%] bg-white rounded-2xl shadow-2xl shadow-teal-500 p-8">
    {/* Card for Title and Text */}
    <div className="bg-gradient-to-r from-blue-100 to-teal-100 p-6 rounded-xl shadow-lg shadow-teal-400">
      <h1 className="text-center text-4xl font-bold text-teal-600">
        When I was 5 to 6 years old my parents took me traveling
      </h1>
      <p className="text-2xl font-bold leading-relaxed text-center mt-4 text-teal-800">
        Here on the SS France
      </p>
    </div>
     {/* Image Section */}
     <div className="mt-10 flex justify-center">
      <img
        src="assets/images/journey2.jpg"
        alt="Travel photo"
        className="rounded-xl shadow-xl shadow-teal-500 w-[400px] h-auto"
      />
    </div>
  </div>
</section>
{/* Section 1 */}
<section className="px-6 py-12 md:py-16 lg:py-20 bg-gradient-to-r from-pink-100 to-blue-100 flex justify-center">
  <div className="w-[80%] bg-white rounded-2xl shadow-2xl shadow-purple-500 p-8">
    {/* Card for Title and Text */}
    <div className="bg-gradient-to-r from-yellow-100 to-green-100 p-6 rounded-xl shadow-lg shadow-purple-400">
      <h1 className="text-center text-3xl font-bold text-purple-600">
      My mother was an elegant woman, And we had a good life
      </h1>
      <p className="text-2xl font-bold leading-relaxed text-center mt-4 text-purple-800">
      They taught me the values of honesty and integrity and my mother taught me how to shop 🙂
      </p>
    </div>

    {/* Image Section */}
    <div className="mt-10 flex justify-center">
      <img
        src="assets/images/journey3.jpg"
        alt="Childhood photo"
        className="rounded-xl shadow-xl shadow-purple-500 w-[400px] h-auto"
      />
    </div>
  </div>
</section>

{/* Section 2 */}
<section className="px-6 py-12 md:py-16 lg:py-20 bg-gradient-to-r from-green-100 to-cyan-100 flex justify-center">
  <div className="w-[80%] bg-white rounded-2xl shadow-2xl shadow-teal-500 p-8">
    {/* Card for Title and Text */}
    <div className="bg-gradient-to-r from-blue-100 to-teal-100 p-6 rounded-xl shadow-lg shadow-teal-400">

      <p className="text-2xl font-bold leading-relaxed text-center mt-4 text-purple-800">
      I loved Christmas even though it was pretty close to my birthday but my parents always managed to have a little birthday party for me regardless before the big event. So I had a happy life child in fact my whole life was pretty much happy.
      </p>
    </div>
     {/* Image Section */}
     <div className="mt-10 flex justify-center">
      <img
        src="assets/images/journey4.jpg"
        alt="Travel photo"
        className="rounded-xl shadow-xl shadow-teal-500 w-[400px] h-auto"
      />
    </div>
  </div>
</section>


{/* Section 1 */}
<section className="px-6 py-12 md:py-16 lg:py-20 bg-gradient-to-r from-pink-100 to-blue-100 flex justify-center">
  <div className="w-[80%] bg-white rounded-2xl shadow-2xl shadow-purple-500 p-8">
    {/* Card for Title and Text */}
    <div className="bg-gradient-to-r from-yellow-100 to-green-100 p-6 rounded-xl shadow-lg shadow-purple-400">

      <h1 className="text-center text-4xl font-bold text-teal-600">
      Körülbelül 7 éves koromban a kisállat sün Németországban a neve Snorkel volt
      </h1>
    </div>

    {/* Image Section */}
    <div className="mt-10 flex justify-center">
      <img
        src="assets/images/journey5.jpg"
        alt="Childhood photo"
        className="rounded-xl shadow-xl shadow-purple-500 w-[400px] h-auto"
      />
    </div>
  </div>
</section>

{/* Section 2 */}
<section className="px-6 py-12 md:py-16 lg:py-20 bg-gradient-to-r from-green-100 to-cyan-100 flex justify-center">
  <div className="w-[80%] bg-white rounded-2xl shadow-2xl shadow-teal-500 p-8">
    {/* Card for Title and Text */}
    <div className="bg-gradient-to-r from-blue-100 to-teal-100 p-6 rounded-xl shadow-lg shadow-teal-400">
    
    <p className="text-3xl font-bold leading-relaxed text-center mt-1 text-purple-800">
    Christmas at 10
      </p>
      
    </div>
     {/* Image Section */}
     <div className="mt-10 flex justify-center">
      <img
        src="assets/images/journey6.jpg"
        alt="Travel photo"
        className="rounded-xl shadow-xl shadow-teal-500 w-[400px] h-auto"
      />
    </div>
    <div className="mt-10 flex justify-center">
      <img
        src="assets/images/journey7.jpg"
        alt="Travel photo"
        className="rounded-xl shadow-xl shadow-teal-500 w-[400px] h-auto"
      />
    </div>
  </div>
</section>
{/* Section 1 */}
<section className="px-6 py-12 md:py-16 lg:py-20 bg-gradient-to-r from-pink-100 to-blue-100 flex justify-center">
  <div className="w-[80%] bg-white rounded-2xl shadow-2xl shadow-purple-500 p-8">
    {/* Card for Title and Text */}
    <div className="bg-gradient-to-r from-yellow-100 to-green-100 p-6 rounded-xl shadow-lg shadow-purple-400">

      <h1 className="text-center text-2xl font-bold text-teal-600">
      They sent me to art school to learn many things like turning pottery in the Swiss mountains
      </h1>
    </div>

    {/* Image Section */}
    <div className="mt-10 flex justify-center">
      <img
        src="assets/images/journey8.jpg"
        alt="Childhood photo"
        className="rounded-xl shadow-xl shadow-purple-500 w-[400px] h-auto"
      />
    </div>
  </div>
</section>

{/* Section 2 */}
<section className="px-6 py-12 md:py-16 lg:py-20 bg-gradient-to-r from-green-100 to-cyan-100 flex justify-center">
  <div className="w-[80%] bg-white rounded-2xl shadow-2xl shadow-teal-500 p-8">
    {/* Card for Title and Text */}
    <div className="bg-gradient-to-r from-blue-100 to-teal-100 p-6 rounded-xl shadow-lg shadow-teal-400">
    
    <p className="text-3xl font-bold leading-relaxed text-center mt-1 text-purple-800">
    They sent me to art school to learn many things like turning pottery in the Swiss mountains
      </p>
      
    </div>
     {/* Image Section */}
     <div className="mt-10 flex justify-center">
      <img
        src="assets/images/journey9.jpg"
        alt="Travel photo"
        className="rounded-xl shadow-xl shadow-teal-500 w-[400px] h-auto"
      />
    </div>
    
    
    <p className="text-3xl font-bold leading-relaxed bg-gradient-to-r from-blue-100 to-teal-100 p-6 rounded-xl shadow-lg shadow-teal-400 text-center mt-10 text-purple-800">
    Them making the puter caps for the beer mugs. I was learning from this guy. I was there for two weeks.
      </p>
    <div className="mt-10 flex justify-center">
      <img
        src="assets/images/journey10.jpg"
        alt="Travel photo"
        className="rounded-xl shadow-xl shadow-teal-500 w-[400px] h-auto"
      />
    </div>
    </div>

</section>
{/* Section 1 */}
<section className="px-6 py-12 md:py-16 lg:py-20 bg-gradient-to-r from-pink-100 to-blue-100 flex justify-center">
  <div className="w-[80%] bg-white rounded-2xl shadow-2xl shadow-purple-500 p-8">
    {/* Card for Title and Text */}
    <div className="bg-gradient-to-r from-yellow-100 to-green-100 p-6 rounded-xl shadow-lg shadow-purple-400">

      <h1 className="text-center text-2xl font-bold text-teal-600">
      My parents really loved me so I learned that love opens a lot of doors however on the Internet don’t think anybody actually knows what that is because they’re so busy trying to get something from you.
      Since the lockdown I have been asked 187 times to buy a new smart phone for somebody. It wouldn’t even occur to me no matter how desperate I was to ask a woman to do such a thing for me. But I wouldn’t even waste my time buying one anyway. Of the 916 women I have talked on line with not one single one was real.
      </h1>
    </div>

    <div className="bg-gradient-to-r from-yellow-100 mt-4 to-green-100 p-6 rounded-xl shadow-lg shadow-purple-400">

      <h1 className="text-center text-2xl font-bold   text-teal-600">
      It makes me wonder what is happening to our civilization. No one has any honor, no integrity, no honesty,
      </h1>
    </div>

    {/* Image Section */}
    <div className="mt-10 flex justify-center">
      <img
        src="assets/images/journey11.jpg"
        alt="Childhood photo"
        className="rounded-xl shadow-xl shadow-purple-500 w-[400px] h-auto"
      />
    </div>
  </div>
</section>

<section className="px-6 py-12 md:py-16 lg:py-20 bg-gradient-to-r from-pink-100 to-blue-100 flex justify-center">
  <div className="w-[80%] bg-white rounded-2xl shadow-2xl shadow-purple-500 p-8">
    {/* Card for Title and Text */}
    <div className="bg-gradient-to-r from-yellow-100 to-green-100 p-6 rounded-xl shadow-lg shadow-purple-400">

      <h1 className="text-center text-2xl font-bold text-teal-600">
      Snorkeling with my cousin  Bubik Istvan  in Rovine Croatia, the other kid was from England and we hung out together for weeks
      </h1>
    </div>


    {/* Image Section */}
    <div className="mt-10 flex justify-center">
      <img
        src="assets/images/journey12.jpg"
        alt="Childhood photo"
        className="rounded-xl shadow-xl shadow-purple-500 w-[400px] h-auto"
      />
    </div>
  </div>
</section>


<section className="px-6 py-12 md:py-16 lg:py-20 bg-gradient-to-r from-indigo-100 to-pink-100 flex justify-center">
  <div className="w-[80%] bg-white rounded-2xl shadow-2xl shadow-indigo-500 p-8">
    {/* Card for Long Text */}
    <div className="bg-gradient-to-r from-teal-100 to-yellow-100 p-6 rounded-xl shadow-lg shadow-teal-400">
      <p className="text-2xl font-semibold leading-relaxed text-center mt-4 text-gray-700">
      Some of this stuff is going to be a little bit hard for you to believe because when I think back at my life, it went by so fast because I was having such a good time.
I had my first company when I was 14 years old. I was very shy and I needed to break out of the shyness but I wasn’t sure exactly how to do it I really loved photography and I begged my parents to buy me the cheapest Canon which was called a Canon Ftp. It was a 35mm camera with a 50 mm lens and a 2.8 aperture for anybody who might be interested or maybe knowledgeable about actual photography and not digital automatic photography which are two completely different things. There were no digital cameras in those days and I started my business using that camera. I knew nothing of business though I learned from my parents because my mother was a whippersnapper in the business community. I was motivated entirely by money because my father never gave me any or it was like squeezing water out of a stone. My mother always gave me money when my dad wouldn’t so it wasn’t that bad he was she knew how much things cost and make sure that I had something extra. I did every job around the house I can to make money. I even wrote out the English dictionary 10 times for $0.10 a word at the beginning I was getting 1/4 for every word later on. Needless to say that I have no idea what was on my mother’s mind when she offered this amazing deal. It sort of boosted my comprehension of English to a different kind of level.
I was one of these kids that went out riding with his friends and on our bicycles but I was always looking to make a buck. Even though I make pretty good money writing out the dictionary, I still knew that eventually I would run out of words, and have to figure something else out. I asked my friends if they want to help me cut grass and they all said yes. So I borrowed my parent’s lawn more for one summer but by the end of the summer, I had 11 lawn Mowers in 33 kids working for me. My dad was a little bit upset that he couldn’t get his car into the garage of my mom love the fact that business was also in my blood. I was raised as a Catholic, went to Catholic school, went to Catholic private school, and then went to university after that. I hated school because I was bullied a lot in those days there was nothing anybody did about it. I remember once I was in air cadets might as well have been called space cadets I really learn how to march around and around in circles. For whatever reason people are always jealous of me but it wasn’t my parents that were giving me money to buy all the toys that I had, it was me making my own money and buying the best I could afford.
One day you’ll have to buy the book or maybe I will make one and put it here online. I hated reading, hated English even more, and although it is my mother tongue, I found every excuse not to study it. It wasn’t until I was 16 that my life was about to change forever. I’d already started my photographic business and when I was 15 years old had my first customer. It was a model who needed a comp done and she couldn’t afford a real photographer. I’m talking about a professional photographer with the studio. I did all of my pictures on location which was inside in some places outside using different types of flash to get the desired effect and did everything prayer primarily in black and white. But I was the only guy in the whole city of Toronto that could deliver contact sheets the very next day.
A contact sheet is a print that you make directly from the negatives that you develop and after drying I had them put inside special sleeves that were transparent and were good quality plastic so that I didn’t have to take the negatives out again to make prints but I also had a special device that would take the negatives and force it down on a rubber pad that would make the contacts even sharper. My parents gave me one of the rooms in the basement for a darkroom I bought all my own equipment and built most of the stuff myself because I’ve been fixing and building things with my father since I was like 11 or 12 years old because he had many rental properties in those days. When I needed help I asked my dad never had time for me so I saved up my money and hired a carpenter who was completely shocked that a 14-year-old kid would hire him to make me a desk and other things and I had an electrician to make some other things so I can plug in my new enlarger and so on. As I got busier and busier I needed to get bigger and bigger containers to develop not one or some rolls of film but 100 rolls of film. At 16 I already had my own developing machine which nobody had and develop films for me and dried them as well and I was amazed there was only one other guy doing this but he was actually a famous photographer and had a huge laboratory and his name was Sylvano. He was an Italian guy and his partner John, built up like me from nothing into something quite significant developing mostly color but also black and white films with machines that they also developed. That will have to be a story for another time our friendship grew strong until he died at an early age that is when the twin towers were hit by those planes and the stocks of Kodak started to drop and as I was sitting in his office I saw him lose millions. By that time I was much older probably close to 30.
Going back to age 16 I wasn’t doing too well in English I hated English and my English teacher was called “Adolf Hunt,” because he was so strict. I think I failed English once have to go to summer school and take it again which was like pure torture exec couldn’t do all the cool stuff I like to do which was designed and built things.
Every single Winter I went skiing with my buddy from grade school name was Patrick Trowsey I’m not sure about the spelling. Anyway we took the bus almost every single weekend up to Blue Mountain and we skied all day long and we came back exhausted. In those days I was pretty close to 2 m tall hundred and 87 or 90 very close and I had to meet her skis. You had to be pretty strong to control 2 m keys even if you’re doing a stem Christie. But I had lots of fun we went up we went down sometimes like a bat out of hell. I don’t know we had like a death wish and almost nobody went on the hill with all the moguls and we went down on the mocha hill still after having a couple of swigs of wine which we hit underneath our jackets because in those days almost everybody skied with the wineskin. But unfortunately, a few always have to run it for the many and I didn’t experience the ban of it because I stop skiing when I was about 20 but going skiing without having a drink or two isn’t as much fun I’m sure.
My parents saw that my grades weren’t doing so well and had me study on weekends with tutors because English just wasn’t going anywhere. And a company called Redick (sic) came from the United States and tested all the kids probably because the school was gonna make a hefty sum from the fees that they charged to increase our reading ability and strengthen our vocabulary and so on. It just wasn’t me that was having problems in English I think there must’ve been 30 students altogether. My strengths were in physics, mathematics, and chemistry. English was just not so necessary for me. So the test revealed how poor my English really was and they offered to help fix it for $3000 which by today’s money would’ve been $30,000; if not more. But something happened to me in that classroom some switch was turned on. I have the book somewhere in all the papers that I brought with me I remember seeing it a few times when I cleaned up and move boxes around so it is still around here somewhere. I went from a reading ability of 132 words a minute and six weeks well let’s say four weeks I was already up as high as that machine could go which was 1800 words a minute. In fact, even at 1800 words a minute it was incredibly boring for me to read for or five words at a time this machine would only show you one line at a time and it would flip through the lines fairly quickly everybody else was lost those only the only one in the class jumped to such a different level.
Redick went to my parents and told them that I’m reading at an incredible speed and I have significantly increased my language ability all of which was true but something else also happened and nobody could figure it out so that’s what all the shrinks started to come in and interview me. At first, I thought it was fun doing all these silly puzzles with mazes and things like that in answering ridiculous questions and IQ tests and so on and so forth but everything basically jumped right through the roof. They told my parents I would have to come in on weekends which was taking my whole life away and I didn’t want to go. Well, my mother was a strong force and I had no choice whatever she said that’s the way it was. She wore the pants in the family. hehe haha….. Anyway, I went on weekends I went from 1800 words a minute to 2400 words a minute with 90% recall. In your photographic memory but I never really had a photographic memory that I knew of before but I remembered stuff when I was even babysitting in the window getting son and I asked my mother about that and she was shocked that I would remember and I can describe the buildings around their and I’d I was like two years old. Nobody ever really acknowledges this kind of oddity and somebody. Because I could look at something for just a second and then draw it out just the way that it was and I thought that was normal I had no idea that nobody could do that. I thought it was a little bit strange that when I was building a coconut go-cart with a friend of mine I didn’t understand the concept of the wood being assembled a certain way to increase its structural integrity and that’s when I was 10 years old. But of course, your parents don’t know about these things. When they told my parents that I was reading at this speed my parents didn’t believe them and I proved it to them and they were shocked really I could even read the legal text at incredible speeds also 2400 words a minute and 90% recall that was the shock of everybody how I can read all this other stuff that had nothing to do with anything that I’ve ever read before. But all of these things that seem pretty amazing come at a cost. Before I only had the big bullies coming after me after school but now everybody else want to join in his everybody hated my guts. Especially in English where the teacher would hand us a book but say the great Gatsby, and before the teacher had time to finish the questions on the board, I’d already finished the book have already answered all the questions that he had already written and the only last two questions I wrote while I was waiting for the teacher to wrap up the end of the class so I was able to hand in the book report at the end of the class. Everybody hated me! It’s okay but one of the great things about it is how I could learn karate, jujitsu, kung fu, crane, and more. I even read Bruce Lee’s books and documents and everything I could get my hands on. I changed the way I ate, the way I slept, the way I exercised, and started to develop a little bit of strength but it’s not even the strength I never mastered the 1-inch punch that Bruce Lee was so famous for. But I did learn many things that I applied to my life to change my boring existence and opened up another two companies and started building my businesses. When I graduated high school I went straight into the university which I couldn’t stand but my parents insisted that I get some kind of a degree so I went after hotel management because it was mindless. Well, you have to understand I went from a private boy school to a place where there were girls everywhere. My marks plummeted and I didn’t care
For the rest, you’ll have to find out when I have time
I will tell you that on the bus ride and the subway ride to school and back from school, I made more money than most people did in those days sometimes two and $300 a day which would be something like $5000 a day today.  And I did it all by reading a newspaper because I can read that newspaper in 30 seconds cover to cover and I knew every single word in that newspaper and then there would be people who would always say that you didn’t just read that and I said I bet you that I did so and be like many people saying okay I’ll bet $20 I’ll bet $20 another one was help at 20 I can only bet 10 and I took everybody’s bet is I knew exactly what the end result would be in each of them could ask me a question that was in the newspaper about whatever it was that they asked some even tried to phone me by twisting the truth a little bit so that thinking that I wouldn’t catch it but I did and I I told them you need to pay double for trying because you lie to me. I remember the most money I made in one day was almost $300 and you don’t pay I didn’t pay much attention to the stops and many times I ended up all the way up it steals which was very far away from my house and I have to go back the other way and I got in trouble a couple of times for my mother but I told her that I was making money on the subway and she didn’t believe me and then, of course, she told my dad and I got a nice strap for lying even though I didn’t lie so I try to not tell my parents anything because I didn’t want to get the belt. It was my father’s favorite toy.
Because I didn’t really need the money, my parents were paying for my school they are paying for my books paper everything, and later I got a scholarship so I really didn’t need anything I was taking always the money that I was making and shoving it underneath my bed because I didn’t know what to do with it the only time I needed some money was when I need to buy gas for my lawn mooring company when I was cutting grass that I paid all my friends and chocolate bars and candy because that’s what they wanted nobody wanted money they just wanted candy and I paid them well.
I even went to the stores when I bought chocolate and candy and made a deal with the store owner that if I bought a box that I would get a discount and then if I got a bigger discount I would buy two boxes and three boxes of chocolate and then of course I needed to buy pop for all the guys so that they have something to drink but I needed a cooler to put the pop in that I needed to build a trailer to put the cooler in and I begged my dad to build me a trailer for my bicycle and I bought everybody bicycles because the kids didn’t have bicycles and then we would pull the trailer behind the bicycle and pulled along more behind that so there was it was a hinged system so the cooler was behind the bike and then the the lawnmower was on a little trailer of its own so that they could go to the place with a tank of gas and the cut the grass and wouldn’t have to they could cut for four grass for four places before refuelling fuel but they always came back to my house and I gave them fuel from their and of course I paid everybody and chocolate bars
Funny isn’t it?
Anyway, I will talk more about this when I have time because I had such an interesting life that I can’t even describe it and it just it’s impossible it’s an almost impossible life I had and yet I had that life and it was just a lot of fun and everything I did almost everything I did it make money with the even absurd things even the things I did for fun made money with that too.
One day I went to City Hall with my mother she had some work to do and I was bored out of my gourd waiting for her to complete all the paperwork so ice I saw a door that was ajar and I poked my head in and I said you mind if I look around and I didn’t realize he was a judge. I think I was 17 at the time. I was looking at a book on the shelf and I asked him if I could take a look at it I mean the guy was in shock really. I kid walked into his office opened up a law book and started to read it so fast that he has never seen anything like that in his life. I even had to go to the bank and buy those rubber sleeves that they put on their fingers to count money really fast because I needed something to flip the pages faster because licking my finger turning the page all the time pretty damn slow and then I have to keep licking my finger all the time turn the pages I didn’t have enough spent sometimes because of it so I have to figure out a better way to read faster. One day I was at the bank I saw them flipping through the money really fast counting and I asked them where did they get those finger things least she was really nice she gave me one of them and I was able to increase the speed reading speed significantly because I could flip this the pages faster. I don’t know how fast I was reading at that time it really doesn’t matter because sometimes no matter how smart you are if you’re smarter and if you’re truly smarter than everybody else you have to pretend you’re stupid. If you pretend you’re stupid to blend and mordant with the average person. If you’re too smart nobody likes you. If you’re exceptionally smart and you get invited to join Mensa then a lot of people flock to go there. But I found those people so far beyond reality that there was no point in doing anything there at all you have to remind me about the story of Mensa. In those days there was no emotional IQ although I suggested to the that the only way that they can have a proper indication of their IQ is to have some kind of an evaluation of emotional stability because it goes hand-in-hand as I noticed a lot of the people that I met there were emotionally screwed up and therefore cannot function in the real world and therefore your smarts were useless. I had two of my friends also come from school because they were also invited but it was the most boring experience I’ve ever had so this was in a gym in the basement of some school or church I believe which was also a school and I got up on the stage and I clap my hands to get everybody’s attention and I said I’ve got a great idea why don’t we solve the world’s problems and we charge $50 per problem will send us a letter and will fix whatever it is that’s wrong with their business or with the chemical compound or whatever it is that people ask us and that $50 is cheap for them because nobody could solve those questions so seemingly impossible questions dollars and the money could probably help the organization better and we would make some money too. They looked. at me like I was on cocaine. So I left. What’s the point of being in an organization where nobody wants to communicate with you?
Going back to the lawyer after I flip through the book really fast I didn’t read the whole thing just the first 50 pages it took just a few seconds. I put the book back and the lawyer asked me did I remember what I read? And I said yes I told him the story. He asked me did I think the outcome was fair? I said no I personally would have taken that man cut off his Dick tar and feather him and drag him through the city of Toronto and then if he was still living thrown in jail for the rest of his life or make him work in a strip joint for the rest of his life with no Dick. The guy started to laugh so hard spell office chair of course my mom was looking for me and heard the commotion was going on in this guy’s office and came in looking for me and was apologizing left right and center why I was I why I went in there because I am the curious guy I’m nothing like anybody else II go knock on doors III go visit companies I’ve never seen before just to see how their manufacturing processes went I could increase and significantly increase their productivity from mass production I don’t know how I know this stuff it doesn’t make any sense to me but everybody’s fascinated when they meet me that’s all I can tell you. I even helped my father’s company streamline itself and my father started to make an enormous profit after that I was being paid well by making 10% of the difference of how I increased the profitability of the company and I didn’t even know what accounting was. I learned all those things later which was another thing I did I actually rewrote the way that the Canadian government calculates taxes for small businesses because I had already several small businesses by then and I hated the whole income tax system so I develop my own income tax system which was approved by the government for having a simpler version for small business. In fact, didn’t take long before I develop software in those days it was the beginning of the Internet and I jumped into the Internet in a very big way and that also changed my life and the lives of many other people because I hired programmers to develop my own software the saved me 177 days worth of time year and then my life escalated into a turbo supersonic jet. That’s when I was able to accomplish more than any 30 people that you could point your finger at and a whole lifetime.
In fact, I couldn’t handle the hundred and 77 days worth of time that I saved the year because I was wasting so much time trying to figure out what I should do with that time so I developed another piece of software that manage that time more effectively. So I had time to go and see movies anytime I wanted to. I can travel anywhere I wanted to, I had no curfew I can wake up anytime in the morning and go to sleep anytime at night but just understand I only need for sleep four hours of sleep a night.
So many things had to be created and designed for my business I did I was the first one in Toronto Canada had a mobile office printer and all kinds of stuff inside my vehicle on a mobile office which was very very cool which I built myself I started a business on a bet that I could sit make any business successful I won the bet took the money bought a minivan and started my new business and became Les the Handyman. I left a six-figure paying job in a bank where I couldn’t stand working and I was doing protocol electronics which is the communication between all the ATM machines in the mainframe I won’t tell you the name of the bank although all the employees thought I must’ve been screwing the president’s wife, because everything I asked for department that I worked I was the only one who got those things. For example, the chairs were of very poor quality my back started to hurt so I told him I need them to change the chairs and the whole department got new chairs within 24 hours. Nothing happens within 24 hours in a huge corporation. There’s a whole bunch of other things that happened I just hated the bank I hated working there and then bet some people at the bank one night when we went out for a couple of drinks I got drunk after drinking two beers. I’m not a real Canadian. The cantering of 24 beers or 48 of them it’s impossible.
After I became a handyman I love my job so much my customers love me I started to develop my own software which literally change the way small business does business and when the Canadian government started to endorse the product they started to invite me to symposium symposiums to talk about my software to new up-and-coming small business people because it made them more efficient, more organized with fewer mistakes and higher profits. I was no fool I knew exactly why the government endorsed the product because it would mean more tax dollars for them.
I will have to insist put in pictures all over the place about my traveling adventures some of the fun stuff I did in my life and all expand on this page or figure out what to do later on
      </p>
    </div>
  </div>
</section>


     
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

export default StoryPage;
