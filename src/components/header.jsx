import { useEffect, useState } from 'react';
import profileImg from '../assets/img/Me.JPG';

export default function Header({ resumeLink }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-20 pb-10 overflow-hidden bg-[#0A1628]">
      {/* Background Particles Layer */}
      <div className="particles-layer">
        <div className="absolute top-[20%] left-[10%] w-32 h-32 bg-[#00BCD4] rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute bottom-[20%] right-[10%] w-48 h-48 bg-[#4DD0E1] rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute top-[50%] left-[50%] w-64 h-64 bg-[#1E3A5F] rounded-full blur-[150px] opacity-40"></div>
      </div>

      <div className="container relative z-10 flex flex-col md:flex-row items-center gap-12 w-full">
        
        {/* Left 40%: Profile Image */}
        <div className={`w-full md:w-[40%] flex justify-center md:justify-end transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
          <div style={{ position: 'relative', display: 'inline-block' }} className="group">
            <div className="absolute inset-0 border-2 border-dashed border-[#4DD0E1] rounded-full p-2 animate-[spin_12s_linear_infinite]" style={{ margin: '-12px' }}></div>
            <img 
              src={profileImg} 
              alt="Vasanth B - Data Engineer" 
              style={{
                width: '280px',
                height: '280px',
                borderRadius: '50%',
                objectFit: 'cover',
                objectPosition: 'center top',
                border: '4px solid #00BCD4',
                boxShadow: '0 0 30px rgba(0, 188, 212, 0.5)',
              }}
            />
          </div>
        </div>

        {/* Right 60%: Content */}
        <div className={`w-full md:w-[60%] flex flex-col items-center md:items-start text-center md:text-left transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
            VASANTH B
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-[#4DD0E1] mb-6">
            Data Engineer | ETL Pipelines | Apache Spark | AWS Cloud
          </h2>
          <p className="text-lg text-[#B0BEC5] mb-8 max-w-2xl leading-relaxed">
            Aspiring Data Engineer with hands-on experience in batch ETL pipelines, Apache Spark, Hive, and AWS Cloud — passionate about building scalable data solutions and distributed systems.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
            <a 
              href="#projects" 
              className="bg-[#00BCD4] hover:bg-[#4DD0E1] text-[#FFFFFF] px-8 py-3 rounded-md font-bold tracking-wide transition-colors flex items-center gap-2"
            >
              View My Work
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a 
              href={resumeLink} 
              download 
              className="border-2 border-[#00BCD4] text-[#00BCD4] hover:bg-[#00BCD4] hover:text-[#FFFFFF] bg-transparent px-8 py-3 rounded-md font-bold tracking-wide transition-colors flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download Resume
            </a>
          </div>

          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/vasanthbalasubramaniyan/" target="_blank" rel="noopener noreferrer" className="text-[#9E9E9E] hover:text-[#00BCD4] transition-colors transform hover:scale-110">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://github.com/VasanthBalasubramaniyan/" target="_blank" rel="noopener noreferrer" className="text-[#9E9E9E] hover:text-[#00BCD4] transition-colors transform hover:scale-110">
              <span className="sr-only">GitHub</span>
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="mailto:get.vasanthb.be@gmail.com" className="text-[#9E9E9E] hover:text-[#00BCD4] transition-colors transform hover:scale-110">
              <span className="sr-only">Email</span>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <a href="#about" aria-label="Scroll to About section" className="text-[#4DD0E1] hover:text-[#FFFFFF] transition-colors block animate-bounce-down">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25h-15m15 6h-15m15 6h-15" opacity="0.3"/>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
