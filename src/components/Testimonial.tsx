import React from "react";

const Testimonial: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col mx-6 items-start justify-start pt-[160px] min-h-screen relative ">
        <div className="text-[#CBB89D] my-6 tracking-widest">
          WHAT THEY SAID
        </div>
        <div className="flex flex-row align-middle ">
          <div className="flex flex-col">
            <div className="w-[40px] h-[40px] ">
              <img src="/quotes.svg" width={140} height={140} />
            </div>
            <p className="text-[#CBB89D] w-60 pl-4 text-[28px] font-semibold">
              Hadeeba is a self-starter who requires little supervision and a
              good team player. Always shared tips and ideas to help IT
              departments, too.
            </p>
          </div>
          <div className=" inset-y-1/2 flex flex-col ml-4 gap-4 ">
            <div className="flex flex-row align-middle gap-4">
              <img src="/arrow.svg" height={18} width={18} />
              <img
                src="/fahad-img.png"
                height={92}
                width={92}
                className="relative right-0"
              />
            </div>
            <div className="flex flex-row align-middle gap-4">
              <img src="/arrow.svg" height={18} width={18} hidden />
              <img
                src="/fahad-img.png"
                height={92}
                width={92}
                className="relative right-0"
              />
            </div>
            <div className="flex flex-row align-middle gap-4">
              <img src="/arrow.svg" height={18} width={18} hidden />
              <img
                src="/fahad-img.png"
                height={92}
                width={92}
                className="relative right-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
