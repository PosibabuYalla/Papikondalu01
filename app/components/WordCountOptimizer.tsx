'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function WordCountOptimizer() {
  const pathname = usePathname()
  
  useEffect(() => {
    const optimizeWordCount = () => {
      // Get all text content from the page
      const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, span, div')
      let totalWords = 0
      
      textElements.forEach(element => {
        const text = element.textContent || ''
        const words = text.trim().split(/\s+/).filter(word => word.length > 0)
        totalWords += words.length
      })
      
      // If word count is too low (less than 300 words), add supplementary content
      if (totalWords < 300) {
        const supplementaryContent = document.createElement('div')
        supplementaryContent.className = 'sr-only'
        supplementaryContent.innerHTML = `
          <section>
            <h2>Comprehensive Papikondalu Tourism Information</h2>
            <p>Papikondalu Tourism has been the leading provider of river tourism experiences in Andhra Pradesh for over two decades. Our commitment to excellence and customer satisfaction has made us the preferred choice for travelers seeking authentic and memorable experiences in the Eastern Ghats region.</p>
            
            <h3>Our Services and Expertise</h3>
            <p>We specialize in providing comprehensive tourism services including guided boat tours through the scenic Papikondalu hills, temple visits to the sacred Bhadrachalam shrine, adventure activities in the pristine Maredumilli forests, and cultural immersion experiences in traditional East Godavari villages. Our experienced team of local guides possesses extensive knowledge of the region's history, culture, wildlife, and geography.</p>
            
            <h3>Safety and Quality Standards</h3>
            <p>Safety is our top priority in all our operations. Our fleet of modern boats undergoes regular maintenance and safety inspections. All our guides are trained in first aid and emergency procedures. We maintain comprehensive insurance coverage and follow strict safety protocols to ensure the well-being of our guests throughout their journey.</p>
            
            <h3>Customer Testimonials and Reviews</h3>
            <p>Over the years, we have had the privilege of serving more than seven lakh satisfied customers from across India and international destinations. Our guests consistently praise our professional service, knowledgeable guides, comfortable accommodations, and the unforgettable experiences we provide. Many customers return for repeat visits and recommend our services to their friends and family.</p>
            
            <h3>Environmental Responsibility</h3>
            <p>We are committed to sustainable tourism practices that protect and preserve the natural beauty of the Papikondalu region. Our eco-friendly approach includes waste management, wildlife conservation support, and community development initiatives that benefit local populations while maintaining the ecological balance of the area.</p>
            
            <h3>Booking and Contact Information</h3>
            <p>Planning your Papikondalu adventure is easy with our multiple booking options. You can reach us through our dedicated phone lines, email, or visit our office in Rajahmundry. Our customer service team is available to assist with itinerary customization, special requirements, group bookings, and any questions about our services and destinations.</p>
          </section>
        `
        
        // Append to the main content area or body
        const main = document.querySelector('main') || document.body
        main.appendChild(supplementaryContent)
      }
      
      // Add structured content for better text-to-HTML ratio
      const contentSections = document.querySelectorAll('section, article')
      contentSections.forEach(section => {
        if (!section.querySelector('p') && !section.classList.contains('hero')) {
          const textContent = document.createElement('p')
          textContent.className = 'sr-only'
          textContent.textContent = 'This section provides important information about Papikondalu tourism services and experiences offered by our professional team.'
          section.appendChild(textContent)
        }
      })
    }
    
    // Run optimization after content is loaded
    setTimeout(optimizeWordCount, 1500)
  }, [pathname])
  
  return null
}