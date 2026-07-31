import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FaPython, FaReact, FaVuejs, FaGitAlt, FaBootstrap,
} from "react-icons/fa"
import {
  SiDjango, SiFastapi, SiPostgresql, SiMysql,
} from "react-icons/si"
import { TbApi } from "react-icons/tb"

const SKILLS = [
  { icon: <FaPython />,    name: "Python",      color: "#ff9100", delay: 0.0,  level: "Expert" }, 
  { icon: <SiDjango />,    name: "Django",      color: "#4e9f3d", delay: 0.1,  level: "Expert" }, // Adjusted green color for better visibility
  { icon: <SiFastapi />,   name: "FastAPI",     color: "#009688", delay: 0.15, level: "Advanced" },
  { icon: <FaReact />,     name: "React",       color: "#61DAFB", delay: 0.2,  level: "Advanced" },
  { icon: <FaVuejs />,     name: "Vue.js",      color: "#42B883", delay: 0.25, level: "Intermediate" },
  { icon: <SiPostgresql />,name: "PostgreSQL",  color: "#336791", delay: 0.3,  level: "Advanced" },
  { icon: <SiMysql />,     name: "MySQL",       color: "#4479A1", delay: 0.35, level: "Advanced" },
  { icon: <TbApi />,       name: "REST APIs",   color: "#ffc400", delay: 0.4,  level: "Expert" },
  { icon: <FaGitAlt />,    name: "Git",         color: "#F05032", delay: 0.45, level: "Advanced" },
  { icon: <FaBootstrap />, name: "Bootstrap",   color: "#7952B3", delay: 0.5,  level: "Intermediate" },
]

const RING1_COUNT = 5
const RING2_COUNT = 5
const R1 = 155
const R2 = 265

function getPos(index, count, radius) {
  const angle = (index / count) * 2 * Math.PI - Math.PI / 2
  return { x: Math.cos(angle) * radius, y: Math.sin(angle) * radius }
}

function SkillIcon({ skill, x, y, counterClass }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.4, x: 0, y: 0 }}
      whileInView={{ opacity: 1, scale: 1, x, y }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: skill.delay, type: "spring", stiffness: 60 }}
      className="absolute"
      style={{ top: "50%", left: "50%", marginTop: "-28px", marginLeft: "-28px" }}
    >
      <div className={counterClass}>
        <div className="relative">
          {/* Custom Glassmorphic Tooltip */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10, x: "-50%" }}
                animate={{ opacity: 1, y: -10, x: "-50%" }}
                exit={{ opacity: 0, y: 10, x: "-50%" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute left-1/2 bottom-full mb-3 px-3 py-1.5 rounded-lg glass-panel text-center pointer-events-none z-50 min-w-[110px]"
                style={{
                  boxShadow: `0 0 15px ${skill.color}33`,
                  border: `1px solid ${skill.color}44`,
                }}
              >
                <div className="font-heading font-semibold text-xs text-text-primary whitespace-nowrap">
                  {skill.name}
                </div>
                <div 
                  className="text-[9px] font-medium tracking-wider uppercase mt-0.5"
                  style={{ color: skill.color }}
                >
                  {skill.level}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Icon Badge */}
          <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{
              scale: 1.15,
              boxShadow: `0 0 25px ${skill.color}88, inset 0 0 12px ${skill.color}33`,
              borderColor: skill.color,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="skill-badge w-14 h-14 shadow-lg border-opacity-40"
            style={{ 
              color: skill.color,
              borderColor: `${skill.color}55`,
            }}
          >
            <span className="text-2xl">{skill.icon}</span>
          </motion.div>

          {/* Subtext under icon */}
          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-heading font-medium text-text-secondary whitespace-nowrap opacity-80">
            {skill.name}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

function Skills() {
  const ring1 = SKILLS.slice(0, RING1_COUNT)
  const ring2 = SKILLS.slice(RING1_COUNT, RING1_COUNT + RING2_COUNT)

  return (
    <section id="skills" className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff7b00]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="section-overline mb-3">Tech Stack</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-primary mt-2 mb-3">
            Skills &amp; Technologies
          </h2>
          <p className="text-text-secondary text-sm max-w-lg">
            I&apos;m currently looking to join a{" "}
            <span className="text-[#ff9100] font-semibold">cross-functional team</span> that values
            improving people&apos;s lives through accessible design &amp; robust engineering.
          </p>
        </motion.div>

        {/* Planetary System Orbit Diagram */}
        <div className="hidden md:flex justify-center items-center mt-12">
          <div className="relative orbit-system" style={{ width: 620, height: 620 }}>

            {/* Decorative orbit tracks (aligned and animated with rings) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute w-[310px] h-[310px] rounded-full border border-dashed border-[#ff7b00]/20 orbit-ring-1" />
              <div className="absolute w-[530px] h-[530px] rounded-full border border-dashed border-[#8B5CF6]/15 orbit-ring-2" />
            </div>

            {/* Central Star Orb */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="relative w-24 h-24">
                {/* Intense glowing stellar corona */}
                <div className="absolute inset-0 rounded-full bg-[#ff7b00]/30 blur-[25px] scale-150 animate-pulse-ring" />
                <div className="absolute inset-0 rounded-full bg-[#ffea00]/40 blur-[12px] animate-pulse-ring" style={{ animationDelay: "0.5s" }} />
                
                {/* Central Star surface */}
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#ffe600] via-[#ff7b00] to-[#6D28D9] flex items-center justify-center shadow-[0_0_40px_rgba(255,123,0,0.7)] z-10">
                  <span className="font-heading font-black text-white text-lg text-glow-gold">GN</span>
                </div>
              </div>
            </motion.div>

            {/* Orbiting Ring 1 Skills (Clockwise Orbit, Counter-Clockwise Child) */}
            <div className="absolute inset-0 orbit-ring-1 pointer-events-none">
              {ring1.map((skill, i) => {
                const { x, y } = getPos(i, RING1_COUNT, R1)
                return (
                  <div key={skill.name} className="pointer-events-auto">
                    <SkillIcon
                      skill={skill}
                      x={x}
                      y={y}
                      counterClass="orbit-counter-1"
                    />
                  </div>
                )
              })}
            </div>

            {/* Orbiting Ring 2 Skills (Counter-Clockwise Orbit, Clockwise Child) */}
            <div className="absolute inset-0 orbit-ring-2 pointer-events-none">
              {ring2.map((skill, i) => {
                const { x, y } = getPos(i, RING2_COUNT, R2)
                return (
                  <div key={skill.name} className="pointer-events-auto">
                    <SkillIcon
                      skill={skill}
                      x={x}
                      y={y}
                      counterClass="orbit-counter-2"
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile fallback layout */}
        <div className="md:hidden grid grid-cols-2 sm:grid-cols-5 gap-4 mt-8">
          {SKILLS.map(skill => (
            <div key={skill.name} className="flex flex-col items-center gap-2 p-3 glass-panel rounded-xl">
              <div className="skill-badge w-12 h-12" style={{ color: skill.color, borderColor: `${skill.color}44` }}>
                <span className="text-xl">{skill.icon}</span>
              </div>
              <div className="text-center">
                <div className="text-[10px] text-text-primary font-heading font-medium">{skill.name}</div>
                <div className="text-[8px] text-text-secondary uppercase tracking-wider">{skill.level}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
