import { useState, useEffect } from 'react'

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
        scrolled ? 'glass-panel border-b border-[rgba(0,188,212,0.2)]' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-extrabold text-white tracking-widest hover:text-[#4DD0E1] transition-colors cursor-pointer">
              VASANTH
            </h1>
          </div>
          <div className="flex items-center gap-4">
            {/* Hamburger for mobile & tablet */}
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setIsOpen((v) => !v)}
              className="lg:hidden p-2 text-white hover:text-[#00BCD4] focus:outline-none transition-all duration-300"
            >
              <div className="relative w-7 h-7">
                <span className={`absolute top-1 left-0 w-7 h-[2px] bg-current transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}></span>
                <span className={`absolute top-3 left-0 w-7 h-[2px] bg-current transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`absolute top-5 left-0 w-7 h-[2px] bg-current transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}></span>
              </div>
            </button>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex justify-between items-center gap-6 text-[15px] font-semibold text-[#F5F5F5]">
              {navLinks.map((link) => (
                <li key={link.name} className="relative group">
                  <a href={link.href} className="hover:text-[#4DD0E1] transition-colors tracking-wider">
                    {link.name}
                  </a>
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00BCD4] transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-[#0A1628]/80 backdrop-blur-md z-[199] lg:hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Sidebar */}
      <aside
        id="mobile-sidebar"
        className={`fixed top-0 right-0 h-full w-64 bg-[#1E3A5F] shadow-2xl z-[200] transform transition-transform duration-300 ease-out lg:hidden border-l border-[rgba(0,188,212,0.2)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 flex items-center justify-between border-b border-[rgba(0,188,212,0.1)]">
          <span className="text-xl font-bold text-white tracking-widest">MENU</span>
          <button
            type="button"
            onClick={closeMenu}
            className="p-2 text-[#F5F5F5] hover:text-[#4DD0E1] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="p-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <li key={link.name} className={`transform transition-all duration-300 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} style={{ transitionDelay: `${index * 50}ms` }}>
                <a 
                  href={link.href} 
                  onClick={closeMenu} 
                  className="block text-lg font-medium text-[#F5F5F5] hover:text-[#4DD0E1] transition-colors"
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
