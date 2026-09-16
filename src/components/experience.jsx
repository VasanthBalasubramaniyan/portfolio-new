import { useState } from 'react'
import { Calendar, CheckCircle2, ChevronDown, ChevronRight } from 'lucide-react'

export default function Experience() {
  const [expandedId, setExpandedId] = useState(0)

  const experiences = [
    {
      id: 0,
      role: 'Data Engineer',
      company: 'Globe Infotech Pvt. Ltd.',
      period: 'Oct 2025 – Present',
      project: 'Banking Transaction Data Platform & Healthcare Claims Pipeline Modernization',
      impactMetrics: [
        { label: 'Daily Data Volume', val: '500GB–1TB' },
        { label: 'Batch Latency Cut', val: '30%' },
        { label: 'Release Time Cut', val: 'Days ➔ 15m' }
      ],
      points: [
        'Designed and developed scalable ETL/ELT pipelines for banking and healthcare domains, processing 500GB–1TB of data daily using PySpark, AWS Glue, and Databricks.',
        'Implemented near real-time data ingestion using Amazon Kinesis and Change Data Capture (CDC), reducing batch processing latency by 30%.',
        'Built Medallion Architecture (Bronze, Silver, Gold) using Databricks and Delta Lake on Amazon S3.',
        'Orchestrated complex workflows using Apache Airflow with task dependencies, retries, and SLA monitoring, integrating AWS Lambda and AWS Step Functions.',
        'Developed reusable dbt transformations with incremental loads and implemented automated data validation and monitoring using Amazon CloudWatch.',
        'Established CI/CD pipelines using GitHub Actions and Docker, reducing release time from days to 15 minutes.'
      ],
      tech: ['PySpark', 'AWS Glue', 'Databricks', 'Amazon Kinesis', 'CDC', 'Delta Lake', 'Amazon S3', 'Apache Airflow', 'AWS Lambda', 'AWS Step Functions', 'dbt', 'Amazon CloudWatch', 'GitHub Actions', 'Docker']
    },
    {
      id: 1,
      role: 'Associate Data Engineer',
      company: 'Troika Research Technologies',
      period: 'Jan 2024 – Sep 2025',
      project: 'Customer Transaction Data Processing System',
      domain: 'Banking / Financial Services',
      impactMetrics: [
        { label: 'Reconciliation Accuracy', val: '+25%' },
        { label: 'BI Query Latency', val: '45s ➔ 8s' }
      ],
      points: [
        'Developed serverless ETL pipelines for daily banking transactions using PySpark, AWS Glue, and Pandas.',
        'Ingested data from PostgreSQL, MySQL, Microsoft SQL Server, and REST APIs using AWS Lambda and AWS Step Functions.',
        'Developed and scheduled Apache Airflow DAGs for automated batch ETL workflows with retry mechanisms, dependency management, and failure alerting.',
        'Built Raw, Processed, and Curated data lake zones on Amazon S3 using Delta Lake.',
        'Authored SQL transformations using CTEs, Window Functions, and Stored Procedures.',
        'Implemented dbt data quality checks and schema drift detection, improving financial reconciliation accuracy by 25%.',
        'Optimized Amazon Redshift performance using distribution keys, sort keys, and WLM configuration, reducing average BI query latency from 45 seconds to 8 seconds.',
        'Supported Power BI reporting through optimized dimensional models and DAX measures.'
      ],
      tech: ['PySpark', 'AWS Glue', 'Pandas', 'PostgreSQL', 'MySQL', 'Microsoft SQL Server', 'REST APIs', 'AWS Lambda', 'AWS Step Functions', 'Apache Airflow', 'Amazon S3', 'Delta Lake', 'SQL', 'dbt', 'Amazon Redshift', 'Power BI', 'DAX']
    },
    {
      id: 2,
      role: 'Junior Data Engineer',
      company: 'Knitech Soft Solutions',
      period: 'Sep 2022 – Dec 2023',
      project: 'Marketing Data ETL & Analytics Pipeline',
      impactMetrics: [
        { label: 'Data Warehouse', val: 'Amazon Redshift' },
        { label: 'Analytics & BI', val: 'Power BI' }
      ],
      points: [
        'Developed ETL workflows to extract, clean, and transform customer marketing campaign data from multiple structured sources into analytics-ready datasets.',
        'Applied Python preprocessing using Pandas and NumPy to resolve missing values and duplicate records.',
        'Wrote SQL queries using GROUP BY, CTEs, subqueries, and window functions to analyze campaign performance and customer behavior trends.',
        'Loaded transformed datasets into Amazon Redshift, contributing to a centralized warehouse used for reporting and analytics across teams.',
        'Performed schema validation and consistency checks to strengthen data reliability for downstream marketing analytics use cases.',
        'Prepared analytics-ready datasets that supported a customer response prediction model for targeted marketing analysis.',
        'Built Power BI dashboard components to visualize campaign performance and customer response metrics.'
      ],
      tech: ['Python', 'Pandas', 'NumPy', 'SQL', 'Amazon Redshift', 'Power BI']
    }
  ]

  return (
    <section id="experience" className="py-12 sm:py-20 px-3 sm:px-4 bg-[#06090e] relative border-b border-emerald-500/10">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 font-mono">
          <div className="text-xs text-purple-400 font-semibold uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-400"></span>
            <span>~/experience.json</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight glowing-title">
            Professional Experience Timeline
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl font-sans text-xs sm:text-sm leading-relaxed">
            3+ years engineering enterprise data pipelines, lakehouse architectures, and cloud data warehouses.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="space-y-4 sm:space-y-6">
          {experiences.map((exp) => {
            const isExpanded = expandedId === exp.id
            return (
              <div
                key={exp.id}
                className={`ide-card bg-[#090d16] border transition-all duration-300 ${
                  isExpanded ? 'border-emerald-500/40 shadow-xl' : 'border-white/10 hover:border-white/20'
                }`}
              >
                {/* Header Row - Entire row is a 44px+ tap target */}
                <div
                  onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                  className="ide-header bg-[#0b0f19] p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between cursor-pointer gap-3 min-h-[56px] select-none"
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <button 
                      aria-label="Toggle details"
                      className="p-2 rounded bg-white/5 text-emerald-400 hover:bg-emerald-500/20 shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center mt-0.5 sm:mt-0"
                    >
                      {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                    </button>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <h3 className="text-base sm:text-lg font-bold text-white font-mono">{exp.role}</h3>
                        <span className="text-[11px] sm:text-xs text-emerald-400 font-mono font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                          {exp.company}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] sm:text-xs text-slate-400 font-mono mt-1">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} className="text-cyan-400 shrink-0" />
                          {exp.period}
                        </span>
                        {exp.domain && (
                          <span className="text-slate-400">
                            <span className="text-slate-500">• Domain:</span> {exp.domain}
                          </span>
                        )}
                      </div>
                      {exp.project && (
                        <div className="text-[11px] sm:text-xs font-mono text-slate-300 mt-1.5 flex flex-wrap items-baseline gap-1.5">
                          <span className="text-emerald-400 font-semibold">Project:</span>
                          <span className="text-slate-200">{exp.project}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Impact Summary Badges */}
                  {exp.impactMetrics && exp.impactMetrics.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1 md:pt-0 self-start md:self-center">
                      {exp.impactMetrics.slice(0, 2).map((m, idx) => (
                        <span key={idx} className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded text-[11px] sm:text-xs font-mono font-bold">
                          {m.label}: {m.val}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Expanded Content Body */}
                {isExpanded && (
                  <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 font-sans border-t border-white/5 bg-[#080c14]">
                    
                    {/* Key Impact Stats Bar */}
                    {exp.impactMetrics && exp.impactMetrics.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-3 font-mono text-xs">
                        {exp.impactMetrics.map((metric, idx) => (
                          <div key={idx} className="bg-[#0b0f19] p-2.5 sm:p-3 rounded-lg border border-white/5">
                            <div className="text-[10px] text-slate-500 uppercase truncate">{metric.label}</div>
                            <div className="text-emerald-400 font-bold text-xs sm:text-sm mt-0.5">{metric.val}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Bullet Points List */}
                    <div className="space-y-2.5">
                      <div className="text-[11px] sm:text-xs font-mono text-slate-400 uppercase font-bold tracking-wider">
                        Key Responsibilities & System Achievements:
                      </div>
                      <ul className="space-y-2">
                        {exp.points.map((pt, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                            <CheckCircle2 size={15} className="text-emerald-400 mt-0.5 shrink-0" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Footer */}
                    <div className="pt-2 border-t border-white/5 font-mono text-xs">
                      <div className="text-[10px] sm:text-[11px] text-slate-500 uppercase mb-2">Technologies Utilized:</div>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map((t) => (
                          <span key={t} className="badge-tech text-[11px]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
