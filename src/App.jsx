import { BrowserRouter } from "react-router-dom";
import { ArrowDownCircle } from "lucide-react";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Skills from "./components/Skills";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
                <button 
          className="scroll-btn-modern"
          onClick={() => {
            document.getElementById('about-section').scrollIntoView({
              behavior: 'smooth'
            });
          }}
        >
          <ArrowDownCircle className="icon-glow" />
      </button>
        </div>
        <About />
        <Experience />
        {/* <Tech /> */}
        <Skills />
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
