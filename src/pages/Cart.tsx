import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import { useCart } from '../store/cart'
import CartItemRow from '../components/CartItemRow'
import { cartTotal, formatNaira, whatsappOrderLink } from '../utils/cart'

export default function Cart() {
  const { items, clear } = useCart()

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <h1 className="text-2xl font-black">Your cart is empty</h1>
        <p className="mt-2 text-gray-600">Add something you like and it will show up here.</p>
        <Link to="/" className="mt-6 inline-block rounded-md bg-brand px-6 py-3 font-semibold text-white hover:bg-red-800">
          Continue shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black tracking-tight">Cart ({items.length})</h1>
        <button onClick={clear} className="text-sm text-gray-500 underline hover:text-red-800">
          Clear cart
        </button>
      </div>

      <div className="mt-6 grid gap-8 md:grid-cols-3">
        <ul className="divide-y md:col-span-2">
          {items.map((item) => (
            <CartItemRow key={`${item.product.id}-${item.size}`} item={item} />
          ))}
        </ul>

        <div className="h-fit space-y-4 rounded-lg bg-gray-50 p-6">
          <h2 className="font-black">Order summary</h2>
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
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
          <p className="text-xs text-gray-500">
            You'll chat with us on WhatsApp to confirm your order, agree on the price and arrange delivery.
          </p>
          <Link to="/" className="block text-center text-sm font-semibold underline">
            Continue shopping
          </Link>
        </div>
      </div>
    </div>
  )
}