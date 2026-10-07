import { FiMapPin, FiShield, FiTruck } from 'react-icons/fi'

const items = [
  { icon: FiTruck, title: 'Fast delivery', text: 'We deliver to your door across Nigeria.' },
  { icon: FiMapPin, title: 'Free click and collect', text: 'Order online and pick up in store at no cost.' },
  { icon: FiShield, title: 'Secure checkout', text: 'Your payment details are encrypted end to end.' },
]

export default function ServiceStrip() {
  return (
    <section className="border-y border-neutral-200">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 md:grid-cols-3">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex items-start gap-4">
            <Icon size={28} className="mt-1 shrink-0 text-brand" aria-hidden />
            <div>
              <h3 className="font-bold">{title}</h3>
              <p className="text-sm text-neutral-600">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
