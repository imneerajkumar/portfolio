import React from "react"
import "./Portfolio.css"
import Card from "./Card"
import { PinnedProjects } from "./Portfolio_data"
import { Link } from "react-router-dom"

const Portfolio = () => {
  return (
    <>
      <section className='Portfolio top' id='projects'>
        <div className='container'>
          <div className='heading text-center '>
            <h4>PROJECTS I HAVE WORKED ON</h4>
            <h1>My Projects</h1>
          </div>
          <div className='content grid'>
            {PinnedProjects.map((value, index) => {
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
          <div className="all-projects">
            <Link to="/allProjects">
              <button className='home-btn'>
                View All  <i className='fas fa-arrow-right'></i>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
