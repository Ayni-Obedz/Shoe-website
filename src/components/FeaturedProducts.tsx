import { products } from '../data/products'
import ProductCard from './ProductCard'
import SectionHeading from './SectionHeading'

export default function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      <SectionHeading title="Featured pairs" text="" to="/shop" />
      <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-4">
        {products.slice(2,8).map((p) => (
          <div key={p.id} className="w-52 shrink-0 snap-start sm:w-60">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  )
}
