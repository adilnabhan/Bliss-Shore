import { useEffect, useRef } from 'react'

export default function useFadeIn(delay = 0) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('visible')
          }, delay * 1000)
          observer.unobserve(el)
        }
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return ref
}
