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

function Skills() {

  const skills = [
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiDjango />,
      name: "Django",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
    },
  ]

  return (
    <section className="bg-slate-950 text-white py-24 px-6">

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-16">

          <h1 className="text-5xl font-bold mb-4">
            Skills
          </h1>

          <div className="w-24 h-1 bg-blue-500 mx-auto rounded"></div>

        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="bg-slate-900 rounded-2xl p-8 flex flex-col items-center justify-center hover:scale-105 hover:bg-slate-800 transition duration-300 shadow-lg"
            >

              <div className="text-6xl text-blue-500 mb-4">
                {skill.icon}
              </div>

              <h2 className="text-xl font-semibold">
                {skill.name}
              </h2>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills