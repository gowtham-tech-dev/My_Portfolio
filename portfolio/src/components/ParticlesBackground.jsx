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
            value: 40,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: ["#00f2fe", "#f355da", "#8b5cf6"],
          },
          links: {
            enable: true,
            color: "#8b5cf6",
            distance: 160,
            opacity: 0.15,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
          size: {
            value: { min: 1, max: 3 },
            random: true,
          },
          opacity: {
            value: { min: 0.2, max: 0.4 },
            random: true,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 0.35,
              },
            },
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