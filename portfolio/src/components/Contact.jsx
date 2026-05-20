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
      className="bg-[#081b29] text-white py-24 px-6 md:px-12 relative overflow-hidden border-t border-[#00abf0]/10"
    >
      <div className="max-w-6xl mx-auto z-10 relative">
        {/* TITLE */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-black mb-4 font-sans tracking-wide text-white">
            CONTACT <span className="text-[#00abf0]">ME</span>
          </h1>
          <div className="w-24 h-1 bg-[#00abf0] mx-auto rounded shadow-[0_0_10px_#00abf0]" />
        </div>

        {/* TWO COLUMN LAYOUT */}
        <div className="grid lg:grid-cols-12 gap-12 text-left">
          {/* LEFT: INFO & SOCIALS */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold font-sans text-white mb-6">
                GET IN <span className="text-[#00abf0]">TOUCH</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8 text-base md:text-lg">
                I'm currently open to new opportunities, freelance work, or collaborations. Send me a message or connect with me via social media and I will get back to you as soon as possible!
              </p>
            </div>

            {/* CONTACT CARDS */}
            <div className="space-y-4 mb-8 lg:mb-0">
              <a
                href="mailto:yourmail@gmail.com"
                className="bg-[#112e42]/50 p-5 rounded-2xl flex items-center gap-5 border border-[#00abf0]/10 hover:border-[#00abf0]/50 hover:shadow-[0_0_15px_rgba(0,171,240,0.15)] transition duration-300 group"
              >
                <div className="text-2xl text-[#00abf0] text-glow-cyan bg-[#00abf0]/10 p-3 rounded-xl group-hover:scale-115 transition duration-300">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-white text-sm tracking-wider">EMAIL</h3>
                  <p className="text-gray-300 text-sm md:text-base">yourmail@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/gowtham-n-7673712b2/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#112e42]/50 p-5 rounded-2xl flex items-center gap-5 border border-[#00abf0]/10 hover:border-[#00abf0]/50 hover:shadow-[0_0_15px_rgba(0,171,240,0.15)] transition duration-300 group"
              >
                <div className="text-2xl text-[#00abf0] text-glow-cyan bg-[#00abf0]/10 p-3 rounded-xl group-hover:scale-115 transition duration-300">
                  <FaLinkedin />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-white text-sm tracking-wider">LINKEDIN</h3>
                  <p className="text-gray-300 text-sm md:text-base">Connect on LinkedIn</p>
                </div>
              </a>

              <a
                href="https://github.com/gowtham-tech-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#112e42]/50 p-5 rounded-2xl flex items-center gap-5 border border-[#00abf0]/10 hover:border-[#00abf0]/50 hover:shadow-[0_0_15px_rgba(0,171,240,0.15)] transition duration-300 group"
              >
                <div className="text-2xl text-[#00abf0] text-glow-cyan bg-[#00abf0]/10 p-3 rounded-xl group-hover:scale-115 transition duration-300">
                  <FaGithub />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-white text-sm tracking-wider">GITHUB</h3>
                  <p className="text-gray-300 text-sm md:text-base">Check repositories</p>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="lg:col-span-7">
            <div className="bg-[#112e42]/70 p-8 rounded-2xl border border-[#00abf0]/15 shadow-2xl relative overflow-hidden">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold font-sans text-white mb-2 tracking-widest">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#081b29] border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00abf0] focus:shadow-[0_0_12px_rgba(0,171,240,0.25)] transition-all duration-300 text-base"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold font-sans text-white mb-2 tracking-widest">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#081b29] border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00abf0] focus:shadow-[0_0_12px_rgba(0,171,240,0.25)] transition-all duration-300 text-base"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold font-sans text-white mb-2 tracking-widest">
                    YOUR MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#081b29] border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00abf0] focus:shadow-[0_0_12px_rgba(0,171,240,0.25)] transition-all duration-300 text-base resize-none"
                    placeholder="Hi Gowtham, I'd like to work with you on..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-pill-cyan py-4 rounded-full font-bold font-sans tracking-widest text-sm flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50"
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
                  className="absolute inset-0 bg-[#081b29] flex flex-col items-center justify-center text-center p-6"
                >
                  <div className="text-5xl text-[#00abf0] text-glow-cyan mb-4">✓</div>
                  <h3 className="text-2xl font-bold font-sans text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-300 max-w-sm">
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