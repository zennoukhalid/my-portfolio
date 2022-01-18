import React from "react"
import { Link } from "react-router-dom"
import { usePortfolio } from "../views/portfolio.context"
function CaseStudy() {
  const { projects, openLink } = usePortfolio()
  const getLeftItems = projects.slice(0, Math.ceil(projects.length / 2))
  const getRightItems = projects.slice(Math.ceil(projects.length / 2), projects.length)

  return (
    <section className="flat-case-study s3" id="portfolio">
      <div className="container">
        <div className="d-md-flex">
          <div className="col-left animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">
            {getLeftItems.map((project, i) => (
              <div className="image-link t2" key={project.githubUrl}>
                <div className="featured-post">
                  <Link onClick={openLink.bind(this, project.githubUrl)}>
                    <img src={project.images[0]?.resolutions.desktop.url} alt="images" />
                  </Link>
                </div>
                <div className="text-center">
                  <Link className="text-white" onClick={openLink.bind(this, project.githubUrl)}>
                  <p style={{color:"orange"}}>
                    {project.displayName}
                    </p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flat-spacer" data-desktop={0} data-mobile={100} data-smobile={100} />
          <div className="col-right animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
            <div className="flat-title t2 mg-b60">
              <h4 className="sub-title mg-b13">Portfolio</h4>
              <h2 className="title-section color-d11 mg-b20" style={{color: "orange"}}>Few selected works.</h2>
              <p className="color-d13">
                I'm a professional web/mobile developer with 4 years of experience. My main focus is
                on listening and understanding your users.
              </p>
            </div>
            <div className="pd-right">
              {getRightItems.map((project) => (
                <div className="image-link t2" key={project.githubUrl}>
                  <div className="featured-post">
                    <Link onClick={openLink.bind(this, project.githubUrl)}>
                      <img src={project.images[0]?.resolutions.desktop.url} alt="images" />
                    </Link>
                  </div>
                  <div className="text-center" >
                    <Link className="text-white" onClick={openLink.bind(this, project.githubUrl)}>
                      <p style={{color:"orange"}}>
                        {project.displayName}
                      </p>
                      
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudy
