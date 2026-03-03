export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-card to-dark">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="inline-block mb-4 px-4 py-2 bg-brand-pink/20 rounded-full text-brand-pink text-sm font-semibold">
          FOR CREATIVE PROS
        </div>
        <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 text-gradient">
          Your Art Builds
          <br />
          Confidence. We Build Your Business.
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          The performance dashboard for barbers, beauticians, photographers, tattoo artists, and creative pros who turn talent into predictable income.
        </p>
        <button className="px-8 py-4 bg-gradient-brand text-white font-bold rounded-lg hover:scale-105 transition-transform">
          See My Studio Come Alive
        </button>
        <div className="mt-12 text-sm text-gray-400">
          5 min setup
        </div>
      </div>
    </section>
  )
}
