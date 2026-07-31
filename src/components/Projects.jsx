import { useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion"
import { FaGithub, FaExpand } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"

const PROJECTS = [
  {
    title: "Excel Add-in CRUD App",
    desc: "A professional Excel Add-in with CRUD operations, offline sync, and custom task pane backend integration.",
    tech: ["React", "Office.js", "Python", "Flask"],
    github: "https://github.com/gowtham-tech-dev",
    live: "#",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=70",
    accent: "#4285F4",
  },
  {
    title: "React Todo App",
    desc: "Modern todo app with task categories, filter states, persistent storage, and Framer Motion animations.",
    tech: ["React", "JavaScript", "Framer Motion", "TailwindCSS"],
    github: "https://github.com/gowtham-tech-dev",
    live: "#",
    img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=70",
    accent: "#8B5CF6",
  },
  {
    title: "Developer Portfolio",
    desc: "Premium dark neon portfolio with glassmorphism, orbital skills, browser mockups, and 3D interactions.",
    tech: ["React", "Vite", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/gowtham-tech-dev",
    live: "#",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=70",
    accent: "#A78BFA",
  },
]

function BrowserMockup({ project, onExpand }) {
  const ref = useRef(null)
  const x   = useMotionValue(0)
  const y   = useMotionValue(0)
  const sx  = useSpring(x, { stiffness: 200, damping: 20 })
  const sy  = useSpring(y, { stiffness: 200, damping: 20 })
  const rotX = useTransform(sy, [-0.5, 0.5], ["12deg", "-12deg"])
  const rotY = useTransform(sx, [-0.5, 0.5], ["-12deg", "12deg"])

  const onMove = (e) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - r.left) / r.width  - 0.5)
    y.set((e.clientY - r.top)  / r.height - 0.5)
  }
  const onLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
      className="cursor-default"
    >
      <div className="browser-mockup" style={{ boxShadow: `0 24px 64px rgba(0,0,0,0.6), 0 0 40px ${project.accent}22` }}>
        {/* Browser chrome */}
        <div className="browser-bar">
          <div className="browser-dot" style={{ background: "#FF5F57" }} />
          <div className="browser-dot" style={{ background: "#FEBC2E" }} />
          <div className="browser-dot" style={{ background: "#28C840" }} />
          {/* URL bar */}
          <div className="flex-1 mx-3 bg-[rgba(255,255,255,0.05)] rounded-md px-3 py-0.5 text-[10px] text-text-secondary/50 font-sans truncate">
            localhost:5173 — {project.title}
          </div>
          <button
            onClick={() => onExpand(project.img)}
            className="p-1 text-text-secondary/40 hover:text-[#A78BFA] transition duration-200"
            aria-label="Expand image preview"
          >
            <FaExpand size={11} />
          </button>
        </div>

        {/* Screenshot */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0614] via-transparent to-transparent opacity-70" />
        </div>
      </div>
    </motion.div>
  )
}

const card = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
}

function Projects() {
  const [expandedImg, setExpandedImg] = useState(null)

  return (
    <section id="projects" className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#6D28D9]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-overline mb-3">Portfolio</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-primary mt-2">
            Featured Projects
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.14 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 [perspective:1200px]"
        >
          {PROJECTS.map((project) => (
            <motion.div key={project.title} variants={card} className="flex flex-col">
              {/* Browser mockup */}
              <BrowserMockup project={project} onExpand={setExpandedImg} />

              {/* Info below mockup */}
              <div className="mt-4 flex flex-col gap-3 px-1">
                <h3 className="font-heading font-semibold text-base text-text-primary">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">{project.desc}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-heading font-semibold
                        bg-[#ff7b00]/10 border border-[#ff7b00]/25 text-[#ffc400]">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 pt-1">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="btn-outline inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs">
                    <FaGithub size={13} /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    className="btn-gold inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs">
                    <FiExternalLink size={13} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {expandedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedImg(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden border border-border-glass shadow-2xl bg-bg-primary"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={expandedImg} alt="Project Preview" className="w-full h-auto max-h-[80vh] object-contain" />
              <button
                onClick={() => setExpandedImg(null)}
                className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/75 p-2 rounded-full font-bold text-sm transition"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
