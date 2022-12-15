import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import './about.css'
import data from './data'
import Card from '../../components/Card'

const About = () => {
  return (
    <section id='about' data-aos="fade-in">
      <div className="conatiner about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
            <h2>About me</h2>
            <div className="about__cards">
              {
                data.map(item => (
                  <Card key={item.id} className="about__card">
                    <span className='about__card-icon'>{item.icon}</span>
                    <h5>{item.title}</h5>
                    <small>{item.desc}</small>
                  </Card>
                ))
              }
            </div>
            <p>
            Tenho 19 anos, sou de Rio de Janeiro mas moro em Brasília e atualmente estou construindo conhecimentos sólidos em Front-End para em um futuro breve entrar no mercado.
            </p>
            <p>
            Olá, meu nome é Kaio Marques Fonseca e me considero um cara que sempre procura resolver os problemas da melhor maneira e sempre procurando evoluir a cada dia. Desenvolvi meu primeiro site em 2021 utilizando HTML e CSS. Desde então venho aprimorando minhas habilidades com projetos cada vez mais desafiadores que você pode dar uma olhada no meu GitHub!
            </p>
            <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
        </div>
      </div>
    </section>
  )
}

export default About