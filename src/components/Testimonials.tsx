export default function Testimonials() {
  const testimonials = [
    {
      name: 'Thabo Mokoena',
      role: 'Barber, Johannesburg',
      avatar: 'TM',
      text: 'Before StudioPulse I had no idea which days were my busiest or which cuts made the most money. Now I can see everything at a glance. My revenue went up 23% in 3 months just by adjusting my schedule based on the data.'
    },
    {
      name: 'Zanele Dube',
      role: 'Nail Technician, Cape Town',
      avatar: 'ZD',
      text: 'The client retention feature is a game changer. I can see which clients haven\'t booked in a while and reach out to them. My rebooking rate has doubled since I started using the platform.'
    },
    {
      name: 'Sipho Nkosi',
      role: 'Tattoo Artist, Durban',
      avatar: 'SN',
      text: 'I used to keep everything in my head and a notebook. StudioPulse changed everything. I know exactly what I\'m earning, which designs are most popular, and I finally feel like a proper business owner.'
    },
    {
      name: 'Ayesha Patel',
      role: 'Makeup Artist, Pretoria',
      avatar: 'AP',
      text: 'Setting up took less than 10 minutes and immediately I could see patterns I had never noticed. I\'ve been able to increase my prices confidently because the data shows my clients keep coming back.'
    },
    {
      name: 'Lungelo Mthembu',
      role: 'Photographer, Sandton',
      avatar: 'LM',
      text: 'As a photographer, I never thought I needed a dashboard like this. But tracking which shoots generate the most referrals has helped me focus on the right clients. Absolutely love it.'
    },
    {
      name: 'Fatima Adams',
      role: 'Beautician, Stellenbosch',
      avatar: 'FA',
      text: 'The payment tracking alone is worth it. No more chasing invoices or wondering who still owes me. Everything is clear and organised. My accountant is also very happy now!'
    },
  ]
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-4">Real Results</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">Creative pros love StudioPulse</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">Join thousands of South African creatives who turned their passion into a data-driven business.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="p-6 rounded-2xl border border-white/5 bg-white/3 flex flex-col gap-4">
              <div className="flex gap-1">
                {[1,2,3,4,5].map(s => <span key={s} className="text-yellow-400 text-sm">★</span>)}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-600/40 flex items-center justify-center text-sm font-bold text-purple-200">{t.avatar}</div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
