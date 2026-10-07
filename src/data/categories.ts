export type Category = { slug: string; name: string; sub: string[] }

export const categories: Category[] = [
  { slug: 'sneakers', name: 'Sneakers', sub: ['Running', 'Lifestyle', 'Court', 'High-tops'] },
  { slug: 'boots', name: 'Boots', sub: ['Chelsea', 'Work', 'Hiking', 'Ankle'] },
  { slug: 'sandals', name: 'Sandals', sub: ['Slides', 'Strappy', 'Slippers'] },
  { slug: 'formal', name: 'Formal', sub: ['Oxford', 'Loafers', 'Derby'] },
  { slug: 'high-fashion', name: 'High fashion', sub: ['Heels', 'Designer', 'Limited edition'] },
]
