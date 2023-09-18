// import React, { useEffect, useState } from "react";

const About: React.FC = () => {
  // const [screenWidth, setScreenWidth] = useState(0);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setScreenWidth(window.innerWidth);
  //   };
  //   window.addEventListener("resize", handleResize);
  // });

  return (
    <div className="flex flex-col mx-6 items-start justify-start pt-[160px] min-h-screen md:mx-12 lg:mx-20 xl:mx-30 2xl:mx-48 3xl:mx-96">
      <div className="text-[#CBB89D] my-6 tracking-widest xl:text-2xl">
        ABOUT ME
      </div>

      <div className="text-[46px] text-start text-[#EDE1D2] md:text-[62px] md:leading-[64px] xl:text-[108px] xl:leading-[108px]">
        With a designer's eye and developer's precision, I'm on a{" "}
        <span className="text-[#6A6F4C] relative">mission to transform</span>{" "}
        intricate challenges into user-friendly solutions as a frontend
        enthusiast.
      </div>
      {/* <img
        src="/mouse-bg.png"
        width={
          screenWidth < 640 ? "300px" : screenWidth < 1024 ? "420px" : "620px"
        }
        height={
          screenWidth < 640 ? "300px" : screenWidth < 1024 ? "420px" : "620px"
        }
        className="mix-blend-soft-light opacity-50 absolute -right-20 z-0 -bottom-1/2 md:-right-36 xl:-right-44 "
      /> */}
    </div>
  );
};

export default About;
