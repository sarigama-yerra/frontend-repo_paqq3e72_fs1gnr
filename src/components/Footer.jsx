import React from 'react'

function Footer() {
  return (
    <footer className="relative py-12 mt-8">
      <div className="absolute inset-0 vhs-scanlines" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-white/80">© {new Date().getFullYear()} Neon Fable Films</div>
        <div className="text-sm text-white/80">Los Angeles • Portland • Remote</div>
      </div>
    </footer>
  )
}

export default Footer
