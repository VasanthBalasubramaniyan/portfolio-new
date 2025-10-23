import './App.css'
import Navbar from './components/navbar'
import Header from './components/header'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Footer from './components/footer'
import { useState, useEffect } from 'react'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="text-center">
          <div className="loading-spinner w-16 h-16 border-4 border-[#7A51EB] border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-2xl font-bold gradient-text">Loading Portfolio...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="page-load">
      <Navbar></Navbar>

      <div className='container'>
        <Header resumeLink = '/Vasanth-B.html'></Header>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
      </div>
      
      <Footer></Footer>
    </div>
  )
}


