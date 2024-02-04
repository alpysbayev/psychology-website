import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import PsychotypeQuiz from "./components/PsychotypeQuiz";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App flex justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/quiz-1" element={<PsychotypeQuiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
