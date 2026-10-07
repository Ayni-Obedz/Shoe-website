import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingBag, FiX } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { useCart } from '../store/cart'
import CartItemRow from './CartItemRow'
import { cartTotal, formatNaira, whatsappOrderLink } from '../utils/cart'

export default function CartDrawer() {
  const { items, open, closeCart } = useCart()

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && closeCart()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, closeCart])

  return (
    <>
      {/* dark overlay */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <aside
        role="dialog"
        aria-label="Shopping cart"
        aria-hidden={!open}
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-xl transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b px-5 py-4">
          <h2 className="text-lg font-black">Your cart ({items.length})</h2>
          <button onClick={closeCart} aria-label="Close cart" className="hover:text-red-800">
            <FiX size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center text-gray-500">
            <FiShoppingBag size={40} />
            <p>Your cart is empty.</p>
            <button onClick={closeCart} className="font-semibold text-black underline">
              Continue shopping
            </button>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y overflow-y-auto px-5">
              {items.map((item) => (
                <CartItemRow key={`${item.product.id}-${item.size}`} item={item} />
              ))}
            </ul>

            <div className="space-y-3 border-t px-5 py-4">
              <div className="flex items-center justify-between text-lg font-black">
                <span>Subtotal</span>
                <span>{formatNaira(cartTotal(items))}</span>
              </div>
              <a
                href={whatsappOrderLink(items)}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-md bg-green-600 py-3 font-semibold text-white transition-colors hover:bg-green-700"
              >
                <FaWhatsapp size={20} /> Order on WhatsApp
              </a>
              <Link
                to="/cart"
                onClick={closeCart}
                className="block w-full rounded-md border border-black py-3 text-center font-semibold transition-colors hover:border-red-800 hover:text-red-800"
              >
                View full cart
              </Link>
            </div>
          </>
        )}
      </aside>
    </>
  )
}