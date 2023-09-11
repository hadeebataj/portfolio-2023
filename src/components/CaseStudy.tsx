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
      <div className="flex flex-col mx-6 items-start justify-start pt-[160px] min-h-screen relative ">
        <div className="text-[#CBB89D] my-6 tracking-widest">CASE STUDY</div>
        {caseStudy.map((item, id) => (
          <div
            key={id}
            className="text-[51px] text-start text-[#CBB89D] uppercase  hover:text-[#6A6F4C] transition-colors duration-700 cursor-pointer"
          >
            {item.title}
            <div className="border w-screen -mx-6 border-[#806044] opacity-30"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudy;
