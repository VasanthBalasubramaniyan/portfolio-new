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
      <div className="fixed inset-0 bg-gradient-to-br from-[#7A51EB] via-[#9F7AEA] to-[#7A51EB] flex items-center justify-center z-50">
        <div className="text-center">
          {/* Animated Logo */}
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto mb-4 relative">
              <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full bg-white/30 animate-bounce"></div>
              <div className="absolute inset-4 rounded-full bg-white animate-spin">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#7A51EB]">VB</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Multi-colored Loading Spinner */}
          <div className="relative mb-6">
            <div className="w-20 h-20 mx-auto relative pulse-glow">
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#FF6B6B] animate-spin"></div>
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-r-[#4ECDC4] animate-spin" style={{animationDelay: '0.1s'}}></div>
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-b-[#45B7D1] animate-spin" style={{animationDelay: '0.2s'}}></div>
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-l-[#96CEB4] animate-spin" style={{animationDelay: '0.3s'}}></div>
              <div className="absolute inset-2 rounded-full border-2 border-transparent border-t-[#FFD93D] animate-spin" style={{animationDelay: '0.4s'}}></div>
              <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-[#6BCF7F] animate-spin" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
          
          {/* Loading Text with Animation */}
          <div className="space-y-2">
            <p className="text-3xl font-bold text-white animate-pulse">Loading Portfolio</p>
            <div className="flex justify-center space-x-1">
              <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-64 h-2 bg-white/20 rounded-full mx-auto mt-6 overflow-hidden relative">
            <div className="h-full bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#45B7D1] rounded-full shimmer-loading relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent shimmer-loading"></div>
            </div>
          </div>
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


