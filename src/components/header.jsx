import { useEffect, useState } from 'react';
import profileImg from '../assets/img/Me.JPG';

export default function Header({ resumeLink }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-24 pb-12 overflow-hidden bg-[var(--bg-color)] transition-colors duration-350">
      {/* Premium Floating Ambient Glowing Orbs */}
      <div className="orb-layer">
        <div className="floating-orb w-64 h-64 bg-[#10b981] top-[15%] left-[5%] animate-[float-orb_20s_infinite_ease-in-out_alternate]"></div>
        <div className="floating-orb w-80 h-80 bg-[#047857] bottom-[15%] right-[5%] animate-[float-orb_25s_infinite_ease-in-out_alternate_delay-2s]" style={{ animationDelay: '-5s' }}></div>
        <div className="floating-orb w-72 h-72 bg-[#34d399] top-[40%] left-[30%] animate-[float-orb_22s_infinite_ease-in-out_alternate_delay-4s]" style={{ animationDelay: '-12s' }}></div>
      </div>

      <div className="container relative z-10 flex flex-col md:flex-row items-center gap-12 w-full">
        
        {/* Left 40%: Profile Image */}
        <div className={`w-full md:w-[40%] flex justify-center md:justify-end transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
          <div className="relative group">
            {/* Spinning Dashed Green Border Frame */}
            <div className="absolute w-[306px] h-[306px] spin-dashed-border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            {/* Ambient shadow glow */}
            <div className="absolute w-[290px] h-[290px] rounded-full bg-gradient-to-tr from-[#10b981] to-[#34d399] opacity-20 blur-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            
            <img 
              src={profileImg} 
              alt="Vasanth B - Data Engineer" 
              className="relative z-10 w-[280px] h-[280px] rounded-full object-cover object-top border-4 border-[var(--accent-color)] shadow-[0_10px_40px_-10px_rgba(16,185,129,0.35)] transition-all duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </div>

        {/* Right 60%: Content */}
        <div className={`w-full md:w-[60%] flex flex-col items-center md:items-start text-center md:text-left transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--accent-bg-soft)] border border-[rgba(16,185,129,0.2)] text-[var(--accent-text)] text-[12px] font-bold tracking-[0.15em] uppercase mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping"></span>
            Available for Opportunities
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-[var(--text-color)] mb-4 tracking-tight leading-none">
            VASANTH B
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-[var(--accent-color)] mb-6 flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-1">
            <span>Data Engineer</span>
            <span className="text-[var(--text-muted)] font-normal text-lg hidden md:inline">|</span>
            <span className="text-[var(--text-secondary)]">ETL Pipelines</span>
            <span className="text-[var(--text-muted)] font-normal text-lg hidden md:inline">|</span>
            <span className="text-[var(--text-secondary)]">Apache Spark</span>
            <span className="text-[var(--text-muted)] font-normal text-lg hidden md:inline">|</span>
            <span className="text-[var(--text-secondary)]">AWS Cloud</span>
          </h2>
          <p className="text-[17px] text-[var(--text-secondary)] mb-8 max-w-2xl leading-relaxed">
            Aspiring Data Engineer with hands-on experience in batch ETL pipelines, Apache Spark, Hive, and AWS Cloud — passionate about building scalable data solutions and distributed systems.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
            <a 
              href="#projects" 
              className="btn-glowing-green px-8 py-3.5 rounded-lg font-bold tracking-wide flex items-center gap-2.5 transition-all shadow-md"
            >
              View My Work
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a 
              href={resumeLink} 
              download 
              className="btn-outline-green px-8 py-3.5 rounded-lg font-bold tracking-wide flex items-center gap-2.5 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download Resume
            </a>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/in/vasanthbalasubramaniyan/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-11 h-11 bg-[var(--surface-color)] border border-[var(--surface-border)] rounded-xl flex items-center justify-center text-[var(--text-color)] hover:text-white hover:bg-[var(--accent-color)] hover:border-[var(--accent-color)] hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all duration-300 cursor-pointer"
              title="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="https://github.com/VasanthBalasubramaniyan/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-11 h-11 bg-[var(--surface-color)] border border-[var(--surface-border)] rounded-xl flex items-center justify-center text-[var(--text-color)] hover:text-white hover:bg-[var(--accent-color)] hover:border-[var(--accent-color)] hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all duration-300 cursor-pointer"
              title="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="mailto:get.vasanthb.be@gmail.com" 
              className="w-11 h-11 bg-[var(--surface-color)] border border-[var(--surface-border)] rounded-xl flex items-center justify-center text-[var(--text-color)] hover:text-white hover:bg-[var(--accent-color)] hover:border-[var(--accent-color)] hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all duration-300 cursor-pointer"
              title="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <a href="#about" aria-label="Scroll to About section" className="text-[var(--accent-color)] hover:text-[var(--text-color)] transition-colors block animate-bounce-down cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
