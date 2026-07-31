import { useEffect, useRef } from "react"

/**
 * GlowIllustration — Canvas-based particle glow effect
 * Renders a luminous "</>"-shaped particle cloud with bokeh/sparkle style,
 * matching the unicorn-glow reference (warm-to-cool gradient sparkles on dark bg).
 * Respects prefers-reduced-motion.
 */
function GlowIllustration({ size = 420 }) {
  const canvasRef = useRef(null)
  const rafRef    = useRef(null)
  const timeRef   = useRef(0)
  const reduced   = typeof window !== "undefined"
    && window.matchMedia("(prefers-reduced-motion: reduce)").matches

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx    = canvas.getContext("2d")
    const dpr    = window.devicePixelRatio || 1
    const W      = size
    const H      = size

    canvas.width  = W * dpr
    canvas.height = H * dpr
    canvas.style.width  = W + "px"
    canvas.style.height = H + "px"
    ctx.scale(dpr, dpr)

    // ── Helper: parse a flat "</ >" path into point cloud ──────────────
    // We trace the outline of the code bracket symbol as keypoints,
    // then scatter particles around it.
    const cx = W / 2
    const cy = H / 2

    // Brackets are drawn as simple line segments; we scatter particles near them
    const leftBracketPts  = genBracket(cx - 60, cy, -1, 70)   // "<"
    const slashPts        = genSlash  (cx,       cy,     70)   // "/"
    const rightBracketPts = genBracket(cx + 60,  cy,  1, 70)   // ">"

    const keyPts = [...leftBracketPts, ...slashPts, ...rightBracketPts]

    // ── Build particle list ─────────────────────────────────────────────
    const PARTICLE_COUNT = 320
    const particles = Array.from({ length: PARTICLE_COUNT }, () => {
      // 70% on the glyph outline, 30% scattered freely
      const onGlyph = Math.random() < 0.70
      const base    = keyPts[Math.floor(Math.random() * keyPts.length)]
      const spread  = onGlyph ? 18 : W * 0.45

      const x   = onGlyph
        ? base.x + (Math.random() - 0.5) * spread
        : cx + (Math.random() - 0.5) * spread
      const y   = onGlyph
        ? base.y + (Math.random() - 0.5) * spread
        : cy + (Math.random() - 0.5) * spread

      // Warm-to-cool gradient palette (magenta → violet → cyan → gold)
      const palette = [
        "255,80,200",   // magenta
        "180,60,255",   // violet
        "139,92,246",   // accent purple
        "100,200,255",  // cyan
        "255,210,80",   // gold
        "255,255,255",  // white core
      ]
      const color = palette[Math.floor(Math.random() * palette.length)]

      return {
        x, y,
        ox: x, oy: y,               // origin
        r: Math.random() * 2.2 + 0.3,
        alpha: Math.random() * 0.8 + 0.2,
        color,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.6 + 0.2,
        drift: (Math.random() - 0.5) * 0.8,
        twinkle: Math.random() < 0.35,
        bloom: Math.random() < 0.12,  // larger bokeh blobs
        bloomR: Math.random() * 14 + 6,
      }
    })

    // ── Draw one frame ──────────────────────────────────────────────────
    function draw(t) {
      ctx.clearRect(0, 0, W, H)

      // Soft radial dark background glow
      const bg = ctx.createRadialGradient(cx, cy, 0, cx, cy, W * 0.52)
      bg.addColorStop(0,   "rgba(109,40,217,0.22)")
      bg.addColorStop(0.5, "rgba(45,20,84,0.12)")
      bg.addColorStop(1,   "rgba(13,6,20,0)")
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, W, H)

      // Draw bokeh blobs first (behind sharp specks)
      for (const p of particles) {
        if (!p.bloom) continue
        const twinkleA = p.twinkle
          ? p.alpha * (0.5 + 0.5 * Math.sin(t * p.speed + p.phase))
          : p.alpha
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.bloomR)
        grad.addColorStop(0,   `rgba(${p.color},${(twinkleA * 0.5).toFixed(2)})`)
        grad.addColorStop(1,   `rgba(${p.color},0)`)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.bloomR, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
      }

      // Draw sharp specks
      for (const p of particles) {
        const twinkleA = p.twinkle
          ? p.alpha * (0.4 + 0.6 * Math.sin(t * p.speed * 2 + p.phase))
          : p.alpha
        ctx.globalAlpha = Math.max(0, Math.min(1, twinkleA))
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color},1)`
        ctx.fill()
        // tiny cross sparkle on brighter particles
        if (p.r > 1.5) {
          ctx.strokeStyle = `rgba(${p.color},${(twinkleA * 0.6).toFixed(2)})`
          ctx.lineWidth = 0.5
          ctx.beginPath()
          ctx.moveTo(p.x - p.r * 3, p.y)
          ctx.lineTo(p.x + p.r * 3, p.y)
          ctx.moveTo(p.x, p.y - p.r * 3)
          ctx.lineTo(p.x, p.y + p.r * 3)
          ctx.stroke()
        }
      }

      ctx.globalAlpha = 1
    }

    // ── Animate ─────────────────────────────────────────────────────────
    function animate(ts) {
      timeRef.current = ts / 1000

      // Drift particles gently
      if (!reduced) {
        for (const p of particles) {
          const wave = Math.sin(timeRef.current * p.speed + p.phase) * 3
          p.x = p.ox + Math.cos(p.phase) * wave + p.drift
          p.y = p.oy + Math.sin(p.phase) * wave + p.drift * 0.5
        }
      }

      draw(timeRef.current)
      rafRef.current = requestAnimationFrame(animate)
    }

    if (reduced) {
      draw(0)
    } else {
      rafRef.current = requestAnimationFrame(animate)
    }

    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [size, reduced])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ imageRendering: "crisp-edges" }}
    />
  )
}

// ── Utility: scatter points along "<" or ">" bracket shape ─────────────
function genBracket(cx, cy, dir, h) {
  const pts = []
  const steps = 60
  for (let i = 0; i <= steps; i++) {
    const t  = i / steps              // 0 → 1
    const hh = h / 2
    // top half
    const x1 = cx + dir * hh * (0.5 - t)
    const y1 = cy - hh + i * (h / steps)
    pts.push({ x: x1, y: y1 })
  }
  return pts
}

// ── Utility: scatter points along a "/" slash ────────────────────────
function genSlash(cx, cy, h) {
  const pts = []
  const steps = 60
  for (let i = 0; i <= steps; i++) {
    const t  = i / steps
    const x  = cx - 20 + t * 40
    const y  = cy + h / 2 - t * h
    pts.push({ x, y })
  }
  return pts
}

export default GlowIllustration
