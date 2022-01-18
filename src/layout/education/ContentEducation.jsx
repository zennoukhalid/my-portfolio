import React from "react"
import { usePortfolio } from "../../views/portfolio.context"

function TopEducation() {
  const { educations, works } = usePortfolio()
  return (
    <div className='animate-element delay5 fadeInUp'>
      <div className='padding-bottom'>
        <div className='row'>
          {educations.map((data, i) => (
            <div
              className='col-lg-4 col-12 last-col animate-element wow delay5 fadeIn'
              data-wow-delay='0.3s'
              key={i}
            >
              <div
                className={`experience-box t3 ${
                  i + 1 === educations.length ? "" : "experience-box-line"
                }`}
              >
                <div className='box-inner'>
                  <h3 className='f-info bg-s2 color-d6' style={{backgroundColor: "orange"}}>{data.studyType}</h3>
                  <div className='exp-wrap'>
                    <div className='s-info color-d11 mg-b11'>{data.institution}</div>
                    <p className='color-d13'>{data.area}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='row'>
        {works.map((data, idx) => (
          <div
            className='col-lg-4 col-12 last-col animate-element wow delay5 fadeIn'
            data-wow-delay='0.3s'
            key={idx}
          >
            <div
              className={`experience-box t3 ${
                idx + 1 === works.length ? "" : "experience-box-line"
              }`}
            >
              <div className='box-inner'>
                <h3 className='f-info bg-s2 color-d6' style={{backgroundColor: "orange"}}>{data.start.year + "-" + data.end.year}</h3>
                <div className='exp-wrap'>
                  <div className='s-info color-d11 mg-b11'>{data.company}</div>
                  <p className='color-d13'>{data.summary}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopEducation
