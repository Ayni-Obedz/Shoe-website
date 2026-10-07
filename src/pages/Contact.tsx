import { useState } from 'react'
import type { FormEvent } from 'react'
import { FiMessageCircle, FiPhone } from 'react-icons/fi'
import { brand } from '../brand'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  // Turns "0803 123 4567" into "2348031234567" for the WhatsApp link
  const digits = brand.phone.replace(/\D/g, '')
  const waNumber = digits.startsWith('0') ? '234' + digits.slice(1) : digits

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (form.name.trim().length < 2) return setError('Enter your name')
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return setError('Enter a valid email address')
    if (form.message.trim().length < 10) return setError('Tell us a little more (at least 10 characters)')
    setError('')
    // TODO: send the message to the backend once it exists
    setSent(true)
  }

  const input = 'w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-black'

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-black tracking-tight">Get in touch</h1>
      <p className="mt-1 text-gray-600">Questions about sizing, delivery or an order? We reply fast.</p>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <a
            href={`https://wa.me/${waNumber}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-lg border border-gray-200 p-4 transition-colors hover:border-red-800 hover:text-red-800"
          >
            <FiMessageCircle size={24} />
            <span>
              <span className="block font-semibold">Chat on WhatsApp</span>
              <span className="text-sm text-gray-600">Fastest way to reach us</span>
            </span>
          </a>
          <a
            href={`tel:${brand.phone}`}
            className="flex items-center gap-3 rounded-lg border border-gray-200 p-4 transition-colors hover:border-red-800 hover:text-red-800"
          >
            <FiPhone size={24} />
            <span>
              <span className="block font-semibold">Call us</span>
              <span className="text-sm text-gray-600">{brand.phone}</span>
            </span>
          </a>
        </div>

        {sent ? (
          <div className="rounded-lg bg-gray-50 p-6">
            <h2 className="text-xl font-bold">Message sent</h2>
            <p className="mt-2 text-gray-600">Thanks {form.name.split(' ')[0]}, we'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-semibold">Name</label>
              <input id="name" className={input} value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-semibold">Email</label>
              <input id="email" type="email" className={input} value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-semibold">Message</label>
              <textarea id="message" rows={5} className={input} value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </div>
            {error && <p className="text-sm text-red-700">{error}</p>}
            <button
              type="submit"
              className="w-full rounded-md bg-brand py-3 font-semibold text-white transition-colors hover:bg-red-800"
            >
              Send message
            </button>
          </form>
        )}
      </div>
    </div>
  )
}