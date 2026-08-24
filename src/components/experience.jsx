import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Experience() {
  const [headerRef, isHeaderVisible] = useScrollAnimation(0.2);
  const [contentRef, isContentVisible] = useScrollAnimation(0.2);

  const experiences = [
    {
      title: "Data Engineer",
      company: "Globe Infotech Pvt. Ltd",
      location: "Chennai, India",
      duration: "Oct 2025 – Present",
      project: "Banking Transaction Data Platform & Healthcare Claims Pipeline Modernization",
      metrics: [
        "500GB–1TB Daily Processing",
        "30% Lower Latency",
        "40% Fewer Reporting Errors",
        "Days → 15 Min Release Time"
      ],
      bullets: [
        "Designed and developed scalable ETL/ELT pipelines for banking and healthcare domains, processing 500GB–1TB of data daily using PySpark, AWS Glue, and Databricks.",
        "Implemented near real-time data ingestion using Amazon Kinesis and Change Data Capture (CDC).",
        "Reduced batch processing latency by 30% through Catalyst optimizer tuning and Parquet/ORC partition pruning.",
        "Built a Medallion Architecture (Bronze, Silver, Gold) using Databricks and Delta Lake on Amazon S3.",
        "Standardized data quality and schema enforcement across data layers.",
        "Orchestrated complex workflows using Apache Airflow with task dependencies, retries, and SLA monitoring.",
        "Integrated AWS Lambda and AWS Step Functions for event-driven triggers.",
        "Developed reusable dbt transformations with incremental loading.",
        "Implemented automated data validation and monitoring using Amazon CloudWatch, reducing downstream reporting errors by 40%.",
        "Built CI/CD pipelines using GitHub Actions and Docker, reducing release time from days to 15 minutes."
      ]
    },
    {
      title: "Associate Data Engineer",
      company: "Troika Research Technologies",
      location: "Chennai, India",
      duration: "Jan 2024 – Sep 2025",
      project: "Customer Transaction Data Processing System (Banking / Financial Services)",
      metrics: [
        "35% Lower Storage Cost",
        "25% Better Reconciliation",
        "45s → 8s Query Latency"
      ],
      bullets: [
        "Developed serverless ETL pipelines for daily banking transaction processing using PySpark, AWS Glue, and Pandas.",
        "Ingested data from PostgreSQL, MySQL, Microsoft SQL Server, and REST APIs using AWS Lambda and AWS Step Functions.",
        "Developed and scheduled Apache Airflow DAGs for automated batch ETL workflows with retry mechanisms, dependency management, and failure alerting.",
        "Built multi-zone Data Lake structures (Raw, Processed, Curated) on Amazon S3 using Delta Lake ACID transactions and S3 Intelligent-Tiering, reducing storage costs by 35%.",
        "Authored SQL transformations using CTEs, Window Functions, and Stored Procedures.",
        "Implemented dbt data quality checks and schema drift detection, improving financial reconciliation accuracy by 25%.",
        "Optimized Amazon Redshift using execution plans, distribution keys, sort keys, and WLM configuration, reducing average BI query latency from 45 seconds to 8 seconds.",
        "Supported Power BI reporting through optimized dimensional models and DAX measures."
      ]
    },
    {
      title: "Data Engineer Intern",
      company: "Knitech Soft Solution",
      location: "Coimbatore, India",
      duration: "Apr 2023 – Jan 2024",
      project: "Marketing Campaign Analytics Data Pipeline",
      metrics: [
        "ETL Workflows",
        "Redshift Warehousing",
        "Power BI Dashboards"
      ],
      bullets: [
        "Developed ETL workflows to extract, clean, and transform customer marketing campaign data using Python, Pandas, and NumPy.",
        "Performed missing-value handling, duplicate removal, and written SQL queries using GROUP BY, CTEs, subqueries, and window functions.",
        "Loaded transformed datasets into Amazon Redshift with schema validation and consistency checks.",
        "Prepared analytics-ready datasets supporting customer response prediction analysis.",
        "Built Power BI dashboard components for campaign performance and customer response metrics."
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
              
              {exp.project && (
                <div className="mb-4 bg-[var(--surface-color)] p-3.5 rounded-xl border border-[var(--surface-border)] font-mono text-[13.5px]">
                  <span className="text-[var(--accent-color)] font-bold">PROJECT: </span>
                  <span className="text-[var(--text-color)] font-semibold">{exp.project}</span>
                </div>
              )}

              {exp.metrics && exp.metrics.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.metrics.map((metric, idx) => (
                    <span key={idx} className="px-3 py-1 bg-[#10b981]/10 text-[var(--accent-color)] border border-[#10b981]/25 rounded-lg text-[12.5px] font-mono font-bold tracking-wide">
                      ⚡ {metric}
                    </span>
                  ))}
                </div>
              )}

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
