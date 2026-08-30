import { useState } from 'react'
import { Calendar, MapPin, CheckCircle2, ChevronDown, ChevronRight } from 'lucide-react'

export default function Experience() {
  const [expandedId, setExpandedId] = useState(0)

  const experiences = [
    {
      id: 0,
      role: 'Data Engineer',
      company: 'Globe Infotech Pvt. Ltd.',
      period: 'Oct 2025 – Present',
      location: 'Chennai, India',
      domain: 'Banking & Healthcare Data',
      impactMetrics: [
        { label: 'Pipeline Volume', val: '500GB–1TB / day' },
        { label: 'Batch Latency Cut', val: '30%' },
        { label: 'Reporting Error Cut', val: '40%' },
        { label: 'CI/CD Release Speed', val: '15 Mins' }
      ],
      points: [
        'Built production ETL/ELT pipelines processing 500GB–1TB/day using PySpark, AWS Glue, and Databricks across banking and healthcare domains.',
        'Architected near real-time ingestion via AWS Kinesis + CDC; cut batch processing latency by 30% through PySpark Catalyst optimizer tuning and strategic partition pruning.',
        'Constructed governed Bronze/Silver/Gold Medallion lakehouse architecture on Delta Lake + S3, serving Gold analytical tables via AWS Athena at sub-minute data freshness.',
        'Orchestrated Apache Airflow DAGs with AWS Lambda and Step Functions triggers to ensure peak-load execution reliability.',
        'Wrote incremental dbt models and integrated Amazon CloudWatch automated monitoring, cutting downstream reporting errors by 40%.',
        'Established automated CI/CD deployment workflows with GitHub Actions and Docker, reducing release cycle time from days to 15 minutes.'
      ],
      tech: ['PySpark', 'AWS Glue', 'Databricks', 'Delta Lake', 'Kinesis', 'CDC', 'Airflow', 'dbt', 'Athena', 'GitHub Actions', 'Docker']
    },
    {
      id: 1,
      role: 'Associate Data Engineer',
      company: 'Troika Research Technologies',
      period: 'Jan 2024 – Sep 2025',
      location: 'Chennai, India',
      domain: 'Banking & Financial Datasets',
      impactMetrics: [
        { label: 'S3 Storage Cost Cut', val: '35%' },
        { label: 'BI Latency Cut', val: '45s ➔ 8s' },
        { label: 'Reconciliation Accuracy', val: '+25%' }
      ],
      points: [
        'Built serverless ETL pipelines for daily banking transactions using PySpark, AWS Glue, and Pandas, ingesting from PostgreSQL, MySQL, SQL Server, and REST APIs.',
        'Scheduled resilient Apache Airflow DAGs complete with automated retry mechanisms and failure alert hooks.',
        'Constructed Raw/Processed/Curated data lake architecture on S3 using Delta Lake + S3 Intelligent-Tiering, cutting cloud storage expenditure by 35%.',
        'Wrote complex SQL transformations (CTEs, window functions, stored procedures) and dbt data quality tests, boosting financial reconciliation accuracy by 25%.',
        'Tuned Amazon Redshift cluster performance via distribution/sort key optimization and WLM workload queue management, cutting BI query latency from 45s down to 8s.'
      ],
      tech: ['PySpark', 'AWS Glue', 'S3', 'Delta Lake', 'Redshift', 'Airflow', 'dbt', 'PostgreSQL', 'MySQL', 'SQL Server']
    },
    {
      id: 2,
      role: 'Data Engineer Intern',
      company: 'Knitech Soft Solution',
      period: 'Apr 2023 – Jan 2024',
      location: 'Chennai, India',
      domain: 'Marketing Analytics & Reporting',
      impactMetrics: [
        { label: 'Multi-Source Ingest', val: '5+ Channels' },
        { label: 'BI Reporting', val: 'Power BI Dashboards' }
      ],
      points: [
        'Built automated ETL scripts to clean and transform multi-source marketing campaign data using Python, Pandas, and NumPy.',
        'Wrote analytical SQL queries using GROUP BY aggregations, CTEs, and window functions to evaluate campaign conversion performance.',
        'Loaded curated datasets into Amazon Redshift data warehouse to empower cross-functional marketing analytics.',
        'Designed and published interactive Power BI dashboards tracking key marketing campaign response and performance metrics.'
      ],
      tech: ['Python', 'Pandas', 'NumPy', 'SQL', 'Redshift', 'Power BI', 'DAX']
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
                  <div className="flex items-center gap-3">
                    <button 
                      aria-label="Toggle details"
                      className="p-2 rounded bg-white/5 text-emerald-400 hover:bg-emerald-500/20 shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center"
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
                        <span className="flex items-center gap-1">
                          <MapPin size={12} className="text-purple-400 shrink-0" />
                          {exp.location}
                        </span>
                        <span className="hidden sm:inline text-slate-500">• {exp.domain}</span>
                      </div>
                    </div>
                  </div>

                  {/* Impact Summary Badges */}
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1 md:pt-0">
                    {exp.impactMetrics.slice(0, 2).map((m, idx) => (
                      <span key={idx} className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded text-[11px] sm:text-xs font-mono font-bold">
                        {m.label}: {m.val}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expanded Content Body */}
                {isExpanded && (
                  <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 font-sans border-t border-white/5 bg-[#080c14]">
                    
                    {/* Key Impact Stats Bar */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 font-mono text-xs">
                      {exp.impactMetrics.map((metric, idx) => (
                        <div key={idx} className="bg-[#0b0f19] p-2.5 sm:p-3 rounded-lg border border-white/5">
                          <div className="text-[10px] text-slate-500 uppercase truncate">{metric.label}</div>
                          <div className="text-emerald-400 font-bold text-xs sm:text-sm mt-0.5">{metric.val}</div>
                        </div>
                      ))}
                    </div>

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
