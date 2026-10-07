import { useState } from 'react'
import { products, type Tag } from '../data/products'
import ProductCard from './ProductCard'
import SectionHeading from './SectionHeading'

//SHOP THE SHOWCASE
const tabs: { key: Tag; label: string }[] = [
  { key: 'new', label: 'New arrivals' },
  // { key: 'best', label: 'Best sellers' },
  { key: 'sale', label: 'On sale' },
]

export default function ProductShowcase() {
  const [tab, setTab] = useState<Tag>('new')
  const list = products.filter((p) => p.tags.includes(tab)).slice(0, 4)

  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      <SectionHeading title="Shop the showcase" to="/shop" linkLabel="View all shoes" />
      <div className="mb-8 flex gap-2 overflow-x-auto" role="tablist">
        {tabs.map((t) => (
          <button
            key={t.key}
            role="tab"
            aria-selected={tab === t.key}
            onClick={() => setTab(t.key)}
            className={`shrink-0 rounded-full border px-5 py-2 text-sm font-semibold transition ${
              tab === t.key ? 'border-ink bg-ink text-white' : 'border-neutral-300 hover:border-ink'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
