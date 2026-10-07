export type Tag = 'new' | 'best' | 'sale'

export type Product = {
  id: string
  slug: string
  name: string
  category: string // matches a category slug
  price: number
  oldPrice?: number
  tags: Tag[]
  sizes: number[]
  image?: string // e.g. '/images/runner-one.jpg' (put files in /public/images)
}

const sizes = [39, 40, 41, 42, 43, 44]

export const products: Product[] = [
  { id: '1', slug: 'runner-one', name: 'Shoe', category: 'sneakers', price: 45000, tags: ['new', 'sale'], sizes },
  { id: '2', slug: 'court-classic', name: 'Shoe', category: 'sneakers', price: 38000, tags: ['best'], sizes },
  { id: '3', slug: 'daybreak-high', name: 'Shoe', category: 'sneakers', price: 48000, tags: ['new'], sizes },
  { id: '4', slug: 'trail-boot', name: 'Shoe', category: 'boots', price: 62000, oldPrice: 10000, tags: ['best', 'sale'], sizes },
  { id: '5', slug: 'chelsea-ridge', name: 'Shoe', category: 'boots', price: 680000, tags: ['new'], sizes },
  { id: '6', slug: 'harbor-sandal', name: 'Shoe', category: 'sandals', price: 18000, tags: ['best'], sizes },
  { id: '7', slug: 'oxford-noir', name: 'Shoe', category: 'formal', price: 5500, oldPrice: 65000, tags: ['sale'], sizes },
  { id: '8', slug: 'loafer-lagos', name: 'Shoe', category: 'formal', price: 4900, tags: ['best', 'new'], sizes },
  { id: '9', slug: 'atelier-heel', name: 'Shoe', category: 'high-fashion', price: 89000, tags: ['new'], sizes },
  { id: '10', slug: 'maison-derby', name: 'Shoe', category: 'high-fashion', price: 120000, oldPrice: 140000, tags: ['sale', 'best'], sizes },
]
