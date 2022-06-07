import React, { useEffect } from 'react'
import { useNavigate,  useLocation } from 'react-router-dom'
import Card from "./Card"
import Footer from "../Footer/Footer"
import { AllProjects } from "./Portfolio_data"
import "./Portfolio.css"

const Projects = (props) => {
  const navigate = useNavigate()
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <div className='back-main'>
        <button className='btn_shadow' onClick={() => {navigate(-1)}}>
          <i className='fas fa-home'></i>
        </button>
      </div>
      <section className='Portfolio top'>
        <div className='container'>
          <div className='heading text-center '>
            <h4>CHECKOUT ALL OF MY PROJECTS</h4>
            <h1>My Projects</h1>
          </div>
          <div className='content grid'>
            {AllProjects.map((value, index) => {
              return <Card 
                key={index} 
                image={value.image} 
                category={value.category} 
                title={value.title} 
                description={value.description} 
                techs={value.techs} 
                code={value.code}
                demo={value.demo}
              />
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Projects;