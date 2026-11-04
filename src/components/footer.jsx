import { useState } from 'react'
import { Mail, Phone, MapPin, GitBranch, Terminal, Copy, Check, ArrowUpRight, ShieldCheck } from 'lucide-react'

const LinkedInIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
)

export default function Footer() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text)
    if (type === 'email') {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } else {
      setCopiedPhone(true)
      setTimeout(() => setCopiedPhone(false), 2000)
    }
  }

  return (
    <footer id="contact" className="bg-[#04060a] border-t border-emerald-500/20 pt-12 sm:pt-16 pb-8 font-mono text-xs text-slate-400 relative">
      
      <div className="container mx-auto px-3 sm:px-4">
        
        {/* Contact Console Banner */}
        <div className="ide-card bg-[#080c14] border border-emerald-500/30 p-5 sm:p-8 mb-8 sm:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-2.5 sm:space-y-3">
              <div className="text-xs text-emerald-400 font-bold uppercase tracking-widest flex items-center gap-2">
                <Terminal size={14} />
                <span>TERMINAL CONTACT CONSOLE</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                Ready to optimize your ETL pipelines or build a Medallion Lakehouse?
              </h3>
              <p className="text-slate-300 font-sans text-xs sm:text-sm leading-relaxed">
                I am actively seeking Data Engineering opportunities (Remote or Relocation from Chennai, India). Let's connect on pipeline architecture, Spark optimization, or cloud data platforms.
              </p>
            </div>

            <div className="lg:col-span-5 space-y-3">
              {/* Email Button - 44px+ tap target */}
              <div className="flex items-center justify-between bg-[#0b0f19] p-3 rounded-lg border border-white/10 min-h-[48px]">
                <a
                  href="mailto:get.vasanth.b@gmail.com"
                  className="flex items-center gap-2 text-slate-200 hover:text-emerald-400 font-semibold truncate text-[12px] sm:text-xs"
                >
                  <Mail size={16} className="text-emerald-400 shrink-0" />
                  <span className="truncate">get.vasanth.b@gmail.com</span>
                </a>
                <button
                  onClick={() => handleCopy('get.vasanth.b@gmail.com', 'email')}
                  className="p-2 rounded bg-white/5 hover:bg-emerald-500/20 text-slate-400 hover:text-emerald-400 transition-all cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Phone Button - 44px+ tap target */}
              <div className="flex items-center justify-between bg-[#0b0f19] p-3 rounded-lg border border-white/10 min-h-[48px]">
                <a
                  href="tel:+919566678426"
                  className="flex items-center gap-2 text-slate-200 hover:text-cyan-400 font-semibold text-[12px] sm:text-xs"
                >
                  <Phone size={16} className="text-cyan-400 shrink-0" />
                  <span>+91-9566678426</span>
                </a>
                <button
                  onClick={() => handleCopy('+919566678426', 'phone')}
                  className="p-2 rounded bg-white/5 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-400 transition-all cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0"
                  title="Copy Phone Number"
                >
                  {copiedPhone ? <Check size={14} className="text-cyan-400" /> : <Copy size={14} />}
                </button>
              </div>

              {/* LinkedIn Link - 44px+ tap target */}
              <a
                href="https://linkedin.com/in/vasanthbalasubramaniyan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-[#0b0f19] p-3 rounded-lg border border-white/10 text-slate-200 hover:text-purple-400 font-semibold transition-all group min-h-[48px]"
              >
                <div className="flex items-center gap-2 truncate text-[12px] sm:text-xs">
                  <LinkedInIcon size={16} className="text-purple-400 shrink-0" />
                  <span className="truncate">linkedin.com/in/vasanthbalasubramaniyan</span>
                </div>
                <ArrowUpRight size={14} className="text-slate-500 group-hover:text-purple-400 shrink-0 ml-1" />
              </a>
            </div>

          </div>
        </div>

        {/* Footer Navigation Links & Details */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-white/10 text-xs">
          <div className="flex items-center gap-2 text-slate-300 font-bold">
            <span className="text-emerald-400">VASANTH B</span>
            <span className="text-slate-600">|</span>
            <span>Data Engineer</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-slate-400">
            <a href="#home" className="hover:text-emerald-400 transition-colors min-h-[36px] flex items-center">~/overview.py</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors min-h-[36px] flex items-center">~/experience.json</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors min-h-[36px] flex items-center">~/skills.matrix</a>
            <a href="#education" className="hover:text-emerald-400 transition-colors min-h-[36px] flex items-center">~/education.edu</a>
          </div>
        </div>

        {/* Bottom IDE Status Bar */}
        <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-2.5 text-[11px] text-slate-500 font-mono">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <span className="flex items-center gap-1 text-emerald-400">
              <GitBranch size={12} /> git: main*
            </span>
            <span>AWS Region: ap-south-1</span>
            <span className="hidden sm:inline">Python 3.11</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck size={12} /> SOC-2 Governed Architecture
            </span>
            <span>© {new Date().getFullYear()} Vasanth B</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
