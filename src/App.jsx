import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Database,
  Layers,
  Settings2,
  BarChart3,
  Cpu,
  Cloud,
  Mail,
  Search,
  Download,
  MapPin,
} from "lucide-react";
import { experiences, skillCategories, education } from "./portfolioData";
import "./App.css";

function Pipeline() {
  return (
    <figure
      className="pipeline"
      aria-label="Illustrative data flow: source, ingest, transform, serve, then analytics and AI applications"
    >
      <figcaption>
        Illustrative data flow <span>01 / Architecture</span>
      </figcaption>
      <div className="pipeline-stages">
        {[
          ["Source", Database],
          ["Ingest", Layers],
          ["Transform", Settings2],
          ["Serve", Database],
        ].map(([label, Icon]) => (
          <div className="flow-node" key={label}>
            <Icon aria-hidden="true" />
            <span>{label}</span>
          </div>
        ))}
      </div>
      <div className="pipeline-outputs">
        <div className="flow-node">
          <BarChart3 />
          <span>Analytics</span>
        </div>
        <div className="flow-node">
          <Cpu />
          <span>AI applications</span>
        </div>
      </div>
      <p className="diagram-note">From raw data to something useful.</p>
    </figure>
  );
}
function Tags({ items }) {
  return (
    <div className="tags">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
export default function App() {
  const [query, setQuery] = useState("");
  const filtered = skillCategories
    .map((g) => ({
      ...g,
      skills: g.skills.filter((s) =>
        s.toLowerCase().includes(query.toLowerCase().trim()),
      ),
    }))
    .filter((g) => g.skills.length);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header wrap">
        <a className="brand" href="#main" aria-label="Vasanth B home">
          <span>VB</span>
          <strong>Vasanth B</strong>
        </a>
        <nav aria-label="Main navigation">
          <a href="#projects">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a className="button small" href="#contact">
            Let’s talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>
      <main id="main" className="wrap">
        <section className="hero" aria-labelledby="hero-title">
          <div>
            <p className="eyebrow">Data engineer · Madurai, India</p>
            <h1 id="hero-title">
              Reliable data.
              <br />
              Meaningful outcomes.
            </h1>
            <p className="hero-description">
              I’m Vasanth, a Data Engineer building scalable pipelines and AI
              applications.
            </p>
            <p className="current-role">
              <span className="status-dot" />
              Currently at Irth Solutions <span>/</span> 4+ years of experience
            </p>
            <div className="actions">
              <a className="button primary" href="#projects">
                View projects <ArrowDown size={17} />
              </a>
              <a
                className="button"
                href="/resume/Vasanth%20-%20Resume.pdf"
                download
              >
                Download résumé <Download size={17} />
              </a>
            </div>
          </div>
          <Pipeline />
        </section>
        <section className="capabilities" aria-label="Areas of focus">
          {[
            [
              Database,
              "Data engineering",
              "Reliable pipelines, from ingestion to analytics-ready datasets.",
            ],
            [
              Cloud,
              "Cloud platforms",
              "Scalable lakehouses and data warehouses on AWS.",
            ],
            [
              Cpu,
              "AI applications",
              "Currently working on an AI chatbot project at Irth Solutions.",
            ],
          ].map(([Icon, title, description]) => (
            <div key={title}>
              <Icon aria-hidden="true" />
              <div>
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </section>
        <section id="projects" className="section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / Selected work</p>
              <h2>Systems with purpose.</h2>
            </div>
            <p>
              Data platforms and applications.
              <br />
              Built around real problems.
            </p>
          </div>
          <div className="project-grid">
            <article className="project-card">
              <div className="project-meta">
                <span>Data engineering</span>
                <span>Globe Infotech</span>
              </div>
              <h3>Banking & healthcare pipelines</h3>
              <p>
                Scalable ETL/ELT pipelines processing 500GB–1TB of daily data
                across banking and healthcare domains.
              </p>
              <div
                className="mini-pipeline"
                aria-label="Source data flows through PySpark to curated data"
              >
                <div>
                  <Database />
                  <span>Source data</span>
                </div>
                <span>→</span>
                <div>
                  <Layers />
                  <span>PySpark</span>
                </div>
                <span>→</span>
                <div>
                  <Database />
                  <span>Curated data</span>
                </div>
              </div>
              <Tags items={["PySpark", "AWS Glue", "Databricks"]} />
              <details className="project-detail">
                <summary>
                  Explore the approach <ArrowUpRight size={16} />
                </summary>
                <p>
                  Near real-time ingestion with Kinesis and CDC, a Bronze /
                  Silver / Gold architecture on Delta Lake, and Airflow
                  orchestration. Automated validation and monitoring support
                  reliable downstream analytics.
                </p>
                <p>
                  <strong>Results:</strong> 30% lower batch latency; release
                  time reduced from days to 15 minutes.
                </p>
              </details>
            </article>
            <article className="project-card">
              <div className="project-meta">
                <span>AI applications</span>
                <span className="status-label">In progress</span>
              </div>
              <h3>AI chatbot project</h3>
              <p>
                Current work at Irth Solutions, contributing as a Data Engineer
                since November 2026.
              </p>
              <div
                className="chat-illustration"
                aria-label="Illustrative chatbot interface, not a live demo"
              >
                <div className="chat-top">
                  <span />
                  <span />
                  <span />
                  <small>Concept illustration</small>
                </div>
                <div className="chat-line">
                  <Cpu />
                  <div>
                    <i />
                    <i />
                  </div>
                </div>
                <div className="chat-reply">
                  <i />
                  <i />
                </div>
                <div className="chat-input">
                  <span />
                  <ArrowUpRight size={17} />
                </div>
              </div>
              <Tags items={["AI chatbot", "Data engineering"]} />
              <p className="project-footnote">
                More project details to follow.
              </p>
            </article>
          </div>
          <details className="lakehouse-detail">
            <summary>
              <div>
                <span className="eyebrow">Portfolio project</span>
                <h3>Healthcare Claims Medallion Lakehouse</h3>
              </div>
              <span className="detail-hint">View architecture +</span>
            </summary>
            <p>
              An end-to-end lakehouse using synthetic healthcare datasets
              covering patients, providers, appointments, diagnoses, treatments,
              and billing claims. Designed to demonstrate batch and streaming
              ingestion, schema enforcement, SCD Type 2 tracking, and automated
              data quality checks.
            </p>
            <div className="architecture-layers">
              {[
                ["Ingest", "Kinesis + CDC"],
                ["Store", "Delta Lake / S3"],
                ["Transform", "PySpark + dbt"],
                ["Serve", "Redshift / Athena"],
              ].map(([label, value]) => (
                <div key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
            <Tags
              items={[
                "Apache Airflow",
                "Great Expectations",
                "AWS EMR",
                "Docker",
                "Terraform",
              ]}
            />
          </details>
        </section>
        <section id="experience" className="section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / Experience</p>
              <h2>A foundation in data.</h2>
            </div>
            <p>
              4+ years engineering pipelines,
              <br />
              lakehouses, and cloud data warehouses.
            </p>
          </div>
          <div className="timeline">
            {experiences.map((exp, i) => (
              <details
                className="experience-row"
                key={exp.id}
                open={i === 0 ? true : undefined}
              >
                <summary>
                  <span className={`timeline-dot ${i === 0 ? "active" : ""}`} />
                  <strong>{exp.company}</strong>
                  <span>{exp.role}</span>
                  <span className="period">{exp.period}</span>
                  <span className="expand-icon" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="experience-body">
                  <p className="project-name">{exp.project}</p>
                  {exp.domain && <p>{exp.domain}</p>}
                  <ul>
                    {exp.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  {exp.tech && <Tags items={exp.tech} />}
                </div>
              </details>
            ))}
          </div>
        </section>
        <section id="skills" className="section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / Toolkit</p>
              <h2>The tools behind the work.</h2>
            </div>
            <label className="skill-search">
              <Search size={18} />
              <span className="sr-only">Search skills</span>
              <input
                type="search"
                placeholder="Find a skill…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </label>
          </div>
          <div className="skill-grid" aria-live="polite">
            {filtered.length ? (
              filtered.map((g) => (
                <article key={g.category}>
                  <h3>{g.category}</h3>
                  <Tags items={g.skills} />
                </article>
              ))
            ) : (
              <p>No skills match “{query}”. Try Python, AWS, or SQL.</p>
            )}
          </div>
        </section>
        <section id="about" className="section about-grid">
          <div>
            <p className="eyebrow">04 / A little about me</p>
            <h2>
              Thoughtful systems.
              <br />
              Practical engineering.
            </h2>
            <p>
              I’m a Data Engineer based in Madurai with 4+ years of experience
              across banking and healthcare data platforms. My work spans
              scalable ETL/ELT pipelines, lakehouse architecture, dimensional
              modelling, and data quality.
            </p>
            <p>
              At Irth Solutions, I’m now working on an AI chatbot project. I
              enjoy turning complex data into trusted, useful foundations for
              applications and decisions.
            </p>
            <span className="location">
              <MapPin size={16} /> Madurai, India
            </span>
          </div>
          <div id="education">
            <p className="eyebrow">Education</p>
            {education.map((item) => (
              <details className="education-item" key={item.id}>
                <summary>
                  <h3>{item.degree}</h3>
                  <p>{item.institution}</p>
                  <span>
                    {item.period} · {item.location}
                  </span>
                </summary>
                <Tags items={item.subjects} />
              </details>
            ))}
          </div>
        </section>
      </main>
      <footer id="contact" className="wrap">
        <div className="footer-main">
          <div>
            <p className="eyebrow">Let’s connect</p>
            <h2>Let’s build something useful.</h2>
          </div>
          <div className="social-links">
            <a href="mailto:get.vasanth.b@gmail.com">
              <Mail size={18} /> Email
            </a>
            <a
              href="https://linkedin.com/in/vasanthbalasubramaniyan"
              target="_blank"
              rel="noreferrer"
            >
              <ArrowUpRight size={18} /> LinkedIn
            </a>
            <a
              href="https://github.com/VasanthBalasubramaniyan"
              target="_blank"
              rel="noreferrer"
            >
              <ArrowUpRight size={18} /> GitHub
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Vasanth B</span>
          <a href="tel:+919566678426">+91 9566678426</a>
          <a href="#main">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
