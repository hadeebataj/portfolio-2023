import React from "react";

type NavBarProps = {
  logo: string;
  menu: {
    name?: string;
    link?: string;
  }[];
};

const NavBar: React.FC<NavBarProps> = ({ logo, menu }) => {
  return (
    <div className="flex flex-row justify-between items-start mx-6 my-6 sticky top-5 z-50">
      <div>
        <img src={logo} width={"24px"} height={"24px"} />
      </div>
      <div>
        <div className="flex flex-col text-[#806044]  text-[10px]">
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
