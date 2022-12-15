import Card from '../../components/Card'
import data from './data'
import './skills.css'

const Skills = () => {
  return (
    <section id='skills'>
      <h2>My Skills</h2>
      <p>Aqui temos todas as minhas Hardskills</p>
      <div className="container skills__container" data-aos="fade-in">
        {
          data.map(item => (
            <Card key={item.id} className="skill light">
              <div className="skill__icon">{item.icon}</div>
              <div className="skill__details">
                <h4>{item.title}</h4>
              </div>
            </Card>
          ))
        }
      </div>
    </section>
  )
}

export default Skills