import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background diagonal bands and textures are handled inside sections */}
      <Hero />

      {/* Reel teaser */}
      <section id="reel" className="relative py-20 md:py-28">
        <div className="absolute inset-0 vhs-grain" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="aspect-video bg-black/60 rounded-lg overflow-hidden print-wear glow">
              <div className="w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,139,167,0.2),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(108,99,255,0.2),transparent_40%)] flex items-center justify-center text-white/80">
                Reel loading…
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Analog Dreams. Modern Stories.</h2>
            <p className="mt-4 text-zinc-200">
              We champion filmmakers who color outside the lines—hybrid docs, scrappy sci‑fi, and character‑first thrillers. Built on trust, grit, and a little bit of cosmic weird.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#contact" className="px-5 py-2.5 rounded-md bg-white/90 text-zinc-900 font-semibold hover:bg-white transition">Submit a Script</a>
              <a href="#slate" className="px-5 py-2.5 rounded-md bg-zinc-900/80 text-white font-semibold hover:bg-zinc-900 transition">View Projects</a>
            </div>
          </div>
        </div>
      </section>

      <Features />
      <Footer />
    </div>
  )
}

export default App
