import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navigation/Navbar";
import Footer from "./Footer/Footer";
import About from "../pages/About";
import Home from "../pages/Home";
import Api from "../pages/Api";
import Contact from "../pages/Contact";
import Body from "./Body/Body";

const Display = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="api" element={<Api />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Body />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Display;
