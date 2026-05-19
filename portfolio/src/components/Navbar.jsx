function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-slate-900 sticky top-0">

      <h1 className="text-2xl font-bold text-blue-500">
        Gowtham N
      </h1>

      <ul className="flex gap-6 text-lg">
        <li className="hover:text-blue-400 cursor-pointer">Home</li>
        <li className="hover:text-blue-400 cursor-pointer">About</li>
        <li className="hover:text-blue-400 cursor-pointer">Skills</li>
        <li className="hover:text-blue-400 cursor-pointer">Projects</li>
        <li className="hover:text-blue-400 cursor-pointer">Contact</li>
      </ul>

    </nav>
  )
}

export default Navbar