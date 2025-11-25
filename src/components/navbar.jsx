import { useState, useEffect } from 'react'
import '../App.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  const closeMenu = () => setIsOpen(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className={`nav-container mt-4 shadow-lg sticky top-0 z-200 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-xl' : 'bg-white'
      }`}>
        <div className="nav-container__desc p-6 flex sm:justify-between items-center">
          <div>
            <h1 className="nav-container__head text-2xl font-bold hover:text-[#1F3A8A] hover:cursor-pointer transition-colors duration-300 transform hover:scale-105">VASANTH</h1>
          </div>
          <div className="flex items-center">
            {/* Hamburger for mobile & tablet */}
            <button
              type="button"
              aria-label="Open menu"
              aria-controls="mobile-sidebar"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#1F3A8A] focus:outline-none transition-all duration-300 hover:bg-gray-100 rounded-lg"
            >
              <div className="relative w-7 h-7">
                <span className={`absolute top-1 left-0 w-7 h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}></span>
                <span className={`absolute top-3 left-0 w-7 h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`absolute top-5 left-0 w-7 h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}></span>
              </div>
            </button>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex justify-between items-center gap-6 text-lg font-medium">
              <li className="hover:text-[#1F3A8A] hover:cursor-pointer transition-all duration-300 transform hover:scale-105">
                <a href="#home" className="relative group">
                  HOME
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1F3A8A] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li className="hover:text-[#1F3A8A] hover:cursor-pointer transition-all duration-300 transform hover:scale-105">
                <a href="#about" className="relative group">
                  ABOUT
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1F3A8A] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li className="hover:text-[#1F3A8A] hover:cursor-pointer transition-all duration-300 transform hover:scale-105">
                <a href="#contact" className="relative group">
                  CONTACT
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1F3A8A] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Enhanced Overlay with animation */}
      <div
        className={`fixed inset-0 bg-black/40 z-[199] lg:hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
      />

      {/* Enhanced Sidebar with better animations */}
      <aside
        id="mobile-sidebar"
        className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-br from-white to-gray-50 shadow-2xl z-[200] transform transition-all duration-500 ease-out lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
      >
        {/* Sidebar Header */}
        <div className="p-6 flex items-center justify-between border-b border-gray-200 bg-gradient-to-r from-[#1D4ED8] to-[#0EA5E9] text-white">
          <span className="text-xl font-bold">Navigation</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/20 focus:outline-none transition-all duration-300 transform hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-6">
          <ul className="flex flex-col gap-2">
            <li className={`transform transition-all duration-300 ${
              isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
            }`} style={{ transitionDelay: isOpen ? '100ms' : '0ms' }}>
              <a 
                href="#home" 
                onClick={closeMenu} 
                className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-[#1F3A8A] hover:bg-gray-100 rounded-lg transition-all duration-300 transform hover:translate-x-2 hover:scale-105"
              >
                🏠 HOME
              </a>
            </li>
            <li className={`transform transition-all duration-300 ${
              isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
            }`} style={{ transitionDelay: isOpen ? '200ms' : '0ms' }}>
              <a 
                href="#about" 
                onClick={closeMenu} 
                className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-[#1F3A8A] hover:bg-gray-100 rounded-lg transition-all duration-300 transform hover:translate-x-2 hover:scale-105"
              >
                👨‍💻 ABOUT
              </a>
            </li>
            <li className={`transform transition-all duration-300 ${
              isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
            }`} style={{ transitionDelay: isOpen ? '300ms' : '0ms' }}>
              <a 
                href="#contact" 
                onClick={closeMenu} 
                className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-[#1F3A8A] hover:bg-gray-100 rounded-lg transition-all duration-300 transform hover:translate-x-2 hover:scale-105"
              >
                📧 CONTACT
              </a>
            </li>
          </ul>
        </nav>

        {/* Sidebar Footer */}
        <div className={`absolute bottom-6 left-6 right-6 transform transition-all duration-300 ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ transitionDelay: isOpen ? '400ms' : '0ms' }}>
          <div className="text-center text-sm text-gray-500">
            <p>© 2024 Vasanth Portfolio</p>
          </div>
        </div>
      </aside>
    </>
  );
}
