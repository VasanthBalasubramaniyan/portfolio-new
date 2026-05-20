import './App.css'
import Navbar from './components/navbar'
import Header from './components/header'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Experience from './components/experience'
import Footer from './components/footer'
import Certifications from './components/certifications'
import Education from './components/education'
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
      <div className="fixed inset-0 bg-[#0A1628] flex items-center justify-center z-50">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-[3px] border-[#1E3A5F] shadow-[0_0_15px_rgba(0,188,212,0.2)]"></div>
              <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-[#4DD0E1] border-r-[#00BCD4] animate-spin"></div>
              <div className="absolute inset-3 bg-[#1E3A5F] rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(0,188,212,0.2)]">
                <span className="text-2xl font-bold text-[#FFFFFF] tracking-wider">VB</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <p className="text-[17px] font-medium text-[#4DD0E1] uppercase tracking-widest text-sm">Initializing</p>
            <div className="w-48 h-[3px] bg-[#1E3A5F] overflow-hidden mx-auto rounded-full">
              <div className="h-full bg-gradient-to-r from-[#00BCD4] to-[#80DEEA] w-[40%] shimmer-loading rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="page-load bg-dots-pattern">
      <Navbar></Navbar>

      <Header resumeLink='/Vasanth - Resume.pdf'></Header>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Skills></Skills>
      <Certifications></Certifications>
      <Education></Education>
      
      <Footer></Footer>
    </div>
  )
}
