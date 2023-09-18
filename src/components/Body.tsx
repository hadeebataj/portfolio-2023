import React from "react";

type TextProps = {
  text: string[];
};

const Body: React.FC<TextProps> = ({ text = [] }) => {
  return (
    <div className="flex flex-col mx-auto items-center justify-center mt-[160px] max-h-screen md:mt-[72px] xl:mt-[24px]">
      <div className="text-[#CBB89D] my-6 tracking-widest md:text-[14px] xl:text-[20px]">
        HADEEBA TAJ
      </div>
      <div
        className="flex flex-col mx-[46px] items-center justify-center font-semibold
uppercase "
      >
        {text.map((text, id) => (
          <div
            key={id}
            className={`text-[66px] leading-[56px] text-center text-${
              id > 2 ? "[#EDE1D2]" : "[#6A6F4C]"
            } sm:text-[92px] sm:leading-[82px] md:text-[122px] md:leading-[102px] lg:text-[162px] lg:leading-[132px] xl:text-[192px] xl:leading-[152px]`}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
