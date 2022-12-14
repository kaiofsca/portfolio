import Navbar from './sections/navbar/Navbar'
import Header from './sections/header/Header'
import About from './sections/about/About'
import Skills from './sections/skills/Skills'
import Portfolio from './sections/portfolio/Portfolio'
import Contact from './sections/contact/Contact'
import Footer from './sections/footer/Footer'
import Theme from './theme/Theme'
import { useThemeContext } from './context/theme-context'
// import FloatingNav from './sections/floating-nav/FloatingNav'


const App = () => {
  const {themeState} = useThemeContext()

  return (
    <main className={`${themeState.primary} ${themeState.background}`}>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      <Theme />
      {/* <FloatingNav /> */}
    </main>
  )
}

export default App