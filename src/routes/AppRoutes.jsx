import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails"; // Make sure this component exists
import Register from "./pages/Register";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/event/:id" element={<EventDetails />} /> {/* Add this route */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;