import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"

function Projects() {

  const projects = [
    {
      title: "Excel Add-in CRUD App",
      description:
        "A professional Excel Add-in built using Office.js with CRUD operations and backend integration.",

      tech: ["React", "Office.js", "Python"],

      github: "https://github.com/gowtham-tech-dev",

      live: "#",

      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    },

    {
      title: "React Todo App",
      description:
        "Modern Todo application with add, delete, and dynamic UI functionality using React.",

      tech: ["React", "JavaScript", "CSS"],

      github: "https://github.com/gowtham-tech-dev",

      live: "#",

      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
    },

    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website built using React and TailwindCSS with responsive modern design.",

      tech: ["React", "TailwindCSS"],

      github: "https://github.com/gowtham-tech-dev",

      live: "#",

      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    },

  ]

  return (
    <section className="bg-slate-900 text-white py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-16">

          <h1 className="text-5xl font-bold mb-4">
            Projects
          </h1>

          <div className="w-24 h-1 bg-blue-500 mx-auto rounded"></div>

        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >

              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover"
              />

              {/* CONTENT */}
              <div className="p-6">

                <h2 className="text-2xl font-bold mb-4">
                  {project.title}
                </h2>

                <p className="text-gray-400 mb-5 leading-7">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-3 mb-6">

                  {project.tech.map((item, i) => (

                    <span
                      key={i}
                      className="bg-blue-600 px-3 py-1 rounded-full text-sm"
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
                    className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
                  >
                    <FiExternalLink />
                    Live
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects