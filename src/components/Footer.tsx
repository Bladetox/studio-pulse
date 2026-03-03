export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/studio-pulse/assets/logo.svg" alt="StudioPulse" className="h-8 w-auto" onError={(e) => { e.currentTarget.style.display='none'; const next = e.currentTarget.nextElementSibling as HTMLElement; if(next) next.style.display='block'; }} />
              <span className="text-xl font-bold text-white" style={{display:'none'}}>Studio<span className="text-[#a855f7]">Pulse</span></span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">The performance dashboard built for South Africa\'s creative professionals.</p>
            <p className="text-gray-600 text-xs">Made with ♥ in South Africa</p>
          </div>
          {/* Product */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-3">
              {['Features', 'How It Works', 'Pricing', 'Changelog', 'Roadmap'].map(l => (
                <li key={l}><a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-3">
              {['About', 'Blog', 'Careers', 'Press', 'Contact'].map(l => (
                <li key={l}><a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Service', 'POPIA Compliance', 'Cookie Policy'].map(l => (
                <li key={l}><a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} StudioPulse. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {['Twitter', 'Instagram', 'LinkedIn', 'TikTok'].map(s => (
              <a key={s} href="#" className="text-gray-600 hover:text-white text-sm transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
