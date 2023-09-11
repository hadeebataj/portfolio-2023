import React from "react";

const About: React.FC = () => {
  return (
    <div className="flex flex-col mx-6 items-start justify-start pt-[160px] min-h-screen ">
      <div className="text-[#CBB89D] my-6 tracking-widest">ABOUT ME</div>

      <div className="text-[46px] text-start text-[#EDE1D2] ">
        With a designer's eye and developer's precision, I'm on a{" "}
        <span className="text-[#6A6F4C] relative">mission to transform</span>{" "}
        intricate challenges into user-friendly solutions as a frontend
        enthusiast.
      </div>
      <img
        src="/mouse-bg.png"
        width={"300px"}
        height={"300px"}
        className="mix-blend-soft-light opacity-50 absolute -right-20 z-0 -bottom-1/2"
      />
    </div>
  );
};

export default About;
