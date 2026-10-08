import { useEffect, useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiImage } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const slides = [
  { title: 'Let\'s get the swaggu started', text: 'Fresh sneakers, boots and formal pairs, in stock now.', cta: 'Shop new arrivals', to: '/shop?sort=new', bg: 'bg-[url(/images/Zayswaggu.png)] bg-cover bg-center', image:'/images/Zayswaggu.png', imageAlt: 'Zay Swagg' },
  { title: 'Negotiation avenues available', text: 'Prices drop can be discussed on our social media platforms.', cta: 'Shop the sale', to: '/shop?sale=1', bg: 'bg-[url(/images/Heroimg2.png)] bg-cover bg-center', image:'/images/Heroimg2.png', imageAlt: 'Hero Image 2' },
]

export default function Hero() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const go = (n: number) => setI((n + slides.length) % slides.length)

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setI((x) => (x + 1) % slides.length), 6000)
    return () => clearInterval(t)
  }, [paused])

  return (
    <section
      className="relative h-200 overflow-hidden text-white md:h-200"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Featured offers"
    >
      {slides.map((s, n) => (
        <div
          key={s.title}
          className={`absolute inset-0 transition-opacity duration-700 ${s.bg} ${n === i ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
          aria-hidden={n !== i}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative mx-auto grid h-full max-w-7xl items-center gap-8 px-4 md:grid-cols-2">
            <div>
              <h1 className="max-w-md text-4xl font-black leading-tight md:text-6xl">{s.title}</h1>
              <p className="mt-4 max-w-sm text-lg text-white/80">{s.text}</p>
              <Link to={s.to} className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-ink hover:bg-soft">
                {s.cta}
              </Link>
            </div>
            <div className="hidden h-4/5 items-center justify-center overflow-hidden rounded-2xl bg-white/10 text-white/30 md:flex">
              {s.image ? (
              <img src={s.image} alt={s.imageAlt} className="h-full w-full object-cover" />
              ) : (
              <FiImage size={64} />
              )}
            </div>
          </div>
        </div>
      ))}

      <button onClick={() => go(i - 1)} aria-label="Previous slide" className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/20 p-2 hover:bg-white/40 md:block">
        <FiChevronLeft size={24} />
      </button>
      <button onClick={() => go(i + 1)} aria-label="Next slide" className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/20 p-2 hover:bg-white/40 md:block">
        <FiChevronRight size={24} />
      </button>
      <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
        {slides.map((s, n) => (
          <button key={s.title} onClick={() => setI(n)} aria-label={`Go to slide ${n + 1}`} className={`h-2 rounded-full transition-all ${n === i ? 'w-8 bg-white' : 'w-2 bg-white/50'}`} />
        ))}
      </div>
    </section>
  )
}
