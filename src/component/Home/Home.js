import React from "react";
import "./Home.css";
import hero from "../../static/images/hero.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const words = [" Software Engineer.", " Full-Stack Developer."];
  const { text } = useTypewriter({
    words,
    loop: 0,
  });

  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h1>
              Hi, I’m <span>Neeraj Kumar</span>
            </h1>
            <h2>
              a<span>{text}</span>
              <Cursor />
            </h2>
            <p>
              Full Stack Developer with 2.5+ years of experience building
              scalable web applications, APIs, automation systems, and
              integrations. Proven ability to design efficient solutions,
              optimize performance, and deliver reliable end-to-end systems
              across the stack. Strong expertise in Node.js, React, and modern
              web technologies, with a focus on clean architecture and
              maintainable code.
            </p>
            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>CONNECT WITH ME</h4>
                <div className="button">
                  <a
                    href="https://linkedin.com/in/imneerajkumar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn_shadow">
                      <i className="fab fa-linkedin-in"></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/imneerajkumar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn_shadow">
                      <i className="fab fa-github"></i>
                    </button>
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1bOZHyg9wx_-4SZbefZke1FBfufLFNn9k/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn_shadow">
                      <i className="fas fa-file"></i>
                      {"    "}Resume
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
