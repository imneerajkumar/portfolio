import React from "react"
import "./Home.css"
import hero from "../pic/hero.jpg"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h1>
              Hi, I’m <span>Neeraj Kumar</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Coder.", " Developer.", " Programmer."]} loop cursor cursorStyle='|' typeSpeed={60} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>
            <p>I am a Full Stack Web Developer (MERN) and App Developer (React-Native). I aspire to work in a professional environment where I can have ample opportunities to use my skills and to contribute towards the growth of the organization.</p>
            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>CONNECT WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <i class='fab fa-facebook-f'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-instagram'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-github'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-twitter'></i>
                  </button>
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
