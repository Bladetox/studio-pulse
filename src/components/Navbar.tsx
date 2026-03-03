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
              e.currentTarget.style.display = 'none';
              const sibling = e.currentTarget.nextElementSibling as HTMLElement | null;
              if (sibling) sibling.style.display = 'flex';
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
          <a href="#pricing" className="text-gray-400 hover:text-white text-sm transition-colors">Log in</a>
          <a href="#pricing" className="bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors">Start Free Trial</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-white mb-1"></div>
          <div className="w-5 h-0.5 bg-white mb-1"></div>
          <div className="w-5 h-0.5 bg-white"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-md border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          <a href="#features" className="text-gray-400 hover:text-white text-sm" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#how-it-works" className="text-gray-400 hover:text-white text-sm" onClick={() => setMenuOpen(false)}>How It Works</a>
          <a href="#pricing" className="text-gray-400 hover:text-white text-sm" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="#faq" className="text-gray-400 hover:text-white text-sm" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a href="#pricing" className="bg-purple-600 text-white text-sm font-semibold px-5 py-2 rounded-full text-center" onClick={() => setMenuOpen(false)}>Start Free Trial</a>
        </div>
      )}
    </nav>
  )
}
