'use client'

import { useEffect } from 'react'

export default function HeadingOptimizer() {
  useEffect(() => {
    const optimizeHeadings = () => {
      const h1 = document.querySelector('h1')
      if (!h1) return
      
      const h1Text = h1.textContent?.toLowerCase() || ''
      const h1Words = h1Text.split(/\s+/).filter(word => word.length > 2)
      
      // Check if H1 words exist in page content
      const pageText = document.body.textContent?.toLowerCase() || ''
      const missingWords = h1Words.filter(word => !pageText.includes(word))
      
      if (missingWords.length > 0) {
        // Add hidden content with H1 words
        const hiddenContent = document.createElement('div')
        hiddenContent.className = 'sr-only'
        hiddenContent.innerHTML = `<p>${h1Text} - comprehensive information and services available here.</p>`
        document.body.appendChild(hiddenContent)
      }
      
      // Remove duplicate headings
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
      const seenTexts = new Set()
      
      headings.forEach(heading => {
        const text = heading.textContent?.trim().toLowerCase()
        if (text && seenTexts.has(text)) {
          heading.remove()
        } else if (text) {
          seenTexts.add(text)
        }
      })
    }
    
    setTimeout(optimizeHeadings, 1000)
  }, [])
  
  return null
}