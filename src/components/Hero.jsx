import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight } from "react-icons/fa"
import { motion } from "framer-motion"

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

function Hero() {
  return (
    <header id="home" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20 px-6 md:px-12">
      {/* ── Background Starfield & Comet Layer ── */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        {/* Glowing comet / shooting star flying from top-right to bottom-left */}
        <div className="absolute top-1/4 right-1/4 w-[150px] h-[2px] bg-gradient-to-l from-transparent via-[#ff7b00] to-white rotate-[135deg] origin-right animate-comet" />
        
        {/* Soft nebulae radial glow behind content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-glow-radial opacity-40" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        
        {/* ── LEFT COLUMN: Text Copy ── */}
        <div className="flex flex-col gap-6">
          {/* Personality tagline */}
          <motion.p {...fadeUp(0)}
            className="text-sm italic font-light text-[#A78BFA] tracking-wide font-sans"
          >
            Creative developer who makes the web feel alive ✦
          </motion.p>

          {/* Headline */}
          <motion.h1 {...fadeUp(0.1)}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.08] text-white"
          >
            I&apos;m a{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] via-[#ff7b00] to-[#ffd000] text-glow-gold">
              Full Stack
            </span>
            Python Developer
          </motion.h1>

          {/* Floating cosmic status badge */}
          <motion.div {...fadeUp(0.2)}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-heading font-semibold bg-[#ff7b00]/12 border border-[#ff7b00]/35 text-[#ffc400] shadow-[0_0_12px_rgba(255,123,0,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#ff7b00] shadow-[0_0_8px_#ff7b00] animate-ping" />
              Open to Opportunities
            </span>
          </motion.div>

          {/* Description */}
          <motion.p {...fadeUp(0.3)}
            className="text-text-secondary text-sm md:text-base leading-relaxed max-w-lg font-sans"
          >
            A self-taught software engineer building meaningful, delightful digital products.
            I bridge user needs and business goals through clean code and thoughtful design.
          </motion.p>

          {/* CTA Buttons - featuring primary gold variant */}
          <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4 pt-1">
            <a href="/public/Gowtham_Resume.pdf" download
              className="btn-gold inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-heading"
            >
              <FaDownload size={13} />
              Download Resume
            </a>
            <a href="#projects"
              className="btn-outline inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-heading"
            >
              View Work
              <FaArrowRight size={13} />
            </a>
          </motion.div>

          {/* Social connections */}
          <motion.div {...fadeUp(0.5)} className="flex gap-3 pt-1">
            <a href="https://github.com/gowtham-tech-dev" target="_blank" rel="noopener noreferrer"
              className="social-badge" aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/gowtham-tech-dev/" target="_blank" rel="noopener noreferrer"
              className="social-badge" aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a href="mailto:gowthamnedunchezian05@gmail.com"
              className="social-badge" aria-label="Email"
            >
              <FaEnvelope size={18} />
            </a>
          </motion.div>
        </div>

        {/* ── RIGHT COLUMN: Cosmic Planetary Scene ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex justify-center items-center relative"
        >
          {/* Main Container */}
          <div className="relative w-[340px] h-[340px] md:w-[460px] md:h-[460px] flex items-center justify-center">
            
            {/* 1. Large Purple Gas Giant (Top Right) */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-4 right-4 w-[160px] h-[160px] md:w-[240px] md:h-[240px] z-20 pointer-events-none"
            >
              <img 
                src="/gas_giant_purple.png" 
                alt="Purple Gas Giant Planet" 
                className="w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(139,92,246,0.5)] animate-planet-rotation"
              />
            </motion.div>

            {/* 2. Orange Ringed Planet (Mid Left) */}
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-4 w-[180px] h-[180px] md:w-[260px] md:h-[260px] z-10 pointer-events-none"
            >
              <img 
                src="/ringed_planet_orange.png" 
                alt="Orange Ringed Gas Giant" 
                className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(255,123,0,0.35)]"
              />
            </motion.div>

            {/* 3. Small Rocky Moon (Bottom Right) */}
            <motion.div 
              animate={{ y: [0, -6, 0], x: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-6 right-12 w-[60px] h-[60px] md:w-[90px] md:h-[90px] z-25 pointer-events-none"
            >
              <img 
                src="/small_moon.png" 
                alt="Volcanic Rocky Moon" 
                className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,170,0,0.4)] animate-planet-rotation"
              />
            </motion.div>

            {/* Ambient Backlight Glow rings */}
            <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full border border-dashed border-[#8B5CF6]/20 animate-orbit-slow pointer-events-none" />
            <div className="absolute w-[360px] h-[360px] md:w-[480px] md:h-[480px] rounded-full border border-dashed border-[#ff7b00]/15 animate-orbit-reverse pointer-events-none" />
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary/40 z-10"
      >
        <span className="font-heading text-[9px] tracking-[0.2em] uppercase">Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#ff7b00]/60 to-transparent animate-float" />
      </motion.div>
    </header>
  )
}

export default Hero
