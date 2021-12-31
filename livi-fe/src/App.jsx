import React from "react";

// styles
import "./App.css";

// components
import Nav from "./Components/Nav/Nav.jsx";
import Home from "./Components/Home/Home.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Specialties from "./Components/Specialties/Specialties.jsx";
import Reviews from "./Components/Reviews/Reviews.jsx";
import LearnMore from "./Components/LearnMore/LearnMore.jsx";
import Faq from "./Components/Faq/Faq.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Projects />
      <Specialties />
      <Reviews />
      <LearnMore />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
