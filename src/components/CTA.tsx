export default function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-purple-500/20 bg-gradient-to-br from-purple-900/30 via-violet-900/20 to-[#0a0a0a] p-12 md:p-16 text-center">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/15 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-4">Start Today</p>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Your studio deserves
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">better than guesswork.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
              Join thousands of South African creative pros who are building sustainable, profitable businesses with StudioPulse. Start your free 14-day trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a href="#pricing" className="group inline-flex items-center gap-2 bg-[#a855f7] hover:bg-[#9333ea] text-white font-bold px-10 py-4 rounded-full text-lg transition-all duration-200 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-0.5">
                Start My Free Trial
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <p className="text-gray-500 text-sm">No credit card &bull; 5 min setup &bull; Cancel anytime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
