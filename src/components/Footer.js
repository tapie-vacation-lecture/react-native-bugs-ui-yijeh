import React from "react";
import "./Footer.css";
import { FaGithub, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p>MADE BY - SHINYUJUN</p>
      <div className="footer-links">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} className="icon" /> github
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube size={24} color="red" className="icon" /> youtube
        </a>
      </div>
    </footer>
  );
};

export default Footer;
