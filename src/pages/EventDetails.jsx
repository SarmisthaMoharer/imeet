import { useParams,useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import eventData from "../data/eventfulldetails.json";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Find the event in all categories
    const allEvents = [
      ...(eventData.technical || []),
      ...(eventData.cultural || []),
      ...(eventData.gaming || [])
    ];
    const foundEvent = allEvents.find(e => e.id.toString() === id.toString());
    
    if (!foundEvent) {
      navigate('/events'); // Redirect if event not found
      return;
    }
    
    setEvent(foundEvent);
  }, [id,navigate]);

  if (loading) {
    return <div className="text-center text-white py-10">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[#7a4a9b] text-white p-6">
      <div className="max-w-4xl mx-auto bg-[#7a4d97] rounded-xl p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-gold mb-4">{event.name}</h1>
        <p className="text-lg mb-6">{event.description}</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <img 
              src={`/assets/${event.image}`} 
              alt={event.name}
              className="w-full rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <p><span className="font-semibold text-gold">Date:</span> {event.date}</p>
            {event.time && <p><span className="font-semibold text-gold">Time:</span> {event.time}</p>}
            <p><span className="font-semibold text-gold">Venue:</span> {event.venue}</p>
            
            <Link
              to={`/register?event=${event.id}`}
              className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition block text-center"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;