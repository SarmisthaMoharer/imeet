import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import eventData from "../data/eventfulldetails.json?import";


const Events = ({ isHomePage = false }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const processedCategories = [
      {
        title: "Technical Events",
        events: eventData?.technical || [],
        gradient: "from-purple-600 to-blue-600"
      },
      {
        title: "Cultural Events",
        events: eventData?.cultural || [],
        gradient: "from-pink-600 to-red-600"
      },
      {
        title: "Gaming Events",
        events: eventData?.gaming || [],
        gradient: "from-yellow-600 to-orange-600"
      }
    ];
    setCategories(processedCategories);
  }, []);

  if (categories.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center py-10 text-white animate-pulse">
          Loading events...
        </div>
      </div>
    );
  }

  return (
    <div className={isHomePage ? "" : "min-h-screen bg-[#1a002c] text-white px-4 sm:px-6 lg:px-8 py-8"}>
      {!isHomePage && (
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gold mb-6 sm:mb-8">
          Events
        </h1>
      )}
      
      {isHomePage && (
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent mb-3 sm:mb-4">
            Our Events
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 sm:mb-8 rounded-full"></div>
        </div>
      )}

      <div className="space-y-10 sm:space-y-12">
        {categories.map((category) => (
          <EventCategory 
            key={category.title}
            {...category}
            isHomePage={isHomePage}
          />
        ))}
      </div>
    </div>
  );
};

const EventCategory = ({ title, events, gradient, isHomePage }) => {
  if (!events || events.length === 0) {
    return isHomePage ? null : (
      <div className="text-center py-4 text-gray-400">
        No {title.toLowerCase()} available
      </div>
    );
  }

  return (
    <section className={`mb-12 sm:mb-16 ${isHomePage ? "" : "px-2"}`}>
      <h2 className={`text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 ${
        isHomePage 
        ? `bg-gradient-to-r ${gradient} bg-clip-text text-transparent` 
        : "text-white"
      }`}>
        {title}
      </h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {events.map((event) => (
          <EventCard 
            key={event.id} 
            event={event} 
            gradient={gradient} 
          />
        ))}
      </div>
    </section>
  );
};

const EventCard = ({ event, gradient }) => {
  const [imgSrc, setImgSrc] = useState(
    event.image ? `/assets/${event.image}` : 'https://www.google.com/imgres?q=technical%20event%20image%20url&imgurl=https%3A%2F%2Fs31606.pcdn.co%2Fwp-content%2Fuploads%2F2021%2F04%2FiStock-1205300906-scaled.jpg&imgrefurl=https%3A%2F%2Fwww.smartmeetings.com%2Fguides%2Fevent-tech-resource-guide&docid=nglzGmXT_sd3BM&tbnid=u6Sdq33t0FCKsM&vet=12ahUKEwi0wYur4aqMAxUMqFYBHaqPAAIQM3oECHsQAA..i&w=2560&h=1233&hcb=2&ved=2ahUKEwi0wYur4aqMAxUMqFYBHaqPAAIQM3oECHsQAA'
  );

  return (
    <Link
      to={`/event/${event.id}`}
      className={`bg-gradient-to-br ${gradient} p-3 sm:p-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl block h-full`}
    >
      <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-md mb-3 sm:mb-4">
        <img
          src={imgSrc}
          alt={event.name}
          className="w-full h-40 sm:h-48 object-cover rounded-md"
          onError={() => setImgSrc('https://www.google.com/imgres?q=technical%20event%20image%20url&imgurl=https%3A%2F%2Fs31606.pcdn.co%2Fwp-content%2Fuploads%2F2021%2F04%2FiStock-1205300906-scaled.jpg&imgrefurl=https%3A%2F%2Fwww.smartmeetings.com%2Fguides%2Fevent-tech-resource-guide&docid=nglzGmXT_sd3BM&tbnid=u6Sdq33t0FCKsM&vet=12ahUKEwi0wYur4aqMAxUMqFYBHaqPAAIQM3oECHsQAA..i&w=2560&h=1233&hcb=2&ved=2ahUKEwi0wYur4aqMAxUMqFYBHaqPAAIQM3oECHsQAA')}
          loading="lazy"
        />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-center text-white line-clamp-2">
        {event.name}
      </h3>
      <div className="block w-full bg-white/10 hover:bg-white/20 text-white text-center py-2 px-4 rounded-lg transition duration-300">
        View Details
      </div>
    </Link>
  );
};

export default Events;