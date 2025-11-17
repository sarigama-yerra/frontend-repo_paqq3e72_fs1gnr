import React from 'react'

function RetroStripes() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Diagonal pastel base */}
      <div
        className="absolute -inset-20 rotate-[-18deg] opacity-80"
        style={{
          backgroundImage:
            'linear-gradient(135deg, #fce7f3 0%, #e0f2fe 50%, #f1f5f9 100%)',
          filter: 'saturate(0.9) contrast(1.05)'
        }}
      />

      {/* High-saturation stripes */}
      <div
        className="absolute -inset-24 rotate-[-18deg] mix-blend-multiply opacity-70"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, #0000 0 38px, #fa8072 38px 44px, #ffd166 44px 50px, #06d6a0 50px 56px, #118ab2 56px 62px, #ef476f 62px 68px)'
        }}
      />

      {/* Print wear / paper grain overlay */}
      <div className="absolute inset-0 vhs-grain" />
      {/* Scanlines */}
      <div className="absolute inset-0 vhs-scanlines" />
    </div>
  )
}

export default RetroStripes
