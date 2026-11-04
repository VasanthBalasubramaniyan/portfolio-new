import { useState, useRef, useEffect } from 'react'
import { Terminal, Play, FileText, Mail, Phone, MapPin, CheckCircle2, ChevronRight, Sparkles, Copy, Check } from 'lucide-react'

const LinkedInIcon = ({ size = 14, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
)

export default function Header({ resumeLink = '/resume/Vasanth - Resume.pdf' }) {
  const [copied, setCopied] = useState(false)
  const [terminalInput, setTerminalInput] = useState('')
  const [terminalLogs, setTerminalLogs] = useState([
    { type: 'system', content: 'Vasanth Data Engineering CLI v3.4.1 (x86_64-aws-linux)' },
    { type: 'system', content: 'Type "help" or click command buttons below to interact.' },
    { type: 'prompt', command: 'cat bio.txt', output: 'Data Engineer with 3+ years experience building ETL/ELT pipelines across Banking & Healthcare data (500GB–1TB/day).' }
  ])

  const terminalEndRef = useRef(null)

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [terminalLogs])

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('get.vasanth.b@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const runCommand = (cmd) => {
    const cleanCmd = cmd.trim().toLowerCase()
    let response = ''

    switch (cleanCmd) {
      case 'help':
        response = `Available Commands:
  • cat bio.txt     - Career overview & metrics
  • run pipeline   - Execute Medallion ETL simulation
  • select skills  - View key technical stack
  • contact        - Direct communication info
  • clear          - Clear terminal logs`
        break
      case 'cat bio.txt':
      case 'cat bio':
        response = `Vasanth B | Data Engineer (3+ Years Experience)
Location: Chennai, India
Core Focus: Scalable ETL/ELT, Medallion Lakehouses, Batch & Near Real-time Streams.
Domains: Banking & Healthcare
Tech: PySpark, AWS Glue, Databricks, Delta Lake, Airflow, dbt, Redshift, Kinesis.`
        break
      case 'run pipeline':
      case 'pipeline':
        response = `[10:14:02] [INFO] Initializing Kinesis CDC Stream Ingestion...
[10:14:03] [RAW] S3 Ingest: 850,000 JSON records buffered.
[10:14:04] [BRONZE] PySpark Glue Job writing Delta raw schema... Done (2.4s)
[10:14:05] [SILVER] SCD Type 2 CDC deduplication applied... Done (1.8s)
[10:14:06] [GOLD] dbt models refreshed & Great Expectations passed (100% assertions).
[10:14:07] [SUCCESS] Athena / Redshift refreshed. Sub-minute latency achieved! ✨`
        break
      case 'select skills':
      case 'skills':
        response = `✦ Cloud/Lakehouse: AWS S3, Glue, EMR, Databricks, Delta Lake, Redshift, Kinesis
✦ Programming: Python, PySpark, Pandas, SQL (CTEs, Window Funcs, Stored Procs), Bash
✦ Orchestration & Quality: Apache Airflow, Step Functions, dbt, Great Expectations
✦ DevOps & BI: Docker, GitHub Actions, CodePipeline, Power BI`
        break
      case 'contact':
        response = `📧 Email: get.vasanth.b@gmail.com
📞 Phone: +91-9566678426
🔗 LinkedIn: linkedin.com/in/vasanthbalasubramaniyan
📍 Location: Chennai, India`
        break
      case 'clear':
        setTerminalLogs([])
        return
      default:
        response = `Command not recognized: "${cleanCmd}". Type "help" for valid commands.`
    }

    setTerminalLogs(prev => [
      ...prev,
      { type: 'prompt', command: cmd, output: response }
    ])
    setTerminalInput('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (terminalInput.trim()) {
      runCommand(terminalInput)
    }
  }

  return (
    <section id="home" className="pt-28 sm:pt-36 pb-12 sm:pb-16 px-3 sm:px-4 bg-[#06090e] bg-grid-pattern relative border-b border-emerald-500/10 min-h-screen flex flex-col justify-center">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto">
        
        {/* Intro Hero Header (Single focal point layout) */}
        <div className="max-w-4xl space-y-4">
          
          {/* 1. Eyebrow label */}
          <div className="font-mono text-xs sm:text-sm text-cyan-400 font-semibold tracking-wider">
            // data engineer
          </div>

          {/* 2. Large Name / Heading (~44px desktop / ~32px mobile) */}
          <h1 className="font-mono text-[28px] xs:text-[32px] sm:text-[44px] font-extrabold text-white tracking-tight leading-tight">
            Vasanth B
          </h1>

          {/* 3. One-line Tagline (max ~52 characters wide) */}
          <p className="text-slate-300 text-sm sm:text-lg font-sans max-w-[52ch] leading-relaxed">
            Designing ETL/ELT pipelines & Medallion lakehouses.
          </p>

          {/* 4. Compact Meta Row */}
          <div className="font-mono text-[12px] sm:text-xs text-slate-400 flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1 leading-normal">
            <span className="text-slate-300 flex items-center gap-1">
              <MapPin size={12} className="text-cyan-400 shrink-0" /> Chennai, India
            </span>
            <span className="text-emerald-500 font-bold">·</span>
            <span className="text-slate-300">3+ Years Experience</span>
            <span className="text-emerald-500 font-bold">·</span>
            <span className="text-emerald-400 font-semibold">Open for Remote & Relocation</span>
          </div>

          {/* Quick Action Buttons with 44px min tap targets */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-3 font-mono text-xs">
            <a
              href="#experience"
              className="px-4 sm:px-5 py-2.5 min-h-[44px] rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all hover:scale-105"
            >
              <Play size={13} fill="currentColor" />
              <span>VIEW EXPERIENCE</span>
            </a>

            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 min-h-[44px] rounded-lg bg-[#0b0f19] text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/60 font-semibold flex items-center gap-2 transition-all"
            >
              <FileText size={13} />
              <span>VIEW RESUME</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-3.5 py-2.5 min-h-[44px] rounded-lg bg-[#0b0f19] text-slate-300 border border-white/10 hover:border-white/20 flex items-center gap-2 transition-all cursor-pointer"
              title="Copy Email Address"
            >
              {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
              <span>{copied ? 'COPIED' : 'get.vasanth.b@gmail.com'}</span>
            </button>
          </div>

          {/* Direct Contact Bar */}
          <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-5 text-[12px] sm:text-xs text-slate-400 font-mono">
            <a href="mailto:get.vasanth.b@gmail.com" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors min-h-[36px]">
              <Mail size={13} className="text-emerald-400 shrink-0" />
              <span className="truncate">get.vasanth.b@gmail.com</span>
            </a>
            <a href="tel:+919566678426" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors min-h-[36px]">
              <Phone size={13} className="text-cyan-400 shrink-0" />
              <span>+91-9566678426</span>
            </a>
            <a 
              href="https://linkedin.com/in/vasanthbalasubramaniyan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors min-h-[36px]"
            >
              <LinkedInIcon size={13} className="text-purple-400 shrink-0" />
              <span>LinkedIn</span>
            </a>
          </div>

        </div>

        {/* 5. Terminal Window (Scales gracefully down to 360px wide) */}
        <div className="mt-8 sm:mt-10 max-w-4xl">
          <div className="ide-card bg-[#090d16] border border-emerald-500/20 shadow-2xl">
            
            {/* Terminal Window Bar */}
            <div className="ide-header bg-[#0b0f19] px-3 sm:px-4 py-2 flex items-center justify-between border-b border-emerald-500/10">
              <div className="flex items-center gap-2">
                <div className="ide-dots">
                  <span className="ide-dot ide-dot-red"></span>
                  <span className="ide-dot ide-dot-yellow"></span>
                  <span className="ide-dot ide-dot-green"></span>
                </div>
                <span className="text-[11px] sm:text-xs font-mono text-slate-400 ml-1.5 sm:ml-2 flex items-center gap-1.5">
                  <Terminal size={12} className="text-emerald-400" />
                  <span>vasanth-cli -- bash</span>
                </span>
              </div>
              <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-slate-500 font-mono">
                <span>UTF-8</span>
              </div>
            </div>

            {/* Terminal Screen Body */}
            <div className="p-3 sm:p-4 font-mono text-[11px] sm:text-xs text-slate-200 h-72 sm:h-80 overflow-y-auto space-y-2.5 bg-[#080c14] leading-relaxed">
              {terminalLogs.map((log, index) => (
                <div key={index} className="space-y-1">
                  {log.type === 'system' && (
                    <div className="text-slate-500 italic text-[10px] sm:text-[11px]">// {log.content}</div>
                  )}
                  {log.type === 'prompt' && (
                    <div>
                      <div className="flex items-center gap-1.5 text-emerald-400 flex-wrap">
                        <span className="text-cyan-400 font-bold">vasanth@data-lake</span>
                        <span className="text-slate-500">:</span>
                        <span className="text-purple-400">~$</span>
                        <span className="text-white font-semibold">{log.command}</span>
                      </div>
                      {log.output && (
                        <pre className="mt-1.5 text-slate-300 text-[10px] sm:text-[11px] leading-relaxed whitespace-pre-wrap pl-2.5 sm:pl-3 border-l-2 border-emerald-500/30 overflow-x-auto">
                          {log.output}
                        </pre>
                      )}
                    </div>
                  )}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Command Presets Toolbar with 44px touch height */}
            <div className="px-2.5 sm:px-3 py-2 bg-[#0b0f19] border-t border-emerald-500/10 flex items-center gap-1.5 overflow-x-auto no-scrollbar min-h-[44px]">
              <span className="text-[10px] text-slate-500 font-mono uppercase mr-1 shrink-0">Presets:</span>
              {['help', 'cat bio', 'run pipeline', 'skills', 'contact', 'clear'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => runCommand(cmd)}
                  className="px-2.5 py-1.5 min-h-[36px] rounded bg-white/5 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-300 text-[11px] font-mono border border-white/5 transition-all whitespace-nowrap cursor-pointer flex items-center justify-center shrink-0"
                >
                  ${cmd}
                </button>
              ))}
            </div>

            {/* Terminal Input Form */}
            <form onSubmit={handleSubmit} className="p-2 sm:p-2.5 bg-[#070a10] border-t border-emerald-500/10 flex items-center gap-2 font-mono text-xs min-h-[44px]">
              <span className="text-emerald-400 font-bold">$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="Type command..."
                className="flex-1 bg-transparent border-none text-white focus:outline-none placeholder-slate-600 text-[12px]"
              />
              <button type="submit" className="p-2 text-slate-500 hover:text-emerald-400 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center">
                <ChevronRight size={18} />
              </button>
            </form>

          </div>
        </div>

      </div>
    </section>
  )
}
