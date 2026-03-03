import { useState } from 'react'

export default function Pricing() {
  const [annual, setAnnual] = useState(false)
  const plans = [
    {
      name: 'Starter',
      monthly: 199,
      annual: 159,
      desc: 'Perfect for solo creatives just getting started',
      features: ['Revenue dashboard', 'Up to 50 bookings/month', 'Client list (up to 100)', 'Payment tracking', 'Mobile app access', 'Email support'],
      cta: 'Start Free Trial',
      highlight: false,
    },
    {
      name: 'Studio',
      monthly: 399,
      annual: 319,
      desc: 'For serious pros ready to scale their business',
      features: ['Everything in Starter', 'Unlimited bookings', 'Unlimited clients', 'WhatsApp reminders', 'Advanced analytics', 'Performance reports', 'Priority support'],
      cta: 'Start Free Trial',
      highlight: true,
      badge: 'Most Popular',
    },
    {
      name: 'Empire',
      monthly: 699,
      annual: 559,
      desc: 'For multi-staff studios and growing empires',
      features: ['Everything in Studio', 'Up to 5 staff profiles', 'Team performance tracking', 'Custom branding', 'API access', 'Dedicated account manager', '24/7 support'],
      cta: 'Start Free Trial',
      highlight: false,
    },
  ]

  return (
    <section id="pricing" className="py-24 px-6 bg-white/2">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-4">Transparent Pricing</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">Invest in your growth</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">All plans include a 14-day free trial. No credit card required.</p>
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full p-1">
            <button onClick={() => setAnnual(false)} className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${!annual ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}>Monthly</button>
            <button onClick={() => setAnnual(true)} className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${annual ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}>
              Annual <span className="text-green-400 text-xs ml-1">Save 20%</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`relative rounded-2xl p-8 border flex flex-col ${
              p.highlight
                ? 'bg-purple-600/10 border-purple-500/50 shadow-2xl shadow-purple-500/20'
                : 'bg-white/3 border-white/5'
            }`}>
              {p.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">{p.badge}</div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">{p.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{p.desc}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-gray-400 text-sm">R</span>
                  <span className="text-4xl font-black text-white">{annual ? p.annual : p.monthly}</span>
                  <span className="text-gray-400 text-sm">/mo</span>
                </div>
                {annual && <p className="text-green-400 text-xs mt-1">Billed R{p.annual * 12}/year</p>}
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#" className={`text-center py-3.5 rounded-full font-bold text-sm transition-all duration-200 ${
                p.highlight
                  ? 'bg-purple-600 hover:bg-purple-500 text-white hover:shadow-lg hover:shadow-purple-500/30'
                  : 'border border-white/20 text-white hover:border-purple-500/50 hover:bg-purple-600/10'
              }`}>{p.cta}</a>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 text-sm mt-8">All prices in South African Rand (ZAR). Cancel anytime.</p>
      </div>
    </section>
  )
}
