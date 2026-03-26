import { useState, useEffect, useCallback } from 'react'
import useFadeIn from '../hooks/useFadeIn'

const testimonials = [
  {
    name: 'Sreelakshmi R.',
    location: 'Kozhikode',
    rating: 5,
    text: 'Bliss Shore was a blessing after my delivery. The Ayurvedic treatments, especially the Abhyangam and Kashaya bath, helped me recover so quickly. The staff treated me like family.',
    avatar: 'S'
  },
  {
    name: 'Fathima N.',
    location: 'Malappuram',
    rating: 5,
    text: 'The food, care, and peaceful surroundings made my postnatal period truly healing. My baby and I received the best attention. Highly recommend to all new mothers!',
    avatar: 'F'
  },
  {
    name: 'Priya M.',
    location: 'Thrissur',
    rating: 5,
    text: 'The 24/7 support and doctor consultations gave me complete peace of mind. The herbal facials and hair spa were an amazing bonus — I left feeling rejuvenated!',
    avatar: 'P'
  },
  {
    name: 'Divya K.',
    location: 'Kannur',
    rating: 5,
    text: 'Beautiful riverside location, nutritious meals 8 times a day, and traditional therapies — everything a new mother needs. My second delivery recovery was so much better here.',
    avatar: 'D'
  },
  {
    name: 'Anjali S.',
    location: 'Wayanad',
    rating: 5,
    text: 'The anti-stretchmark treatments and baby massage sessions were wonderful. The care team is exceptionally kind and professional. A truly premium postnatal experience.',
    avatar: 'A'
  }
]

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#c9a84c" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const headerRef = useFadeIn()
  const carouselRef = useFadeIn(0.1)

  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => prev === 0 ? testimonials.length - 1 : prev - 1)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, nextSlide])

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header fade-up" ref={headerRef}>
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">What Mothers <span className="highlight">Say</span></h2>
          <div className="section-divider"></div>
        </div>

        <div className="testimonials-carousel fade-up" ref={carouselRef}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <button className="testimonial-nav prev" onClick={prevSlide} aria-label="Previous testimonial">
            &#10094;
          </button>

          <div className="testimonial-track">
            {testimonials.map((t, i) => (
              <div
                className={`testimonial-card ${i === currentIndex ? 'active' : ''}`}
                key={i}
                style={{ transform: `translateX(${(i - currentIndex) * 110}%)`, opacity: i === currentIndex ? 1 : 0.3 }}
              >
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-stars">
                  {[...Array(t.rating)].map((_, j) => <StarIcon key={j} />)}
                </div>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.avatar}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="testimonial-nav next" onClick={nextSlide} aria-label="Next testimonial">
            &#10095;
          </button>

          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testimonial-dot ${i === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
