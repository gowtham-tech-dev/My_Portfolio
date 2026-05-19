import { Link } from "react-scroll"

function Navbar() {

  const navItems = [
    "home",
    "about",
    "skills",
    "projects",
    "contact",
  ]

  return (
    <nav className="fixed w-full bg-slate-900/80 backdrop-blur-md text-white z-50 shadow-lg">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        {/* LOGO */}
        <h1 className="text-2xl font-bold text-blue-500">
          Gowtham N
        </h1>

        {/* MENU */}
        <ul className="hidden md:flex gap-8 text-lg capitalize">

          {navItems.map((item) => (

            <li key={item}>

              <Link
                to={item}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="text-blue-500"
                className="cursor-pointer hover:text-blue-400 transition"
              >
                {item}
              </Link>

            </li>

          ))}

        </ul>

      </div>

    </nav>
  )
}

export default Navbar