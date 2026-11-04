import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Header from './components/header'
import Experience from './components/experience'
import Skills from './components/skills'
import Education from './components/education'
import Footer from './components/footer'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    // Initial boot simulation
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 600)

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
      <div className="fixed inset-0 bg-[#06090e] flex items-center justify-center z-50 font-mono">
        <div className="text-center space-y-4 p-6">
          <div className="w-16 h-16 mx-auto relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-2 border-emerald-500/20"></div>
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-emerald-400 animate-spin"></div>
            <span className="text-emerald-400 font-bold text-lg tracking-wider">VB</span>
          </div>
          <div>
            <p className="text-xs text-emerald-400 uppercase tracking-widest animate-pulse font-semibold">
              BOOTING DATA PLATFORM...
            </p>
            <div className="mt-3 w-48 h-1 bg-slate-800 rounded-full overflow-hidden mx-auto">
              <div className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 w-3/4 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#06090e] text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
      
      {/* Top Scroll Progress Line */}
      <div className="scroll-progress-container">
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      </div>
      
      <Navbar />
      <Header resumeLink="/resume/Vasanth - Resume.pdf" />
      <Experience />
      <Skills />
      <Education />
      <Footer />

    </div>
  )
}
