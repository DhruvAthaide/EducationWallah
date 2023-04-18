import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO EDUCATION WALLAH' title='Best Online Education Expertise' />
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
