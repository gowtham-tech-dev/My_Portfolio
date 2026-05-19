function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-5">

      <h1 className="text-6xl font-bold mb-4">
        Hi, I'm <span className="text-blue-500">Gowtham N</span>
      </h1>

      <p className="text-2xl text-gray-400 mb-6">
        React Developer | Python Developer
      </p>

      <p className="max-w-2xl text-gray-500 mb-8">
        Passionate about building modern web applications,
        beautiful UIs, and full stack projects.
      </p>

      <div className="flex gap-4">
        <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700">
          View Projects
        </button>

        <button className="border border-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500">
          Contact Me
        </button>
      </div>

    </section>
  )
}

export default Hero