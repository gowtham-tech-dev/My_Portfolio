import { useCallback } from "react"
import Particles from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

function ParticlesBackground() {

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  return (

    <Particles
      id="tsparticles"
      init={particlesInit}

      options={{
        background: {
          color: {
            value: "transparent",
          },
        },

        particles: {
          number: {
            value: 50,
          },

          color: {
            value: "#3b82f6",
          },

          links: {
            enable: true,
            color: "#3b82f6",
            distance: 150,
          },

          move: {
            enable: true,
            speed: 2,
          },

          size: {
            value: 3,
          },

          opacity: {
            value: 0.5,
          },
        },

        fullScreen: {
          enable: true,
          zIndex: -1,
        },
      }}
    />

  )
}

export default ParticlesBackground