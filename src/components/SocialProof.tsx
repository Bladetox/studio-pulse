export default function SocialProof() {
  const pros = ['Barbers', 'Beauticians', 'Photographers', 'Tattoo Artists', 'Nail Techs', 'Personal Trainers', 'Makeup Artists', 'Hair Stylists']
  return (
    <section className="py-16 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-10">
        <p className="text-gray-500 text-sm uppercase tracking-widest">Trusted by creative professionals across South Africa</p>
      </div>
      <div className="relative">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {[...pros,...pros].map((p,i) => (
            <span key={i} className="inline-flex items-center gap-3 text-gray-400 text-lg font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              {p}
            </span>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { number: '2,400+', label: 'Creative Pros', desc: 'using StudioPulse daily' },
          { number: 'R 18M+', label: 'Revenue Tracked', desc: 'across all studios' },
          { number: '94%', label: 'Retention Rate', desc: 'clients stay longer with insights' },
        ].map((s) => (
          <div key={s.number} className="text-center p-6 rounded-2xl bg-white/3 border border-white/5">
            <p className="text-4xl font-black text-white mb-1">{s.number}</p>
            <p className="text-purple-400 font-semibold text-sm mb-1">{s.label}</p>
            <p className="text-gray-500 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
