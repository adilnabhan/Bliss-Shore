import { useRef, useEffect } from 'react'

const facilities = [
  {
    icon: '🏡',
    title: 'Accommodation',
    items: ['Single & Double Rooms', 'AC / Non-AC Options', 'Calm & Hygienic Environment', 'Peaceful Riverside Setting']
  },
  {
    icon: '🍲',
    title: 'Food & Nutrition',
    items: ['8 Nutritious Meals Daily (Mother)', '3 Meals Daily (Bystander)', 'Ayurvedic Diet Plan', 'Recovery & Strength Focused']
  },
  {
    icon: '🧺',
    title: 'Additional Services',
    items: ['Free Laundry (Mother & Baby)', 'Hygienic Care Environment', 'Personalized Attention', '24/7 Support Available']
  }
]

function FacilityCard({ facility, delay }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay * 1000)
          observer.unobserve(el)
        }
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div className="facility-card fade-up" ref={ref}>
      <div className="facility-icon-wrap">
        <span className="facility-icon">{facility.icon}</span>
      </div>
      <h3>{facility.title}</h3>
      <ul>
        {facility.items.map((item, j) => (
          <li key={j}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default function Facilities() {
  const headerRef = useRef(null)

  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section" id="facilities">
      <div className="container">
        <div className="section-header fade-up" ref={headerRef}>
          <span className="section-tag">What We Offer</span>
          <h2 className="section-title">Premium <span className="highlight">Facilities</span></h2>
          <div className="section-divider"></div>
        </div>

        <div className="facilities-grid">
          {facilities.map((f, i) => (
            <FacilityCard key={i} facility={f} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
