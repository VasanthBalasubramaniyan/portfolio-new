import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Certifications() {
  const [headerRef, isHeaderVisible] = useScrollAnimation(0.2);
  const [cardsRef, isCardsVisible] = useScrollAnimation(0.15);

  return (
    <section id="certifications" className="py-28 px-4 bg-dots-pattern bg-[var(--bg-color)] relative overflow-hidden transition-colors duration-350 border-b border-[var(--surface-border)]">
      
      {/* Mesh decorative orb for certifications */}
      <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-[rgba(16,185,129,0.03)] rounded-full blur-[110px] pointer-events-none"></div>

      <div className="container max-w-4xl mx-auto">
        <div 
          ref={headerRef}
          className={`fade-in-up text-center mb-20 ${isHeaderVisible ? 'visible' : ''}`}
        >
          <h1 className="text-4xl font-extrabold glowing-title-center text-[var(--text-color)]">
            Certifications & Achievements
          </h1>
        </div>

        <div 
          ref={cardsRef}
          className={`flex justify-center mb-14 ${isCardsVisible ? 'visible' : ''}`}
        >
          <div 
            className={`w-full glass-card rounded-2xl p-7 relative fade-in-up delay-100 ${
              isCardsVisible ? 'visible' : ''
            }`}
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--accent-bg-soft)] border border-[rgba(16,185,129,0.18)] text-[var(--accent-color)] flex items-center justify-center text-xl shadow-sm">
                  🏆
                </div>
                <div>
                  <h2 className="text-[19px] font-black text-[var(--text-color)]">SQL (Basic)</h2>
                  <p className="text-[14px] font-bold text-[var(--accent-color)]">HackerRank</p>
                </div>
              </div>
              <div className="bg-[var(--accent-bg-soft)] border border-[var(--accent-color)] text-[var(--accent-color)] text-[12px] font-bold rounded-xl px-3 py-1 shadow-sm self-start sm:self-auto">
                ✔ Verified
              </div>
            </div>

            {/* Description */}
            <div className="mb-6 mt-4">
              <p className="text-[14.5px] text-[var(--text-secondary)] leading-relaxed">
                Validated proficiency in SQL queries, joining relational datasets, subqueries, aggregation, and clean data retrieval techniques.
              </p>
            </div>

            {/* View Full Certificate Button */}
            <a 
              href="https://www.hackerrank.com/certificates/iframe/e33eda54cc03"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-green px-5 py-2.5 rounded-xl text-[13px] font-bold inline-flex items-center gap-1.5 cursor-pointer transition-all shadow-sm"
            >
              <span>🔗</span> View Full Certificate
            </a>
          </div>
        </div>

        <div className="text-center fade-in-up visible delay-200">
          <a 
            href="https://drive.google.com/drive/folders/1H0YV2z5b6B9FomM3gXq23Jc6wV3c0v1a" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 btn-glowing-green rounded-xl font-bold tracking-wide shadow-md cursor-pointer transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
            </svg>
            📂 View All Certifications
          </a>
        </div>
      </div>
    </section>
  );
}
