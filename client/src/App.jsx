import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MusicList from "./pages/MusicList";
import MusicCat from "./components/MusicCat";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/" element={<MusicList />} />
        <Route path="/category" element={<MusicCat />} />
      </Routes>
    </div>
  );
}

export default App;
