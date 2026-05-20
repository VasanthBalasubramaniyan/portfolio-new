import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Experience() {
  const [headerRef, isHeaderVisible] = useScrollAnimation(0.2);
  const [contentRef, isContentVisible] = useScrollAnimation(0.2);

  const experiences = [
    {
      title: "AWS Cloud App Developer Intern (TN Skills)",
      company: "Scope Tech Software Solutions",
      location: "Madurai, Tamil Nadu, India",
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
    <section id="experience" className="py-28 px-4 bg-[var(--bg-color)] text-[var(--text-color)] relative transition-colors duration-350 border-b border-[var(--surface-border)]">
      
      {/* Decorative ambient spot for experience */}
      <div className="absolute bottom-[10%] left-[5%] w-80 h-80 bg-[rgba(16,185,129,0.03)] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container">
        
        <div 
          ref={headerRef}
          className={`fade-in-up text-center mb-20 ${isHeaderVisible ? 'visible' : ''}`}
        >
          <h1 className="text-4xl font-extrabold glowing-title-center text-[var(--text-color)]">
            Professional Journey
          </h1>
        </div>

        <div className="max-w-4xl mx-auto relative pl-10 md:pl-14 timeline-track">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              ref={contentRef}
              className={`relative glass-card rounded-2xl p-8 fade-in-up mb-12 last:mb-0 ${isContentVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              {/* Glowing Green Dot on Timeline Pipeline */}
              <div className="absolute left-[-49px] md:left-[-65px] top-10 w-5 h-5 bg-[#10b981] rounded-full timeline-dot z-10 border-[3.5px] border-[var(--bg-color)]"></div>

              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-6">
                
                {/* Visual Company Icon Badge */}
                <div className="w-14 h-14 bg-[var(--surface-color)] rounded-2xl border border-[rgba(16,185,129,0.25)] flex items-center justify-center flex-shrink-0 text-[var(--accent-color)] shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                  </svg>
                </div>
                
                <div className="flex-1 w-full flex flex-col md:flex-row md:justify-between md:items-center gap-4 border-b border-[var(--surface-border)] pb-5">
                  <div>
                    <h2 className="text-2xl font-black text-[var(--text-color)] leading-tight">{exp.title}</h2>
                    <h3 className="text-[17px] font-semibold text-[var(--accent-color)] mt-1.5 flex items-center flex-wrap gap-1.5">
                      <span>{exp.company}</span>
                      <span className="text-[var(--text-muted)] font-normal text-sm">|</span>
                      <span className="text-[var(--text-secondary)] font-medium text-[15px]">{exp.location}</span>
                    </h3>
                  </div>
                  <div className="bg-[var(--accent-bg-soft)] border border-[rgba(16,185,129,0.2)] px-4.5 py-2 rounded-xl inline-block shadow-sm flex-shrink-0 self-start md:self-auto">
                    <span className="text-[var(--accent-color)] font-bold text-[13px] tracking-wider uppercase font-mono">{exp.duration}</span>
                  </div>
                </div>
              </div>
              
              <div className="text-[var(--text-secondary)] leading-relaxed">
                <ul className="space-y-3.5">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-2.5 min-w-[7px] min-h-[7px] bg-[#10b981] rounded-full flex-shrink-0 shadow-[0_0_6px_rgba(16,185,129,0.7)]"></div>
                      <span className="text-[15.5px]">{bullet}</span>
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
