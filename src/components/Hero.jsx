import { useEffect, useRef, useState } from 'react'

const WhatsAppIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
)

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
)

/* Ayurvedic Mandala / Lotus decorative illustration — no human figures */
const AyurvedicIllustration = () => (
  <svg viewBox="0 0 400 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-illustration">
    <defs>
      <radialGradient id="glowGrad" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="rgba(201,168,76,0.18)"/>
        <stop offset="100%" stopColor="transparent"/>
      </radialGradient>
      <radialGradient id="innerGlow" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="rgba(76,175,80,0.12)"/>
        <stop offset="100%" stopColor="transparent"/>
      </radialGradient>
      <radialGradient id="lotusCore" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="#fff8e7"/>
        <stop offset="100%" stopColor="rgba(201,168,76,0.4)"/>
      </radialGradient>
    </defs>

    {/* Ambient glow orbs */}
    <circle cx="200" cy="225" r="180" fill="url(#glowGrad)" className="hero-glow-circle"/>
    <circle cx="200" cy="225" r="120" fill="url(#innerGlow)" className="hero-glow-inner"/>

    {/* Outer mandala ring */}
    {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle, i) => (
      <ellipse
        key={i}
        cx={200 + 140 * Math.cos((angle * Math.PI) / 180)}
        cy={225 + 140 * Math.sin((angle * Math.PI) / 180)}
        rx="10" ry="4"
        fill="rgba(201,168,76,0.25)"
        transform={`rotate(${angle}, ${200 + 140 * Math.cos((angle * Math.PI) / 180)}, ${225 + 140 * Math.sin((angle * Math.PI) / 180)})`}
        className="sparkle-1"
      />
    ))}

    {/* Lotus petals — outer ring */}
    {[0,45,90,135,180,225,270,315].map((angle, i) => {
      const rad = (angle * Math.PI) / 180
      const px = 200 + 80 * Math.cos(rad)
      const py = 225 + 80 * Math.sin(rad)
      return (
        <ellipse
          key={i}
          cx={px} cy={py}
          rx="28" ry="12"
          fill={i % 2 === 0 ? 'rgba(201,168,76,0.45)' : 'rgba(76,175,80,0.4)'}
          transform={`rotate(${angle}, ${px}, ${py})`}
          className="lotus-bloom"
        />
      )
    })}

    {/* Lotus petals — inner ring */}
    {[22,67,112,157,202,247,292,337].map((angle, i) => {
      const rad = (angle * Math.PI) / 180
      const px = 200 + 50 * Math.cos(rad)
      const py = 225 + 50 * Math.sin(rad)
      return (
        <ellipse
          key={i}
          cx={px} cy={py}
          rx="20" ry="9"
          fill={i % 2 === 0 ? 'rgba(201,168,76,0.6)' : 'rgba(76,175,80,0.55)'}
          transform={`rotate(${angle}, ${px}, ${py})`}
          className="lotus-bloom"
        />
      )
    })}

    {/* Lotus core */}
    <circle cx="200" cy="225" r="28" fill="url(#lotusCore)" className="hero-glow-inner"/>
    <circle cx="200" cy="225" r="16" fill="rgba(201,168,76,0.7)"/>
    <circle cx="200" cy="225" r="8" fill="#c9a84c"/>

    {/* Decorative leaf sprays */}
    <path d="M60 100C40 80 30 50 55 30C80 10 95 40 75 65Z" fill="rgba(76,175,80,0.3)" className="leaf-sway-1"/>
    <path d="M340 100C360 80 370 50 345 30C320 10 305 40 325 65Z" fill="rgba(76,175,80,0.25)" className="leaf-sway-2"/>
    <path d="M55 360C35 340 28 310 50 288C72 266 88 290 70 318Z" fill="rgba(76,175,80,0.2)" className="leaf-sway-3"/>
    <path d="M345 360C365 340 372 310 350 288C328 266 312 290 330 318Z" fill="rgba(76,175,80,0.2)" className="leaf-sway-1"/>
    <path d="M80 60C65 50 58 30 72 18C86 6 96 22 85 40Z" fill="rgba(201,168,76,0.18)" className="leaf-sway-2"/>
    <path d="M320 60C335 50 342 30 328 18C314 6 304 22 315 40Z" fill="rgba(201,168,76,0.15)" className="leaf-sway-3"/>

    {/* Floating sparkle dots */}
    <circle cx="80" cy="120" r="3" fill="#c9a84c" className="sparkle-1"/>
    <circle cx="320" cy="100" r="2.5" fill="#c9a84c" className="sparkle-2"/>
    <circle cx="60" cy="300" r="2" fill="#4caf50" className="sparkle-3"/>
    <circle cx="340" cy="320" r="2.5" fill="#c9a84c" className="sparkle-4"/>
    <circle cx="110" cy="60" r="2" fill="#4caf50" className="sparkle-5"/>
    <circle cx="290" cy="400" r="2.5" fill="#c9a84c" className="sparkle-6"/>
    <circle cx="160" cy="50" r="1.5" fill="#c9a84c" className="sparkle-1"/>
    <circle cx="240" cy="410" r="2" fill="#4caf50" className="sparkle-3"/>

    {/* Star accents */}
    <path d="M310 155L312 161L318 161L313 165L315 171L310 167L305 171L307 165L302 161L308 161Z" fill="#c9a84c" opacity="0.7" className="sparkle-2"/>
    <path d="M90 195L92 201L98 201L93 205L95 211L90 207L85 211L87 205L82 201L88 201Z" fill="#c9a84c" opacity="0.6" className="sparkle-4"/>
    <path d="M200 40L202 46L208 46L203 50L205 56L200 52L195 56L197 50L192 46L198 46Z" fill="#c9a84c" opacity="0.5" className="sparkle-1"/>

    {/* Bottom water ripple lines */}
    <ellipse cx="200" cy="420" rx="100" ry="8" fill="rgba(76,175,80,0.12)" className="hero-glow-inner"/>
    <ellipse cx="200" cy="430" rx="70" ry="5" fill="rgba(76,175,80,0.08)" className="hero-glow-inner"/>
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
            <AyurvedicIllustration />
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
