import React, { RefObject, useEffect, useState } from "react";

type NavBarProps = {
  logo: string;
  menu: {
    name?: string;
    ref: RefObject<HTMLInputElement>;
  }[];
};

const NavBar: React.FC<NavBarProps> = ({ logo, menu }) => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  });

  const scrollToComponent = (ref: RefObject<HTMLInputElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="flex  flex-row  mx-6 my-6 top-5 z-50 justify-between "
      style={{ position: "sticky" }}
    >
      <div>
        <img
          src={logo}
          width={screenWidth < 640 ? "42px" : "72px"}
          height={screenWidth < 640 ? "42px" : "72px"}
        />
      </div>
      <div>
        <div className="flex flex-col text-[#806044]  text-[15px] sm:text-base xl:text-2xl">
          {menu.map((item, id) => (
            <span
              key={id}
              className="hover:text-[#CBB89D] cursor-pointer"
              onClick={() => scrollToComponent(item.ref)}
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
