import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const [sectionRef, isSectionVisible] = useScrollAnimation(0.2);

  const highlights = [
    {
      title: "ETL Pipeline Development",
      desc: "Batch processing with Sqoop, Hive & Apache Spark",
      icon: "⚡"
    },
    {
      title: "Python & SQL",
      desc: "Data transformation, cleaning, and modeling",
      icon: "🐍"
    },
    {
      title: "AWS Cloud",
      desc: "EC2, S3, IAM, VPC — deployed & managed environments",
      icon: "☁️"
    },
    {
      title: "Big Data Stack",
      desc: "Hadoop, HDFS, PySpark, Spark SQL",
      icon: "📊"
    },
    {
      title: "Database Management",
      desc: "MySQL, data warehousing, data modeling",
      icon: "🗄️"
    },
    {
      title: "Tools & Workflow",
      desc: "Git, Jira, TablePlus, Cron Scheduling",
      icon: "🔧"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-dots-pattern bg-[#F5F5F5] text-[#212121] relative border-t border-b border-gray-200">
      <div className="container" ref={sectionRef}>
        
        <div className={`fade-in-up mb-12 text-center md:text-left ${isSectionVisible ? 'visible' : ''}`}>
          <h1 className="text-4xl font-bold inline-block relative text-[#0A1628]">
            About Me
            <span className="absolute bottom-[-10px] left-0 w-1/2 h-[4px] bg-[#00BCD4]"></span>
          </h1>
        </div>

        <div className={`flex flex-col md:flex-row gap-12 fade-in-up ${isSectionVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
          
          {/* Left Column: Summary */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <p className="text-lg leading-relaxed mb-6 text-[#212121]">
              I'm Vasanth B, a Data Engineer with hands-on experience in SQL, Python, and AWS, currently building batch ETL pipelines using Sqoop, Hive, and Apache Spark. I'm skilled in data processing, transformation, and working with structured datasets at scale.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-[#212121]">
              Currently deepening my expertise through an AWS Cloud Internship at Scope Tech Software Solutions, where I work with EC2, S3, IAM, and VPC. I'm passionate about building scalable data pipelines and solving real-world data challenges.
            </p>
            
            <div className="inline-flex items-center gap-3 bg-[#E0F7FA] text-[#00838F] px-6 py-3 rounded-full shadow-sm border-l-4 border-l-[#00BCD4] self-start">
              <span className="text-xl">📍</span>
              <span className="font-semibold">Tamil Nadu, India | Open to Remote / Relocation</span>
            </div>
          </div>

          {/* Right Column: Highlights */}
          <div className="md:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 h-full">
              <h2 className="text-2xl font-bold mb-6 text-[#0A1628]">What I Bring</h2>
              <ul className="space-y-6">
                {highlights.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="text-[#00BCD4] mt-1 min-w-[24px]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#1E3A5F]">{item.title}</h3>
                      <p className="text-[#616161] mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}