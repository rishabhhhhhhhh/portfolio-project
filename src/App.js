import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialProfiles from "./components/SocialProfiles";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />

      <SocialProfiles />
    </div>
  );
}

export default App;
