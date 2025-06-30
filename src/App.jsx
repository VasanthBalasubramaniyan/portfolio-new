import './App.css'
import Navbar from './components/navbar'
import Header from './components/header'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Resume from '../public/Vasanth B.pdf'

export default function App() {

  const resumeUrl = '/Vasanth B.pdf';
  return (
    <>
      <Navbar></Navbar>

      <div className='container'>
        <Header resumeLink = {'../public/Vasanth B.pdf'}></Header>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
      </div>
      
    </>
  )
}


