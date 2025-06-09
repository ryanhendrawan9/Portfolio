import React from "react";

const Footer = () => {
  return (
    <footer className="py-4 text-center text-white bg-gray-900">
      <p>
        &copy; {new Date().getFullYear()} Ryan Hendrawan. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
