import { useState, useEffect, useCallback } from 'react'
import useFadeIn from '../hooks/useFadeIn'

const galleryImages = [
  { src: '/images/gallery-1.jpeg', caption: 'Riverside View', fullCaption: 'Riverside View — Lush tropical surroundings' },
  { src: '/images/gallery-2.jpeg', caption: 'Our Building', fullCaption: 'Our Building — Modern comfort meets tradition' },
  { src: '/images/gallery-3.jpeg', caption: 'Garden Area', fullCaption: 'Garden Area — Peaceful courtyard' }
]

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const headerRef = useFadeIn()
  const gridRef = useFadeIn(0.1)

  const openLightbox = (index) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = ''
  }

  const changeImage = useCallback((direction) => {
    setCurrentIndex(prev => {
      let next = prev + direction
      if (next < 0) next = galleryImages.length - 1
      if (next >= galleryImages.length) next = 0
      return next
    })
  }, [])

  useEffect(() => {
    const handleKey = (e) => {
      if (!lightboxOpen) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') changeImage(-1)
      if (e.key === 'ArrowRight') changeImage(1)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [lightboxOpen, changeImage])

  return (
    <>
      <section className="section section-alt" id="gallery">
        <div className="container">
          <div className="section-header fade-up" ref={headerRef}>
            <span className="section-tag">Our Space</span>
            <h2 className="section-title">Photo <span className="highlight">Gallery</span></h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Take a glimpse at our peaceful centre nestled in lush tropical surroundings along the riverside.
            </p>
          </div>

          <div className="gallery-grid fade-up" ref={gridRef}>
            {galleryImages.map((img, i) => (
              <div className="gallery-item" key={i} onClick={() => openLightbox(i)}>
                <img src={img.src} alt={`Bliss Shore Ayur Care - ${img.caption}`} loading="lazy" />
                <div className="gallery-overlay">
                  <span className="gallery-zoom">🔍</span>
                  <span className="gallery-caption">{img.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <div className={`lightbox ${lightboxOpen ? 'active' : ''}`} onClick={(e) => e.target.className.includes('lightbox') && closeLightbox()}>
        <button className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">&times;</button>
        <button className="lightbox-prev" onClick={() => changeImage(-1)} aria-label="Previous image">&#10094;</button>
        <img className="lightbox-img" src={galleryImages[currentIndex]?.src} alt={galleryImages[currentIndex]?.fullCaption} />
        <button className="lightbox-next" onClick={() => changeImage(1)} aria-label="Next image">&#10095;</button>
        <div className="lightbox-caption">{galleryImages[currentIndex]?.fullCaption}</div>
      </div>
    </>
  )
}
