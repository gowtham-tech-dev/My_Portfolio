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
      className="bg-bg-secondary text-text-primary py-24 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto z-10 relative">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-overline">Profile</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-primary mt-2">
            About Me
          </h2>
        </motion.div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="text-left space-y-6">
            <h3 className="text-2xl font-bold font-heading text-[#A78BFA] tracking-wide">
              Junior Software Developer
            </h3>

            <p className="text-text-secondary leading-relaxed text-base md:text-lg font-medium">
              I'm Gowtham N, a passionate software engineer focused on building robust, scalable, and visually stunning web applications. I bridge the gap between design and engineering—translating concepts into functional, pixel-perfect interfaces with rock-solid backends.
            </p>

            <p className="text-text-secondary leading-relaxed text-base md:text-lg font-medium">
              My expertise spans the modern stack, including React, TypeScript, Node.js, and Python. Whether it's crafting intricate frontend animations, designing performant RESTful APIs, or optimizing cloud infrastructure, I love taking on complex engineering challenges.
            </p>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -4 }}
                className="glass-card p-6 text-center shadow-lg transition-all duration-300"
              >
                <h4 className="text-3xl md:text-4xl font-black font-heading mb-2 text-[#A78BFA] text-glow-purple">
                  {stat.number}
                </h4>
                <p className="text-text-secondary font-semibold text-sm md:text-base">
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