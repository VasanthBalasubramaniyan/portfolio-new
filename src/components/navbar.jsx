import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()
  
  const closeMenu = () => setIsOpen(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'CERTIFICATIONS', href: '#certifications' },
    { name: 'EDUCATION', href: '#education' },
    { name: 'CONTACT', href: '#contact' }
  ];

  return (
    <>
      <div className={`w-full fixed top-0 z-[200] transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-[var(--nav-bg)] backdrop-blur-md border-b border-[rgba(16,185,129,0.15)] shadow-md' 
          : 'py-5 bg-transparent border-b border-transparent'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div>
            <a href="#home" className="text-2xl font-extrabold tracking-widest transition-all duration-300 hover:opacity-90 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#34d399] to-[#10b981] flex items-center justify-center text-white text-[17px] font-black shadow-[0_0_12px_rgba(16,185,129,0.3)]">V</span>
              <span className="gradient-text-green font-black">VASANTH</span>
            </a>
          </div>
          <div className="flex items-center gap-6">
            {/* Desktop Nav */}
            <ul className="hidden lg:flex justify-between items-center gap-7 text-[14px] font-bold text-[var(--text-color)]">
              {navLinks.map((link) => (
                <li key={link.name} className="relative group">
                  <a href={link.href} className="hover:text-[var(--accent-color)] transition-colors tracking-wider duration-200">
                    {link.name}
                  </a>
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--accent-color)] transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-[var(--surface-border)] bg-[rgba(16,185,129,0.05)] text-[var(--accent-color)] hover:bg-[rgba(16,185,129,0.15)] hover:border-[rgba(16,185,129,0.3)] transition-all duration-300 shadow-sm flex items-center justify-center cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                // Sun Icon for Dark Mode (click to switch to light)
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M4.22 4.22l1.56 1.56m12.44 12.44 1.56 1.56M1.5 12h2.25m13.5 0H21M4.22 19.78l1.56-1.56m12.44-12.44 1.56-1.56M12 5.25a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5z" />
                </svg>
              ) : (
                // Moon Icon for Light Mode (click to switch to dark)
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998z" />
                </svg>
              )}
            </button>

            {/* Hamburger for mobile & tablet */}
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setIsOpen((v) => !v)}
              className="lg:hidden p-2 text-[var(--text-color)] hover:text-[var(--accent-color)] focus:outline-none transition-all duration-300 cursor-pointer"
            >
              <div className="relative w-7 h-6 flex flex-col justify-between">
                <span className={`w-7 h-[2.5px] bg-current rounded-full transition-all duration-350 ${
                  isOpen ? 'rotate-45 translate-y-[10.5px] bg-[var(--accent-color)]' : ''
                }`}></span>
                <span className={`w-7 h-[2.5px] bg-current rounded-full transition-all duration-350 ${
                  isOpen ? 'opacity-0 scale-0' : ''
                }`}></span>
                <span className={`w-7 h-[2.5px] bg-current rounded-full transition-all duration-350 ${
                  isOpen ? '-rotate-45 -translate-y-[10.5px] bg-[var(--accent-color)]' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[199] lg:hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Sidebar */}
      <aside
        id="mobile-sidebar"
        className={`fixed top-0 right-0 h-full w-68 bg-[var(--bg-color)] shadow-2xl z-[200] transform transition-transform duration-300 ease-out lg:hidden border-l border-[var(--surface-border)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 flex items-center justify-between border-b border-[var(--surface-border)] bg-[rgba(16,185,129,0.02)]">
          <span className="text-lg font-bold gradient-text-green tracking-widest">MENU</span>
          <button
            type="button"
            onClick={closeMenu}
            className="p-2 text-[var(--text-color)] hover:text-[var(--accent-color)] transition-colors cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="p-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <li 
                key={link.name} 
                className={`transform transition-all duration-300 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} 
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                <a 
                  href={link.href} 
                  onClick={closeMenu} 
                  className="block py-2 text-[16px] font-semibold text-[var(--text-color)] hover:text-[var(--accent-color)] border-b border-dashed border-[var(--surface-border)]/20 transition-all duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
