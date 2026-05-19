function About() {
  return (
    <section
  id="about"
  className="bg-slate-900 text-white py-24 px-6"
>

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-16">

          <h1 className="text-5xl font-bold mb-4">
            About Me
          </h1>

          <div className="w-24 h-1 bg-blue-500 mx-auto rounded"></div>

        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>

            <h2 className="text-3xl font-semibold mb-6 text-blue-400">
              Junior Software Developer
            </h2>

            <p className="text-gray-400 leading-8 mb-6">
              I'm Gowtham N, a passionate developer interested in
              building modern web applications and full stack projects.
              I enjoy learning new technologies and creating real-world
              applications using React, Python, Django, and TailwindCSS.
            </p>

            <p className="text-gray-400 leading-8">
              Currently focusing on frontend development, backend APIs,
              Office.js Excel Add-ins, and responsive UI design.
            </p>

          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-6">

            <div className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition">

              <h1 className="text-4xl font-bold text-blue-500 mb-2">
                5+
              </h1>

              <p className="text-gray-400">
                Projects Built
              </p>

            </div>

            <div className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition">

              <h1 className="text-4xl font-bold text-blue-500 mb-2">
                React
              </h1>

              <p className="text-gray-400">
                Frontend Development
              </p>

            </div>

            <div className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition">

              <h1 className="text-4xl font-bold text-blue-500 mb-2">
                Python
              </h1>

              <p className="text-gray-400">
                Backend Development
              </p>

            </div>

            <div className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition">

              <h1 className="text-4xl font-bold text-blue-500 mb-2">
                UI
              </h1>

              <p className="text-gray-400">
                Modern Responsive Design
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About