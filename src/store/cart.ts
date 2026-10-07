import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Product } from '../data/products'

export type CartItem = { product: Product; size: number; qty: number }

type CartState = {
  items: CartItem[]
  add: (product: Product, size: number) => void
  remove: (id: string, size: number) => void
  setQty: (id: string, size: number, qty: number) => void
  clear: () => void
}

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      add: (product, size) =>
        set((s) => {
          const found = s.items.find((i) => i.product.id === product.id && i.size === size)
          if (found) return { items: s.items.map((i) => (i === found ? { ...i, qty: i.qty + 1 } : i)) }
          return { items: [...s.items, { product, size, qty: 1 }] }
        }),
      remove: (id, size) =>
        set((s) => ({ items: s.items.filter((i) => !(i.product.id === id && i.size === size)) })),
      setQty: (id, size, qty) =>
        set((s) => ({
          items:
            qty < 1
              ? s.items.filter((i) => !(i.product.id === id && i.size === size))
              : s.items.map((i) => (i.product.id === id && i.size === size ? { ...i, qty } : i)),
        })),
      clear: () => set({ items: [] }),
    }),
    { name: 'cart' },
  ),
)
