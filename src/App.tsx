import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServicesDetails from "./pages/ServicesDetails";
import Footer from "./components/Footer";
import Services from "./pages/Services";

const AppContent: React.FC = () => {

  return (
    <div className="page-wrapper" id="page">
      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-details" element={<ServicesDetails />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
