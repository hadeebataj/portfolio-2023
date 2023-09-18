import React from "react";

const Experience: React.FC = () => {
  return (
    <div className="flex flex-col mx-6 items-start justify-start pt-[160px] min-h-screen md:mx-10 xl:mx-20 2xl:mx-48 3xl:mx-96">
      <div className="text-[#CBB89D] my-6 tracking-widest xl:text-2xl">
        EXPERIENCE
      </div>

      <div className="text-[28px] text-start text-[#EDE1D2] md:text-[58px] md:leading-[60px] font-semibold xl:text-[72px] xl:leading-[74px]">
        Experienced{" "}
        <span className="text-[#6A6F4C] relative">Frontend Developer</span>{" "}
        skilled in React, Redux, and Typescript, backed by 4 years of{" "}
        <span className="text-[#6A6F4C] relative">Quality Assurance</span>{" "}
        proficiency. Contributed to diverse projects across industries,
        demonstrating meticulous{" "}
        <span className="text-[#6A6F4C] relative">UI/UX design</span>, coding,
        testing, and proactive issue resolution.
      </div>
    </div>
  );
};

export default Experience;
