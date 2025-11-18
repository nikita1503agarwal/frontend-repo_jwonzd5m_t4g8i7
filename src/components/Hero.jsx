import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-slate-50">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-40" />
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Local flooring specialist for carpets, wood and more
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            One skilled craftsman delivering beautiful floors with care and precision.
            From cozy carpets to timeless hardwood and durable vinyl, get expert advice and installation.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 rounded-lg bg-amber-600 text-white hover:bg-amber-700 shadow">Request a quote</a>
            <a href="#services" className="px-5 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50">View services</a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
            <div>
              <p className="font-semibold text-slate-800">10+ years experience</p>
              <p>Fully insured</p>
            </div>
            <div>
              <p className="font-semibold text-slate-800">Free measurements</p>
              <p>No obligation quotes</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <img src="https://images.unsplash.com/photo-1731185752376-a4cf3e8556fa?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGbG9vcmluZyUyMHdvcmt8ZW58MHwwfHx8MTc2MzQ2NTY2NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Wooden floor" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow p-4 border border-slate-200">
            <p className="text-sm font-medium text-slate-700">Trusted local, one-man service</p>
          </div>
        </div>
      </div>
    </section>
  )
}
