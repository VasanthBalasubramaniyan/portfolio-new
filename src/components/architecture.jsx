import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Architecture() {
  const [headerRef, isHeaderVisible] = useScrollAnimation(0.2);
  const [contentRef, isContentVisible] = useScrollAnimation(0.15);
  const [activeStage, setActiveStage] = useState(null);

  const stages = [
    {
      id: "sources",
      step: "01",
      title: "Data Sources",
      icon: "🗄️",
      tech: ["PostgreSQL", "MySQL", "SQL Server", "REST APIs"],
      desc: "High-volume transactional databases, operational records, and third-party API payloads.",
      badge: "Operational Inputs"
    },
    {
      id: "ingestion",
      step: "02",
      title: "Ingestion & CDC",
      icon: "⚡",
      tech: ["AWS Lambda", "Amazon Kinesis", "CDC", "AWS Glue"],
      desc: "Serverless event-driven ingestion, real-time Change Data Capture, and batch crawlers.",
      badge: "Streaming & Batch"
    },
    {
      id: "storage",
      step: "03",
      title: "Cloud Storage & Lakehouse",
      icon: "☁️",
      tech: ["Amazon S3", "Delta Lake"],
      desc: "Scalable object storage with Delta Lake ACID transactions and schema enforcement.",
      badge: "Multi-Zone Storage"
    },
    {
      id: "medallion",
      step: "04",
      title: "Medallion Architecture",
      icon: "🥇",
      tech: ["Bronze Layer (Raw)", "Silver Layer (Cleaned)", "Gold Layer (Curated)"],
      desc: "Structured data refinement pipeline from raw ingest to analytical aggregates.",
      badge: "Data Refinement"
    },
    {
      id: "processing",
      step: "05",
      title: "Transformation & Quality",
      icon: "⚙️",
      tech: ["PySpark", "Apache Spark", "Databricks", "dbt"],
      desc: "Distributed compute, Catalyst optimizer tuning, incremental dbt models, and schema validation.",
      badge: "Distributed Compute"
    },
    {
      id: "orchestration",
      step: "06",
      title: "Orchestration & Alerting",
      icon: "🔄",
      tech: ["Apache Airflow", "AWS Step Functions", "CloudWatch"],
      desc: "DAG scheduling, automated retry logic, failure notifications, and SLA monitoring.",
      badge: "Workflow Management"
    },
    {
      id: "warehouse",
      step: "07",
      title: "Data Warehousing",
      icon: "🏬",
      tech: ["Amazon Redshift", "Dimensional Modeling"],
      desc: "Star schema models, distribution keys, sort keys, and WLM query performance tuning.",
      badge: "OLAP Warehouse"
    },
    {
      id: "analytics",
      step: "08",
      title: "Analytics & BI",
      icon: "📈",
      tech: ["Power BI", "DAX", "Jupyter Notebook"],
      desc: "Executive dashboards, interactive reporting, and analytical insights supporting decisions.",
      badge: "Business Intelligence"
    }
  ];

  return (
    <section id="architecture" className="py-28 px-4 bg-dots-pattern bg-[var(--bg-color)] text-[var(--text-color)] relative transition-colors duration-350 border-b border-[var(--surface-border)]">
      
      {/* Decorative background orb */}
      <div className="absolute top-[30%] left-[20%] w-96 h-96 bg-[rgba(16,185,129,0.03)] rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container">
        
        <div 
          ref={headerRef}
          className={`fade-in-up text-center mb-16 ${isHeaderVisible ? 'visible' : ''}`}
        >
          <span className="text-[var(--accent-color)] font-mono text-xs font-extrabold uppercase tracking-widest bg-[var(--accent-bg-soft)] px-3.5 py-1.5 rounded-full border border-[rgba(16,185,129,0.2)]">
            End-to-End Data Pipeline Flow
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--text-color)] mt-3">
            Data Engineering Architecture
          </h2>
          <p className="text-[16px] text-[var(--text-muted)] mt-3 max-w-2xl mx-auto">
            Interactive representation of the enterprise cloud data platform workflow — from raw sources to analytics-ready datasets.
          </p>
        </div>

        {/* Conceptual Visual Diagram Flow Header */}
        <div 
          ref={contentRef}
          className={`fade-in-up ${isContentVisible ? 'visible' : ''}`}
        >
          {/* Main Pipeline Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stages.map((stage, idx) => (
              <div
                key={stage.id}
                onMouseEnter={() => setActiveStage(stage.id)}
                onMouseLeave={() => setActiveStage(null)}
                className={`glass-card rounded-2xl p-6 relative transition-all duration-300 cursor-pointer ${
                  activeStage === stage.id ? 'border-[var(--accent-color)] shadow-[0_0_25px_rgba(16,185,129,0.25)] -translate-y-2' : ''
                }`}
              >
                {/* Connector Arrow for desktop */}
                {idx < stages.length - 1 && (idx + 1) % 4 !== 0 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-[var(--accent-color)] opacity-60">
                    ➔
                  </div>
                )}

                <div className="flex justify-between items-start mb-4">
                  <span className="text-3xl">{stage.icon}</span>
                  <span className="text-[12px] font-mono font-bold text-[var(--accent-text)] bg-[var(--accent-bg-soft)] px-2.5 py-1 rounded-full border border-[rgba(16,185,129,0.2)]">
                    STEP {stage.step}
                  </span>
                </div>

                <h3 className="text-[17px] font-extrabold text-[var(--text-color)] mb-2 group-hover:text-[var(--accent-color)] transition-colors">
                  {stage.title}
                </h3>

                <p className="text-[13.5px] text-[var(--text-muted)] leading-relaxed mb-4 min-h-[50px]">
                  {stage.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--surface-border)]/60">
                  {stage.tech.map((item, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 bg-[var(--surface-color)] text-[var(--accent-color)] border border-[rgba(16,185,129,0.2)] rounded-md text-[11.5px] font-mono font-semibold">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Medallion Flow Deep Dive Box */}
          <div className="glass-card rounded-2xl p-8 border border-[rgba(16,185,129,0.25)] bg-[var(--surface-card)]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-[12px] font-mono font-bold text-[var(--accent-color)] uppercase tracking-wider">
                  Lakehouse Pattern Spotlight
                </span>
                <h3 className="text-2xl font-extrabold text-[var(--text-color)] mt-1">
                  Medallion Architecture (Bronze ➔ Silver ➔ Gold)
                </h3>
                <p className="text-[14.5px] text-[var(--text-secondary)] mt-1.5 max-w-2xl">
                  Enforces ACID transactions with Delta Lake on Amazon S3. Raw data lands in Bronze, undergoes schema enforcement and quality validation in Silver, and is aggregated into high-performance Gold analytical models.
                </p>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto justify-center">
                <div className="px-4 py-2.5 rounded-xl bg-amber-900/20 border border-amber-600/40 text-amber-400 font-mono font-bold text-xs text-center">
                  🥉 BRONZE<br/><span className="text-[10px] opacity-75">Raw Ingest</span>
                </div>
                <span className="text-[var(--accent-color)] font-bold">➔</span>
                <div className="px-4 py-2.5 rounded-xl bg-slate-800/40 border border-slate-400/40 text-slate-200 font-mono font-bold text-xs text-center">
                  🥈 SILVER<br/><span className="text-[10px] opacity-75">Cleaned & Validated</span>
                </div>
                <span className="text-[var(--accent-color)] font-bold">➔</span>
                <div className="px-4 py-2.5 rounded-xl bg-yellow-900/20 border border-yellow-500/40 text-yellow-400 font-mono font-bold text-xs text-center">
                  🥇 GOLD<br/><span className="text-[10px] opacity-75">Analytics Ready</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
