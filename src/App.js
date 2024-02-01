import "./App.scss";
import About from "./components/about";
import Education from "./components/education";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Intro from "./components/intro";
import Skills from "./components/skills";
import Projects from "./components/projects";


function App() {
  return (
    <div>
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
