import { Link } from 'react-router-dom'
import { formatPrice } from '../brand'
import { categories } from '../data/categories'
import type { Product } from '../data/products'
import ImagePlaceholder from './ImagePlaceholder'

export default function ProductCard({ product }: { product: Product }) {
  const off = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0
  const category = categories.find((c) => c.slug === product.category)?.name

  return (
    <Link to={`/product/${product.slug}`} className="group block focus-visible:outline-2 focus-visible:outline-brand">
      <div className="relative aspect-[3/4] overflow-hidden bg-soft">
        {product.image ? (
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        ) : (
          <ImagePlaceholder className="h-full w-full" />
        )}
        {off > 0 && (
          <span className="absolute left-3 top-3 bg-sale px-2 py-1 text-xs font-bold text-white">-{off}%</span>
        )}
        <span className="absolute inset-x-0 bottom-0 translate-y-full bg-ink py-3 text-center text-sm font-semibold text-white transition group-hover:translate-y-0 group-focus-visible:translate-y-0">
          View product
        </span>
      </div>
      <p className="mt-3 text-sm text-neutral-500">{category}</p>
      <h3 className="font-semibold">{product.name}</h3>
      <p className="mt-1 flex items-baseline gap-2">
        <span className="font-bold">{formatPrice(product.price)}</span>
        {product.oldPrice && <span className="text-sm text-neutral-400 line-through">{formatPrice(product.oldPrice)}</span>}
      </p>
    </Link>
  )
}
