import React from "react";
import { testimonials } from "../utils/data";

type ImageProps = {
  activeSection: string;
};

const TestimonialImages: React.FC<ImageProps> = ({ activeSection }) => {
  return (
    <div className="flex flex-col gap-4">
      {testimonials.map((item, id) => (
        <div
          key={id}
          className="transition ease-linear delay-75 flex flex-row align-middle gap-4"
        >
          <img
            src="/arrow.svg"
            height={18}
            width={18}
            className="transition ease-linear delay-75"
            style={
              activeSection === `Section ${item.id}`
                ? { opacity: "100%" }
                : { opacity: "0%" }
            }
          />
          <img
            src={item.image}
            height={240}
            width={240}
            className="transition ease-linear delay-75 right-0 h-[72px] w-[72px] md:h-[92px] md:w-[92px] lg:h-[112px] lg:w-[112px] 2xl:h-[142px] 2xl:w-[142px]"
            style={
              activeSection === `Section ${item.id}`
                ? { opacity: "100%" }
                : { opacity: "30%" }
            }
          />
        </div>
      ))}
    </div>
  );
};

export default TestimonialImages;
