import React from "react";

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
  return (
    <footer className="bg-dark text-light p-3 text-center mt-5">
      <small>&copy; {year} Roy&Fashions | All Rights Researved</small>
    </footer>
  );
};

export default Footer;
