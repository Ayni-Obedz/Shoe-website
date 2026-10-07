import { useState } from 'react'
import { FiChevronDown, FiMenu, FiSearch, FiShoppingBag, FiUser, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { brand } from '../brand'
import { categories } from '../data/categories'
import { useCart } from '../store/cart'

const navLink = 'py-3.5 text-sm font-semibold hover:text-brand'

function SearchBox({ className = '' }: { className?: string }) {
  return (
    <form className={`flex ${className}`} onSubmit={(e) => e.preventDefault()} role="search">
      <input
        type="search"
        placeholder="Search shoes"
        aria-label="Search shoes"
        className="w-full rounded-l-full border border-r-0 border-neutral-300 px-5 py-2.5 text-sm outline-none focus:border-ink"
      />
      <button className="rounded-r-full bg-ink px-5 text-white" aria-label="Search">
        <FiSearch />
      </button>
    </form>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const count = useCart((s) => s.items.reduce((n, i) => n + i.qty, 0))
  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-30 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
        <button className="lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
          <FiMenu size={24} />
        </button>
        <Link to="/" className="text-2xl font-black tracking-widest">
          {brand.name}
        </Link>
        <SearchBox className="mx-6 hidden flex-1 md:flex" />
        <div className="ml-auto flex items-center gap-5">
          <Link to="/account/login" aria-label="Account">
            <FiUser size={22} />
          </Link>
          <Link to="/cart" className="relative" aria-label={`Cart, ${count} items`}>
            <FiShoppingBag size={22} />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-brand text-[11px] font-bold text-white">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>

      <nav className="hidden border-t border-neutral-200 lg:block" aria-label="Main">
        <ul className="mx-auto flex max-w-7xl items-center gap-8 px-4">
          <li><Link to="/shop" className={navLink}>All shoes</Link></li>
          {categories.map((c) => (
            <li key={c.slug} className="group relative">
              <Link to={`/shop/${c.slug}`} className={`${navLink} flex items-center gap-1`}>
                {c.name} <FiChevronDown size={14} aria-hidden />
              </Link>
              <ul className="invisible absolute left-0 top-full min-w-48 bg-white p-3 opacity-0 shadow-lg transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                {c.sub.map((s) => (
                  <li key={s}>
                    <Link to={`/shop/${c.slug}?type=${encodeURIComponent(s)}`} className="block px-3 py-2 text-sm hover:bg-soft hover:text-brand">
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <li><Link to="/shop?sort=new" className={navLink}>New arrivals</Link></li>
          <li><Link to="/shop?sale=1" className={`${navLink} text-sale`}>Sale</Link></li>
        </ul>
      </nav>

      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button className="absolute inset-0 bg-black/50" onClick={close} aria-label="Close menu" />
          <aside className="absolute inset-y-0 left-0 w-80 max-w-[85%] overflow-y-auto bg-white p-5">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-xl font-black tracking-widest">{brand.name}</span>
              <button onClick={close} aria-label="Close menu"><FiX size={24} /></button>
            </div>
            <SearchBox className="mb-5 md:hidden" />
            <ul className="divide-y divide-neutral-200">
              <li><Link onClick={close} to="/shop" className="block py-3 font-semibold">All shoes</Link></li>
              {categories.map((c) => (
                <li key={c.slug}><Link onClick={close} to={`/shop/${c.slug}`} className="block py-3 font-semibold">{c.name}</Link></li>
              ))}
              <li><Link onClick={close} to="/shop?sort=new" className="block py-3 font-semibold">New arrivals</Link></li>
              <li><Link onClick={close} to="/shop?sale=1" className="block py-3 font-semibold text-sale">Sale</Link></li>
              <li><Link onClick={close} to="/about" className="block py-3">About</Link></li>
              <li><Link onClick={close} to="/contact" className="block py-3">Contact</Link></li>
            </ul>
          </aside>
        </div>
      )}
    </header>
  )
}
