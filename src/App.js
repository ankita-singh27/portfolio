import "./App.scss";
import About from "./components/about";
import Education from "./components/education";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Intro from "./components/intro";
import Skills from "./components/skills";
// import { JobsTicker } from "./components/about/job-ticker";


function App() {
  return (
    <div>
      <Intro />
       <About />
       {/* <JobsTicker/> */}
      <Education />
      <Skills/>
      <Contact />
      <Footer />
     
    </div>
  );
}
export default App;
