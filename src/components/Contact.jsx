import { useState } from "react"
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa"
import { motion } from "framer-motion"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API request
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setSubmitted(false), 5000)
    }, 1500)
  }

  return (
    <section
      id="contact"
      className="bg-bg-primary text-text-primary py-24 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto z-10 relative">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-left"
        >
          <span className="section-overline">Connect</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-primary mt-2">
            Contact Me
          </h2>
        </motion.div>

        {/* TWO COLUMN LAYOUT */}
        <div className="grid lg:grid-cols-12 gap-12 text-left">
          {/* LEFT: INFO & SOCIALS */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-text-secondary leading-relaxed mb-8 text-base md:text-lg font-medium">
                I'm currently open to new opportunities, freelance work, or collaborations. Send me a message or connect with me via social media and I will get back to you as soon as possible!
              </p>
            </div>

            {/* CONTACT CARDS */}
            <div className="space-y-4 mb-8 lg:mb-0">
              <a
                href="mailto:gowthamnedunchezian05@gmail.com"
                className="glass-panel p-5 rounded-2xl flex items-center gap-5 transition duration-300 group hover:border-[var(--color-neon-purple)]"
              >
                <div className="text-2xl text-[var(--color-neon-purple)] text-glow-purple bg-[var(--color-neon-purple)]/10 p-3 rounded-xl group-hover:scale-110 transition duration-300">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-text-primary text-sm tracking-wider">EMAIL</h4>
                  <p className="text-text-secondary text-sm md:text-base font-medium">gowthamnedunchezian05@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/gowtham-tech-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-5 rounded-2xl flex items-center gap-5 transition duration-300 group hover:border-[var(--color-neon-purple)]"
              >
                <div className="text-2xl text-[var(--color-neon-purple)] text-glow-purple bg-[var(--color-neon-purple)]/10 p-3 rounded-xl group-hover:scale-110 transition duration-300">
                  <FaLinkedin />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-text-primary text-sm tracking-wider">LINKEDIN</h4>
                  <p className="text-text-secondary text-sm md:text-base font-medium">Connect on LinkedIn</p>
                </div>
              </a>

              <a
                href="https://github.com/gowtham-tech-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-5 rounded-2xl flex items-center gap-5 transition duration-300 group hover:border-[var(--color-neon-purple)]"
              >
                <div className="text-2xl text-[var(--color-neon-purple)] text-glow-purple bg-[var(--color-neon-purple)]/10 p-3 rounded-xl group-hover:scale-110 transition duration-300">
                  <FaGithub />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-text-primary text-sm tracking-wider">GITHUB</h4>
                  <p className="text-text-secondary text-sm md:text-base font-medium">Check repositories</p>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden bg-bg-glass backdrop-blur-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold font-heading text-text-primary mb-2 tracking-widest">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-bg-secondary border border-border-glass rounded-xl px-4 py-3 text-text-primary placeholder-text-secondary focus:outline-none focus:border-[var(--color-neon-purple)] focus:shadow-[0_0_12px_rgba(139,92,246,0.25)] transition-all duration-300 text-base"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold font-heading text-text-primary mb-2 tracking-widest">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-bg-secondary border border-border-glass rounded-xl px-4 py-3 text-text-primary placeholder-text-secondary focus:outline-none focus:border-[var(--color-neon-purple)] focus:shadow-[0_0_12px_rgba(139,92,246,0.25)] transition-all duration-300 text-base"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold font-heading text-text-primary mb-2 tracking-widest">
                    YOUR MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-bg-secondary border border-border-glass rounded-xl px-4 py-3 text-text-primary placeholder-text-secondary focus:outline-none focus:border-[var(--color-neon-purple)] focus:shadow-[0_0_12px_rgba(139,92,246,0.25)] transition-all duration-300 text-base resize-none"
                    placeholder="Hi Gowtham, I'd like to work with you on..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary py-4 rounded-full font-bold font-heading tracking-widest text-sm flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span>SENDING...</span>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>SEND MESSAGE</span>
                    </>
                  )}
                </button>
              </form>

              {/* Status Message overlay */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-bg-glass backdrop-blur-xl flex flex-col items-center justify-center text-center p-6 rounded-2xl"
                >
                  <div className="text-5xl text-[var(--color-neon-purple)] text-glow-purple mb-4">✓</div>
                  <h4 className="text-2xl font-bold font-heading text-text-primary mb-2">Message Sent!</h4>
                  <p className="text-text-secondary max-w-sm font-medium">
                    Thank you for reaching out. I'll get back to you shortly!
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact