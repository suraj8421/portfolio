import "./App.css";
import "./index.css"
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import ScrollToTop from "react-scroll-to-top";
import MobileNav from "./components/MobileNav/MobileNav";


function App() {

  return (
    <>
    <MobileNav/>
      <Layout />
  
      <div className="container">
        <About />
        <Education />
        <Techstack />
        <Projects />
        <Contact />
      </div>
      <div className="footer pb-3 ms-3">
        <h4 className="text-center"> Suraj Nikam &copy;2024</h4>
      </div>
   
      <ScrollToTop smooth  
      color="#f29f67"
      style={{backgroundColor:"#1e1e2c",borderRadius:"80px"}}/>
    </>
  );
}

export default App;
