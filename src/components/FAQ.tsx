import { useState } from 'react'

const faqs = [
  { q: 'Do I need any technical knowledge to use StudioPulse?', a: 'Not at all. StudioPulse is designed specifically for creative professionals, not developers. If you can use WhatsApp, you can use StudioPulse. Setup takes under 5 minutes.' },
  { q: 'Is there a free trial?', a: 'Yes! Every plan includes a 14-day free trial with no credit card required. You get full access to all features during your trial period so you can see the value before committing.' },
  { q: 'Can I use StudioPulse on my phone?', a: 'Absolutely. StudioPulse is fully mobile-optimised and works perfectly on any smartphone. There\'s also a dedicated mobile app available for iOS and Android.' },
  { q: 'What happens to my data if I cancel?', a: 'Your data is always yours. If you cancel, you have 30 days to export all your client and revenue data in CSV format. We will never hold your data hostage.' },
  { q: 'Can I manage multiple locations or staff?', a: 'Yes, the Empire plan supports up to 5 staff profiles and multiple service locations. Each team member gets their own login with customisable access levels.' },
  { q: 'Do you support South African payment methods?', a: 'Yes. StudioPulse integrates with PayFast, Yoco, and SnapScan, making it easy to track payments from all the popular South African payment systems your clients already use.' },
  { q: 'Is my data secure?', a: 'We use bank-level encryption (AES-256) for all data, and all traffic is secured via TLS. Your client data and financial records are stored on South African servers compliant with POPIA.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">Questions? We\'ve got answers.</h2>
          <p className="text-gray-400 text-lg">Still not sure? Reach out to our team — we respond within 2 hours.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="border border-white/5 rounded-2xl bg-white/3 overflow-hidden">
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-white font-semibold text-sm leading-relaxed">{f.q}</span>
                <svg className={`w-5 h-5 text-purple-400 flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-400 text-sm leading-relaxed">{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
