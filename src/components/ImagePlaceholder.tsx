import { FiImage } from 'react-icons/fi'

// Blank image slot. Swap for a real <img> once photos are ready.
export default function ImagePlaceholder({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center bg-soft text-neutral-400 ${className}`}>
      <FiImage size={32} aria-hidden />
    </div>
  )
}
