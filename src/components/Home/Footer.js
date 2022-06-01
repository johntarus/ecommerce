import React from "react";

const Footer = () => {
  return (
    <footer className="h-16 bg-[#EDE6DB] flex items-center justify-center">
      <h1 className="text-center font-bold">
        `&copy; {new Date().getFullYear()}`
        <span className="text-[#ED4833]"> FASHOP</span>
      </h1>
      <h1 className="ml-2 font-bold">|| All Rights Reserved</h1>
    </footer>
  );
};

export default Footer;
