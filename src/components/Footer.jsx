import React from "react";

const Footer = () => {
  const footerLinks = [
    "Privacy Policy",
    "Terms of Use",
    "Sales Policy",
    "Legal",
    "Site Map",
  ];
  return (
    <footer className="py-5 sm:px-44 px-5 text-xs text-[#86868b]">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs sm:m-0 ms-2">
            More ways to shop:
            <span className="underline text-blue-500">Find an Apple Store </span>
            or <span className="underline text-blue-500">other retailer</span> near
            you.
          </p>
          <p className="font-semibold text-gray text-xs sm:m-0 ms-2">
            Or call 000800-040-1966
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs sm:m-0 ms-2">
            Copright @ 2024 Apple Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs mx-2 text-nowrap hover:text-white">
                {link } &nbsp; |
                
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
