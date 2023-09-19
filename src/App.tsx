import "./App.css";
import About from "./components/About";
import Body from "./components/Body";
import NavBar from "./components/NavBar";
import SocialIcons from "./components/SocialIcons";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import WorkHistory from "./components/WorkHistory";
import CaseStudy from "./components/CaseStudy";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import React, { useEffect, useRef, useState } from "react";
import { history, caseStudy, contactLinks } from "./utils/data";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

const App: React.FC = () => {
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    if (
      Object.keys(caseStudy) &&
      Object.keys(history) &&
      Object.keys(contactLinks)
    ) {
      setIsPageLoaded(true);
    } else setIsPageLoaded(false);
  }, [caseStudy, history, contactLinks]);

  return (
    <div>
      {!isPageLoaded ? (
        <Loader />
      ) : (
        <div className="bg-[#1a1513] overflow-x-clip">
          <NavBar
            logo={"/logo.svg"}
            menu={[
              { name: "ABOUT", ref: aboutRef },
              { name: "WORK", ref: workRef },
              { name: "CONTACT", ref: contactRef },
            ]}
          />
          <Body
            text={["TURNING", "COMPLEX", "INTO", "SEAMLESS", "EXPERIENCES"]}
          />
          <div ref={aboutRef}>
            <About />
          </div>
          <Skills skills={["UI/UX", "DESIGN", "DEVELOPMENT", "TESTING"]} />
          <Experience />
          <WorkHistory history={history} />
          <div ref={workRef}>
            <CaseStudy caseStudy={caseStudy} />
          </div>
          <Testimonial />
          <SocialIcons />
          <div ref={contactRef}>
            <Contact contactLinks={contactLinks} />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
