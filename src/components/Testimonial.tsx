import React, { useEffect, useState } from "react";

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
    document.getElementById("section-start-1")?.offsetTop -
    window.innerHeight +
    500;

  useEffect(() => {
    if (scrollPosition > section3Offset || scrollPosition < section1Offset) {
      setIsImageComponentVisible(false);
    } else if (
      scrollPosition < section3Offset ||
      scrollPosition > section1Offset
    )
      setIsImageComponentVisible(true);
  }, [scrollPosition]);

  return (
    <div>
      <div className="flex flex-col mx-6 items-start justify-start   aboslute ">
        <div className="text-[#CBB89D] my-6 tracking-widest xl:text-2xl">
          WHAT THEY SAID
        </div>
        <div className="border w-screen -mx-6 border-[#806044] opacity-30"></div>
        <div className="flex flex-row align-middle ">
          <div className="flex flex-col  ">
            <div className="py-10" id="section-start-1">
              <div className="w-[40px] h-[40px] ">
                <img src="/quotes.svg" width={140} height={140} />
              </div>
              <p
                id="section1"
                className="text-[#CBB89D] w-60 pl-4 text-[28px] font-semibold"
              >
                Hadeeba is a self-starter who requires little supervision and a
                good team player. Always shared tips and ideas to help IT
                departments, too.
              </p>
              <div className="mx-4 my-12 tracking-wider ">
                <p className="text-base font-semibold text-[#EDE1D2]">
                  Fahad Shaikh
                </p>
                <p className="text-sm mt-3 text-[#806044]">CEO</p>
                <p className="text-sm text-[#806044]">Kloudynet Technologies</p>
              </div>
            </div>
            <div className="border w-screen -mx-6 border-[#806044] opacity-30 my-8"></div>
            <div className="py-10 h-screen" id="section-start-2">
              <div className="w-[40px] h-[40px] ">
                <img src="/quotes.svg" width={140} height={140} />
              </div>
              <p
                id="section2"
                className="text-[#CBB89D] w-60 pl-4 text-[28px] font-semibold"
              >
                It’s been really nice to have Hadeeba as a teammate alongside us
                for over an year. We worked together for Security Bank, Axiata,
                KPM, KloudSecure and Temasek projects and I really appreciate
                the support and contribution.
              </p>
              <div className="mx-4 my-12 tracking-wider ">
                <p className="text-base font-semibold text-[#EDE1D2]">
                  Asela Samarakoon
                </p>
                <p className="text-sm mt-3 text-[#806044]">
                  Software Solutions Architect
                </p>
                <p className="text-sm text-[#806044]">Kloudynet Technologies</p>
              </div>
            </div>
            <div className="border w-screen -mx-6 border-[#806044] opacity-30 my-8"></div>
            <div className="py-10 h-screen" id="section-start-3">
              <div className="w-[40px] h-[40px] ">
                <img src="/quotes.svg" width={140} height={140} />
              </div>
              <p
                id="section3"
                className="text-[#CBB89D] w-60 pl-4 text-[28px] font-semibold"
              >
                I worked with Hadeeba at Deluxe Studios for over a year. She
                always helped multiple teams and was one of the best QA with 0%
                rejection rate.
              </p>
              <div className="mx-4 my-12 tracking-wider ">
                <p className="text-base font-semibold text-[#EDE1D2]">
                  Nadeem Sheikh
                </p>
                <p className="text-sm mt-3 text-[#806044]">GFX Artist</p>
                <p className="text-sm text-[#806044]">
                  Deluxe Entertainment Services
                </p>
              </div>
              <div className="border w-screen -mx-6 border-[#806044] opacity-30 my-8"></div>
            </div>
          </div>

          <div
            className={`inset-y-1/3 flex flex-col  gap-4 right-4 fixed ${
              isImageComponentVisible ? "opacity-100" : "opacity-0"
            } `}
          >
            <div className="flex flex-row align-middle gap-4">
              <img
                src="/arrow.svg"
                height={18}
                width={18}
                style={
                  activeSection === "Section 1"
                    ? { opacity: "100%" }
                    : { opacity: "0%" }
                }
              />
              <img
                src="/fahad-img.png"
                height={92}
                width={92}
                className=" right-0"
                style={
                  activeSection === "Section 1"
                    ? { opacity: "100%" }
                    : { opacity: "30%" }
                }
              />
            </div>
            <div className="flex flex-row align-middle gap-4">
              <img
                src="/arrow.svg"
                height={18}
                width={18}
                style={
                  activeSection === "Section 2"
                    ? { opacity: "100%" }
                    : { opacity: "0%" }
                }
              />
              <img
                src="/asela-img.png"
                height={92}
                width={92}
                className=" right-0"
                style={
                  activeSection === "Section 2"
                    ? { opacity: "100%" }
                    : { opacity: "30%" }
                }
              />
            </div>
            <div className="flex flex-row align-middle gap-4">
              <img
                src="/arrow.svg"
                height={18}
                width={18}
                style={
                  activeSection === "Section 3"
                    ? { opacity: "100%" }
                    : { opacity: "0%" }
                }
              />
              <img
                src="/nadeem-img.png"
                height={92}
                width={92}
                className=" right-0"
                style={
                  activeSection === "Section 3"
                    ? { opacity: "100%" }
                    : { opacity: "30%" }
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
