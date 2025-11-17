import React from 'react'

const features = [
  {
    title: 'VHS-grade Texture',
    desc: 'Faux wear, scanlines, and chroma bleed for a tactile analog feel.',
  },
  {
    title: 'Cinematic Colors',
    desc: 'Muted pastels collide with neon stripes for a dreamy 80s palette.',
  },
  {
    title: 'Indie Spirit',
    desc: 'Stories with a heartbeat—handmade sci‑fi, lo‑fi mystery, and myth.',
  },
]

function Features() {
  return (
    <section id="slate" className="relative py-20 md:py-28">
      <div className="absolute inset-0 vhs-grain" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white/90 text-zinc-900 rounded-lg p-6 print-wear">
              <h3 className="text-xl font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-zinc-700">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
