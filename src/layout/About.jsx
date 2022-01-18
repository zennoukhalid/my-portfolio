import React from "react"
import { Link } from "react-router-dom"
import { usePortfolio } from "../views/portfolio.context";

function About() {
  const { about } = usePortfolio()
  return (
    <section className='about-me t2 s3 shape-am position-relative' id='about'>
      <div className='container'>
        <div className='row position-relative'>
          <div className='col-lg-7 animate-element wow delay5 fadeInDown'>
            <div className='flat-title t2'>
              <h4 className='sub-title mg-b22'>About Me</h4>
              <h2 className='title-section color-d11 mg-b41'>
                Hi, I am here to help your next project!
              </h2>
              <div className='description'>
                <p className='color-d13 lt-sp01'>{about.summary}</p>
              </div>
            </div>
          </div>
          <div className='fact'>
            <div className='btn-contact bg-s2 text-center'>
              <h4 className='title color-d11'>Get a project? Let’s talk.</h4>
              <Link to='#' className='email color-s2 color-d15'>
                {about.email}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='featured-post animate-element wow delay5 fadeInUp' data-wow-delay='0.5s'>
        <img src='images/section/51.png' alt='images' />
      </div>
    </section>
  )
}

export default About
