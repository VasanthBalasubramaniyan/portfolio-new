import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Education() {
  const [headerRef, isHeaderVisible] = useScrollAnimation(0.2);
  const [contentRef, isContentVisible] = useScrollAnimation(0.1);

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
    <section id="education" className="py-24 px-4 bg-dots-pattern text-[#212121] relative border-t border-gray-200">
      <div className="container">
        
        <div 
          ref={headerRef}
          className={`fade-in-up text-center mb-16 ${isHeaderVisible ? 'visible' : ''}`}
        >
          <h1 className="text-4xl font-bold inline-block relative text-[#0A1628]">
            Education
            <span className="absolute bottom-[-10px] left-1/4 w-1/2 h-[4px] bg-[#00BCD4]"></span>
          </h1>
        </div>

        <div 
          ref={contentRef}
          className={`max-w-4xl mx-auto flex flex-col gap-8 ${isContentVisible ? 'visible' : ''}`}
        >
          {educationList.map((edu, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-md border border-gray-100 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover-lift fade-in-up stagger-${(index % 3) + 1} ${isContentVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-[#E0F7FA] rounded-full flex items-center justify-center text-3xl flex-shrink-0 shadow-sm border border-[#00BCD4]">
                  {edu.icon ? edu.icon : "📚"}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#0A1628] mb-1">
                    {edu.degree || edu.level}
                  </h2>
                  <p className="text-lg font-medium text-[#1E3A5F]">
                    {edu.institution}
                  </p>
                  <div className="flex gap-4 mt-2">
                    <span className="bg-gray-100 px-3 py-1 rounded-md text-sm font-semibold text-[#424242]">
                      Score: {edu.score}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="md:text-right mt-4 md:mt-0 flex-shrink-0">
                <span className="bg-[#00BCD4] text-white px-4 py-2 rounded-full font-bold text-sm shadow-sm inline-block">
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
