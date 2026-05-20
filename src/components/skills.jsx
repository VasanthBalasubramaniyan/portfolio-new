import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Skills() {
  const [headerRef, isHeaderVisible] = useScrollAnimation(0.2);
  const [cardsRef, isCardsVisible] = useScrollAnimation(0.15);

  const categories = [
    {
      title: "Programming Languages",
      items: ["Python", "SQL"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>
      )
    },
    {
      title: "Big Data Stack",
      items: ["Apache Spark (PySpark)", "Spark SQL", "Hive", "Sqoop", "Hadoop (Basics)", "HDFS"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
        </svg>
      )
    },
    {
      title: "Cloud — AWS Services",
      items: ["EC2", "S3 Storage", "IAM Roles", "VPC Networking"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
        </svg>
      )
    },
    {
      title: "Data Engineering core",
      items: ["ETL Pipelines", "Batch Processing", "Data Transformation", "Data Cleaning", "Data Modeling", "Data Warehousing"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
        </svg>
      )
    },
    {
      title: "Databases & Libraries",
      items: ["MySQL", "Pandas", "NumPy", "Git Versioning", "TablePlus", "Jira"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
      )
    },
    {
      title: "Collaborative soft skills",
      items: ["Problem-Solving", "Analytical Thinking", "Adaptability", "Team Collaboration", "Time Management"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
        </svg>
      )
    }
  ];

  return (
    <section id="skills" className="py-28 px-4 bg-dots-pattern bg-[var(--bg-color)] relative text-[var(--text-color)] transition-colors duration-350 border-b border-[var(--surface-border)]">
      
      {/* Soft neon orbs in background */}
      <div className="absolute top-[30%] left-[10%] w-72 h-72 bg-[rgba(16,185,129,0.03)] rounded-full blur-[110px] pointer-events-none"></div>

      <div className="container">
        
        <div 
          ref={headerRef}
          className={`fade-in-up text-center mb-20 ${isHeaderVisible ? 'visible' : ''}`}
        >
          <h1 className="text-4xl font-extrabold glowing-title-center text-[var(--text-color)]">
            Technical Expertise
          </h1>
        </div>

        <div 
          ref={cardsRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${isCardsVisible ? 'visible' : ''}`}
        >
          {categories.map((category, index) => (
            <div 
              key={category.title}
              className={`glass-card rounded-2xl p-8 fade-in-up delay-${(index * 80) + 100} ${
                isCardsVisible ? 'visible' : ''
              }`}
            >
              <div className="flex items-center gap-4 mb-6 border-b border-[var(--surface-border)] pb-4.5">
                <div className="p-3 bg-[var(--accent-bg-soft)] text-[var(--accent-color)] border border-[rgba(16,185,129,0.18)] rounded-xl shadow-sm">
                  {category.icon}
                </div>
                <h2 className="text-[17px] font-black text-[var(--text-color)] tracking-wide uppercase leading-tight">{category.title}</h2>
              </div>
              
              <div className="flex flex-wrap gap-2.5">
                {category.items.map((item, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-2 bg-[var(--surface-color)] text-[var(--text-secondary)] border border-[var(--surface-border)] rounded-xl text-[14px] font-semibold hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] hover:bg-[var(--accent-bg-soft)] hover:shadow-[0_0_12px_rgba(16,185,129,0.15)] transition-all duration-300 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
