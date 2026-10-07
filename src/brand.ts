// One place for brand details. Replace these once the brand is decided.
export const brand = {
  name: 'E-Footwear',
  tagline: 'Swaggu swa',
  phone: '+234 000 000 0000',
  email: 'hello@example.com',
  address: 'Lagos, Nigeria',
  whatsapp: '2340000000000',
}

export const formatPrice = (n: number) =>
  new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(n)
