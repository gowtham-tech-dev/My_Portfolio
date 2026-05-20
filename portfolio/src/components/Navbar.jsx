import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { FaBars, FaTimes } from "react-icons/fa"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    "home",
    "about",
    "skills",
    "projects",
    "contact",
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-[#081b29]/90 border-b border-[#00abf0]/15 backdrop-blur-md shadow-lg" 
        : "bg-transparent border-b border-transparent"
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 py-5">
        {/* LOGO */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer text-2xl font-bold tracking-wide font-sans text-white"
        >
          Gowtham<span className="text-[#00abf0]"></span>
        </Link>
    
        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 text-base capitalize font-sans">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="text-[#00abf0]"
                className="cursor-pointer text-gray-200 hover:text-[#00abf0] transition duration-300 font-medium tracking-wide"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU BUTTON */}
        <div
          className="md:hidden text-2xl cursor-pointer text-gray-200 hover:text-[#00abf0] transition duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-[#081b29] border-b border-[#00abf0]/15 px-8 py-6">
          <ul className="flex flex-col gap-6 text-base font-sans capitalize">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setMenuOpen(false)}
                  activeClass="text-[#00abf0]"
                  className="cursor-pointer block text-gray-200 hover:text-[#00abf0] transition duration-300 font-medium"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar