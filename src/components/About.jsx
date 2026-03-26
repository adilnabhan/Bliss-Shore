import useFadeIn from '../hooks/useFadeIn'

const features = [
  { icon: '🏡', title: 'Comfortable Accommodation', desc: 'Single and double rooms, AC and non-AC options.' },
  { icon: '🍲', title: 'Nutritious Meals', desc: 'Eight wholesome meals daily for mothers and three meals for one bystander.' },
  { icon: '🩺', title: 'Comprehensive Care', desc: 'Free laundry, doctor consultations for mother & child up to 3 months after delivery.' },
  { icon: '💆‍♀️', title: 'Healing Therapies', desc: 'Abhyangam, Kashaya body bath, abdominal binding, baby massage & Ayurvedic kizhi.' },
]

export default function About() {
  const headerRef = useFadeIn()
  const contentRef = useFadeIn(0.1)
  const featuresRef = useFadeIn(0.2)

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header fade-up" ref={headerRef}>
          <span className="section-tag">Who We Are</span>
          <h2 className="section-title">About <span className="highlight">Bliss Shore</span></h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-grid">
          <div className="about-content fade-up" ref={contentRef}>
            <p className="about-text">
              At <strong>Bliss Shore Ayur Care Post Natal Care Centre</strong>, we are dedicated
              to nurturing mothers and newborns with the timeless wisdom of Ayurveda. Located in
              the serene surroundings of <strong>Kizhakkoth, Kerala</strong>, our centre offers a
              holistic environment where care, comfort, and tradition come together to support
              postnatal recovery.
            </p>
            <p className="about-text">
              We believe that motherhood deserves the highest level of attention and healing. From
              comfortable accommodation and nutritious Ayurvedic meals to comprehensive medical
              care and specialized healing therapies — we provide everything a mother needs for
              complete recovery and renewed vitality.
            </p>
            <p className="about-text">
              Our beauty & wellness treatments — including herbal facials, anti-stretchmark
              treatments, hair spa, and rejuvenating body packs — are designed to restore
              confidence and vitality.
            </p>
            <div className="about-mission">
              <h3>🎯 Our Mission</h3>
              <p>
                To blend traditional Ayurvedic practices with modern comforts, ensuring every mother
                experiences a <strong>safe, rejuvenating, and empowering postnatal journey</strong>.
                With compassionate care and expert guidance, Bliss Shore Ayur Care is more than a
                centre — it is a <strong>sanctuary for healing, bonding, and renewal</strong>.
              </p>
            </div>
          </div>

          <div className="about-features fade-up" ref={featuresRef}>
            {features.map((f, i) => (
              <div className="feature-card" key={i}>
                <div className="feature-icon">{f.icon}</div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
