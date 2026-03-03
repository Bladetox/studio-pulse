import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img
            src="/studio-pulse/assets/logo.svg"
            alt="StudioPulse"
            className="h-8 w-auto"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
              e.currentTarget.nextElementSibling!.style.display = 'flex'
            }}
          />
          <span className="text-xl font-bold text-white hidden" style={{display:'none'}}>
            Studio<span className="text-[#a855f7]">Pulse</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-400 hover:text-white text-sm transition-colors">Features</a>
          <a href="#how-it-works" className="text-gray-400 hover:text-white text-sm transition-colors">How It Works</a>
          <a href="#pricing" className="text-gray-400 hover:text-white text-sm transition-colors">Pricing</a>
          <a href="#faq" className="text-gray-400 hover:text-white text-sm transition-colors">FAQ</a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#pricing" className="text-sm text-gray-300 hover:text-white transition-colors">Log in</a>
          <a href="#pricing" className="bg-[#a855f7] hover:bg-[#9333ea] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25">
            Start Free Trial
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-5 h-0.5 bg-white my-1 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/98 border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          <a href="#features" className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#how-it-works" className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>How It Works</a>
          <a href="#pricing" className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="#faq" className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a href="#pricing" className="bg-[#a855f7] text-white text-center py-3 rounded-full font-semibold" onClick={() => setMenuOpen(false)}>Start Free Trial</a>
        </div>
      )}
    </nav>
  )
}
