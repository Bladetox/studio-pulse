import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-badge', { opacity: 0, y: -20, duration: 0.6, delay: 0.2 })
      gsap.from('.hero-h1', { opacity: 0, y: 40, duration: 0.9, delay: 0.4, ease: 'power3.out' })
      gsap.from('.hero-sub', { opacity: 0, y: 30, duration: 0.7, delay: 0.7 })
      gsap.from('.hero-cta', { opacity: 0, y: 20, duration: 0.6, delay: 1.0 })
      gsap.from('.hero-stats', { opacity: 0, y: 20, duration: 0.7, delay: 1.2 })
      gsap.from('.hero-dashboard', { opacity: 0, y: 60, scale: 0.95, duration: 1.2, delay: 0.8, ease: 'power3.out' })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-violet-700/8 blur-[100px]" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="hero-badge inline-flex items-center gap-2 bg-white/5 border border-purple-500/30 rounded-full px-4 py-2 text-sm text-purple-300 mb-8">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          FOR CREATIVE PROS
        </div>
        <h1 className="hero-h1 text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6">
          Your Art Builds Confidence.
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-300 bg-clip-text text-transparent">
            We Build Your Business.
          </span>
        </h1>
        <p className="hero-sub text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
          The performance dashboard for barbers, beauticians, photographers, tattoo artists,
          and creative pros who turn talent into predictable income.
        </p>
        <div className="hero-cta flex flex-col sm:flex-row gap-4 items-center justify-center mb-6">
          <a href="#pricing" className="group inline-flex items-center gap-2 bg-[#a855f7] hover:bg-[#9333ea] text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-200 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-0.5">
            See My Studio Come Alive
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
          <a href="#how-it-works" className="inline-flex items-center gap-2 text-gray-300 hover:text-white font-medium px-6 py-4 rounded-full border border-white/10 hover:border-white/30 transition-all duration-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Watch 2-min Demo
          </a>
        </div>
        <p className="hero-stats text-sm text-gray-500 mb-16">
          <span className="text-gray-300 font-semibold">5 min setup</span> &bull; No credit card required &bull; Cancel anytime
        </p>
        <div className="hero-dashboard relative mx-auto max-w-4xl">
          <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden shadow-2xl">
            <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center gap-3">
              <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-500/60" /><div className="w-3 h-3 rounded-full bg-yellow-500/60" /><div className="w-3 h-3 rounded-full bg-green-500/60" /></div>
              <div className="flex-1 bg-white/5 rounded-md px-3 py-1 text-xs text-gray-500 text-center">app.studiopulse.io/dashboard</div>
            </div>
            <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[{label:'Monthly Revenue',value:'R 24,800',change:'+18%'},{label:'Bookings',value:'47',change:'+12%'},{label:'Client Retention',value:'89%',change:'+4%'}].map((s)=>(
                <div key={s.label} className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <p className="text-xs text-gray-400 mb-2">{s.label}</p>
                  <p className="text-2xl font-bold text-white">{s.value}</p>
                  <p className="text-xs text-green-400 font-medium mt-1">{s.change} vs last month</p>
                </div>
              ))}
            </div>
            <div className="px-6 pb-6">
              <div className="bg-white/5 rounded-xl border border-white/5 p-4">
                <div className="flex items-end gap-1.5 h-24">
                  {[40,55,45,70,60,80,75,90,85,95,88,100].map((h,i)=>(
                    <div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-purple-600 to-purple-400/50" style={{height:`${h}%`}} />
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-3 text-center">Revenue trend — last 12 months</p>
              </div>
            </div>
          </div>
          <div className="absolute -inset-4 bg-purple-600/10 rounded-3xl blur-2xl -z-10" />
        </div>
      </div>
    </section>
  )
}
