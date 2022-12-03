import HeaderImage from '../../assets/avatar.png'
import data from './data'
import './header.css'

const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Profile" />
        </div>
        <h3>Kaio Fonseca</h3>
        <p>
          Me preocupo com cada detalhe na hora de construir interfaces valorizando a experiência para que ela impacte positivamente a vida dos usuários!
        </p>
        <div className="header__cta">
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