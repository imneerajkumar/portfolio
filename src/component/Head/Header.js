import React, { useState } from "react";
import "./header.css";
import logo from "../pic/logo.png";

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header?.classList.toggle("active", window.scrollY > 100);
  });
  // Toogle Menu
  const [Mobile, setMobile] = useState(false);
  return (
    <>
      <header className="header">
        <div className="d_flex">
          <div>
            <img className="logo" src={logo} alt="" />
          </div>
          <div className="navlink">
            <ul
              className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"}
              onClick={() => setMobile(false)}
            >
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#background">Background</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1bOZHyg9wx_-4SZbefZke1FBfufLFNn9k/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="home-btn">Resume</button>
                </a>
              </li>
            </ul>
            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
