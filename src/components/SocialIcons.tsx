import React from "react";

const SocialIcons: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 fixed bottom-0 left-0 m-5 ">
      <div className="w-[18px] h-[18px] hover:opacity-100 opacity-40 ">
        <img src="/linkedin-icon.webp" width={"28px"} height={"28px"} />
      </div>
      <div className="w-[18px] h-[18px] hover:opacity-100 opacity-40 ">
        <img src="/github-icon.webp" width={"28px"} height={"28px"} />
      </div>
      <div className="w-[18px] h-[18px] hover:opacity-100 opacity-40 ">
        <img src="/behance-icon.webp" width={"28px"} height={"28px"} />
      </div>
    </div>
  );
};

export default SocialIcons;
