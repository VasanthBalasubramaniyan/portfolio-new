import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Experience() {
  const [headerRef, isHeaderVisible] = useScrollAnimation(0.2);
  const [contentRef, isContentVisible] = useScrollAnimation(0.3);

  const experiences = [
    {
      title: "AWS Cloud App Developer Intern (TN Skills)",
      company: "Scope Tech Software Solutions",
      location: "Madurai,Tamil Nadu, India",
      duration: "Jan 2026 – Present",
      bullets: [
        "Configured and managed AWS services (EC2, S3, IAM, VPC) for cloud-based environments, improving deployment efficiency by ~30%",
        "Implemented secure access control using IAM roles and policies to enforce least-privilege security standards",
        "Designed and configured VPC architecture including subnets and networking components for isolated environments",
        "Deployed and tested cloud resources, reducing manual configuration effort by ~25%"
      ]
    },
    {
      title: "Customer Support Executive",
      company: "Troika Research Technologies",
      location: "Coimbatore, Tamil Nadu, India",
      duration: "Jan 2024 – Sept 2025",
      bullets: [
        "Handled high-volume outbound calls, effectively communicating with clients and resolving queries",
        "Maintained consistent call quality and professionalism across all customer interactions",
        "Developed strong communication, active listening, and problem-solving skills in a fast-paced environment",
        "Collaborated with team members to meet daily outbound call targets and performance goals"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-navy-gradient text-[#212121] relative border-b border-gray-200">
      <div className="container">
        
        <div 
          ref={headerRef}
          className={`fade-in-up text-center mb-16 ${isHeaderVisible ? 'visible' : ''}`}
        >
          <h1 className="text-4xl font-bold inline-block relative text-[#0A1628]">
            Professional Journey
            <span className="absolute bottom-[-10px] left-1/4 w-1/2 h-[4px] bg-[#00BCD4]"></span>
          </h1>
        </div>

        <div className="max-w-4xl mx-auto relative pl-8 md:pl-12 timeline-line">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              ref={contentRef}
              className={`relative bg-white rounded-xl p-8 shadow-md border border-gray-100 transition-all hover-lift duration-300 fade-in-up mb-12 last:mb-0 ${isContentVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              {/* Teal Dot on Timeline */}
              <div className="absolute left-[-32px] md:left-[-48px] top-10 w-4 h-4 bg-[#00BCD4] rounded-full shadow-[0_0_8px_rgba(0,188,212,0.6)] z-10 translate-x-[-1.5px]"></div>

              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-6">
                {/* Logo Placeholder */}
                <div className="w-16 h-16 bg-[#F5F5F5] rounded-full border-2 border-[#00BCD4] flex items-center justify-center flex-shrink-0 text-[#9E9E9E]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                  </svg>
                </div>
                
                <div className="flex-1 w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 border-b border-gray-100 pb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-[#0A1628]">{exp.title}</h2>
                    <h3 className="text-lg font-medium text-[#1E3A5F] mt-1">
                      {exp.company} <span className="text-[#9E9E9E]">| {exp.location}</span>
                    </h3>
                  </div>
                  <div className="bg-[#E0F7FA] px-4 py-1.5 rounded-full inline-block">
                    <span className="text-[#00838F] font-bold text-sm tracking-wide">{exp.duration}</span>
                  </div>
                </div>
              </div>
              
              <div className="text-[#424242] leading-relaxed">
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-2 min-w-[8px] min-h-[8px] bg-[#00BCD4] rounded-full flex-shrink-0"></div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
