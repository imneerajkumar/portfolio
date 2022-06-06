import React from "react"
import "./Portfolio.css"
import Card from "./Card"
import Portfolio_data from "./Portfolio_data"

const Portfolio = () => {
  return (
    <>
      <section className='Portfolio top' id='projects'>
        <div className='container'>
          <div className='heading text-center '>
            <h4>CHECKOUT ALL OF MY PROJECTS</h4>
            <h1>My Projects</h1>
          </div>

          <div className='content grid'>
            {Portfolio_data.map((value, index) => {
              return <Card key={index} image={value.image} category={value.category} title={value.title} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
