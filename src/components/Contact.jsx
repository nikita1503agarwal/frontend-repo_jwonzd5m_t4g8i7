import React, { useState } from 'react'

const apiBase = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service_type: '', message: '', location: '', budget_range: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading', message: 'Sending...' })
    try {
      const res = await fetch(`${apiBase}/api/lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok) {
        setStatus({ state: 'success', message: 'Thanks! I will get back to you shortly.' })
        setForm({ name: '', email: '', phone: '', service_type: '', message: '', location: '', budget_range: '' })
      } else {
        setStatus({ state: 'error', message: data.detail || 'Something went wrong.' })
      }
    } catch (err) {
      setStatus({ state: 'error', message: err.message })
    }
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Get a free quote</h2>
        <p className="text-slate-600 mb-6">Tell me about your project and I'll respond the same day.</p>
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
          <input className="border border-slate-300 rounded-lg p-3" name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
          <input className="border border-slate-300 rounded-lg p-3" type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
          <input className="border border-slate-300 rounded-lg p-3" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" />
          <input className="border border-slate-300 rounded-lg p-3" name="location" value={form.location} onChange={handleChange} placeholder="Location (City)" />
          <select className="border border-slate-300 rounded-lg p-3" name="service_type" value={form.service_type} onChange={handleChange}>
            <option value="">Service Type</option>
            <option value="Carpet">Carpet</option>
            <option value="Hardwood">Hardwood</option>
            <option value="Laminate">Laminate</option>
            <option value="Vinyl">Vinyl</option>
            <option value="Tile">Tile</option>
            <option value="Other">Other</option>
          </select>
          <input className="border border-slate-300 rounded-lg p-3" name="budget_range" value={form.budget_range} onChange={handleChange} placeholder="Budget Range (e.g. $2k - $5k)" />
          <textarea className="md:col-span-2 border border-slate-300 rounded-lg p-3" name="message" value={form.message} onChange={handleChange} placeholder="Project details" rows={5} />
          <div className="md:col-span-2 flex items-center gap-4">
            <button className="px-5 py-3 rounded-lg bg-amber-600 text-white hover:bg-amber-700 shadow" disabled={status?.state === 'loading'}>
              {status?.state === 'loading' ? 'Sending...' : 'Send request'}
            </button>
            {status && (
              <span className={
                status.state === 'success' ? 'text-green-700' : status.state === 'error' ? 'text-red-700' : 'text-slate-600'
              }>
                {status.message}
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
