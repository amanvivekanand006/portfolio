import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ProjectCard from './Components/ProjectCard';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <div id='home'>
       <Home/>
     </div>
     <div id='about'>
       <About/>
     </div>
     <div id='project'>
       <ProjectCard/>
     </div>
     <div id='contact-con'>
       <Contact/>
     </div>
     <Footer/>
    </div>
  );
}

export default App;
