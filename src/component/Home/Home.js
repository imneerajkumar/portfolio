import React from "react"
import "./Home.css"
import hero from "../pic/hero.jpg"
import { useTypewriter, Cursor } from "react-simple-typewriter"

const Home = () => {
  const words = [" Coder.", " Developer.", " Programmer."]
  const { text } = useTypewriter({
    words,
    loop: 0, 
  });

  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h1>
              Hi, I’m <span>Neeraj Kumar</span>
            </h1>
            <h2>
              a<span>{text}</span><Cursor />
            </h2>
            <p>A Full Stack Web Developer and App Developer having an experience of building Web applications with  Reactjs / Nodejs and some other libraries and frameworks and Cross Platform Mobile Apps With React Native.</p>
            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>CONNECT WITH ME</h4>
                <div className='button'>
                  <a href="https://linkedin.com/in/imneerajkumar" >
                    <button className='btn_shadow'>
                      <i className='fab fa-linkedin-in'></i>
                    </button>
                  </a>
                  <a href="https://github.com/imneerajkumar">
                    <button className='btn_shadow'>                   
                      <i className='fab fa-github'></i>
                    </button>
                  </a>
                  <a href="https://drive.google.com/file/d/1bOZHyg9wx_-4SZbefZke1FBfufLFNn9k/view?usp=sharing" target='_blank' rel='noreferrer'>
                    <button className='btn_shadow'>  
                      <i className="fas fa-file"></i>
                      {"    "}Resume
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>          
  )
}

export default Home
