import React from "react";

type TextProps = {
  text: string[];
};

const Body: React.FC<TextProps> = ({ text = [] }) => {
  return (
    <div className="flex flex-col mx-auto items-center justify-center mt-[160px] max-h-screen">
      <div className="text-[#CBB89D] my-6 tracking-widest">HADEEBA TAJ</div>
      <div
        className="flex flex-col mx-[46px] items-center justify-center font-semibold
uppercase"
      >
        {text.map((text, id) => (
          <div
            key={id}
            className={`text-[46px] text-center text-${
              id > 2 ? "[#EDE1D2]" : "[#6A6F4C]"
            }`}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
