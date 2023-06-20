import React, { MouseEvent, useState } from 'react'
import { Sparkles } from 'lucide-react'

interface ShinyButtonProps {
  onClickShiny: (event: MouseEvent<HTMLButtonElement>) => void
}

export const ShinyButton: React.FC<ShinyButtonProps> = (props) => {
  const { onClickShiny } = props
  const [iconButton, setIconButton] = useState(
    <Sparkles className="ml-[-2px] mt-[-2px] h-3 w-3 opacity-50" />,
  )
  const [isButtonInactive, setIsButtonInactive] = useState(false)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClickShiny(event)

    if (!isButtonInactive) {
      setIconButton(
        <Sparkles className="ml-[-2px] mt-[-2px] h-3 w-3 text-yellow-400 opacity-70" />,
      )
    } else {
      setIconButton(
        <Sparkles className="ml-[-2px] mt-[-2px] h-3 w-3 opacity-50" />,
      )
    }

    setIsButtonInactive((prevState) => !prevState)
  }

  return (
    <button
      title="white-square"
      onClick={handleClick}
      className="z-10 flex h-[25px] w-[25px] items-center justify-center rounded-[5px] border-2 border-solid border-black bg-white shadow-[inset_-2px_-2px_gray] active:bg-gray-300 active:shadow-[inset_-2px_-2px_#61686b]"
    >
      {iconButton}
    </button>
  )
}
