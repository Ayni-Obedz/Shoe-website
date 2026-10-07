import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'

type Errors = Partial<Record<'name' | 'email' | 'password' | 'confirm', string>>

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [done, setDone] = useState(false)

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  const validate = (): Errors => {
    const e: Errors = {}
    if (form.name.trim().length < 2) e.name = 'Enter your full name'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email address'
    if (form.password.length < 8) e.password = 'Use at least 8 characters'
    if (form.confirm !== form.password) e.confirm = 'Passwords do not match'
    return e
  }

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length === 0) {
      // TODO: call the backend sign-up endpoint here once it exists
      setDone(true)
    }
  }

  const field = (
    id: keyof typeof form,
    label: string,
    type: string,
    autoComplete: string,
  ) => (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-semibold">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={form[id]}
        onChange={set(id)}
        autoComplete={autoComplete}
        className={`w-full rounded-md border px-3 py-2 outline-none focus:border-black ${
          errors[id] ? 'border-red-700' : 'border-gray-300'
        }`}
      />
      {errors[id] && <p className="mt-1 text-xs text-red-700">{errors[id]}</p>}
    </div>
  )

  if (done) {
    return (
      <main className="mx-auto max-w-md px-4 py-16 text-center">
        <h1 className="text-2xl font-black">Welcome, {form.name.split(' ')[0]}!</h1>
        <p className="mt-2 text-gray-600">Your account is ready. Start exploring the collection.</p>
        <Link to="/shop" className="mt-6 inline-block rounded-md bg-brand px-6 py-3 font-semibold text-white">
          Shop now
        </Link>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-md px-4 py-12">
      <h1 className="text-3xl font-black tracking-tight">Create your account</h1>
      <p className="mt-1 text-gray-600">Save your details, track orders and check out faster.</p>

      <form onSubmit={onSubmit} noValidate className="mt-8 space-y-4">
        {field('name', 'Full name', 'text', 'name')}
        {field('email', 'Email', 'email', 'email')}
        {field('password', 'Password', 'password', 'new-password')}
        {field('confirm', 'Confirm password', 'password', 'new-password')}
        <button
          type="submit"
          className="w-full rounded-md bg-brand py-3 font-semibold text-white transition-colors hover:bg-red-800"
        >
          Sign up
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{' '}
        <Link to="/account/login" className="font-semibold underline">
          Log in
        </Link>
      </p>
    </main>
  )
}