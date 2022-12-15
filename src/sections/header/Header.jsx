import { useEffect } from 'react'
import HeaderImage from '../../assets/avatar.jpg'
import data from './data'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './header.css'

const Header = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <header id='header'>
      <div className="container header__container">
        <div className="header__profile" data-aos="flip-up">
          <img src={HeaderImage} alt="Header Profile" />
        </div>
        <h3 data-aos="fade-in">Kaio Fonseca</h3>
        <p data-aos="fade-down">
          Me preocupo com cada detalhe na hora de construir interfaces valorizando a experiência para que ela impacte positivamente a vida dos usuários!
        </p>
        <div className="header__cta" data-aos="zoom-out-up">
          <a href='#contact' className='btn primary'>Let's Talk</a>
          <a href='#portfolio' className='btn light'>My work</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header