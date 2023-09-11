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

const history = [
  {
    year: 2023,
    title: "Frontend Developer",
    company: "Reed in Partnership",
  },
  {
    year: 2021,
    title: "UI/UX Developer",
    company: "Kloudynet Technologies",
  },
  {
    year: 2020,
    title: "Frontend Developer (Freelance)",
    company: "Skymoon",
  },
  {
    year: 2017,
    title: "Digital Media Tech.",
    company: "Premiere Digital Services",
  },
  {
    year: 2015,
    title: "QC Engineer",
    company: "Deluxe Entertainment Services",
  },
  {
    year: 2014,
    title: "Tech Support Eng.",
    company: "IBM",
  },
  {
    year: 2013,
    title: "Web Designer",
    company: "WireDelta",
  },
];

const caseStudy = [
  {
    title: "Security Bank",
    link: "",
  },
  {
    title: "Temasek Polytech",
    link: "",
  },
  {
    title: "Red Cross",
    link: "",
  },
  {
    title: "Reed Wellbeing",
    link: "",
  },
];

function App() {
  return (
    <div className="bg-[#412f26] ">
      <NavBar
        logo={"/HT-logo.webp"}
        menu={[
          { name: "ABOUT", link: "" },
          { name: "WORK", link: "" },
          { name: "CONTACT", link: "" },
        ]}
      />
      <Body text={["TURNING", "COMPLEX", "INTO", "SEAMLESS", "EXPERIENCES"]} />
      <About />
      <Skills skills={["UI/UX", "DESIGN", "DEVELOPMENT", "TESTING"]} />
      <Experience />
      <WorkHistory history={history} />
      <CaseStudy caseStudy={caseStudy} />
      <Testimonial />
      <SocialIcons />
    </div>
  );
}

export default App;
