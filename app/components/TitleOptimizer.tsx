'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function TitleOptimizer() {
  const pathname = usePathname()
  
  useEffect(() => {
    const optimizeTitle = () => {
      const currentTitle = document.title
      
      // Optimize titles that are too long (over 60 characters)
      const titleOptimizations: Record<string, string> = {
        '/aboutus': 'About Us | Papikondalu Tourism',
        '/attractions': 'Attractions | Papikondalu Tours',
        '/packages': 'Packages | Papikondalu Tourism',
        '/gallery': 'Gallery | Papikondalu Tours',
        '/contact': 'Contact | Papikondalu Tourism',
        '/privacy': 'Privacy Policy | Papikondalu Tourism',
        '/terms': 'Terms | Papikondalu Tourism',
        '/blog': 'Blog | Papikondalu Tourism',
      }
      
      // Apply optimizations for specific paths
      if (titleOptimizations[pathname]) {
        document.title = titleOptimizations[pathname]
        return
      }
      
      // Generic optimization for long titles
      if (currentTitle.length > 60) {
        // Try to shorten while keeping important keywords
        let optimizedTitle = currentTitle
        
        // Remove redundant words
        optimizedTitle = optimizedTitle
          .replace(/\s+Tours?\s+&\s+/g, ' & ')
          .replace(/\s+Tourism\s+/g, ' ')
          .replace(/\s+Packages?\s+/g, ' ')
          .replace(/\s+East\s+Godavari\s+/g, ' ')
          
        // If still too long, truncate intelligently
        if (optimizedTitle.length > 60) {
          const parts = optimizedTitle.split(' | ')
          if (parts.length > 1) {
            // Keep the main part and brand
            optimizedTitle = `${parts[0]} | Papikondalu Tourism`
            if (optimizedTitle.length > 60) {
              optimizedTitle = parts[0].substring(0, 45) + '... | Papikondalu'
            }
          } else {
            optimizedTitle = optimizedTitle.substring(0, 57) + '...'
          }
        }
        
        document.title = optimizedTitle
      }
    }
    
    // Run optimization after a short delay to ensure title is set
    setTimeout(optimizeTitle, 100)
  }, [pathname])
  
  return null
}