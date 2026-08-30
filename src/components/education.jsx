import { GraduationCap, Award, Calendar, MapPin, CheckCircle2, BookOpen } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 bg-[#06090e] relative border-b border-emerald-500/10">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="mb-12 font-mono">
          <div className="text-xs text-blue-400 font-semibold uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            <span>~/education.edu</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight glowing-title">
            Academic Education
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl font-sans text-sm">
            Formal engineering foundation in Computer Science, Algorithm Design, and Relational Systems.
          </p>
        </div>

        {/* Education Card */}
        <div className="ide-card bg-[#090d16] border border-blue-500/20 p-6 max-w-3xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-5 mb-5 font-mono">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <GraduationCap size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">B.E. Computer Science & Engineering</h3>
                <div className="text-sm text-cyan-400 font-semibold mt-0.5">
                  Nehru Institute of Engineering and Technology
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start sm:items-end text-xs text-slate-400">
              <span className="flex items-center gap-1 font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                <Calendar size={12} /> May 2023 Graduation
              </span>
              <span className="flex items-center gap-1 mt-1 text-slate-400">
                <MapPin size={12} /> Coimbatore, India
              </span>
            </div>
          </div>

          <div className="space-y-4 font-sans text-xs text-slate-300">
            <div className="text-xs font-mono text-slate-400 uppercase font-bold tracking-wider flex items-center gap-2">
              <BookOpen size={14} className="text-blue-400" />
              <span>Core Academic Coursework & Foundations:</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 font-mono text-xs">
              {[
                'Data Structures & Algorithms',
                'Relational Database Management (RDBMS)',
                'Operating Systems & Unix Shell',
                'Computer Networks & Protocols',
                'Software Engineering & OOP',
                'Distributed Computing Concepts'
              ].map((subject) => (
                <div key={subject} className="bg-[#0b0f19] p-3 rounded border border-white/5 flex items-center gap-2 text-slate-200">
                  <CheckCircle2 size={13} className="text-blue-400 shrink-0" />
                  <span>{subject}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
