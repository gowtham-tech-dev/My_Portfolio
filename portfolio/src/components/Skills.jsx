import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
} from "react-icons/fa"

import {
  SiTailwindcss,
  SiMysql,
  SiDjango,
} from "react-icons/si"

import { motion } from "framer-motion"

function Skills() {
  const skills = [
    {
      icon: <FaReact />,
      name: "React",
      glowClass: "hover:border-[#61dafb]/50 hover:shadow-[0_0_25px_rgba(97,218,251,0.3)] hover:text-[#61dafb]",
      defaultColor: "text-[#61dafb]/70"
    },
    {
      icon: <FaPython />,
      name: "Python",
      glowClass: "hover:border-[#3776ab]/50 hover:shadow-[0_0_25px_rgba(55,118,171,0.3)] hover:text-[#3776ab]",
      defaultColor: "text-[#3776ab]/70"
    },
    {
      icon: <FaHtml5 />,
      name: "HTML5",
      glowClass: "hover:border-[#e34f26]/50 hover:shadow-[0_0_25px_rgba(227,79,38,0.3)] hover:text-[#e34f26]",
      defaultColor: "text-[#e34f26]/70"
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS3",
      glowClass: "hover:border-[#1572b6]/50 hover:shadow-[0_0_25px_rgba(21,114,182,0.3)] hover:text-[#1572b6]",
      defaultColor: "text-[#1572b6]/70"
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
      glowClass: "hover:border-[#f7df1e]/50 hover:shadow-[0_0_25px_rgba(247,223,30,0.25)] hover:text-[#f7df1e]",
      defaultColor: "text-[#f7df1e]/70"
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS",
      glowClass: "hover:border-[#06b6d4]/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:text-[#06b6d4]",
      defaultColor: "text-[#06b6d4]/70"
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
      glowClass: "hover:border-[#4479a1]/50 hover:shadow-[0_0_25px_rgba(68,121,161,0.3)] hover:text-[#4479a1]",
      defaultColor: "text-[#4479a1]/70"
    },
    {
      icon: <SiDjango />,
      name: "Django",
      glowClass: "hover:border-[#092e20]/80 hover:shadow-[0_0_25px_rgba(9,46,32,0.4)] hover:text-[#10b981]",
      defaultColor: "text-[#10b981]/70"
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
      glowClass: "hover:border-[#f05032]/50 hover:shadow-[0_0_25px_rgba(240,80,50,0.3)] hover:text-[#f05032]",
      defaultColor: "text-[#f05032]/70"
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section
      id="skills"
      className="bg-[#081b29] text-[#cbd5e1] py-24 px-6 md:px-12 relative overflow-hidden border-t border-[#00abf0]/10"
    >
      <div className="max-w-6xl mx-auto z-10 relative">
        {/* TITLE */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-black mb-4 font-sans tracking-wide text-white">
            MY <span className="text-[#00abf0]">SKILLS</span>
          </h1>
          <div className="w-24 h-1 bg-[#00abf0] mx-auto rounded shadow-[0_0_10px_#00abf0]" />
        </div>

        {/* SKILLS GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -4 }}
              className={`bg-[#112e42]/50 border border-[#00abf0]/15 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 shadow-md ${skill.glowClass}`}
            >
              <div className={`text-5xl mb-4 transition-colors duration-300 ${skill.defaultColor}`}>
                {skill.icon}
              </div>

              <h2 className="text-base md:text-lg font-bold font-sans text-white tracking-wide">
                {skill.name}
              </h2>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills