import React from 'react'

function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -inset-20 rotate-[-18deg] opacity-90"
          style={{
            backgroundImage:
              'linear-gradient(135deg, #fde2e4 0%, #cfe8ff 45%, #e2f0cb 80%, #f7f7ff 100%)',
            filter: 'saturate(0.9)'
          }}
        />
        <div className="absolute -inset-24 rotate-[-18deg] mix-blend-multiply opacity-70"
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, #0000 0 36px, #ff8ba7 36px 42px, #ffd166 42px 48px, #00f5d4 48px 54px, #06d6a0 54px 60px, #6c63ff 60px 66px)'
          }}
        />
        <div className="absolute inset-0 vhs-grain" />
        <div className="absolute inset-0 vhs-scanlines" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight drop-shadow-[0_2px_0_rgba(0,0,0,0.4)]">
            <span className="block text-white">NEON FABLE</span>
            <span className="block bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(90deg,#ff8ba7,#ffd166,#00f5d4,#6c63ff)'
              }}
            >
              Indie Film Studio
            </span>
          </h1>
          <p className="mt-6 text-zinc-100/90 text-lg md:text-xl max-w-2xl mx-auto print-wear">
            An offbeat house crafting analog dreams, midnight sci‑fi, and sun‑bleached mysteries. Retro soul. Modern craft.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a href="#reel" className="px-6 py-3 rounded-md bg-zinc-900/80 hover:bg-zinc-900 text-white font-semibold glow transition">
              Watch the Reel
            </a>
            <a href="#slate" className="px-6 py-3 rounded-md bg-white/80 hover:bg-white text-zinc-900 font-semibold transition">
              Our Slate
            </a>
          </div>
        </div>
      </div>

      {/* Corner VHS timestamp */}
      <div className="absolute top-6 left-6 text-xs tracking-widest text-white/80 font-mono select-none">
        VHS • SP • 12:00AM • 1987
      </div>
    </section>
  )
}

export default Hero
