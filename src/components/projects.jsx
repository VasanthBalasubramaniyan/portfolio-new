import { Database, Sparkles } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-20 px-3 sm:px-4 bg-[#06090e] bg-grid-pattern relative border-b border-emerald-500/10 scroll-mt-20">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 font-mono">
          <div className="text-xs text-emerald-400 font-semibold uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span>~/lakehouse_dag.sql</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight glowing-title">
            Flagship Project & Architecture
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl font-sans text-xs sm:text-sm leading-relaxed">
            End-to-end Healthcare Claims Medallion Lakehouse built with PySpark, Delta Lake, Airflow, dbt, and Great Expectations on AWS.
          </p>
        </div>

        {/* Flagship Project Spotlight Card */}
        <div className="ide-card bg-[#090d16] border border-emerald-500/20 p-4 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3 sm:space-y-4 font-sans">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full font-mono text-[11px] sm:text-xs border border-emerald-500/30 font-bold">
                <Sparkles size={12} />
                <span>FLAGSHIP PORTFOLIO BUILD</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Healthcare Claims Medallion Lakehouse</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                An end-to-end production-grade Medallion lakehouse built from synthetic healthcare datasets encompassing patients, providers, appointments, diagnoses, treatments, and billing claims. Designed to demonstrate enterprise scale, stream/batch unification, schema enforcement, SCD Type 2 tracking, and automated data quality checks.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 font-mono text-xs pt-2">
                <div className="bg-[#0b0f19] p-2.5 sm:p-3 rounded border border-white/5">
                  <div className="text-slate-500 text-[10px]">INGESTION</div>
                  <div className="text-white font-bold text-xs mt-0.5">Kinesis + CDC</div>
                </div>
                <div className="bg-[#0b0f19] p-2.5 sm:p-3 rounded border border-white/5">
                  <div className="text-slate-500 text-[10px]">STORAGE</div>
                  <div className="text-white font-bold text-xs mt-0.5">Delta Lake / S3</div>
                </div>
                <div className="bg-[#0b0f19] p-2.5 sm:p-3 rounded border border-white/5">
                  <div className="text-slate-500 text-[10px]">TRANSFORM</div>
                  <div className="text-white font-bold text-xs mt-0.5">PySpark + dbt</div>
                </div>
                <div className="bg-[#0b0f19] p-2.5 sm:p-3 rounded border border-white/5">
                  <div className="text-slate-500 text-[10px]">SERVING</div>
                  <div className="text-white font-bold text-xs mt-0.5">Redshift / Athena</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#0b0f19] p-4 sm:p-5 rounded-xl border border-white/10 space-y-3 font-mono text-xs">
              <div className="text-emerald-400 font-bold text-[11px] sm:text-xs uppercase tracking-wider flex items-center justify-between">
                <span>FULL TECH STACK</span>
                <Database size={14} />
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {[
                  'AWS S3', 'AWS Glue', 'AWS EMR', 'PySpark', 'Delta Lake',
                  'Kinesis', 'CDC', 'AWS Lambda', 'Step Functions', 'Apache Airflow',
                  'dbt Core', 'Great Expectations', 'Snowflake', 'Amazon Redshift',
                  'Terraform', 'Docker'
                ].map((st) => (
                  <span key={st} className="badge-tech text-[11px]">
                    {st}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
