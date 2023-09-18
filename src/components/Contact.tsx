import React from "react";

type ContactSocialProps = {
  contactLinks: {
    name: string;
    link: string;
  }[];
};

const Contact: React.FC<ContactSocialProps> = ({ contactLinks }) => {
  return (
    <div className="flex flex-col mx-6 md:mx-12 xl:mx-20 2xl:mx-48 3xl:mx-96 mb-44">
      <div className="text-[#CBB89D] my-6 tracking-widest xl:text-2xl">
        CONTACT ME
      </div>
      <div className="flex flex-col sm:flex-row items-start gap-10 sm:gap-28">
        <div className="flex flex-col text-[#CBB89D] text-3xl sm:font-semibold gap-4">
          {contactLinks.map((item, id) => (
            <div
              className="flex flex-row items-center gap-2 hover:text-[#6A6F4C] transition-colors duration-700"
              key={id}
            >
              <img src="/contact-polygon-image.svg" className="h-4 w-4" />
              <a href={item.link}>{item.name}</a>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <p className="text-2xl text-[#CBB89D]">Email</p>
            <p className="text-xl text-[#806044]">hadeebataj@gmail.com</p>
          </div>
          <div>
            <p className="text-2xl text-[#CBB89D]">Phone</p>
            <p className="text-xl text-[#806044]">+44 7456504990</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
