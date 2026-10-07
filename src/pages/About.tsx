import { Link } from 'react-router-dom'
import { brand } from '../brand'

const values = [
  { title: 'Made to move', text: 'Comfort comes first. Every pair is chosen to be worn all day.' },
  { title: 'Honest quality', text: 'Good materials and fair prices, with no gimmicks.' },
  { title: 'Delivered to you', text: 'Order from anywhere and we bring it to your door.' },
]

export default function About() {
  return (
    <div>
      <section className="bg-ink px-4 py-20 text-center text-white">
        <h1 className="text-4xl font-black tracking-widest md:text-5xl">{brand.name}</h1>
        <p className="mx-auto mt-4 max-w-xl text-gray-300">
          {/* TODO: replace with your real brand tagline */}
          Footwear with a story. Built for people who keep moving.
        </p>
      </section>

      {/* Spline animation goes here later. Swap this block for your Spline embed. */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="flex h-72 items-center justify-center rounded-xl border-2 border-dashed border-gray-300 text-gray-400 md:h-96">
          3D animation coming soon
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-12">
        <h2 className="text-2xl font-black">Our story</h2>
        <p className="mt-3 leading-relaxed text-gray-700">
          {/* TODO: write your real brand story here */}
          Tell customers where {brand.name} started, why you make and sell shoes, and what you
          want every pair to say about the person wearing it.
        </p>
      </section>

      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="font-bold">{v.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-14 text-center">
        <h2 className="text-2xl font-black">Find your pair</h2>
        <Link
          to="/"
          className="mt-5 inline-block rounded-md bg-brand px-8 py-3 font-semibold text-white transition-colors hover:bg-red-800"
        >
          Start shopping
        </Link>
      </section>
    </div>
  )
}