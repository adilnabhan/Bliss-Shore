import { useState } from 'react'
import { supabase } from '../lib/supabase'
import useFadeIn from '../hooks/useFadeIn'

const WhatsAppIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
)

const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
)

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)
  const headerRef = useFadeIn()
  const infoRef = useFadeIn(0.1)
  const formRef = useFadeIn(0.2)
  const mapRef = useFadeIn(0.3)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          created_at: new Date().toISOString()
        }])

      if (error) {
        console.warn('Supabase save failed (this is okay if not configured):', error.message)
      }

      let waMsg = `Hello! I'm ${formData.name}.\n`
      if (formData.phone) waMsg += `Phone: ${formData.phone}\n`
      if (formData.email) waMsg += `Email: ${formData.email}\n`
      if (formData.service) waMsg += `Service: ${formData.service}\n`
      if (formData.message) waMsg += `Message: ${formData.message}\n`

      const whatsappUrl = `https://wa.me/917090806606?text=${encodeURIComponent(waMsg)}`

      setStatus({ type: 'success', message: '✓ Message sent! Redirecting to WhatsApp...' })

      setTimeout(() => {
        window.open(whatsappUrl, '_blank')
        setFormData({ name: '', phone: '', email: '', service: '', message: '' })
        setStatus({ type: '', message: '' })
      }, 1200)

    } catch (err) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try WhatsApp directly.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header fade-up" ref={headerRef}>
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Contact <span className="highlight">Us</span></h2>
          <div className="section-divider"></div>
        </div>

        <div className="contact-grid">
          <div className="contact-info fade-up" ref={infoRef}>
            <div className="contact-card">
              <div className="contact-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3>Our Location</h3>
              <p>Bliss Shore Ayur Care<br />CW36 735, Kizhakkoth<br />Kerala 673572, India</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3>Phone</h3>
              <p><a href="tel:+917090806606">+91 7090 806 606</a></p>
            </div>
            <div className="contact-card">
              <div className="contact-icon-wrap">
                <WhatsAppIcon size={24} />
              </div>
              <h3>WhatsApp</h3>
              <p><a href="https://wa.me/917090806606" target="_blank" rel="noopener noreferrer">Chat with us on WhatsApp</a></p>
            </div>
            <div className="contact-cta-buttons">
              <a href="https://wa.me/917090806606" className="btn-whatsapp-lg" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> Chat on WhatsApp
              </a>
              <a href="tel:+917090806606" className="btn-call-lg">
                <PhoneIcon /> Call Now
              </a>
            </div>
          </div>

          <div className="contact-form-wrap fade-up" ref={formRef}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send us a Message</h3>

              {status.message && (
                <div className={`form-status ${status.type}`}>{status.message}</div>
              )}

              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
              </div>
              <div className="form-group">
                <select name="service" value={formData.service} onChange={handleChange}>
                  <option value="">Select Service</option>
                  <option value="postnatal-care">Post Natal Care Package</option>
                  <option value="ayurvedic-therapy">Ayurvedic Therapy</option>
                  <option value="beauty-wellness">Beauty & Wellness</option>
                  <option value="consultation">Doctor Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="map-container fade-up" ref={mapRef}>
          <h3 className="map-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            Find Us Here
          </h3>
          <div className="map-frame-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.5!2d75.9!3d11.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDE4JzAwLjAiTiA3NcKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: '16px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bliss Shore Ayur Care Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
