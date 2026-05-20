import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Education() {
  const [headerRef, isHeaderVisible] = useScrollAnimation(0.2);
  const [contentRef, isContentVisible] = useScrollAnimation(0.15);

  const educationList = [
    {
      degree: "Bachelor of Engineering — Computer Science & Engineering",
      institution: "Nehru Institute of Engineering and Technology",
      score: "7.6 CGPA",
      year: "2019 – 2023",
      icon: "🎓"
    },
    {
      level: "Higher Secondary (HSC)",
      institution: "SDA Matric Hr. Sec. School",
      score: "66%",
      year: "2018 – 2019"
    },
    {
      level: "Secondary (SSLC)",
      institution: "SDA Matric Hr. Sec. School",
      score: "92%",
      year: "2016 – 2017"
    }
  ];

  return (
    <section id="education" className="py-28 px-4 bg-dots-pattern bg-[var(--bg-color)] text-[var(--text-color)] relative transition-colors duration-350 border-t border-[var(--surface-border)]">
      
      {/* Background glowing mesh orb */}
      <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-[rgba(16,185,129,0.03)] rounded-full blur-[110px] pointer-events-none"></div>

      <div className="container">
        
        <div 
          ref={headerRef}
          className={`fade-in-up text-center mb-20 ${isHeaderVisible ? 'visible' : ''}`}
        >
          <h1 className="text-4xl font-extrabold glowing-title-center text-[var(--text-color)]">
            Education
          </h1>
        </div>

        <div 
          ref={contentRef}
          className={`max-w-4xl mx-auto flex flex-col gap-8 ${isContentVisible ? 'visible' : ''}`}
        >
          {educationList.map((edu, index) => (
            <div 
              key={index}
              className={`glass-card rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 fade-in-up delay-${(index * 100) + 100} ${
                isContentVisible ? 'visible' : ''
              }`}
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-[var(--accent-bg-soft)] rounded-xl flex items-center justify-center text-2xl flex-shrink-0 shadow-sm border border-[rgba(16,185,129,0.22)] text-[var(--accent-color)]">
                  {edu.icon ? edu.icon : "📚"}
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-black text-[var(--text-color)] mb-1">
                    {edu.degree || edu.level}
                  </h2>
                  <p className="text-[16px] md:text-lg font-bold text-[var(--accent-color)]">
                    {edu.institution}
                  </p>
                  <div className="flex gap-4 mt-3">
                    <span className="bg-[var(--surface-color)] border border-[var(--surface-border)] px-3 py-1.5 rounded-lg text-sm font-bold text-[var(--text-secondary)] shadow-sm">
                      Score: {edu.score}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="md:text-right mt-4 md:mt-0 flex-shrink-0 self-start md:self-auto">
                <span className="bg-[var(--accent-bg-soft)] border border-[rgba(16,185,129,0.25)] text-[var(--accent-color)] px-4.5 py-2 rounded-xl font-bold text-sm shadow-sm inline-block font-mono">
                  {edu.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
