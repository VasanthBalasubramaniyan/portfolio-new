import { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Dynamic background Spark job log simulator for Data Engineer flavor
const SparkTerminalLog = () => {
  const [logs, setLogs] = useState([]);
  const [index, setIndex] = useState(0);

  const logSequence = [
    "[INFO] SparkSession successfully initialized on cluster.",
    "[CONN] Sqoop increment connector triggered for 'orders_db'.",
    "[SQOOP] Ingestion: SQL Server -> HDFS raw directories (100% complete).",
    "[SPARK] RDD loaded: raw partition path '/user/hive/warehouse/raw'.",
    "[SPARK] Executing transformations: Clean nulls, cast datatypes.",
    "[SPARK] Spark SQL joining raw records with dimension tables.",
    "[SPARK] Analytical DataFrame partitioned by Date & Location.",
    "[HIVE] Bulk loading partitioned parquet into Hive database.",
    "[SUCCESS] Batch ETL executed. Task sleeping. Next execution in 6h.",
  ];

  useEffect(() => {
    // Prime initial log
    if (logs.length === 0) {
      setLogs([logSequence[0]]);
      setIndex(1);
      return;
    }

    const interval = setInterval(() => {
      setLogs((prev) => {
        const next = [...prev, logSequence[index]];
        if (next.length > 4) {
          next.shift(); // keep it compact
        }
        return next;
      });
      setIndex((prevIndex) => (prevIndex + 1) % logSequence.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [index, logs]);

  return (
    <div className="mock-terminal mt-5 p-4 text-[12.5px] font-mono bg-[#0d1117]/95 border border-[rgba(16,185,129,0.2)] rounded-xl shadow-md">
      <div className="mock-terminal-header border-b border-white/5 pb-2 mb-3">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]"></span>
          <span className="text-[11px] text-gray-500 ml-2 font-semibold">etl_daemon.sh</span>
        </div>
      </div>
      <div className="space-y-1.5 min-h-[96px] flex flex-col justify-end">
        {logs.map((log, idx) => (
          <div key={idx} className="flex gap-2 leading-tight">
            <span className="text-[#34d399] font-bold">~</span>
            <span className={idx === logs.length - 1 ? "text-[#ffffff] font-semibold" : "text-emerald-400/70"}>
              {log}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Projects() {
  const [headerRef, isHeaderVisible] = useScrollAnimation(0.2);
  const [cardsRef, isCardsVisible] = useScrollAnimation(0.15);

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
      demoLink: null,
      hasTerminal: true
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
      demoLink: "https://vasanth-portfolio-xtjc.onrender.com/",
      hasTerminal: false
    }
  ];

  return (
    <div id="projects" className="py-28 px-4 bg-dots-pattern bg-[var(--bg-color)] relative overflow-hidden transition-colors duration-350 border-b border-[var(--surface-border)]">
      
      {/* Decorative background orbs for projects */}
      <div className="absolute top-[20%] left-[5%] w-72 h-72 bg-[rgba(16,185,129,0.03)] rounded-full blur-[110px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[5%] w-80 h-80 bg-[rgba(16,185,129,0.04)] rounded-full blur-[130px] pointer-events-none"></div>

      <div className="container relative z-10">
        
        <div
          ref={headerRef}
          className={`fade-in-up text-center mb-20 ${isHeaderVisible ? 'visible' : ''}`}
        >
          <h1 className="text-4xl font-extrabold glowing-title-center text-[var(--text-color)]">
            Featured Projects
          </h1>
        </div>

        <div
          ref={cardsRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 ${isCardsVisible ? 'visible' : ''}`}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl flex flex-col p-8 fade-in-up delay-${(index * 100) + 100} ${
                isCardsVisible ? 'visible' : ''
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-extrabold text-[var(--text-color)] pr-4 leading-snug">
                  {project.title}
                </h2>
                <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wide border bg-[var(--accent-bg-soft)] border-[rgba(16,185,129,0.25)] text-[var(--accent-text)] whitespace-nowrap shadow-sm">
                  {project.status}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="badge-neon px-3 py-1 rounded-lg text-xs tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-[15.5px] text-[var(--text-secondary)] leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="mb-6 flex-grow">
                <h4 className="text-[var(--accent-color)] font-bold mb-3 uppercase tracking-wider text-xs font-mono">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[var(--text-secondary)]">
                      <span className="text-[var(--accent-color)] mt-0.5 font-bold">▹</span>
                      <span className="text-[14.5px]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Spark log terminal insertion if the project has it */}
              {project.hasTerminal && <SparkTerminalLog />}

              <div className="flex flex-wrap gap-4 mt-8 border-t border-[var(--surface-border)] pt-6">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-glowing-green px-6 py-2.5 rounded-lg font-bold text-sm tracking-wide flex items-center gap-2 shadow-sm cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>

                {project.demoLink && (
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-outline-green px-6 py-2.5 rounded-lg font-bold text-sm tracking-wide flex items-center gap-2 cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
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
