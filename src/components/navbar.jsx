import { useState, useEffect } from 'react'
import { FileCode, Cpu, Terminal as TerminalIcon, FileText, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('overview.py')

  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = [
        { id: 'home', tab: 'overview.py' },
        { id: 'experience', tab: 'experience.json' },
        { id: 'skills', tab: 'skills.matrix' },
        { id: 'education', tab: 'education.edu' },
        { id: 'contact', tab: 'terminal.sh' },
      ]

      const scrollPosition = window.scrollY + 200

      // Bottom of page check
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveSection('terminal.sh')
        return
      }

      for (const section of sections) {
        const el = document.getElementById(section.id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.tab)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const tabs = [
    { name: 'overview.py', label: 'Overview', href: '#home', icon: FileCode, color: 'text-emerald-400' },
    { name: 'experience.json', label: 'Experience', href: '#experience', icon: Cpu, color: 'text-purple-400' },
    { name: 'skills.matrix', label: 'Skills Matrix', href: '#skills', icon: FileText, color: 'text-cyan-400' },
    { name: 'education.edu', label: 'Education', href: '#education', icon: ShieldCheck, color: 'text-blue-400' },
    { name: 'terminal.sh', label: 'Contact CLI', href: '#contact', icon: TerminalIcon, color: 'text-emerald-400' },
  ]

  return (
    <>
      <header className={`w-full fixed top-0 z-[200] transition-all duration-300 ${
        scrolled 
          ? 'bg-[#080c14]/95 backdrop-blur-md border-b border-emerald-500/20 shadow-xl' 
          : 'bg-[#06090e]/90 border-b border-white/5'
      }`}>
        {/* Top Window Title Bar */}
        <div className="bg-[#0b0f19] border-b border-white/5 px-3 sm:px-4 py-1.5 flex items-center justify-between text-[11px] sm:text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
            </div>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="text-slate-300 font-semibold tracking-wide flex items-center gap-1.5 truncate max-w-[200px] sm:max-w-none">
              <span className="text-emerald-400 font-bold">vasanth-b@data-platform</span>
              <span className="text-slate-500">:</span>
              <span className="text-cyan-400 hidden xs:inline">~/data-engine</span>
              <span className="text-[10px] text-slate-500 bg-slate-800/80 px-1.5 py-0.5 rounded hidden md:inline">WSL: Ubuntu</span>
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden md:flex items-center gap-2 text-[11px] text-emerald-400/90 font-mono">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>ETL STATUS: ONLINE</span>
            </div>
            <a 
              href="/resume/Vasanth - Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 rounded bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono text-[11px] transition-all flex items-center gap-1 min-h-[36px] sm:min-h-[44px]"
            >
              <span>export_resume.sh</span>
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>

        {/* IDE Tabs Nav Bar with Fade Edge Gradient Hint */}
        <div className="container mx-auto px-2 sm:px-4 flex items-center justify-between relative">
          <div className="flex-1 overflow-x-auto no-scrollbar scroll-smooth flex items-center pr-8 nav-tab-container">
            <div className="flex items-center">
              {tabs.map((tab) => {
                const Icon = tab.icon
                const isActive = activeSection === tab.name
                return (
                  <a
                    key={tab.name}
                    href={tab.href}
                    onClick={() => setActiveSection(tab.name)}
                    className={`flex items-center gap-2 px-3 sm:px-4 min-h-[44px] font-mono text-[12px] sm:text-xs border-r border-white/5 transition-all duration-200 whitespace-nowrap border-t-2 ${
                      isActive
                        ? 'bg-[#0b0f19] text-white border-t-emerald-400 font-semibold shadow-inner'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 border-t-transparent'
                    }`}
                  >
                    <Icon size={14} className={isActive ? tab.color : 'text-slate-500'} />
                    <span>{tab.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 ml-1"></span>}
                  </a>
                )
              })}
            </div>
          </div>

          {/* Mobile Drawer Button (Minimum 44x44px Tap Target) */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 min-h-[44px] min-w-[44px] text-slate-300 hover:text-emerald-400 focus:outline-none transition-colors flex items-center justify-center shrink-0 border-l border-white/5 bg-[#0b0f19]"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-md z-[199] lg:hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
      />

      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-[#090d16] border-l border-emerald-500/20 shadow-2xl z-[200] transform transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 flex items-center justify-between border-b border-white/10 bg-[#0b0f19] min-h-[56px]">
          <div className="flex items-center gap-2 font-mono text-emerald-400 font-bold text-sm">
            <TerminalIcon size={16} />
            <span>NAVIGATION.SH</span>
          </div>
          <button onClick={closeMenu} className="p-2 text-slate-400 hover:text-white min-h-[44px] min-w-[44px] flex items-center justify-center">
            <X size={20} />
          </button>
        </div>

        <nav className="p-4 font-mono text-sm">
          <div className="text-[11px] text-slate-500 uppercase px-3 py-2">Workspace Files</div>
          <div className="space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <a
                  key={tab.name}
                  href={tab.href}
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10 border border-transparent hover:border-emerald-500/20 transition-all min-h-[44px]"
                >
                  <Icon size={16} className={tab.color} />
                  <div>
                    <div className="font-semibold text-xs">{tab.name}</div>
                    <div className="text-[10px] text-slate-500">{tab.label}</div>
                  </div>
                </a>
              )
            })}
          </div>

          <div className="mt-8 pt-4 border-t border-white/10">
            <a
              href="/resume/Vasanth - Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 border border-emerald-500/40 text-center font-mono text-xs transition-all flex items-center justify-center gap-2 font-semibold min-h-[44px]"
            >
              <FileText size={14} />
              <span>DOWNLOAD RESUME PDF</span>
            </a>
          </div>
        </nav>
      </aside>
    </>
  )
}
