import { useEffect, useRef } from 'react';
import CountdownTimer from "../components/CountdownTimer";
import Events from "../pages/Events";

const Home = ({ scrollTo }) => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const eventsRef = useRef(null);

  useEffect(() => {
    const refs = {
      home: homeRef,
      about: aboutRef,
      events: eventsRef
    };
    
    if (scrollTo && refs[scrollTo]?.current) {
      refs[scrollTo].current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [scrollTo]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2a0a33] to-[#1a002c] text-white pt-10">
      {/* Hero Section */}
      <section ref={homeRef} className="flex flex-col items-center justify-center text-center p-10">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-4 animate-gradient">
          Welcome to iMeet
        </h1>
        <p className="text-lg text-gray-300 mb-6">The Grand IT Fest of RCCIIT</p>
        <CountdownTimer />
      </section>

      {/* About Section */}
      <section 
        ref={aboutRef}
        id="about" 
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent mb-4">
            About iMeet
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
            <img 
              src="https://via.placeholder.com/600x400" 
              alt="iMeet Event" 
              className="relative rounded-lg shadow-xl w-full h-auto border-2 border-transparent group-hover:border-purple-400 transition duration-300"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
              The Premier IT Festival
            </h3>
            <p className="text-gray-300 text-lg">
              iMeet is the annual flagship IT festival of RCCIIT that brings together the brightest minds in technology. 
              With a legacy of innovation and excellence, we provide a platform for students to showcase their talents.
            </p>
            <p className="text-gray-300 text-lg">
              This year's edition promises to be bigger and better with technical workshops, 
              coding competitions, hackathons, and guest lectures from industry leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section 
        ref={eventsRef} 
        id="events" 
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <Events isHomePage={true} />
      </section>
    </div>
  );
};

export default Home;