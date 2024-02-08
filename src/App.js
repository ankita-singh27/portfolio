import "./App.scss";
import About from "./components/about";
import Education from "./components/education";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Intro from "./components/intro";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Navigation from "./components/navigation-bar";


function App() {
  return (
    <div>
    <Navigation/>
      <Intro />
       <About />
      <Education />
      <Skills/>
      <Projects/>
      <Contact />
      <Footer />
     
    </div>
  );
}
export default App;
