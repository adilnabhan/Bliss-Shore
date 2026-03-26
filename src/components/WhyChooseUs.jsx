import useFadeIn from '../hooks/useFadeIn'

const reasons = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Expert Ayurvedic Care',
    desc: 'Authentic treatments rooted in centuries of Ayurvedic tradition, administered by trained practitioners for complete postnatal recovery.'
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'Riverside Serenity',
    desc: 'Nestled in lush tropical surroundings in Kizhakkoth, Kerala — a tranquil retreat away from urban chaos for deep healing and rest.'
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/>
        <path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Comprehensive Support',
    desc: '24/7 dedicated care for both mother and baby, including doctor consultations, nutritious meals, and free laundry services.'
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Safe & Hygienic',
    desc: 'Meticulously maintained rooms with AC/Non-AC options, ensuring a clean, safe, and comfortable environment for recovery.'
  }
]

export default function WhyChooseUs() {
  const headerRef = useFadeIn()
  const gridRef = useFadeIn(0.1)

  return (
    <section className="section why-choose-section" id="why-choose-us">
      <div className="container">
        <div className="section-header fade-up" ref={headerRef}>
          <span className="section-tag">Why Us</span>
          <h2 className="section-title">Why Choose <span className="highlight">Bliss Shore</span></h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Where ancient Ayurvedic wisdom meets modern comfort — for an experience you and your baby deserve.
          </p>
        </div>

        <div className="why-grid fade-up" ref={gridRef}>
          {reasons.map((item, i) => (
            <div className="why-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="why-card-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
