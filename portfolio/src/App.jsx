import ScrollProgress from "./components/ScrollProgress"
import ParticlesBackground from "./components/ParticlesBackground"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-[#081b29] text-[#cbd5e1] min-h-screen selection:bg-[#00abf0]/30 selection:text-[#00abf0] relative z-0">
      <ParticlesBackground />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App