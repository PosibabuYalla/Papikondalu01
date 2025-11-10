'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function SEOMetadata() {
  const pathname = usePathname()
  
  useEffect(() => {
    const baseUrl = 'https://bhadradripapikondalu.com'
    const currentUrl = `${baseUrl}${pathname}`
    
    // Remove existing canonical and hreflang links
    const existingCanonical = document.querySelector('link[rel="canonical"]')
    const existingHreflang = document.querySelectorAll('link[hreflang]')
    
    existingCanonical?.remove()
    existingHreflang.forEach(link => link.remove())
    
    // Add correct canonical URL
    const canonical = document.createElement('link')
    canonical.rel = 'canonical'
    canonical.href = currentUrl
    document.head.appendChild(canonical)
    
    // Add hreflang tags
    const hreflangEn = document.createElement('link')
    hreflangEn.rel = 'alternate'
    hreflangEn.hreflang = 'en'
    hreflangEn.href = currentUrl
    document.head.appendChild(hreflangEn)
    
    const hreflangDefault = document.createElement('link')
    hreflangDefault.rel = 'alternate'
    hreflangDefault.hreflang = 'x-default'
    hreflangDefault.href = currentUrl
    document.head.appendChild(hreflangDefault)
    
    // Fix title length if too long
    const title = document.title
    if (title.length > 60) {
      const shortTitle = title.substring(0, 57) + '...'
      document.title = shortTitle
    }
    
    // Add missing meta tags
    const addMetaTag = (name: string, content: string) => {
      if (!document.querySelector(`meta[name="${name}"]`)) {
        const meta = document.createElement('meta')
        meta.name = name
        meta.content = content
        document.head.appendChild(meta)
      }
    }
    
    addMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
    addMetaTag('googlebot', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
    addMetaTag('bingbot', 'index, follow')
    addMetaTag('slurp', 'index, follow')
    
  }, [pathname])
  
  return null
}