import { Link } from 'react-router-dom'
import { categories } from '../data/categories'
import ImagePlaceholder from './ImagePlaceholder'
import SectionHeading from './SectionHeading'

export default function Collections() {
  return (
    <section className="bg-soft py-14">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading title="Shop by collection" text="Pick a style and browse everything in it." />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {categories.map((c, n) => (
            <Link
              key={c.slug}
              to={`/shop/${c.slug}`}
              className={`group relative block aspect-[3/4] overflow-hidden ${n === 4 ? 'col-span-2 aspect-[3/2] md:col-span-1 md:aspect-[3/4]' : ''}`}
            >
              <ImagePlaceholder className="h-full w-full bg-white" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-4 pt-12 text-white">
                <p className="text-lg font-bold">{c.name}</p>
                <p className="text-sm text-white/80 group-hover:underline">Browse</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
