import './portfolio.css'
import Projects from './Projects'
import data from './data'
import { useState } from 'react'

const Portfolio = () => {
  const [projects, setProjects] = useState(data);

  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>
        Veja agora os meus melhores projetos!
      </p>
      <div className="container porfolio__container">
        <Projects projects={projects}/>
      </div>
    </section>
  )
}

export default Portfolio