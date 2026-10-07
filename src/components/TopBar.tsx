import { FiPhone } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { brand } from '../brand'

export default function TopBar() {
  return (
    <div className="bg-ink text-sm text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2">
        <span className="hidden items-center gap-2 md:flex">
          <FiPhone aria-hidden /> {brand.phone}
        </span>
        <p className="flex-1 text-center md:flex-none">Delivery Services Available</p>
        <div className="hidden gap-5 md:flex">
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/account/login" className="hover:underline">Log in</Link>
        </div>
      </div>
    </div>
  )
}
