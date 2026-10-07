import { FiImage } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const tiles = [
  { title: 'New arrivals', note: 'Special offer', to: '/shop?sort=new', cls: 'min-h-72 md:col-span-2 md:row-span-2', big: true },
  { title: 'Sneakers', note: 'Shop now', to: '/shop/sneakers' },
  { title: 'Boots', note: 'Shop now', to: '/shop/boots' },
  { title: 'Formal', note: 'Shop now', to: '/shop/formal' },
  { title: 'High fashion', note: 'Shop now', to: '/shop/high-fashion' },
]

export default function PromoBanners() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-14">
      <div className="grid gap-4 md:grid-cols-4 md:grid-rows-2">
        {tiles.map((t) => (
          <Link key={t.title} to={t.to} className={`group relative flex min-h-40 items-end overflow-hidden bg-soft p-5 ${t.cls ?? ''}`}>
            <FiImage className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-neutral-300" size={t.big ? 56 : 36} aria-hidden />
            <div className="relative">
              <p className="text-sm text-neutral-600">{t.note}</p>
              <p className={`font-black ${t.big ? 'text-4xl' : 'text-2xl'}`}>{t.title}</p>
              <span className="mt-1 inline-block text-sm font-semibold text-brand group-hover:underline">Shop now</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
