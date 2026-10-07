import { brand } from '../brand'
import type { CartItem } from '../store/cart'
import type { Product } from '../data/products'

// If your Product type uses different field names, change them here only.
export const nameOf = (p: Product): string => p.name
export const categoryOf = (p: Product): string => p.category
export const priceOf = (p: Product): number => p.price

export const formatNaira = (n: number) =>
  new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(n)

export const cartTotal = (items: CartItem[]) =>
  items.reduce((sum, i) => sum + priceOf(i.product) * i.qty, 0)

// "0803 123 4567" becomes "2348031234567", the format WhatsApp needs
const waNumber = () => {
  const digits = brand.phone.replace(/\D/g, '')
  return digits.startsWith('0') ? '234' + digits.slice(1) : digits
}

export function whatsappOrderLink(items: CartItem[]) {
  const lines = items.map((i, n) =>
    [
      `${n + 1}. ${nameOf(i.product)}`,
      `   Category: ${categoryOf(i.product)}`,
      `   Size: ${i.size} | Qty: ${i.qty} | ${formatNaira(priceOf(i.product))} each`,
      `   Ref: ${i.product.id}`,
    ].join('\n'),
  )

  const text =
    `Hello ${brand.name}, I'd like to order:\n\n` +
    lines.join('\n\n') +
    `\n\nTotal: ${formatNaira(cartTotal(items))}\n\nCan we discuss the price?`

  return `https://wa.me/${waNumber()}?text=${encodeURIComponent(text)}`
}