import ScrollProgress from "./components/ScrollProgress"
import ParticlesBackground from "./components/ParticlesBackground"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen selection:bg-[var(--color-neon-purple)]/30 selection:text-[var(--color-neon-purple)] relative z-0">
      <ParticlesBackground />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App