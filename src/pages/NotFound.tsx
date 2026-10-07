import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="text-4xl font-black">Page not found</h1>
      <p className="mt-3 text-neutral-600">This page doesn't exist yet, or the link is wrong.</p>
      <Link to="/" className="mt-8 inline-block rounded-full bg-ink px-8 py-3 font-semibold text-white hover:bg-brand">
        Back to home
      </Link>
    </div>
  )
}
