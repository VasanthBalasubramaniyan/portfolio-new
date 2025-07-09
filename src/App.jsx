import './App.css'
import Navbar from './components/navbar'
import Header from './components/header'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Footer from './components/footer'

export default function App() {

  return (
    <>
      <Navbar></Navbar>

      <div className='container'>
        <Header resumeLink = '/Vasanth-B.html'></Header>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
      </div>
      
      <Footer></Footer>
    </>
  )
}


