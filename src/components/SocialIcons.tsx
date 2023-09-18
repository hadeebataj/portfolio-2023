import React from "react";
import { contactLinks } from "../utils/data";

const SocialIcons: React.FC = () => {
  const handleClick = (link: string | URL | undefined) => {
    return window.open(link, "_blank", "noreferrer");
  };

  return (
    <div className="md:flex flex-col gap-5 fixed bottom-0 left-0 m-5 hidden md:visible">
      {contactLinks.map((item, id) => (
        <div
          key={id}
          className="w-[28px] h-[28px] hover:opacity-100 opacity-40 "
          onClick={() => handleClick(item.link)}
        >
          <img src={item.icon} className="w-[28px] h-[28px]" />
        </div>
      ))}
    </div>
  );
};

export default SocialIcons;
