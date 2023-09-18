import React from "react";

type CaseStudyProps = {
  caseStudy: {
    title: string;
    link: string;
  }[];
};

const CaseStudy: React.FC<CaseStudyProps> = ({ caseStudy }) => {
  return (
    <div>
      <div className="flex flex-col mx-6 items-start justify-start pt-[160px] min-h-screen relative md:mx-10 xl:mx-20 2xl:mx-48 3xl:mx-96">
        <div className="text-[#CBB89D] my-6 tracking-widest xl:text-2xl">
          CASE STUDY
        </div>
        {caseStudy.map((item, id) => (
          <a
            key={id}
            href={item.link}
            className="text-[51px] text-start text-[#CBB89D] uppercase  hover:text-[#6A6F4C] transition-colors duration-700 cursor-pointer md:text-6xl xl:text-[8rem] xl:font-bold"
          >
            {item.title}
            <div className="border w-screen -mx-6 border-[#806044] opacity-30 md:-mx-16 lg:-mx-24 2xl:-mx-96 "></div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CaseStudy;
