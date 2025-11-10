// SEO-friendly URL slugs for attractions and packages

export const attractionSlugs = {
  1: 'papikondalu',
  2: 'perantalapalli',
  3: 'gandipochamma-temple',
  4: 'bhadrachalam',
  5: 'sirivaka-night-stay-camping',
  6: 'maredumilli',
  7: 'parnasala',
  8: 'gudisa'
}

export const packageSlugs = {
  1: 'papikondalu-pakages',
  2: 'bhadradrachalam-papikondalu-pakages',
  3: 'maredumilli-pakages',
  4: 'rampachodavaram-waterfalls-tour-package',
  5: 'rajahmundry-papikondalu-pakages',
  6: 'sirivaka-night-stay-package',
  7: 'parnasala-pakages',
  8: 'gudisa-packages',
  9: 'perantalapalli-packages'
}

// Reverse mapping for slug to ID conversion
export const attractionSlugToId = Object.fromEntries(
  Object.entries(attractionSlugs).map(([id, slug]) => [slug, parseInt(id)])
)

export const packageSlugToId = Object.fromEntries(
  Object.entries(packageSlugs).map(([id, slug]) => [slug, parseInt(id)])
)

// Helper functions
export function getAttractionSlug(id: number): string {
  return attractionSlugs[id as keyof typeof attractionSlugs] || `attraction-${id}`
}

export function getPackageSlug(id: number): string {
  return packageSlugs[id as keyof typeof packageSlugs] || `package-${id}`
}

export function getAttractionIdFromSlug(slug: string): number | null {
  return attractionSlugToId[slug] || null
}

export function getPackageIdFromSlug(slug: string): number | null {
  return packageSlugToId[slug] || null
}