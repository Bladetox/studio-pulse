import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Lenis from 'lenis'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import LatestArticles from './components/LatestArticles'
import ArtCategory from './components/ArtCategory'
import Lifestyle from './components/Lifestyle'
import Design from './components/Design'
import GreenTribe from './components/GreenTribe'
import Authors from './components/Authors'
import InstagramGallery from './components/InstagramGallery'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis()
    lenisRef.current = lenis

    lenis.on('scroll', () => ScrollTrigger.update())

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove((time) => lenis.raf(time * 1000))
    }
  }, [])

  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <LatestArticles />
        <ArtCategory />
        <Lifestyle />
        <Design />
        <GreenTribe />
        <Authors />
        <InstagramGallery />
      </main>
      <Footer />
    </div>
  )
}
