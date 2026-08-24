import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Impact() {
  const [headerRef, isHeaderVisible] = useScrollAnimation(0.2);
  const [metricsRef, isMetricsVisible] = useScrollAnimation(0.15);

  const metrics = [
    {
      value: "80%+",
      label: "Query Performance Improvement",
      desc: "Optimized distributed processing and partitioning strategy",
      icon: "⚡"
    },
    {
      value: "500GB–1TB",
      label: "Daily Data Volume",
      desc: "Ingested & processed daily across Glue, PySpark & Databricks",
      icon: "📊"
    },
    {
      value: "30%",
      label: "Batch Latency Reduction",
      desc: "Catalyst optimizer tuning & Parquet partition pruning",
      icon: "⏱️"
    },
    {
      value: "40%",
      label: "Fewer Reporting Errors",
      desc: "Schema enforcement & automated dbt data validation",
      icon: "🎯"
    },
    {
      value: "35%",
      label: "Storage Cost Savings",
      desc: "Delta Lake ACID lifecycle management & S3 Intelligent-Tiering",
      icon: "💰"
    },
    {
      value: "25%",
      label: "Reconciliation Accuracy",
      desc: "Automated dbt quality checks & schema drift detection",
      icon: "✅"
    },
    {
      value: "45s → 8s",
      label: "BI Query Latency",
      desc: "Amazon Redshift distribution/sort keys & WLM tuning",
      icon: "🚀"
    },
    {
      value: "Days → 15m",
      label: "Release / CI-CD Time",
      desc: "Automated containerized pipelines with GitHub Actions & Docker",
      icon: "🔄"
    }
  ];

  return (
    <section id="impact" className="py-24 px-4 bg-[var(--bg-color)] relative transition-colors duration-350 border-b border-[var(--surface-border)]">
      
      {/* Decorative ambient glowing spot */}
      <div className="absolute top-[20%] right-[5%] w-80 h-80 bg-[rgba(16,185,129,0.04)] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container">
        
        <div 
          ref={headerRef}
          className={`fade-in-up text-center mb-16 ${isHeaderVisible ? 'visible' : ''}`}
        >
          <span className="text-[var(--accent-color)] font-mono text-xs font-extrabold uppercase tracking-widest bg-[var(--accent-bg-soft)] px-3.5 py-1.5 rounded-full border border-[rgba(16,185,129,0.2)]">
            Engineering Impact & Key Metrics
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--text-color)] mt-3">
            Quantified Business Outcomes
          </h2>
          <p className="text-[15px] text-[var(--text-muted)] mt-2 max-w-xl mx-auto">
            Measurable technical and operational results delivered across enterprise cloud data engineering platforms.
          </p>
        </div>

        <div 
          ref={metricsRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ${isMetricsVisible ? 'visible' : ''}`}
        >
          {metrics.map((item, index) => (
            <div 
              key={index}
              className={`glass-card rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group fade-in-up ${
                isMetricsVisible ? 'visible' : ''
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#10b981] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-[11px] font-mono font-bold text-[var(--accent-text)] bg-[var(--accent-bg-soft)] px-2.5 py-0.5 rounded-full border border-[rgba(16,185,129,0.15)]">
                    VERIFIED
                  </span>
                </div>

                <div className="text-3xl lg:text-4xl font-black text-[var(--accent-color)] tracking-tight mb-2">
                  {item.value}
                </div>

                <h3 className="text-[15px] font-extrabold text-[var(--text-color)] leading-snug mb-1.5">
                  {item.label}
                </h3>
              </div>

              <p className="text-[13px] text-[var(--text-muted)] leading-relaxed mt-2 border-t border-[var(--surface-border)]/50 pt-2.5">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
