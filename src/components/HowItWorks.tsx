export default function HowItWorks() {
  const steps = [
    { step: '01', title: 'Create Your Studio Profile', desc: 'Set up your studio in under 5 minutes. Add your services, pricing, and working hours. No technical knowledge required.' },
    { step: '02', title: 'Log Your Bookings & Payments', desc: 'Record appointments and payments as they happen. The dashboard updates in real-time so you always know where you stand.' },
    { step: '03', title: 'Get Insights That Drive Growth', desc: 'Receive weekly performance summaries, spot your busiest periods, and identify which services generate the most revenue.' },
    { step: '04', title: 'Scale With Confidence', desc: 'Use data to make better decisions — whether that\'s hiring an assistant, raising your prices, or expanding your service menu.' },
  ]
  return (
    <section id="how-it-works" className="py-24 px-6 bg-white/2">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-4">Simple Process</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">Up and running in minutes</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">No complicated setup. No IT degree required. Just sign up and start tracking your studio\'s growth today.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((s, i) => (
            <div key={s.step} className="flex gap-6 p-6 rounded-2xl border border-white/5 bg-white/3 hover:border-purple-500/20 transition-colors">
              <div className="flex-shrink-0">
                <span className="text-5xl font-black text-purple-500/30">{s.step}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
