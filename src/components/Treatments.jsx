import useFadeIn from '../hooks/useFadeIn'

const standardTherapies = [
  'Abhyangam (Full Body Massage)', 'Face Massage', 'Head Massage', 'Foot Massage',
  'Kashaya Body Bath (Vethukuli)', 'Abdominal Binding (Udara Veshtanam)',
  'Keshadoopanam', 'Baby Massage & Bath', 'Ayurvedic Kizhi'
]

const beautyWellness = [
  'Anti Stretchmark Treatment', 'Varnyam Body Pack', 'Vibha Body Pack',
  'Herbal Body Scrub', 'Kaanthi Facial Treatment', 'Varnyam Face Pack',
  'Herbal Face Scrub', 'Herbal Hair Pack', 'Kashaya Hair Wash',
  'Hair Protein Treatment', 'Hair Spa'
]

const medicalSupport = [
  'Free doctor consultation for mother & baby',
  'Support up to 3 months after delivery',
  'Internal Ayurvedic medicines (Prasavaraksha)',
  'Additional treatments available'
]

export default function Treatments() {
  const headerRef = useFadeIn()
  const col1Ref = useFadeIn(0.1)
  const col2Ref = useFadeIn(0.2)
  const col3Ref = useFadeIn(0.3)

  return (
    <section className="section section-alt" id="treatments">
      <div className="container">
        <div className="section-header fade-up" ref={headerRef}>
          <span className="section-tag">Our Services</span>
          <h2 className="section-title">Ayurvedic <span className="highlight">Treatments</span></h2>
          <div className="section-divider"></div>
        </div>

        <div className="treatments-grid">
          <div className="treatment-category fade-up" ref={col1Ref}>
            <div className="treatment-header">
              <span className="treatment-icon">🌿</span>
              <h3>Standard Therapies</h3>
            </div>
            <ul className="treatment-list">
              {standardTherapies.map((t, i) => (
                <li key={i}><span className="leaf">🍃</span> {t}</li>
              ))}
            </ul>
          </div>

          <div className="treatment-category fade-up" ref={col2Ref}>
            <div className="treatment-header">
              <span className="treatment-icon">💆‍♀️</span>
              <h3>Beauty & Wellness</h3>
            </div>
            <ul className="treatment-list">
              {beautyWellness.map((t, i) => (
                <li key={i}><span className="leaf">✨</span> {t}</li>
              ))}
            </ul>
          </div>

          <div className="treatment-category fade-up" ref={col3Ref}>
            <div className="treatment-header">
              <span className="treatment-icon">🩺</span>
              <h3>Medical Support</h3>
            </div>
            <ul className="treatment-list">
              {medicalSupport.map((t, i) => (
                <li key={i}><span className="leaf">💚</span> {t}</li>
              ))}
            </ul>
            <div className="treatment-note">
              <p>Comprehensive care from delivery to full recovery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
