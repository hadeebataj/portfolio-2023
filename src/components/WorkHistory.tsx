import React from "react";

type HistoryProps = {
  history: {
    year: number;
    title: string;
    company: string;
  }[];
};

const WorkHistory: React.FC<HistoryProps> = ({ history }) => {
  return (
    <div>
      <div className="flex flex-col mx-6 items-start justify-start pt-[100px] min-h-screen relative md:mx-12  xl:mx-20 2xl:mx-48 3xl:mx-96">
        <div className="text-[#CBB89D] my-6 tracking-widest xl:text-2xl">WORK HISTORY</div>
        {history.map((item, id) => (
          <div key={id} className=" text-start text-[#CBB89D] ">
            <div className="flex flex-row items-center gap-10 my-4">
              <div className="text-[26px] md:text-5xl lg:text-[5rem] xl:text-[5rem] 2xl:text-[6rem] xl:font-bold">
                {item.year}
              </div>
              <div className="flex flex-col">
                <div className="text-[26px] md:text-5xl lg:text-[5rem] xl:text-[5rem] 2xl:text-[6rem] xl:font-bold break-words">
                  {item.title}
                </div>
                <div className="opacity-70 md:text-2xl xl:text-[3rem] 2xl:text-[4rem] my-4">
                  {item.company}
                </div>
              </div>
            </div>
            <div className="border w-screen -mx-6 border-[#806044] opacity-30 md:-mx-16 lg:-mx-24 2xl:-mx-96 "></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkHistory;
