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
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000) 

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100
        setScrollProgress(progress)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#030712] flex items-center justify-center z-50">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-[3px] border-[#111827] shadow-[0_0_20px_rgba(16,185,129,0.15)]"></div>
              <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-[#34d399] border-r-[#10b981] animate-spin"></div>
              <div className="absolute inset-3 bg-[#111827] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.2)] border border-[rgba(16,185,129,0.1)]">
                <span className="text-2xl font-extrabold text-[#10b981] tracking-widest">VB</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-[14px] font-bold text-[#10b981] uppercase tracking-[0.25em] animate-pulse">Initializing System</p>
            <div className="w-48 h-[4px] bg-[#111827] overflow-hidden mx-auto rounded-full relative">
              <div className="h-full bg-gradient-to-r from-[#10b981] to-[#34d399] w-[45%] shimmer-loading-bar rounded-full absolute left-0 top-0"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="page-load bg-dots-pattern min-h-screen relative overflow-hidden transition-colors duration-350">
      <div className="scroll-progress-container">
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      </div>
      
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
