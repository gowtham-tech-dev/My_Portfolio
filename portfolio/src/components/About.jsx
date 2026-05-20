import { motion } from "framer-motion"

function About() {
  const stats = [
    {
      number: "6+",
      label: "Months Experience",
    },
    {
      number: "5+",
      label: "Projects Built",
    },
    {
      number: "React",
      label: "Frontend Dev",
    },
    {
      number: "Python",
      label: "Backend Dev",
    }
  ]

  return (
    <section
      id="about"
      className="bg-[#112e42] text-white py-24 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto z-10 relative">
        {/* TITLE */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-black mb-4 font-sans tracking-wide text-white">
            ABOUT <span className="text-[#00abf0]">ME</span>
          </h1>
          <div className="w-24 h-1 bg-[#00abf0] mx-auto rounded shadow-[0_0_10px_#00abf0]" />
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="text-left space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold font-sans text-[#00abf0] tracking-wide">
              Junior Software Developer
            </h2>

            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              I'm Gowtham N, a passionate developer interested in building modern web applications and full stack projects. I enjoy learning new technologies and creating real-world applications using React, Python, Django, and TailwindCSS.
            </p>

            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              Currently focusing on frontend development, backend APIs, Office.js Excel Add-ins, and responsive UI design.
            </p>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -4 }}
                className="glass-panel-teal p-6 rounded-2xl text-center shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,171,240,0.25)]"
              >
                <h3 className="text-3xl md:text-4xl font-black font-sans mb-2 text-[#00abf0] text-glow-cyan">
                  {stat.number}
                </h3>
                <p className="text-gray-300 font-medium text-sm md:text-base">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About