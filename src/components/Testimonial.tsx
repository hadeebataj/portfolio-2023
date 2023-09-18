import React, { useEffect, useState } from "react";
import TestimonialImages from "./TestimonialImages";

const Testimonial: React.FC = () => {
  const [activeSection, setActiveSection] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isImageComponentVisible, setIsImageComponentVisible] = useState(false);

  const handleScroll = () => {
    const section1 = document.getElementById("section1");
    const section2 = document.getElementById("section2");
    const section3 = document.getElementById("section3");

    const currentScrollPosition = window.scrollY + window.innerHeight;
    setScrollPosition(window.scrollY);

    if (section1 && section1.offsetTop < currentScrollPosition)
      setActiveSection("Section 1");
    if (section2 && section2.offsetTop < currentScrollPosition)
      setActiveSection("Section 2");
    if (section3 && section3.offsetTop < currentScrollPosition)
      setActiveSection("Section 3");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const section3Offset = document.getElementById("section-start-3")?.offsetTop;
  const section1Offset =
    document.getElementById("section-start-1")?.offsetTop || 0;

  const section1OffsetFix = section1Offset - window.innerHeight + 500;

  useEffect(() => {
    setIsImageComponentVisible(false);
    if (
      scrollPosition > section3Offset! ||
      scrollPosition < section1OffsetFix
    ) {
      setIsImageComponentVisible(false);
    } else if (
      scrollPosition < section3Offset! ||
      scrollPosition > section1OffsetFix
    )
      setIsImageComponentVisible(true);
  }, [scrollPosition]);

  return (
    <div>
      <div className="flex flex-col mx-6 items-start justify-start   aboslute md:mx-12 xl:mx-20 2xl:mx-48 3xl:mx-96">
        <div className="text-[#CBB89D] my-6 tracking-widest xl:text-2xl">
          WHAT THEY SAID
        </div>
        <div className="border w-screen -mx-6 border-[#806044] opacity-30 md:-mx-16 lg:-mx-24 2xl:-mx-96"></div>
        <div className="flex flex-row align-middle ">
          <div className="flex flex-col  ">
            <div
              className="py-10 h-screen mt-44 md:mt-0 xl:mt-20"
              id="section-start-1"
            >
              <div className="w-[40px] h-[40px] xl:h-[50px] xl:w-[50px] 2xl:h-[60px] 2xl:w-[60px]">
                <img src="/quotes.svg" width={140} height={140} />
              </div>
              <p
                id="section1"
                className="text-[#CBB89D] w-60 pl-4 text-[28px] font-semibold sm:text-4xl sm:w-3/4 md:w-1/2 lg:w-3/4 md:text-4xl lg:text-6xl xl:text-7xl"
              >
                Hadeeba is a self-starter who requires little supervision and a
                good team player. Always shared tips and ideas to help IT
                departments, too.
              </p>
              <div className="mx-4 my-12 tracking-wider ">
                <p className="text-base font-semibold text-[#EDE1D2] md:text-xl lg:text-2xl xl:text-3xl">
                  Fahad Shaikh
                </p>
                <p className="text-sm mt-3 text-[#806044] md:text-lg lg:text-xl xl:text-2xl">
                  CEO
                </p>
                <p className="text-sm text-[#806044] md:text-lg lg:text-xl xl:text-2xl">
                  Kloudynet Technologies
                </p>
              </div>
            </div>
            <div className="border w-screen -mx-6 border-[#806044] opacity-30 my-8 md:-mx-16 lg:-mx-24 2xl:-mx-96"></div>
            <div className="py-10 h-screen" id="section-start-2">
              <div className="w-[40px] h-[40px] xl:h-[50px] xl:w-[50px] 2xl:h-[60px] 2xl:w-[60px]">
                <img src="/quotes.svg" width={140} height={140} />
              </div>
              <p
                id="section2"
                className="text-[#CBB89D] w-60 pl-4 text-[28px] font-semibold sm:text-4xl sm:w-3/4 md:w-1/2 md:text-4xl lg:text-5xl lg:w-3/4 xl:text-6xl 2xl:text-6xl  3xl:w-3/4 3xl:text-7xl"
              >
                It’s been really nice to have Hadeeba as a teammate alongside us
                for over an year. We worked together for Security Bank, Axiata,
                KPM, KloudSecure and Temasek projects and I really appreciate
                the support and contribution.
              </p>
              <div className="mx-4 my-12 tracking-wider ">
                <p className="text-base font-semibold text-[#EDE1D2] md:text-xl lg:text-2xl xl:text-3xl">
                  Asela Samarakoon
                </p>
                <p className="text-sm mt-3 text-[#806044] md:text-lg lg:text-xl xl:text-2xl">
                  Software Solutions Architect
                </p>
                <p className="text-sm text-[#806044] md:text-lg lg:text-xl xl:text-2xl">
                  Kloudynet Technologies
                </p>
              </div>
            </div>
            <div className="border w-screen -mx-6 border-[#806044] opacity-30 my-8 md:-mx-16 lg:-mx-24 2xl:-mx-96"></div>
            <div className="py-10 h-screen" id="section-start-3">
              <div className="w-[40px] h-[40px] xl:h-[50px] xl:w-[50px] 2xl:h-[60px] 2xl:w-[60px]">
                <img src="/quotes.svg" width={140} height={140} />
              </div>
              <p
                id="section3"
                className="text-[#CBB89D] w-60 pl-4 text-[28px] font-semibold sm:text-4xl sm:w-3/4 md:w-1/2 lg:w-3/4 md:text-4xl lg:text-6xl xl:text-7xl"
              >
                I worked with Hadeeba at Deluxe Studios for over a year. She
                always helped multiple teams and was one of the best QA with 0%
                rejection rate.
              </p>
              <div className="mx-4 my-12 tracking-wider ">
                <p className="text-base font-semibold text-[#EDE1D2] md:text-xl lg:text-2xl xl:text-3xl">
                  Nadeem Sheikh
                </p>
                <p className="text-sm mt-3 text-[#806044] md:text-lg lg:text-xl xl:text-2xl">
                  GFX Artist
                </p>
                <p className="text-sm text-[#806044] md:text-lg lg:text-xl xl:text-2xl">
                  Deluxe Entertainment Services
                </p>
              </div>
              <div className="border w-screen -mx-6 border-[#806044] opacity-30 my-8 md:-mx-16 lg:-mx-24 2xl:-mx-96"></div>
            </div>
          </div>

          <div
            className={`inset-y-1/3 right-4 sm:right-8 md:right-28 lg:right-36 xl:right-44 2xl:right-56 3xl:right-96 fixed ${
              isImageComponentVisible ? "opacity-100" : "opacity-0"
            } `}
          >
            <TestimonialImages activeSection={activeSection} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
