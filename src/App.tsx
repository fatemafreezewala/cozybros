import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
const App: React.FC = () => {
  return (
    <Router>
        	<div className="page-wrapper" id="page">
<Header></Header>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
            </div>
      {/* Navbar */}
<Footer></Footer>
    </Router>
  );
};

export default App;
