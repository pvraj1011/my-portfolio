'use client'

import { useEffect } from 'react'

const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor performance metrics in development
    if (process.env.NODE_ENV === 'development') {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          console.log(`${entry.name}: ${entry.value}`)
        })
      })
      
      observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] })
      
      // Monitor loading time
      window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
        console.log(`Page load time: ${loadTime}ms`)
      })
      
      return () => observer.disconnect()
    }
  }, [])

  return null
}

export default PerformanceMonitor
