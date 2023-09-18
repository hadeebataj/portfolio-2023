import React from "react";

type SkillProps = {
  skills: string[];
};

const Skills: React.FC<SkillProps> = ({ skills }) => {
  return (
    <div>
      <div>
        {/* <img
          src="/coffee-cup.png"
          width={"260px"}
          height={"260px"}
          className="mix-blend-soft-light opacity-50 absolute -right-16 z-0 "
        /> */}
      </div>
      <div className="flex flex-col mx-6 items-start justify-start pt-[160px] min-h-screen relative md:mx-10 xl:mx-20 2xl:mx-48 3xl:mx-96">
        <div className="text-[#CBB89D] my-6 tracking-widest xl:text-2xl">
          WHAT I DO
        </div>
        {skills.map((skill, id) => (
          <div
            key={id}
            className="text-[51px] text-start text-[#CBB89D] uppercase md:text-8xl lg:text-[8rem] xl:text-[10rem] 2xl:text-[12rem] 3xl:text-[14rem] lg:font-bold"
          >
            {skill}
            <div className="border w-screen -mx-6 border-[#806044] opacity-30 md:-mx-16 lg:-mx-14 xl:-mx-28 2xl:-mx-48 3xl:-mx-96"></div>
          </div>
        ))}
        <div>
          {/* <img
            src="/coffee-cup.png"
            width={"260px"}
            height={"260px"}
            className="mix-blend-soft-light opacity-50 absolute rotate-90 -left-24 z-0 "
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
