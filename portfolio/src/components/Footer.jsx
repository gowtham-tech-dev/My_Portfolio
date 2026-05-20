function Footer() {
  return (
    <footer className="py-12 border-t border-[#00abf0]/10 bg-[#081b29] text-center z-10 relative">
      <p className="text-sm md:text-base font-sans font-medium text-gray-500 tracking-wider">
        &copy; {new Date().getFullYear()} <span className="text-[#00abf0]">Gowtham N</span>. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer