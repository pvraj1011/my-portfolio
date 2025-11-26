"use client"

import { useEffect } from "react"

const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor performance metrics in development
    if (process.env.NODE_ENV === "development") {
      // Monitor Core Web Vitals (guard for browser support)
      let observer;
      if (typeof window !== "undefined" && typeof PerformanceObserver !== "undefined") {
        try {
          observer = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
              console.log(`${entry.name}: ${entry.value}`)
            })
          })
          observer.observe({ entryTypes: ["measure", "navigation", "paint"] })
        } catch (err) {
          // Silently ignore unsupported observers in some environments
        }
      }

      // Monitor loading time (guard for deprecated timing API)
      if (typeof window !== "undefined" && window?.performance?.timing) {
        window.addEventListener("load", () => {
          const { loadEventEnd, navigationStart } = window.performance.timing
          if (loadEventEnd && navigationStart) {
            const loadTime = loadEventEnd - navigationStart
            console.log(`Page load time: ${loadTime}ms`)
          }
        })
      }

      return () => {
        if (observer) observer.disconnect()
      }
    }
  }, [])

  return null
}

export default PerformanceMonitor
