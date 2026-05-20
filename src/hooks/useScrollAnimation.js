import { useState, useEffect } from 'react'

export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false)
  const [elementRef, setElementRef] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (elementRef) {
      observer.observe(elementRef)
    }

    return () => {
      if (elementRef) {
        observer.unobserve(elementRef)
      }
    }
  }, [elementRef, threshold])

  return [setElementRef, isVisible]
}

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', updatePosition)
    updatePosition()

    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  return scrollPosition
}
