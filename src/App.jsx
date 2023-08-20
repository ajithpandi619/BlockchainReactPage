import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes and Route

import Navbar from "./Navbar";
import Home from "./components/Home";
import Company from "./components/Company";
import Resources from "./components/Resources";
import About from "./components/About";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
