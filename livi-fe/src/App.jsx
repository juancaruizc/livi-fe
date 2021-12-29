import "./App.css";
import Nav from "./Components/Nav/Nav.jsx";
import Home from "./Components/Home/Home.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Specialties from "./Components/Specialties/Specialties.jsx";
import Reviews from "./Components/Reviews/Reviews.jsx";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Projects />
      <Specialties />
      <Reviews />
    </div>
  );
}

export default App;
