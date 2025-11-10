import type { Metadata } from 'next'
import Script from 'next/script'
import AboutUsClient from './AboutUsClient'

export const metadata: Metadata = {
  title: 'About Us | Papikondalu Tours & Bhadradri Temple | East Godavari Tourism Leaders',
  description: 'Learn about the top Papikondalu tour operator, East Godavari and Bhadradri heritage experts. 20+ years creating unforgettable experiences to Maredumalli waterfalls and local attractions.',
  keywords: [
    'Papikondalu Tourism about', 'river tourism company Andhra Pradesh', '20 years experience boat tours',
    'Godavari river tourism history', 'boat fleet Papikondalu', 'tourism company since 2004',
    'Rajahmundry tourism company', '7 lakh customers served', 'best river tourism Andhra Pradesh',
    'Papikondalu Tourism story', 'boat tour company history', 'Godavari cruise company'
  ],
  openGraph: {
    title: 'About Papikondalu Tourism - 20+ Years of Excellence in River Tourism',
    description: 'Leading Andhra Pradesh river tourism company since 2004. Modern fleet, expert guides, 7+ lakh happy customers.',
    images: [{
      url: 'https://res.cloudinary.com/dnz1dmnmb/image/upload/v1756004871/aboutus_papikonalu_mjtxyo.jpg',
      width: 1200,
      height: 630,
      alt: 'About Papikondalu Tourism - Company Story and Fleet'
    }]
  },
  alternates: {
    canonical: 'https://bhadradripapikondalu.com/aboutus'
  }
}

export default function AboutUs() {
  const aboutUsSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': 'https://bhadradripapikondalu.com/aboutus#webpage',
    'url': 'https://bhadradripapikondalu.com/aboutus',
    'name': 'About Papikondalu Tourism',
    'isPartOf': {
      '@id': 'https://bhadradripapikondalu.com/#website'
    },
    'about': {
      '@id': 'https://bhadradripapikondalu.com/#organization'
    },
    'description': 'Learn about Papikondalu Tourism\'s 20+ years journey in river tourism, our modern fleet, and commitment to excellence.',
    'breadcrumb': {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://bhadradripapikondalu.com'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'About Us',
          'item': 'https://bhadradripapikondalu.com/aboutus'
        }
      ]
    },
    'mainEntity': {
      '@type': 'Organization',
      'name': 'Papikondalu Tourism',
      'foundingDate': '2004',
      'description': 'Leading river tourism company in Andhra Pradesh with 20+ years of experience',
      'numberOfEmployees': '50-100',
      'location': {
        '@type': 'Place',
        'name': 'Rajahmundry, Andhra Pradesh'
      }
    }
  }

  return (
    <>
      <Script
        id="aboutus-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutUsSchema) }}
      />
      <AboutUsClient />
    </>
  )
}