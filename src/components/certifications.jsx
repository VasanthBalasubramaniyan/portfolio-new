import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Certifications() {
  const [headerRef, isHeaderVisible] = useScrollAnimation(0.2);
  const [cardsRef, isCardsVisible] = useScrollAnimation(0.1);

  return (
    <div id="certifications" className="py-24 px-4 bg-deep-teal-gradient relative overflow-hidden">
      <div className="container max-w-4xl mx-auto">
        <div 
          ref={headerRef}
          className={`fade-in-up text-center mb-16 ${isHeaderVisible ? 'visible' : ''}`}
        >
          <h1 className="text-4xl font-bold text-[#FFFFFF] inline-block relative">
            Certifications & Achievements
            <span className="absolute bottom-[-10px] left-1/4 w-1/2 h-[3px] bg-[#00BCD4]"></span>
          </h1>
        </div>

        <div 
          ref={cardsRef}
          className={`flex justify-center mb-16 ${isCardsVisible ? 'visible' : ''}`}
        >
          <div 
            className="w-full bg-[#0D1B2A] border border-[#1E3A5F] rounded-[14px] p-6 hover:shadow-[0_0_20px_rgba(0,188,212,0.3)] hover:border-[#00BCD4] hover:-translate-y-1 transition-all duration-300 ease-in-out relative"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[rgba(0,188,212,0.15)] text-[#00BCD4] flex items-center justify-center text-xl">
                  🏆
                </div>
                <div>
                  <h2 className="text-[18px] font-bold text-[#FFFFFF]">SQL (Basic)</h2>
                  <p className="text-[13px] text-[#00BCD4]">HackerRank</p>
                </div>
              </div>
              <div className="bg-[rgba(0,188,212,0.15)] border border-[#00BCD4] text-[#00BCD4] text-[11px] rounded-full px-[10px] py-[3px]">
                ✔ Verified
              </div>
            </div>


            {/* Description */}
            <div className="mb-6 mt-4">
              <p className="text-[13px] text-[#90A4AE]">
                Validated proficiency in SQL queries, joins, filtering, and data retrieval.
              </p>
            </div>

            {/* Button */}
            <a 
              href="https://www.hackerrank.com/certificates/iframe/e33eda54cc03"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent border border-[#00BCD4] text-[#00BCD4] px-5 py-2 rounded-lg text-[13px] hover:bg-[#00BCD4] hover:text-[#FFFFFF] hover:shadow-[0_0_12px_rgba(0,188,212,0.4)] transition-all duration-200 ease-in-out"
            >
              🔗 View Full Certificate
            </a>
          </div>
        </div>

        <div className="text-center fade-in-up visible">
          <a 
            href="https://drive.google.com/drive/folders/[YOUR_FOLDER_LINK]" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 btn-primary rounded-lg font-bold tracking-wide ripple-effect"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
            </svg>
            📂 View All Certifications
          </a>
        </div>
      </div>
    </div>
  );
}
