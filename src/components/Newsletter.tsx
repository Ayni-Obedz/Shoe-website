import { useState } from 'react'

export default function Newsletter() {
  const [done, setDone] = useState(false)
  return (
    <section className="bg-soft py-14">
      <div className="mx-auto max-w-xl px-4 text-center">
        <h2 className="text-2xl font-bold md:text-3xl">Get new drops and offers first</h2>
        <p className="mt-2 text-neutral-600">One email a week. Unsubscribe any time.</p>
        {done ? (
          <p className="mt-6 font-semibold text-brand" role="status">You're on the list. Thanks!</p>
        ) : (
          <form
            className="mt-6 flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault()
              setDone(true) // connect to the backend later
            }}
          >
            <input type="email" required placeholder="Email address" aria-label="Email address" className="flex-1 rounded-full border border-neutral-300 bg-white px-5 py-3 outline-none focus:border-ink" />
            <button className="rounded-full bg-ink px-8 py-3 font-semibold text-white hover:bg-brand">Subscribe</button>
          </form>
        )}
      </div>
    </section>
  )
}
