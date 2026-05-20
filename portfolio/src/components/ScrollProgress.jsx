import { motion, useScroll } from "framer-motion"

function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00abf0] via-[#8b5cf6] to-[#f355da] shadow-[0_0_15px_#00abf0] z-[100]"
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
    />
  )
}

export default ScrollProgress