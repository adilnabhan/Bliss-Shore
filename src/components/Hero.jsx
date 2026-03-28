import { useEffect, useRef, useState } from 'react'

const WhatsAppIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
)

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
)

/* 3D‑style Mother & Baby SVG illustration — no sindoor */
const MotherBabyIllustration = () => (
  <svg viewBox="0 0 420 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-illustration">
    <defs>
      <radialGradient id="bgGlow" cx="0.5" cy="0.45" r="0.55">
        <stop offset="0%" stopColor="rgba(201,168,76,0.20)"/>
        <stop offset="100%" stopColor="transparent"/>
      </radialGradient>
      <radialGradient id="skinGrad" cx="0.45" cy="0.35" r="0.55">
        <stop offset="0%" stopColor="#f5d0a9"/>
        <stop offset="80%" stopColor="#d4a574"/>
        <stop offset="100%" stopColor="#c49660"/>
      </radialGradient>
      <radialGradient id="babySkin" cx="0.45" cy="0.4" r="0.5">
        <stop offset="0%" stopColor="#fbe0c4"/>
        <stop offset="100%" stopColor="#e8b88a"/>
      </radialGradient>
      <linearGradient id="sareeGrad" x1="0" y1="0" x2="0.3" y2="1">
        <stop offset="0%" stopColor="#2e7d32"/>
        <stop offset="50%" stopColor="#1b5e20"/>
        <stop offset="100%" stopColor="#0f3d14"/>
      </linearGradient>
      <linearGradient id="sareeAccent" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#c9a84c"/>
        <stop offset="100%" stopColor="#d4b96a"/>
      </linearGradient>
      <linearGradient id="hairGrad" x1="0.3" y1="0" x2="0.7" y2="1">
        <stop offset="0%" stopColor="#1a1a2e"/>
        <stop offset="100%" stopColor="#0d0d1a"/>
      </linearGradient>
      <radialGradient id="haloGrad" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="rgba(201,168,76,0.35)"/>
        <stop offset="60%" stopColor="rgba(201,168,76,0.1)"/>
        <stop offset="100%" stopColor="transparent"/>
      </radialGradient>
      <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="8" result="blur"/>
        <feOffset dx="4" dy="8" result="offsetBlur"/>
        <feFlood floodColor="rgba(0,0,0,0.25)" result="color"/>
        <feComposite in="color" in2="offsetBlur" operator="in" result="shadow"/>
        <feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      <filter id="glow3d" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur"/>
        <feComposite in="SourceGraphic" in2="blur" operator="over"/>
      </filter>
    </defs>

    {/* Background halo */}
    <circle cx="210" cy="230" r="200" fill="url(#haloGrad)" className="hero-glow-circle"/>
    <circle cx="210" cy="230" r="140" fill="url(#bgGlow)" className="hero-glow-inner"/>

    {/* Decorative sparkles */}
    <circle cx="70" cy="80" r="3" fill="#c9a84c" className="sparkle-1"/>
    <circle cx="350" cy="110" r="2.5" fill="#c9a84c" className="sparkle-2"/>
    <circle cx="50" cy="320" r="2" fill="#4caf50" className="sparkle-3"/>
    <circle cx="370" cy="350" r="2.5" fill="#c9a84c" className="sparkle-4"/>
    <circle cx="100" cy="50" r="2" fill="#4caf50" className="sparkle-5"/>
    <circle cx="330" cy="60" r="1.5" fill="#c9a84c" className="sparkle-6"/>

    {/* Star accents */}
    <path d="M340 140L342 146L348 146L343 150L345 156L340 152L335 156L337 150L332 146L338 146Z" fill="#c9a84c" opacity="0.7" className="sparkle-2"/>
    <path d="M75 180L77 186L83 186L78 190L80 196L75 192L70 196L72 190L67 186L73 186Z" fill="#c9a84c" opacity="0.6" className="sparkle-4"/>

    {/* Leaf decorations */}
    <path d="M50 120C35 100 30 70 52 50C74 30 85 60 68 88Z" fill="rgba(76,175,80,0.25)" className="leaf-sway-1"/>
    <path d="M370 130C385 110 390 80 368 60C346 40 335 70 352 98Z" fill="rgba(76,175,80,0.20)" className="leaf-sway-2"/>
    <path d="M45 390C25 370 20 340 42 318C64 296 78 325 58 355Z" fill="rgba(76,175,80,0.18)" className="leaf-sway-3"/>
    <path d="M375 400C395 380 398 350 376 328C354 306 340 335 362 365Z" fill="rgba(76,175,80,0.15)" className="leaf-sway-1"/>

    {/* Main figure group with 3D shadow */}
    <g filter="url(#softShadow)" className="mother-group">
      {/* Saree / Body — flowing drape */}
      <path d="M150 220 C145 260, 120 320, 110 400 C108 420, 112 450, 130 470 L290 470 C308 450, 312 420, 310 400 C300 320, 275 260, 270 220 Z" fill="url(#sareeGrad)"/>
      {/* Saree golden border — bottom */}
      <path d="M130 468 C150 458, 250 458, 290 468 L290 475 C250 466, 170 466, 130 475 Z" fill="url(#sareeAccent)" opacity="0.9"/>
      {/* Saree golden border — diagonal pallu */}
      <path d="M155 220 C148 250, 135 290, 128 340 L135 342 C142 292, 155 252, 162 222 Z" fill="url(#sareeAccent)" opacity="0.7"/>
      {/* Additional saree drape fold */}
      <path d="M245 230 C260 280, 270 340, 278 400 L285 398 C277 338, 267 278, 252 228 Z" fill="rgba(255,255,255,0.08)"/>

      {/* Neck */}
      <ellipse cx="210" cy="170" rx="22" ry="30" fill="url(#skinGrad)"/>

      {/* Necklace — traditional Kerala style */}
      <path d="M188 185 Q195 200, 210 205 Q225 200, 232 185" fill="none" stroke="#c9a84c" strokeWidth="2.5"/>
      <circle cx="210" cy="206" r="4" fill="#c9a84c"/>
      <circle cx="198" cy="198" r="2.5" fill="#c9a84c" opacity="0.8"/>
      <circle cx="222" cy="198" r="2.5" fill="#c9a84c" opacity="0.8"/>

      {/* Mother's face — oval 3D form */}
      <ellipse cx="210" cy="130" rx="42" ry="52" fill="url(#skinGrad)"/>
      {/* Nose highlight */}
      <path d="M210 135 Q213 142, 210 148 Q207 142, 210 135Z" fill="rgba(255,255,255,0.15)"/>
      {/* Gentle smile */}
      <path d="M198 152 Q210 162, 222 152" fill="none" stroke="#a0705a" strokeWidth="1.8" strokeLinecap="round"/>
      {/* Eyes — closed peacefully */}
      <path d="M190 125 Q196 120, 202 125" fill="none" stroke="#2c1810" strokeWidth="2" strokeLinecap="round" className="eye-blink"/>
      <path d="M218 125 Q224 120, 230 125" fill="none" stroke="#2c1810" strokeWidth="2" strokeLinecap="round" className="eye-blink"/>
      {/* Eyelashes */}
      <path d="M189 124 L187 121" stroke="#2c1810" strokeWidth="1" strokeLinecap="round"/>
      <path d="M231 124 L233 121" stroke="#2c1810" strokeWidth="1" strokeLinecap="round"/>
      {/* Eyebrows */}
      <path d="M187 116 Q195 110, 204 114" fill="none" stroke="#1a1a2e" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M216 114 Q225 110, 233 116" fill="none" stroke="#1a1a2e" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Bindi — small decorative gold dot (NOT sindoor) */}
      <circle cx="210" cy="108" r="2.5" fill="#c9a84c"/>

      {/* Hair — voluminous 3D style */}
      <path d="M168 120 C165 90, 175 60, 210 55 C245 60, 255 90, 252 120 C255 100, 250 75, 210 68 C170 75, 165 100, 168 120Z" fill="url(#hairGrad)"/>
      {/* Hair bun */}
      <circle cx="210" cy="58" r="22" fill="url(#hairGrad)"/>
      {/* Hair decoration — flowers */}
      <circle cx="235" cy="68" r="6" fill="#fff" opacity="0.9"/>
      <circle cx="235" cy="68" r="3" fill="#c9a84c" opacity="0.8"/>
      <circle cx="245" cy="78" r="5" fill="#fff" opacity="0.7"/>
      <circle cx="245" cy="78" r="2.5" fill="#c9a84c" opacity="0.6"/>
      <circle cx="225" cy="60" r="5" fill="#fff" opacity="0.8"/>
      <circle cx="225" cy="60" r="2.5" fill="#c9a84c" opacity="0.7"/>
      {/* Hair side strands */}
      <path d="M168 120 C163 135, 162 150, 165 165" fill="none" stroke="#1a1a2e" strokeWidth="5" strokeLinecap="round"/>
      <path d="M252 120 C257 135, 258 150, 255 165" fill="none" stroke="#1a1a2e" strokeWidth="5" strokeLinecap="round"/>

      {/* Earrings */}
      <ellipse cx="168" cy="140" rx="5" ry="8" fill="#c9a84c" className="earring-swing"/>
      <ellipse cx="252" cy="140" rx="5" ry="8" fill="#c9a84c" className="earring-swing"/>

      {/* Mother's arms — cradling */}
      {/* Left arm */}
      <path d="M155 225 C140 260, 145 300, 170 320 Q185 330, 195 310" fill="url(#skinGrad)" stroke="#c49660" strokeWidth="0.5"/>
      {/* Right arm */}
      <path d="M265 225 C275 260, 270 300, 250 320 Q235 330, 225 310" fill="url(#skinGrad)" stroke="#c49660" strokeWidth="0.5"/>

      {/* Baby — cradled in arms */}
      <g className="baby-breathe">
        {/* Baby blanket */}
        <ellipse cx="210" cy="310" rx="50" ry="30" fill="rgba(255,255,255,0.15)"/>
        <path d="M165 295 C175 280, 200 275, 210 278 C220 275, 245 280, 255 295 C250 320, 230 335, 210 338 C190 335, 170 320, 165 295Z" fill="#fff8e7" opacity="0.9"/>
        {/* Baby body */}
        <ellipse cx="210" cy="308" rx="28" ry="22" fill="url(#babySkin)"/>
        {/* Baby face */}
        <circle cx="210" cy="290" r="16" fill="url(#babySkin)"/>
        {/* Baby eyes — sleeping */}
        <path d="M202 288 Q206 285, 210 288" fill="none" stroke="#5a3a28" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M214 288 Q218 285, 222 288" fill="none" stroke="#5a3a28" strokeWidth="1.2" strokeLinecap="round"/>
        {/* Baby smile */}
        <path d="M207 295 Q210 298, 213 295" fill="none" stroke="#c49660" strokeWidth="1" strokeLinecap="round"/>
        {/* Baby tiny nose */}
        <circle cx="210" cy="292" r="1" fill="#d4a574"/>
        {/* Baby hair tuft */}
        <path d="M200 278 Q205 270, 210 275 Q215 268, 220 278" fill="#2c1810" opacity="0.6"/>
      </g>
    </g>

    {/* Lotus base — mother sitting/standing on stylised lotus */}
    {[0,40,80,120,160,200,240,280,320].map((angle, i) => {
      const rad = (angle * Math.PI) / 180
      const px = 210 + 80 * Math.cos(rad)
      const py = 460 + 18 * Math.sin(rad)
      return (
        <ellipse
          key={i}
          cx={px} cy={py}
          rx="24" ry="10"
          fill={i % 2 === 0 ? 'rgba(201,168,76,0.35)' : 'rgba(76,175,80,0.30)'}
          transform={`rotate(${angle}, ${px}, ${py})`}
          className="lotus-bloom"
        />
      )
    })}
    <ellipse cx="210" cy="460" rx="18" ry="8" fill="rgba(201,168,76,0.5)"/>

    {/* Bottom glow / reflection */}
    <ellipse cx="210" cy="480" rx="100" ry="10" fill="rgba(76,175,80,0.10)" className="hero-glow-inner"/>
    <ellipse cx="210" cy="490" rx="70" ry="6" fill="rgba(76,175,80,0.06)" className="hero-glow-inner"/>
  </svg>
)

function useCountUp(end, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    if (!startOnView || !ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()
          const animate = (now) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * end))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration, startOnView])

  return { count, ref }
}

const stats = [
  { value: 500, suffix: '+', label: 'Mothers Cared For', icon: '👶' },
  { value: 15, suffix: '+', label: 'Ayurvedic Therapies', icon: '🌿' },
  { value: 8, suffix: '', label: 'Meals Daily', icon: '🍲' },
  { value: 24, suffix: '/7', label: 'Support Available', icon: '💚' }
]

function StatItem({ stat }) {
  const { count, ref } = useCountUp(stat.value, 2000)
  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-icon">{stat.icon}</span>
      <span className="stat-number">{count}{stat.suffix}</span>
      <span className="stat-label">{stat.label}</span>
    </div>
  )
}

export default function Hero() {
  const particlesRef = useRef(null)

  useEffect(() => {
    if (!particlesRef.current) return
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div')
      particle.classList.add('hero-particle')
      particle.style.left = Math.random() * 100 + '%'
      particle.style.top = Math.random() * 100 + '%'
      particle.style.animationDelay = Math.random() * 15 + 's'
      particle.style.animationDuration = (10 + Math.random() * 10) + 's'
      const size = (2 + Math.random() * 4) + 'px'
      particle.style.width = size
      particle.style.height = size
      particlesRef.current.appendChild(particle)
    }
  }, [])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-overlay"></div>
        <div className="hero-particles" ref={particlesRef}></div>

        <div className="hero-split">
          <div className="hero-content fade-up visible">
            <span className="hero-badge">🌿 Ayurvedic Post Natal Care</span>
            <h1 className="hero-title">Bliss Shore<br /><span className="highlight">Ayur Care</span></h1>
            <p className="hero-subtitle">Connection and Prosperity</p>
            <p className="hero-description">
              Nurturing mothers and newborns with the timeless wisdom of Ayurveda
              in the serene surroundings of Kizhakkoth, Kerala.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
                Book Now
              </a>
              <a href="https://wa.me/917090806606" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> Chat on WhatsApp
              </a>
              <a href="tel:+917090806606" className="btn btn-call">
                <PhoneIcon /> Call Now
              </a>
            </div>
          </div>

          <div className="hero-illustration-wrap">
            <MotherBabyIllustration />
          </div>
        </div>

        <div className="hero-scroll">
          <button className="scroll-indicator" onClick={scrollToAbout}>
            <span>Scroll Down</span>
            <div className="scroll-arrow"></div>
          </button>
        </div>
      </section>

      {/* Stats Counter Strip */}
      <section className="stats-strip">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <StatItem key={i} stat={stat} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
