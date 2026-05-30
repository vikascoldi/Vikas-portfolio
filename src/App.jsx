import { useEffect } from 'react'
import { useCursor } from './hooks/useCursor'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Experience from './components/About/Experience'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

export default function App() {
  useCursor()

  return (
    <div className="relative bg-bg min-h-screen">
      {/* Custom cursor */}
      <div className="cursor" />
      <div className="cursor-follower" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
