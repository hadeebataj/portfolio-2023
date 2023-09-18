import React, { useEffect, useState } from "react";

type NavBarProps = {
  logo: string;
  menu: {
    name?: string;
    link?: string;
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

  console.log(screenWidth);
  return (
    <div className="flex flex-row justify-between items-start mx-6 my-6 sticky top-5 z-50">
      <div>
        <img
          src={logo}
          width={screenWidth < 640 ? "42px" : "72px"}
          height={screenWidth < 640 ? "42px" : "72px"}
        />
      </div>
      <div>
        <div className="flex flex-col text-[#806044]  text-[15px] sm:text-[11px] xl:text-[23px]">
          {menu.map((item, id) => (
            <a key={id} href={item.link} className="hover:text-[#CBB89D]">
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
