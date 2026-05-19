import { FaGithub, FaLinkedin } from "react-icons/fa"

function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>

          <p className="text-blue-500 text-lg mb-3">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
            Gowtham N
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">
            React Developer | Python Developer
          </h2>

          <p className="text-gray-500 max-w-lg mb-8 leading-7">
            Passionate about building modern web applications,
            responsive user interfaces, and full stack projects
            using React, Python, Django, and TailwindCSS.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 flex-wrap">

            <button className="bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-xl font-semibold transition">
              View Projects
            </button>

            <button className="border border-blue-500 hover:bg-blue-500 px-7 py-3 rounded-xl font-semibold transition">
              Contact Me
            </button>

          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5 mt-8 text-3xl">

            <a
              href="https://github.com/gowtham-tech-dev"
              target="_blank"
            >
              <FaGithub className="hover:text-blue-500 transition" />
            </a>

            <a
              href="https://www.linkedin.com/in/gowtham-n-7673712b2/"
              target="_blank"
            >
              <FaLinkedin className="hover:text-blue-500 transition" />
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="profile"
            className="w-[300px] md:w-[400px] rounded-full border-4 border-blue-500 shadow-2xl"
          />

        </div>

      </div>

    </section>
  )
}

export default Hero