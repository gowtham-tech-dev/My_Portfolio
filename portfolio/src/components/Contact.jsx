import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

function Contact() {
  return (
    <section
  id="contact"
  className="bg-slate-950 text-white py-24 px-6"
>

      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-16">

          <h1 className="text-5xl font-bold mb-4">
            Contact Me
          </h1>

          <div className="w-24 h-1 bg-blue-500 mx-auto rounded"></div>

        </div>

        {/* CONTACT CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* EMAIL */}
          <a
            href="mailto:yourmail@gmail.com"
            className="bg-slate-900 p-8 rounded-2xl text-center hover:scale-105 transition duration-300 shadow-lg"
          >

            <div className="text-5xl text-blue-500 flex justify-center mb-5">
              <FaEnvelope />
            </div>

            <h2 className="text-2xl font-semibold mb-3">
              Email
            </h2>

            <p className="text-gray-400">
              yourmail@gmail.com
            </p>

          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/gowtham-n-7673712b2/"
            target="_blank"
            className="bg-slate-900 p-8 rounded-2xl text-center hover:scale-105 transition duration-300 shadow-lg"
          >

            <div className="text-5xl text-blue-500 flex justify-center mb-5">
              <FaLinkedin />
            </div>

            <h2 className="text-2xl font-semibold mb-3">
              LinkedIn
            </h2>

            <p className="text-gray-400">
              Connect with me
            </p>

          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/gowtham-tech-dev"
            target="_blank"
            className="bg-slate-900 p-8 rounded-2xl text-center hover:scale-105 transition duration-300 shadow-lg"
          >

            <div className="text-5xl text-blue-500 flex justify-center mb-5">
              <FaGithub />
            </div>

            <h2 className="text-2xl font-semibold mb-3">
              GitHub
            </h2>

            <p className="text-gray-400">
              View my projects
            </p>

          </a>

        </div>

      </div>

    </section>
  )
}

export default Contact