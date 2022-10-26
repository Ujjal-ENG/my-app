import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./Components/About";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Navbar from "./Components/Navbar";
import Posts from "./Components/Posts";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/posts/:category" element={<Posts />} />
          
        </Routes>
      </Router>
    </>
  );
};

export default App;
