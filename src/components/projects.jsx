import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Projects() {
  const [headerRef, isHeaderVisible] = useScrollAnimation(0.2);
  const [cardsRef, isCardsVisible] = useScrollAnimation(0.1);

  const projects = [
    {
      title: "Batch ETL Pipeline using Sqoop, Hive & Apache Spark",
      status: "🚧 In Development",
      tags: ["MySQL", "Sqoop", "HDFS", "Hive", "Apache Spark", "PySpark", "Spark SQL", "Cron"],
      description: "End-to-end batch ETL pipeline that incrementally ingests data from MySQL into HDFS via Sqoop, processes it with PySpark and Spark SQL, and stores results in Hive for analytical querying — simulating real-world batch data processing systems.",
      features: [
        "Incremental data ingestion from MySQL → HDFS using Sqoop",
        "Hive external tables for managing and querying raw data",
        "PySpark transformations: filtering, aggregation, business logic",
        "Automated pipeline execution via Cron scheduling"
      ],
      githubLink: "https://github.com/VasanthBalasubramaniyan/",
      demoLink: null
    },
    {
      title: "Personal Portfolio Website",
      status: "✅ Live",
      tags: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React.js"],
      description: "A clean, modern, responsive portfolio website built with React.js and Tailwind CSS to showcase data engineering projects, technical skills, and professional experience — with reusable components and optimized performance.",
      features: [
        "Fully responsive design across all device sizes",
        "Reusable React components for scalability",
        "Dynamic project sections with smooth navigation",
        "Performance-optimized static deployment"
      ],
      githubLink: "https://github.com/VasanthBalasubramaniyan/portfolio-new",
      demoLink: "https://vasanth-portfolio-xtjc.onrender.com/"
    }
  ];

  return (
    <div id="projects" className="py-24 px-4 bg-oceanic-gradient relative overflow-hidden">
      {/* Background Particles Layer */}
      <div className="particles-layer">
        <div className="absolute top-[10%] left-[5%] w-2 h-2 bg-[#00BCD4] rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute top-[30%] right-[15%] w-3 h-3 bg-[#4DD0E1] rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-[20%] left-[20%] w-2 h-2 bg-[#80DEEA] rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[60%] right-[5%] w-4 h-4 bg-[#00BCD4] rounded-full opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container relative z-10">
        <div
          ref={headerRef}
          className={`fade-in-up text-center mb-16 ${isHeaderVisible ? 'visible' : ''}`}
        >
          <h1 className="text-4xl font-bold text-[#FFFFFF] inline-block relative">
            Featured Projects
            <span className="absolute bottom-[-10px] left-1/4 w-1/2 h-[3px] bg-[#00BCD4]"></span>
          </h1>
        </div>

        <div
          ref={cardsRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-10 ${isCardsVisible ? 'visible' : ''}`}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`glass-panel rounded-xl flex flex-col p-8 hover-lift scale-in stagger-${(index % 4) + 1} ${isCardsVisible ? 'visible' : ''
                }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-2xl font-bold text-[#FFFFFF] pr-4">
                  {project.title}
                </h2>
                <span className="px-3 py-1 bg-[rgba(255,255,255,0.1)] text-white text-xs font-bold rounded-full whitespace-nowrap">
                  {project.status}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-[rgba(255,255,255,0.1)] text-[#80DEEA] text-xs font-semibold rounded-full border border-[rgba(0,188,212,0.3)] tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-[#F5F5F5] leading-relaxed mb-6 text-lg">
                {project.description}
              </p>

              <div className="mb-8 flex-grow">
                <h4 className="text-[#00BCD4] font-semibold mb-3 uppercase tracking-wider text-sm">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[#9E9E9E]">
                      <span className="text-[#4DD0E1] mt-1">▹</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-4 mt-auto border-t border-[rgba(255,255,255,0.1)] pt-6">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-2 rounded-md font-bold text-sm tracking-wide flex items-center gap-2 ripple-effect">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>

                {project.demoLink && (
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn-outline px-6 py-2 rounded-md font-bold text-sm tracking-wide flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
