import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import { Link } from "react-scroll"

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 relative overflow-hidden bg-[#081b29]"
    >
      {/* Background Soft Glow Aura */}
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-[#00abf0]/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute left-1/4 top-1/4 w-72 h-72 bg-[#00abf0]/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl w-full grid md:grid-cols-12 gap-10 items-center z-10"
      >
        {/* LEFT COLUMN (TEXT CONTENT) */}
        <div className="text-left md:col-span-7 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Hello, It's Me
          </h3>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-3 font-sans leading-tight">
            Gowtham N
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
            And I'm a{" "}
            <TypeAnimation
              sequence={[
                "React Developer",
                2000,
                "Python Developer",
                2000,
                "Full Stack Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#00abf0] inline-block"
            />
          </h2>

          <p className="text-gray-300 max-w-xl mb-8 leading-relaxed text-sm md:text-base">
            I'm a web Designer with extensive experience for over 6+ months.
            expertise is to create and website design, Frontend design, and
            many more....
          </p>

          {/* CIRCULAR SOCIAL OUTLINES */}
          <div className="flex gap-4 mb-10">
            <a
              href="https://github.com/gowtham-tech-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="social-badge"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/gowtham-n-7673712b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-badge"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:yourmail@gmail.com"
              className="social-badge"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* GLOWING PILL CTA BUTTONS */}
          <div className="flex gap-5 flex-wrap">
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              className="btn-pill-cyan px-8 py-3.5 rounded-full text-base cursor-pointer shadow-[0_0_15px_rgba(0,171,240,0.3)] hover:scale-105 transition-all duration-300"
            >
              More About Me
            </Link>
            
            <a
              href="/public/Gowtham_Resume.pdf"
              download
              className="btn-pill-outline px-8 py-3.5 rounded-full text-base flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300"
            >
              <FaFileDownload />
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN (IMAGE WITH GLOWING CIRCULAR RINGS) */}
        <div className="text-center md:col-span-5 flex justify-center items-center relative py-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative flex justify-center items-center"
          >
            {/* Outer Glowing Cyan Ring */}
            <div className="absolute w-[290px] h-[290px] md:w-[380px] md:h-[380px] rounded-full border-4 border-[#00abf0] shadow-[0_0_35px_#00abf0] animate-pulse" />
            
            {/* Inner Glowing Magenta/Purple Ring for depth */}
            <div className="absolute w-[278px] h-[278px] md:w-[364px] md:h-[364px] rounded-full border-2 border-fuchsia-500 shadow-[0_0_15px_#d946ef] opacity-80" />

            {/* Profile Avatar */}
            <img
              src="/cyber_avatar.png"
              alt="Gowtham N Profile"
              className="w-[270px] h-[270px] md:w-[350px] md:h-[350px] rounded-full object-cover relative z-10 border-4 border-transparent"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero