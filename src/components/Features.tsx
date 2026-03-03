export default function Features() {
  const features = [
    {
      icon: '📊',
      title: 'Revenue Dashboard',
      desc: 'See exactly how much you earn daily, weekly and monthly. Spot trends, track your best services, and understand what\'s driving growth.'
    },
    {
      icon: '📅',
      title: 'Smart Booking Management',
      desc: 'Manage all appointments in one place. Set your hours, reduce no-shows with automated reminders, and fill your calendar faster.'
    },
    {
      icon: '👥',
      title: 'Client Intelligence',
      desc: 'Know your top clients, their preferences, visit frequency and lifetime value. Build relationships that turn one-time visits into loyal regulars.'
    },
    {
      icon: '💸',
      title: 'Payment Tracking',
      desc: 'Log every transaction, monitor outstanding invoices and get a crystal-clear picture of your cash flow — all without spreadsheets.'
    },
    {
      icon: '📈',
      title: 'Performance Analytics',
      desc: 'Track KPIs that actually matter: booking rate, rebooking rate, average spend, and peak hours — so you can work smarter, not harder.'
    },
    {
      icon: '🔔',
      title: 'Automated Reminders',
      desc: 'Send automatic appointment reminders via WhatsApp or SMS. Reduce no-shows by up to 60% and keep your schedule profitable.'
    },
  ]

  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-4">Everything You Need</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Your business, fully visible.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stop guessing. Start knowing. StudioPulse gives creative professionals the exact tools corporate businesses use — built for the way you work.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group p-6 rounded-2xl border border-white/5 bg-white/3 hover:bg-white/6 hover:border-purple-500/30 transition-all duration-300">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
