import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">O mně</h2>
          <p className="text-slate-700 leading-relaxed">
            Jsem poctivý, jednočlenný podlahář srdcem pro detail. Obsluhuji domácnosti i malé provozovny v okolí.
            Vše řeším osobně — od zaměření a výběru materiálů po pokládku a finální úpravy.
            Počítejte s dochvilností, čistou prací a férovým poradenstvím podle vašeho prostoru i rozpočtu.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-700">
            <li className="bg-white border border-slate-200 rounded-lg p-3">Bytové i komerční prostory</li>
            <li className="bg-white border border-slate-200 rounded-lg p-3">Dodávka a montáž nebo jen montáž</li>
            <li className="bg-white border border-slate-200 rounded-lg p-3">Termíny i večer a o víkendu</li>
            <li className="bg-white border border-slate-200 rounded-lg p-3">Odvoz odpadu v ceně</li>
          </ul>
        </div>
        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
          <img src="https://images.unsplash.com/photo-1731185752376-a4cf3e8556fa?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGbG9vcmluZyUyMHdvcmt8ZW58MHwwfHx8MTc2MzQ2NTY2NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Podlahářská práce" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}
