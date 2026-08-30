import { useState } from 'react'
import { Database, Layers, CheckCircle2, Server, Activity, Code2, Cpu, ShieldCheck, ArrowRight, ArrowDown, Table } from 'lucide-react'

export default function MedallionDag() {
  const [selectedStage, setSelectedStage] = useState('bronze')

  const stages = [
    {
      id: 'ingest',
      step: '01',
      name: '01. Ingestion',
      title: 'S3 Raw Ingest & Kinesis CDC',
      layer: 'Raw Data Ingest',
      color: 'border-cyan-500/50 text-cyan-400 bg-cyan-500/10',
      iconColor: 'text-cyan-400',
      tech: ['AWS S3', 'AWS Kinesis', 'Lambda', 'Debezium CDC'],
      metrics: { throughput: '100,000 events/sec', format: 'JSON / Avro', latency: '< 5 seconds' },
      description: 'Captures synthetic healthcare transactions (patients, providers, appointments, diagnoses, treatments, claims) via streaming Kinesis & CDC into S3 landing bucket.',
      codeSnippet: `-- Kinesis Stream to S3 Raw Landing Bucket
CREATE EXTERNAL TABLE raw_health_claims (
    event_id STRING,
    patient_id STRING,
    provider_id STRING,
    claim_amount DOUBLE,
    diagnosis_code STRING,
    event_timestamp TIMESTAMP
)
STORED AS AVRO
LOCATION 's3://health-lakehouse-landing-prod/raw/';`
    },
    {
      id: 'bronze',
      step: '02',
      name: '02. Bronze Layer',
      title: 'Bronze Delta Lake (Raw Schema)',
      layer: 'Bronze Raw Lake',
      color: 'border-amber-500/50 text-amber-400 bg-amber-500/10',
      iconColor: 'text-amber-400',
      tech: ['AWS Glue', 'PySpark', 'Delta Lake', 'AWS EMR'],
      metrics: { throughput: '500GB-1TB / day', format: 'Delta / Parquet', latency: '< 2 minutes' },
      description: 'Raw immutable append-only storage in Delta Lake format. Schema enforcement and metadata tracking preserve lineage without mutating raw payload.',
      codeSnippet: `# PySpark Glue Ingestion into Bronze Delta Table
from pyspark.sql import SparkSession
from delta.tables import *

spark = SparkSession.builder \\
    .appName("BronzeClaimsIngest") \\
    .config("spark.sql.extensions", "io.delta.sql.DeltaSparkSessionExtension") \\
    .getOrCreate()

raw_df = spark.readStream.format("avro").load("s3://health-lakehouse-landing-prod/raw/")

raw_df.writeStream \\
    .format("delta") \\
    .outputMode("append") \\
    .option("checkpointLocation", "s3://health-lakehouse/checkpoints/bronze_claims") \\
    .start("s3://health-lakehouse/bronze/claims/")`
    },
    {
      id: 'silver',
      step: '03',
      name: '03. Silver Layer',
      title: 'Silver Delta Lake (Cleaned & SCD2)',
      layer: 'Silver Cleansed',
      color: 'border-emerald-500/50 text-emerald-400 bg-emerald-500/10',
      iconColor: 'text-emerald-400',
      tech: ['PySpark', 'Databricks', 'Delta Lake MERGE', 'Partition Pruning'],
      metrics: { deduplication: '100% Exact', schema: 'Conformed Types', latency: '< 5 minutes' },
      description: 'Cleansed, deduplicated, and conformed entities. Implements Slowly Changing Dimensions (SCD Type 2) and partition pruning for high-speed downstream analytics.',
      codeSnippet: `-- PySpark Delta MERGE for Silver Claims Cleanse & SCD Type 2
MERGE INTO silver.claims AS target
USING (
    SELECT DISTINCT 
        claim_id, patient_id, provider_id, 
        CAST(claim_amount AS DECIMAL(12,2)) AS claim_amount,
        UPPER(diagnosis_code) AS diagnosis_code,
        event_timestamp
    FROM bronze.claims_raw
    WHERE event_timestamp >= current_date() - INTERVAL 1 DAY
) AS source
ON target.claim_id = source.claim_id
WHEN MATCHED AND target.updated_at < source.event_timestamp THEN
  UPDATE SET target.claim_amount = source.claim_amount, target.updated_at = source.event_timestamp
WHEN NOT MATCHED THEN
  INSERT (claim_id, patient_id, provider_id, claim_amount, diagnosis_code, created_at)
  VALUES (source.claim_id, source.patient_id, source.provider_id, source.claim_amount, source.diagnosis_code, source.event_timestamp);`
    },
    {
      id: 'gold',
      step: '04',
      name: '04. Gold Layer',
      title: 'Gold Star Schema & Aggregates',
      layer: 'Gold Star Schema',
      color: 'border-purple-500/50 text-purple-400 bg-purple-500/10',
      iconColor: 'text-purple-400',
      tech: ['dbt Core', 'Spark SQL', 'Dimensional Modeling', 'Star Schema'],
      metrics: { querySpeed: 'Sub-second', models: 'dbt incremental', accuracy: '99.99%' },
      description: 'Curated star schema dimension & fact tables (FactClaims, DimPatient, DimProvider, DimDiagnosis) model optimized for BI reporting & executive decision dashboards.',
      codeSnippet: `-- dbt Incremental Gold Fact Model: fct_healthcare_claims.sql
{{ config(
    materialized='incremental',
    unique_key='claim_key',
    file_format='delta'
) }}

SELECT
    md5(concat(c.claim_id, c.updated_at)) AS claim_key,
    c.claim_id,
    p.patient_key,
    pr.provider_key,
    c.claim_amount,
    c.event_timestamp AS claim_date
FROM {{ ref('silver_claims') }} c
LEFT JOIN {{ ref('dim_patient') }} p ON c.patient_id = p.patient_id AND p.is_current = TRUE
LEFT JOIN {{ ref('dim_provider') }} pr ON c.provider_id = pr.provider_id

{% if is_incremental() %}
    WHERE c.event_timestamp > (SELECT MAX(claim_date) FROM {{ this }})
{% endif %}`
    },
    {
      id: 'quality',
      step: '05',
      name: '05. Quality Suite',
      title: 'Great Expectations & Airflow DAGs',
      layer: 'Data Quality Check',
      color: 'border-rose-500/50 text-rose-400 bg-rose-500/10',
      iconColor: 'text-rose-400',
      tech: ['Great Expectations', 'Apache Airflow', 'CloudWatch', 'PagerDuty'],
      metrics: { validation: '100% Automated', testRules: '45+ Assertions', alerting: 'Slack & SNS' },
      description: 'Automated data contracts & validation suites run prior to Gold promotion. Any null violations or anomaly threshold breaches instantly trigger Airflow DAG retry & Slack notifications.',
      codeSnippet: `# Great Expectations Data Validation Suite
from great_expectations.core.expectation_suite import ExpectationSuite

validator.expect_column_values_to_not_be_null(column="patient_id")
validator.expect_column_values_to_be_between(
    column="claim_amount", min_value=0.0, max_value=500000.0
)
validator.expect_column_values_to_match_regex(
    column="diagnosis_code", regex=r"^[A-Z][0-9]{2}(\.[0-9]{1,4})?$"
)
validation_result = validator.validate()`
    },
    {
      id: 'serving',
      step: '06',
      name: '06. Serving Layer',
      title: 'Snowflake / Redshift / Athena',
      layer: 'Serving & BI',
      color: 'border-blue-500/50 text-blue-400 bg-blue-500/10',
      iconColor: 'text-blue-400',
      tech: ['Amazon Redshift', 'AWS Athena', 'Snowflake', 'Power BI'],
      metrics: { queryLatency: '< 8 seconds', freshness: '< 1 minute', concurrentUsers: '500+' },
      description: 'Gold tables served directly to executive analytics dashboards in Power BI and queried via Redshift WLM tuned dist/sort keys and sub-second Athena queries.',
      codeSnippet: `-- Served BI Executive View in Redshift
CREATE VIEW analytics.v_claim_payout_summary AS
SELECT 
    d.diagnosis_category,
    COUNT(f.claim_key) AS total_claims,
    SUM(f.claim_amount) AS total_payout,
    AVG(f.claim_amount) AS avg_claim_amount,
    DATE_TRUNC('month', f.claim_date) AS claim_month
FROM gold.fct_healthcare_claims f
JOIN gold.dim_diagnosis d ON f.diagnosis_key = d.diagnosis_key
GROUP BY 1, 5
ORDER BY total_payout DESC;`
    }
  ]

  const activeStageObj = stages.find(s => s.id === selectedStage) || stages[1]

  return (
    <div className="space-y-8">
      
      {/* Architecture DAG Container */}
      <div className="ide-card bg-[#090d16] border border-emerald-500/20 p-4 sm:p-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-white/10 pb-4 mb-6 gap-3 font-mono">
          <div>
            <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider flex items-center gap-2">
              <Activity size={14} className="animate-spin" />
              <span>LIVE MEDALLION PIPELINE DAG</span>
            </div>
            <h3 className="text-xl font-bold text-white mt-1">Healthcare Claims End-to-End Pipeline</h3>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400 bg-[#0b0f19] px-3 py-1.5 rounded border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>STATUS: ACTIVE PIPELINE</span>
          </div>
        </div>

        {/* Stage Inspector Selector Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-6 font-mono text-xs">
          {stages.map((stage) => {
            const isSelected = selectedStage === stage.id
            return (
              <button
                key={stage.id}
                onClick={() => setSelectedStage(stage.id)}
                className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? `${stage.color} shadow-lg border-2 font-bold`
                    : 'bg-[#0b0f19] border-white/10 text-slate-400 hover:border-emerald-500/40 hover:text-slate-200'
                }`}
              >
                <div className="text-[10px] text-slate-500 uppercase flex items-center justify-between">
                  <span>STEP {stage.step}</span>
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>}
                </div>
                <div className="font-semibold text-xs mt-1 truncate">{stage.layer}</div>
              </button>
            )
          })}
        </div>

        {/* Responsive DAG Diagram Container (No Horizontal Scrollbar, Fits Viewport Width) */}
        <div className="bg-[#070a10] border border-white/10 rounded-xl p-4">
          
          {/* Desktop / Tablet View (>= 640px): Equal Flex Horizontal Row with Arrows */}
          <div className="hidden sm:flex items-center justify-between gap-1 lg:gap-2">
            {stages.map((stage, idx) => {
              const isSelected = selectedStage === stage.id
              const isLast = idx === stages.length - 1
              return (
                <div key={stage.id} className="flex-1 flex items-center min-w-0">
                  
                  {/* Node Box */}
                  <div
                    onClick={() => setSelectedStage(stage.id)}
                    className={`w-full dag-node p-3 rounded-xl border flex flex-col items-center justify-center text-center transition-all bg-[#0b0f19] cursor-pointer ${
                      isSelected
                        ? `${stage.color} shadow-xl ring-2 ring-emerald-400 font-bold scale-105`
                        : 'border-white/10 hover:border-emerald-500/40 text-slate-300'
                    }`}
                  >
                    <div className="text-[10px] font-mono text-emerald-400 font-bold mb-1">
                      {stage.step}
                    </div>
                    <div className={`p-1.5 rounded-lg bg-black/40 mb-1 ${stage.iconColor}`}>
                      {stage.id === 'ingest' && <Server size={16} />}
                      {stage.id === 'bronze' && <Database size={16} />}
                      {stage.id === 'silver' && <Layers size={16} />}
                      {stage.id === 'gold' && <Cpu size={16} />}
                      {stage.id === 'quality' && <ShieldCheck size={16} />}
                      {stage.id === 'serving' && <Table size={16} />}
                    </div>
                    <span className="font-mono text-[10px] lg:text-[11px] font-bold leading-tight truncate w-full">
                      {stage.layer}
                    </span>
                  </div>

                  {/* Horizontal Arrow between nodes */}
                  {!isLast && (
                    <div className="px-0.5 text-slate-600 shrink-0 flex items-center justify-center">
                      <ArrowRight size={13} className="text-emerald-500/70" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Mobile View (< 640px): Vertical Stack with Downward 90° Rotated Arrows */}
          <div className="flex sm:hidden flex-col gap-2">
            {stages.map((stage, idx) => {
              const isSelected = selectedStage === stage.id
              const isLast = idx === stages.length - 1
              return (
                <div key={stage.id} className="w-full">
                  
                  {/* Full-width Row Node */}
                  <div
                    onClick={() => setSelectedStage(stage.id)}
                    className={`w-full p-3 rounded-xl border flex items-center justify-between transition-all bg-[#0b0f19] cursor-pointer ${
                      isSelected
                        ? `${stage.color} shadow-lg ring-2 ring-emerald-400 font-bold`
                        : 'border-white/10 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 shrink-0">
                        {stage.step}
                      </span>
                      <div className={`p-1.5 rounded-lg bg-black/40 shrink-0 ${stage.iconColor}`}>
                        {stage.id === 'ingest' && <Server size={16} />}
                        {stage.id === 'bronze' && <Database size={16} />}
                        {stage.id === 'silver' && <Layers size={16} />}
                        {stage.id === 'gold' && <Cpu size={16} />}
                        {stage.id === 'quality' && <ShieldCheck size={16} />}
                        {stage.id === 'serving' && <Table size={16} />}
                      </div>
                      <div className="text-left min-w-0">
                        <div className="font-mono text-xs font-bold text-white truncate">{stage.layer}</div>
                        <div className="text-[10px] text-slate-400 font-sans truncate">{stage.title}</div>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono text-slate-400 uppercase shrink-0 ml-2">
                      {isSelected ? 'ACTIVE' : 'SELECT →'}
                    </span>
                  </div>

                  {/* Downward Arrow left-aligned under the step number */}
                  {!isLast && (
                    <div className="py-1 pl-4 flex items-center">
                      <ArrowDown size={14} className="text-emerald-500/70" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>

      </div>

      {/* Selected Stage Detail Inspector & Code Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 font-mono">
        
        {/* Left: Stage Metadata Panel */}
        <div className="lg:col-span-5 ide-card bg-[#090d16] p-6 space-y-4 border border-emerald-500/20">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className={`text-xs px-2.5 py-1 rounded font-bold uppercase ${activeStageObj.color}`}>
              {activeStageObj.name}
            </span>
            <span className="text-xs text-slate-500">STAGE INSPECTOR</span>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white">{activeStageObj.title}</h4>
            <p className="text-xs text-slate-300 font-sans mt-2 leading-relaxed">
              {activeStageObj.description}
            </p>
          </div>

          {/* Metrics List */}
          <div className="bg-[#0b0f19] p-3 rounded-lg border border-white/5 space-y-2 text-xs">
            <div className="text-[11px] text-slate-500 uppercase font-bold">Stage Metrics & SLAs:</div>
            {Object.entries(activeStageObj.metrics).map(([key, val]) => (
              <div key={key} className="flex justify-between items-center text-slate-300">
                <span className="capitalize text-slate-400">{key}:</span>
                <span className="font-bold text-emerald-400">{val}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack Badges */}
          <div>
            <div className="text-[11px] text-slate-500 uppercase font-bold mb-2">Technologies Used:</div>
            <div className="flex flex-wrap gap-1.5">
              {activeStageObj.tech.map((t) => (
                <span key={t} className="badge-tech text-[11px]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Real Transformation Code Preview */}
        <div className="lg:col-span-7 ide-card bg-[#080c14] border border-emerald-500/20 overflow-hidden flex flex-col justify-between">
          <div className="ide-header bg-[#0b0f19] px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <Code2 size={14} className="text-emerald-400" />
              <span>transformation_script_{activeStageObj.id}.py</span>
            </div>
            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">PySpark / SQL</span>
          </div>

          <div className="p-4 text-xs font-mono text-slate-300 overflow-x-auto bg-[#070a10] h-full flex items-center">
            <pre className="text-emerald-300/90 leading-relaxed whitespace-pre-wrap">
              {activeStageObj.codeSnippet}
            </pre>
          </div>

          <div className="p-3 bg-[#0b0f19] border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={13} className="text-emerald-400" />
              <span>Validated by Great Expectations</span>
            </div>
            <span>Encoding: UTF-8</span>
          </div>
        </div>

      </div>

    </div>
  )
}
