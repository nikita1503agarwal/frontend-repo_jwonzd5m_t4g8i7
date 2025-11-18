import React from 'react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-amber-600 text-white font-bold shadow-sm">F</span>
          <div className="leading-tight">
            <p className="text-slate-900 font-semibold">Floorplan Flooring</p>
            <p className="text-xs text-slate-500">Carpet • Wood • Laminate • Vinyl • Tile</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#services" className="hover:text-amber-700">Services</a>
          <a href="#about" className="hover:text-amber-700">About</a>
          <a href="#contact" className="hover:text-amber-700">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="tel:+10000000000" className="hidden sm:inline-block px-3 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50">Call</a>
          <a href="#contact" className="px-4 py-2 rounded-lg bg-amber-600 text-white hover:bg-amber-700 shadow">Get a Quote</a>
        </div>
      </div>
    </header>
  )
}
