import React, { useContext, useEffect, useState } from "react"

const PortfolioContext = React.createContext()

export const usePortfolio = () => useContext(PortfolioContext)

export const PortfolioProvider = ({ children, isKhalid }) => {
  const [about, setAbout] = useState({})
  const [educations, setEducations] = useState([])
  const [works, setWorks] = useState([])
  const [skills, setSkills] = useState([])
  const [projects, setProjects] = useState([])
  const [references, setReferences] = useState([])

  const openLink = (url)=> {
    window.open(url, "_blank")
  }

  useEffect(() => {
    const url = 'https://gitconnected.com/v1/portfolio/zennoukhalid';
    fetch(url)
      .then((res) => res.json())
      .then((rep) => {
        const { basics, education, skills, work, projects, references} = rep
        setAbout(basics)
        setEducations(education)
        setSkills(skills)
        setWorks(work)
        setProjects(projects)
        setReferences(references)
      })
      .catch((error) => console.log(error))
  }, [])

  const state = {
    works,
    skills,
    about,
    educations,
    projects,
    references,
    openLink
  }

  return <PortfolioContext.Provider value={state}>{children}</PortfolioContext.Provider>
}

export default PortfolioProvider
