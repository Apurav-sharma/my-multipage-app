import React from "react";
import Header from "./Components/Header";
import Time from "./Components/Content";
import Footer from "./Components/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/about";
import Stopwatch from "./Components/stop watch";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Time />} />
          <Route path="/about" element = { <About />} />
          <Route path="/faq" element = {<h1>Correct working</h1>} />
          <Route path="/stop_watch" element = {<Stopwatch />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

