import { Link } from 'react-router-dom'

type Props = { title: string; text?: string; to?: string; linkLabel?: string }

export default function SectionHeading({ title, text, to, linkLabel }: Props) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
        {text && <p className="mt-2 max-w-xl text-neutral-600">{text}</p>}
      </div>
      {to && (
        <Link to={to} className="shrink-0 text-sm font-semibold text-brand underline-offset-4 hover:underline">
          {linkLabel ?? 'View all'}
        </Link>
      )}
    </div>
  )
}
