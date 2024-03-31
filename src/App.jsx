import './App.css'
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import MainPage from './components/MainPage'
import SocialMedia from './components/SocialMedia'

function App() {

  return (
    <>
      <NavBar/>
      <MainPage/>
      <AboutMe/>
      <Education/>
      <Skills/>
      <SocialMedia/>
      <Projects/>
      <Footer/>
    </>
  )
}

export default App;
