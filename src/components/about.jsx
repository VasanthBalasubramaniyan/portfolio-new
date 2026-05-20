import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const [sectionRef, isSectionVisible] = useScrollAnimation(0.15);

  const highlights = [
    {
      title: "ETL Pipeline Development",
      desc: "Incremental batch ingestion with Sqoop, Hive, and Apache Spark.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      )
    },
    {
      title: "Python & Advanced SQL",
      desc: "Robust data transformation, cleaning, CTEs, and aggregation modeling.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      )
    },
    {
      title: "AWS Cloud Infrastructure",
      desc: "Configuring EC2, S3 buckets, IAM roles, and secure VPC subnets.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.333-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
        </svg>
      )
    },
    {
      title: "Big Data & Storage",
      desc: "Harnessing HDFS cluster storage, PySpark, and Spark SQL pipelines.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>
      )
    },
    {
      title: "Data Warehousing",
      desc: "Designing clean relational databases, schemas, and mysql storage.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
      )
    },
    {
      title: "Workflow Automation",
      desc: "Integrating Cron scheduling, Git tracking, TablePlus, and Jira workflows.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A1.79 1.79 0 0020 18.25l-5.83-5.83M11.42 15.17l2.42-2.42M11.42 15.17L3 6.75M13.84 12.75l2.42-2.42m0 0L20 6.75M16.26 10.33L18.25 3A1.79 1.79 0 0015.25 0l-7.33 2m8.34 8.33l-2.42 2.42" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="py-28 px-4 bg-dots-pattern bg-[var(--bg-color)] text-[var(--text-color)] relative transition-colors duration-350 border-t border-[var(--surface-border)]">
      
      {/* Subtle decorative mesh orbs in About */}
      <div className="absolute top-[30%] right-[10%] w-72 h-72 bg-[rgba(16,185,129,0.04)] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container" ref={sectionRef}>
        
        <div className={`fade-in-up mb-16 text-center md:text-left ${isSectionVisible ? 'visible' : ''}`}>
          <h1 className="text-4xl font-extrabold glowing-title text-[var(--text-color)]">
            About Me
          </h1>
        </div>

        <div className={`flex flex-col lg:flex-row gap-12 items-center mb-16 fade-in-up delay-100 ${isSectionVisible ? 'visible' : ''}`}>
          
          {/* Left Column: Summary */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 text-[var(--text-color)] leading-tight">
              Engineering efficient data pipelines and secure cloud environments.
            </h2>
            <p className="text-[17px] leading-relaxed mb-6 text-[var(--text-secondary)]">
              I'm Vasanth B, a Data Engineer with hands-on experience in SQL, Python, and AWS. I specialize in building batch ETL pipelines using Sqoop, Hive, and Apache Spark, focusing on transforming raw datasets into structured, highly queryable resources.
            </p>
            <p className="text-[17px] leading-relaxed mb-8 text-[var(--text-secondary)]">
              Currently, I am deepening my practical expertise through an AWS Cloud Developer Internship at Scope Tech Software Solutions, configuring and deploying secure, isolated cloud architectures with EC2, S3, IAM, and custom VPC settings.
            </p>
            
            <div className="inline-flex items-center gap-3.5 bg-[var(--accent-bg-soft)] text-[var(--accent-text)] px-6 py-3 rounded-2xl shadow-sm border border-[rgba(16,185,129,0.2)] self-start font-semibold text-[15px]">
              <span className="text-xl">📍</span>
              <span>Tamil Nadu, India | Open to Remote & Relocation</span>
            </div>
          </div>

          {/* Right Column: Animated ETL Pipeline Visualizer */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-[500px] bg-[var(--surface-color)] backdrop-blur-md border border-[var(--surface-border)] rounded-2xl p-6 shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#10b981] to-[#34d399]"></div>
              
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-[15px] uppercase tracking-wider text-[var(--accent-color)]">Interactive ETL Flow</h3>
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-[rgba(16,185,129,0.1)] text-[var(--accent-color)] border border-[rgba(16,185,129,0.2)] font-mono animate-pulse">
                  Status: Pipeline Active
                </span>
              </div>

              {/* ETL Interactive Pipeline SVG */}
              <svg className="w-full h-auto py-2" viewBox="0 0 420 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Connecting pipeline lines */}
                <path d="M70 90H350" stroke="var(--surface-border)" strokeWidth="4" strokeLinecap="round" />
                <path d="M70 90H350" className="pipeline-dash-flow stroke-[#10b981]" strokeWidth="3" strokeLinecap="round" />

                {/* Node 1: MySQL */}
                <g className="pipeline-node cursor-pointer">
                  <circle cx="70" cy="90" r="28" fill="var(--bg-color)" stroke="var(--accent-color)" strokeWidth="3.5" />
                  <circle cx="70" cy="90" r="34" className="pipeline-pulse-circle stroke-[#10b981]" strokeWidth="1" fill="none" />
                  <text x="70" y="86" fill="var(--text-color)" fontSize="9" fontWeight="bold" textAnchor="middle">MySQL</text>
                  <text x="70" y="99" fill="var(--accent-color)" fontSize="8" fontWeight="bold" textAnchor="middle">Source</text>
                  <title>Relational Database holding transactional operational records</title>
                </g>

                {/* Node 2: Sqoop */}
                <g className="pipeline-node cursor-pointer">
                  <circle cx="160" cy="90" r="28" fill="var(--bg-color)" stroke="var(--accent-color)" strokeWidth="3.5" />
                  <text x="160" y="86" fill="var(--text-color)" fontSize="9" fontWeight="bold" textAnchor="middle">Sqoop</text>
                  <text x="160" y="99" fill="var(--text-muted)" fontSize="8" fontWeight="bold" textAnchor="middle">Ingest</text>
                  <title>Apache Sqoop transferring bulk data incrementally into HDFS storage</title>
                </g>

                {/* Node 3: Spark */}
                <g className="pipeline-node cursor-pointer">
                  <circle cx="260" cy="90" r="28" fill="var(--bg-color)" stroke="var(--accent-color)" strokeWidth="3.5" />
                  <circle cx="260" cy="90" r="34" className="pipeline-pulse-circle stroke-[#10b981]" strokeWidth="1" fill="none" style={{ animationDelay: '0.7s' }} />
                  <text x="260" y="86" fill="var(--text-color)" fontSize="9" fontWeight="bold" textAnchor="middle">Spark</text>
                  <text x="260" y="99" fill="var(--accent-color)" fontSize="8" fontWeight="bold" textAnchor="middle">Process</text>
                  <title>PySpark engine performing heavy aggregations and data cleansing</title>
                </g>

                {/* Node 4: Hive */}
                <g className="pipeline-node cursor-pointer">
                  <circle cx="350" cy="90" r="28" fill="var(--bg-color)" stroke="var(--accent-color)" strokeWidth="3.5" />
                  <text x="350" y="86" fill="var(--text-color)" fontSize="9" fontWeight="bold" textAnchor="middle">Hive</text>
                  <text x="350" y="99" fill="var(--text-muted)" fontSize="8" fontWeight="bold" textAnchor="middle">Warehouse</text>
                  <title>Apache Hive storing processed analytical summaries for querying</title>
                </g>
              </svg>

              <div className="mt-4 pt-4 border-t border-[var(--surface-border)]/50">
                <div className="flex gap-2 items-center text-[12px] text-[var(--text-muted)] font-mono">
                  <span className="text-[var(--accent-color)]">▸</span>
                  <span>Data flowing incrementally MySQL $\rightarrow$ HDFS via Sqoop</span>
                </div>
                <div className="flex gap-2 items-center text-[12px] text-[var(--text-muted)] font-mono mt-1">
                  <span className="text-[var(--accent-color)]">▸</span>
                  <span>Transformed dynamically by PySpark into partitioned Hive targets</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section: What I Bring Grid */}
        <div className={`fade-in-up delay-200 ${isSectionVisible ? 'visible' : ''}`}>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-[var(--text-color)]">Core Competencies</h3>
            <p className="text-[15px] text-[var(--text-muted)] mt-1">Foundational principles and methods I bring to development teams</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="glass-card rounded-2xl p-6 flex items-start gap-4"
              >
                <div className="p-3 bg-[var(--accent-bg-soft)] text-[var(--accent-color)] rounded-xl flex-shrink-0 shadow-sm border border-[rgba(16,185,129,0.1)]">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-[16px] text-[var(--text-color)] mb-1.5">{item.title}</h4>
                  <p className="text-[14px] text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}