// Studio Performance OS - Configuration

export interface SiteConfig {
  title: string
  description: string
  language: string
}

export const siteConfig: SiteConfig = {
  title: 'Studio Performance OS',
  description:
    'The performance dashboard for barbers, beauticians, photographers, tattoo artists, and creative pros who turn talent into predictable income.',
  language: 'en',
}

// Navigation
export interface NavLink {
  label: string
  href: string
}

export interface NavigationConfig {
  brandName: string
  links: NavLink[]
  searchPlaceholder: string
  searchHint: string
  searchAriaLabel: string
  closeSearchAriaLabel: string
}

export const navigationConfig: NavigationConfig = {
  brandName: 'Studio Performance OS',
  links: [
    { label: 'Features', href: '#features' },
    { label: 'Themes', href: '#themes' },
  ],
  searchPlaceholder: 'Search features, guides...',
  searchHint: 'Press Enter to search or ESC to close',
  searchAriaLabel: 'Search',
    closeSearchAriaLabel: 'Close search',
}

// Hero Section
export interface HeroConfig {
  date: string
  titleLine1: string
  titleLine2: string
  readTime: string
  description: string
  ctaText: string
  image: string
  imageAlt: string
}

export const heroConfig: HeroConfig = {
  date: 'FOR CREATIVE PROS',
  titleLine1: 'Your Art Builds',
  titleLine2: 'Confidence. We Build Your Business.',
  readTime: '5 min setup',
  description:
    'The performance dashboard for barbers, beauticians, photographers, tattoo artists, and creative pros who turn talent into predictable income.',
  ctaText: 'See My Studio Come Alive',
  image:
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=800&fit=crop',
  imageAlt: 'Creative professional at work in their studio',
}
  closeSearchAriaLabel: 'Close search',
}
