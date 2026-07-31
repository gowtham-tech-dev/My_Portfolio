import { motion } from "framer-motion"

const EXPERIENCES = [
  {
    role: "Full Stack Developer",
    company: "Saastrail Venture Studio",
    period: "Apr 2026 – Present",
    desc: "Building and maintaining end-to-end web applications, from responsive user interfaces to reliable backend services and database integrations.",
    gradient: "from-[#10B981] to-[#0EA5E9]",
    icon: "⚙️",
  },
  {
    role: "Certified in Full Stack Development (Python)",
    company: "Pumo Technovation",
    period: "Jun 2025 – Dec 2025",
    desc: "Completed hands-on training in Python full-stack development, covering responsive frontend interfaces, backend development, REST APIs, and database integration.",
    gradient: "from-[#F59E0B] to-[#EC4899]",
    icon: "💻",
  },
]

const cardVar = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
}

function ExperienceCard({ role, company, period, desc, gradient, icon }) {
  return (
    <motion.article
      variants={cardVar}
      className="glass-card p-6 flex gap-4 group cursor-default"
    >
      {/* Gradient icon badge */}
      <div className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${gradient}
        flex items-center justify-center text-xl
        shadow-[0_0_20px_rgba(139,92,246,0.35)]
        group-hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]
        transition-shadow duration-300`}>
        {icon}
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="font-heading font-semibold text-base text-white leading-tight">
          {role}
        </h3>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[#A78BFA] text-xs font-heading font-medium">@ {company}</span>
          <span className="text-text-secondary/40 text-xs">·</span>
          <span className="text-text-secondary text-xs">{period}</span>
        </div>
        <p className="text-text-secondary text-sm leading-relaxed mt-1.5">{desc}</p>
      </div>
    </motion.article>
  )
}

function Experience() {
  return (
    <section id="experience" className="py-28 px-6 md:px-12 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute right-0 top-0 w-[600px] h-[600px]
        bg-[#8B5CF6]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mb-14">
          <span className="section-overline">Career</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mt-3 mb-2">
            Work Experience
          </h2>
          <p className="text-text-secondary text-sm max-w-md">
            A track record of shipping impactful products at leading companies.
          </p>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-70px" }}
          transition={{ staggerChildren: 0.11 }}
          className="grid sm:grid-cols-2 gap-5">
          {EXPERIENCES.map((exp) => (
            <ExperienceCard key={exp.role} {...exp} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
