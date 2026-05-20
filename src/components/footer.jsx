export default function Footer() {
  return (
    <>
      <footer id="contact" className="bg-[#030712] border-t-4 border-[var(--accent-color)] pt-[70px] pb-[40px] text-white relative z-10 font-sans transition-colors duration-350">
        
        {/* Soft green glow in footer */}
        <div className="absolute top-[20%] left-[30%] w-96 h-96 bg-[rgba(16,185,129,0.02)] rounded-full blur-[140px] pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* COLUMN 1 — Brand & Identity */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-[24px] font-black tracking-widest text-[var(--accent-color)] mb-1">VASANTH B</h3>
              <p className="text-[14px] text-gray-400 mb-2 font-medium">Data Engineer | ETL | AWS</p>
              <p className="text-[13px] italic text-gray-500 mt-2 leading-relaxed font-mono">
                Building scalable data pipelines,<br/>one batch at a time.
              </p>
              <div className="mt-[24px]">
                <p className="text-[12px] text-gray-500 font-mono">
                  &copy; 2026 Vasanth B. All rights reserved.
                </p>
              </div>
            </div>

            {/* COLUMN 2 — Quick Links */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-[16px] font-bold text-[#FFFFFF] pb-2 mb-6 border-b-2 border-[var(--accent-color)] w-[40px]">Quick Links</h4>
              <ul className="flex flex-col gap-[10px]">
                {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Certifications', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-gray-400 text-[14px] hover:text-[var(--accent-color)] hover:translate-x-1.5 inline-block transition-all duration-200 ease-in-out">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 3 — Contact Info */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-[16px] font-bold text-[#FFFFFF] pb-2 mb-6 border-b-2 border-[var(--accent-color)] w-[40px]">Contact</h4>
              <ul className="flex flex-col gap-[12px]">
                <li>
                  <a href="mailto:get.vasanthb.be@gmail.com" className="flex items-center gap-3 group">
                    <span className="text-[var(--accent-color)] text-lg">📧</span>
                    <span className="text-gray-400 text-[14px] group-hover:text-[var(--accent-color)] transition-colors duration-200">get.vasanthb.be@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+918248347763" className="flex items-center gap-3 group">
                    <span className="text-[var(--accent-color)] text-lg">📞</span>
                    <span className="text-gray-400 text-[14px] group-hover:text-[var(--accent-color)] transition-colors duration-200">+91 8248347763</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-3">
                    <span className="text-[var(--accent-color)] text-lg">📍</span>
                    <span className="text-gray-400 text-[14px]">Tamil Nadu, India</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* COLUMN 4 — Connect */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-[16px] font-bold text-[#FFFFFF] pb-2 mb-6 border-b-2 border-[var(--accent-color)] w-[40px]">Connect</h4>
              <div className="flex gap-[12px] mb-4">
                <a 
                  href="https://www.linkedin.com/in/vasanthbalasubramaniyan/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-[44px] h-[44px] bg-[#111827] border border-[rgba(16,185,129,0.18)] rounded-xl flex items-center justify-center text-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:text-white hover:shadow-[0_0_12px_rgba(16,185,129,0.4)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
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
                  className="w-[44px] h-[44px] bg-[#111827] border border-[rgba(16,185,129,0.18)] rounded-xl flex items-center justify-center text-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:text-white hover:shadow-[0_0_12px_rgba(16,185,129,0.4)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  title="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="mailto:get.vasanthb.be@gmail.com" 
                  className="w-[44px] h-[44px] bg-[#111827] border border-[rgba(16,185,129,0.18)] rounded-xl flex items-center justify-center text-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:text-white hover:shadow-[0_0_12px_rgba(16,185,129,0.4)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  title="Email"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
              <p className="text-[13px] italic text-[var(--accent-color)] font-mono">
                Made with 💚
              </p>
            </div>
          </div>
        </div>
        
        {/* FOOTER BOTTOM BAR */}
        <div className="mt-[40px] border-t border-gray-800 pt-[16px] relative z-10">
          <div className="container mx-auto px-4 text-center">
            <p className="text-[12px] text-gray-500 font-mono">
              Designed & Built by Vasanth B — Data Engineer | Tamil Nadu, India
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
