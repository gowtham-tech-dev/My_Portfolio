import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"
import { motion } from "framer-motion"

function Projects() {
  const projects = [
    {
      title: "Excel Add-in CRUD App",
      description:
        "A professional Excel Add-in built using Office.js with CRUD operations, offline state sync, and custom task pane backend integration.",
      tech: ["React", "Office.js", "Python", "Flask"],
      github: "https://github.com/gowtham-tech-dev",
      live: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    },
    {
      title: "React Todo App",
      description:
        "Modern Todo application with task categories, filter states, persistent storage, and dynamic custom animations using framer-motion.",
      tech: ["React", "JavaScript", "Framer Motion", "CSS"],
      github: "https://github.com/gowtham-tech-dev",
      live: "#",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal developer portfolio website featuring a dark mode cyberpunk design, custom neon animations, and responsive layouts.",
      tech: ["React", "Vite", "TailwindCSS", "Framer Motion"],
      github: "https://github.com/gowtham-tech-dev",
      live: "#",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section
      id="projects"
      className="bg-[#112e42] text-white py-24 px-6 md:px-12 relative overflow-hidden border-t border-[#00abf0]/10"
    >
      <div className="max-w-7xl mx-auto z-10 relative">
        {/* TITLE */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-black mb-4 font-sans tracking-wide text-white">
            PROJECTS
          </h1>
          <div className="w-24 h-1 bg-[#00abf0] mx-auto rounded shadow-[0_0_10px_#00abf0]" />
        </div>

        {/* PROJECT GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-[#081b29]/95 rounded-2xl overflow-hidden shadow-lg border border-[#00abf0]/15 hover:border-[#00abf0]/50 transition-all duration-300 hover:shadow-[0_4px_25px_rgba(0,171,240,0.2)]"
            >
              {/* IMAGE CONTAINER */}
              <div className="h-52 w-full overflow-hidden relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081b29] via-transparent to-transparent opacity-80" />
              </div>

              {/* CONTENT */}
              <div className="p-6 text-left">
                <h2 className="text-xl md:text-2xl font-bold mb-3 font-sans text-white tracking-wide">
                  {project.title}
                </h2>

                <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-semibold font-sans border border-[#00abf0]/20 text-[#00abf0] bg-[#00abf0]/5"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-gray-700 hover:border-[#00abf0] text-gray-300 hover:text-[#00abf0] px-4 py-2 rounded-full text-xs font-semibold tracking-wider font-sans transition duration-300"
                  >
                    <FaGithub />
                    GITHUB
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill-cyan flex items-center gap-2 px-6 py-2 rounded-full text-xs font-bold tracking-wider font-sans transition duration-300 shadow-[0_0_10px_rgba(0,171,240,0.2)]"
                  >
                    <FiExternalLink />
                    LIVE
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects