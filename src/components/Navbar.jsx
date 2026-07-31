import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

const NAV_ITEMS = [
  { label: "Home",     to: "home" },
  { label: "About",    to: "about" },
  { label: "Skills",   to: "skills" },
  { label: "Work",     to: "experience" },
  { label: "Projects", to: "projects" },
  { label: "Contact",  to: "contact" },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark]     = useState(() => document.documentElement.classList.contains("dark"))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement
    if (isDark) { root.classList.remove("dark"); setIsDark(false) }
    else        { root.classList.add("dark");    setIsDark(true)  }
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      aria-label="Primary navigation"
      className="fixed inset-x-0 top-0 z-50 px-4 pt-3 transition-[padding] duration-300 md:px-6"
    >
      <div className={`relative mx-auto flex max-w-5xl items-center justify-between px-6 py-4 transition-all duration-300 md:px-8 ${
        scrolled || menuOpen
          ? "rounded-2xl glass-panel"
          : "rounded-2xl bg-transparent"
      }`}>
        <Link to="home" smooth duration={500} className="cursor-pointer font-heading font-bold text-xl text-text-primary tracking-tight">
          Gowtham N<span className="text-[#ff7b00]">.</span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map(({ label, to }) => (
            <li key={to}>
              <Link to={to} smooth duration={500} spy offset={-96} activeClass="nav-pill-active" className="nav-pill">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button onClick={toggleTheme} aria-label="Toggle theme"
            className="hidden md:flex items-center justify-center w-9 h-9 rounded-full border border-border-glass text-text-secondary hover:text-[#A78BFA] hover:border-[#8B5CF6] transition-all duration-200">
            {isDark ? <FaSun size={14} /> : <FaMoon size={14} />}
          </button>
          <button onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu"
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full border border-border-glass text-text-secondary hover:text-[#A78BFA] transition-all duration-200">
            {menuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }}
              className="absolute left-0 right-0 top-full mt-2 overflow-hidden rounded-2xl border border-border-glass bg-[var(--bg-glass)] shadow-xl backdrop-blur-xl md:hidden">
              <ul className="flex flex-col gap-1 px-4 py-4">
                {NAV_ITEMS.map(({ label, to }) => (
                  <li key={to}>
                    <Link to={to} smooth duration={500} offset={-96} onClick={() => setMenuOpen(false)}
                      activeClass="nav-pill-active" className="nav-pill block text-center py-2">
                      {label}
                    </Link>
                  </li>
                ))}
                <li className="pt-2 flex justify-center">
                  <button onClick={toggleTheme} className="text-text-secondary hover:text-[#A78BFA] transition-colors">
                    {isDark ? <FaSun size={16} /> : <FaMoon size={16} />}
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
