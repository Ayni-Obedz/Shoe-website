import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi'
import { useCart } from '../store/cart'
import type { CartItem } from '../store/cart'
import { categoryOf, formatNaira, nameOf, priceOf } from '../utils/cart'

export default function CartItemRow({ item }: { item: CartItem }) {
  const { setQty, remove } = useCart()
  const { product, size, qty } = item

  return (
    <li className="flex gap-3 py-4">
      <div className="h-20 w-20 shrink-0 rounded-md bg-gray-100" aria-hidden />
      <div className="flex-1">
        <p className="font-semibold leading-tight">{nameOf(product)}</p>
        <span className="mt-1 inline-block rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-700">
          {categoryOf(product)}
        </span>
        <p className="mt-1 text-sm text-gray-600">Size {size}</p>

        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center rounded-md border border-gray-300">
            <button
              onClick={() => setQty(product.id, size, qty - 1)}
              className="p-2 hover:text-red-800"
              aria-label="Decrease quantity"
            >
              <FiMinus size={14} />
            </button>
            <span className="w-8 text-center text-sm font-semibold">{qty}</span>
            <button
              onClick={() => setQty(product.id, size, qty + 1)}
              className="p-2 hover:text-red-800"
              aria-label="Increase quantity"
            >
              <FiPlus size={14} />
            </button>
          </div>
          <span className="font-bold">{formatNaira(priceOf(product) * qty)}</span>
        </div>
      </div>
      <button
        onClick={() => remove(product.id, size)}
        className="self-start p-1 text-gray-400 transition-colors hover:text-red-800"
        aria-label={`Remove ${nameOf(product)}`}
      >
        <FiTrash2 size={18} />
      </button>
    </li>
  )
}