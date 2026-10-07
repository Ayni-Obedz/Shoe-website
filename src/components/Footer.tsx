import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { brand } from '../brand'

const col = 'mb-4 font-bold text-white'
const link = 'block py-1 hover:text-white hover:underline'

export default function Footer() {
  return (
    <footer className="bg-ink text-neutral-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="mb-4 text-2xl font-black tracking-widest text-white">{brand.name}</p>
          <p>{brand.address}</p>
          <p className="mt-1">{brand.phone}</p>
          <p className="mt-1">{brand.email}</p>
        </div>
        <div>
          <h3 className={col}>Information</h3>
          <Link to="/about" className={link}>About us</Link>
          <Link to="/contact" className={link}>Contact us</Link>
          <Link to="/shop" className={link}>All shoes</Link>
        </div>
        <div>
          <h3 className={col}>My account</h3>
          <Link to="/account/login" className={link}>Log in or sign up</Link>
          <Link to="/cart" className={link}>Cart</Link>
          <Link to="/checkout" className={link}>Checkout</Link>
        </div>
        <div>
          <h3 className={col}>Follow us</h3>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="hover:text-white"><FiInstagram size={22} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white"><FiTwitter size={22} /></a>
            <a href="#" aria-label="Facebook" className="hover:text-white"><FiFacebook size={22} /></a>
          </div>
          <h3 className={`${col} mt-6`}>We accept</h3>
          <p className="text-sm">Card, bank transfer, pay on delivery</p>
        </div>
      </div>
      <p className="border-t border-white/10 py-5 text-center text-sm">© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
    </footer>
  )
}
