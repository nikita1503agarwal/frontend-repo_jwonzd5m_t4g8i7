import React, { useEffect, useState } from 'react'

const apiBase = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Services() {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch(`${apiBase}/api/services`).then(r => r.json()).then(setServices).catch(() => setServices([]))
  }, [])

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Služby</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <article key={s.id} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
              {s.image && (
                <div className="h-40 overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-800">{s.title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{s.description}</p>
                <ul className="mt-3 space-y-1 text-sm text-slate-600 list-disc list-inside">
                  {s.features?.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
