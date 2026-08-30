import { useState } from 'react'
import { Search, Cpu, Cloud, Database, Code, GitBranch, PieChart, Layers } from 'lucide-react'

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('ALL')

  const skillCategories = [
    {
      category: 'Cloud & Platforms',
      icon: Cloud,
      color: 'text-cyan-400',
      skills: ['AWS S3', 'AWS Glue', 'AWS EMR', 'Amazon Redshift', 'AWS Kinesis', 'AWS Athena', 'AWS Lambda', 'Databricks', 'Delta Lake', 'Medallion Architecture']
    },
    {
      category: 'Programming & Query',
      icon: Code,
      color: 'text-emerald-400',
      skills: ['Python', 'PySpark', 'Pandas', 'PyTest', 'SQL', 'Window Functions', 'Stored Procedures', 'Bash']
    },
    {
      category: 'Data Engineering & Streaming',
      icon: Cpu,
      color: 'text-amber-400',
      skills: ['Apache Spark', 'Spark SQL', 'ETL / ELT Pipelines', 'Batch Processing', 'Near Real-time Streams', 'Change Data Capture (CDC)', 'Partition Pruning', 'Catalyst Tuning']
    },
    {
      category: 'Modelling & Data Quality',
      icon: Layers,
      color: 'text-purple-400',
      skills: ['Dimensional Modeling', 'Star Schema', 'SCD Type 1 & 2', 'dbt (data build tool)', 'Query Tuning & WLM', 'Great Expectations']
    },
    {
      category: 'Databases',
      icon: Database,
      color: 'text-blue-400',
      skills: ['PostgreSQL', 'MySQL', 'SQL Server', 'Delta Lake', 'Snowflake']
    },
    {
      category: 'Orchestration & DevOps',
      icon: GitBranch,
      color: 'text-rose-400',
      skills: ['Apache Airflow', 'AWS Step Functions', 'AWS CloudWatch', 'Git', 'GitHub Actions', 'Docker', 'AWS CodePipeline']
    },
    {
      category: 'Analytics & Data Formats',
      icon: PieChart,
      color: 'text-indigo-400',
      skills: ['Power BI', 'DAX', 'Jupyter Notebooks', 'Parquet', 'ORC', 'Avro']
    }
  ]

  const categories = ['ALL', ...skillCategories.map(c => c.category)]

  const filteredCategories = skillCategories.map(cat => {
    const matchingSkills = cat.skills.filter(skill =>
      skill.toLowerCase().includes(searchTerm.toLowerCase())
    )
    return { ...cat, skills: matchingSkills }
  }).filter(cat =>
    (activeCategory === 'ALL' || cat.category === activeCategory) && cat.skills.length > 0
  )

  return (
    <section id="skills" className="py-12 sm:py-20 px-3 sm:px-4 bg-[#06090e] bg-grid-pattern relative border-b border-emerald-500/10">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 font-mono">
          <div className="text-xs text-cyan-400 font-semibold uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span>~/skills.matrix</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight glowing-title">
            Technical Stack & Skill Matrix
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl font-sans text-xs sm:text-sm leading-relaxed">
            Categorized technical capabilities spanning cloud infrastructure, big data processing, data modeling, and orchestration.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="ide-card bg-[#090d16] p-3.5 sm:p-4 mb-6 sm:mb-8 border border-emerald-500/20 font-mono text-xs space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            
            {/* SQL Search Input with 44px height */}
            <div className="relative w-full sm:w-80">
              <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search skills (e.g. PySpark, Airflow)..."
                className="w-full bg-[#0b0f19] border border-white/10 rounded-lg pl-9 pr-3 py-2.5 min-h-[44px] text-white text-[12px] placeholder-slate-500 focus:outline-none focus:border-emerald-500/50"
              />
            </div>

            {/* Category Filter Pills with 44px tap target */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto no-scrollbar py-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-2 min-h-[44px] rounded-lg whitespace-nowrap transition-all text-[11px] font-mono cursor-pointer flex items-center justify-center ${
                    activeCategory === cat
                      ? 'bg-emerald-500 text-black font-bold shadow-md shadow-emerald-500/20'
                      : 'bg-[#0b0f19] text-slate-400 hover:text-white border border-white/5'
                  }`}
                >
                  {cat === 'ALL' ? 'SELECT * FROM skills' : cat}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredCategories.map((group) => {
            const Icon = group.icon
            return (
              <div key={group.category} className="ide-card bg-[#090d16] border border-white/10 p-4 sm:p-5 hover:border-emerald-500/30 transition-all">
                <div className="flex items-center gap-2.5 border-b border-white/10 pb-3 mb-4 font-mono">
                  <Icon size={16} className={group.color} />
                  <h3 className="text-xs sm:text-sm font-bold text-white">{group.category}</h3>
                  <span className="ml-auto text-[10px] text-slate-500 bg-[#0b0f19] px-2 py-0.5 rounded">
                    {group.skills.length} items
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="badge-tech font-mono text-[11px] sm:text-xs bg-[#0b0f19] text-slate-200 border border-white/10 hover:border-emerald-500/40 hover:text-emerald-300 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
