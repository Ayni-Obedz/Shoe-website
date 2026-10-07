import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError('Enter a valid email address')
    if (!password) return setError('Enter your password')
    setError('')
    // TODO: call the backend login endpoint here once it exists
  }

  return (
    <div className="flex min-h-[70vh] w-full items-center justify-center bg-gray-50 px-4 py-12">
        <div className="w-full h-full max-w-md rounded-lg bg-white p-8 shadow-md">
      <h1 className="text-3xl font-black tracking-tight">Log in</h1>
      <p className="mt-1 text-gray-600">Welcome back. Pick up where you left off.</p>

      <form onSubmit={onSubmit} noValidate className="mt-8 space-y-4">
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-semibold">Email</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-black"
          />
        </div>
        <div>
          <label htmlFor="password" className="mb-1 block text-sm font-semibold">Password</label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-black"
          />
        </div>
        {error && <p className="text-sm text-red-700">{error}</p>}
        <button
          type="submit"
          className="w-full rounded-md bg-brand py-3 font-semibold text-white transition-colors hover:bg-red-800"
        >
          Log in
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-600">
        New here?{' '}
        <Link to="/account/signup" className="font-semibold underline">Create an account</Link>
      </p>
        </div>
    </div>
  )
}