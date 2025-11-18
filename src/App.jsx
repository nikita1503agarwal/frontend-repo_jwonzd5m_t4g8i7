import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-600 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Floorplan Podlahy — Všechna práva vyhrazena.</p>
          <p className="mt-1">Pro místní domácnosti a malé firmy</p>
        </div>
      </footer>
    </div>
  )
}

export default App
