import {
  Hash,
  ChevronsDown,
  ChevronsUp,
  Dna,
  MapPin,
  Scale,
  MoveVertical,
  Star,
  Gem,
  Egg,
} from 'lucide-react'
import React, { MouseEvent } from 'react'

interface SquaredBlueButtonProps {
  icon: string
  onButtonPress: (icon: string) => void
}

export function SquaredBlueButton({
  icon,
  onButtonPress,
}: SquaredBlueButtonProps) {
  let IconComponent: React.FC

  switch (icon) {
    case 'hash':
      IconComponent = Hash
      break
    case 'generation':
      IconComponent = Dna
      break
    case 'region':
      IconComponent = MapPin
      break
    case 'resistances':
      IconComponent = ChevronsUp
      break
    case 'weaknesses':
      IconComponent = ChevronsDown
      break
    case 'height':
      IconComponent = MoveVertical
      break
    case 'weight':
      IconComponent = Scale
      break
    case 'legendary':
      IconComponent = Gem
      break
    case 'mythical':
      IconComponent = Star
      break
    case 'initial':
      IconComponent = Egg
      break
    default:
      IconComponent = Hash
  }

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onButtonPress(icon)
  }

  return (
    <button
      title="blue-square"
      onClick={handleClick}
      className="z-10 flex items-center justify-center rounded-[2px] border-[1.5px] border-solid border-black bg-squareButtons shadow-[inset_-2px_-2px_#3298cb] active:bg-[#618acf] active:shadow-[inset_-2px_-2px_#277aa3]"
    >
      <span className="ml-[-2px] mt-[-2px] flex h-[14px] w-[14px] items-center justify-center opacity-50">
        <IconComponent />
      </span>
    </button>
  )
}
