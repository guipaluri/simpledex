import React, { MouseEvent } from 'react'

interface SquaredWhiteButtonProps {
  onClickShiny: (event: MouseEvent<HTMLButtonElement>) => void
}

export const SquaredWhiteButton: React.FC<SquaredWhiteButtonProps> = (
  props,
) => {
  const { onClickShiny } = props

  return (
    <button
      title="white-square"
      onClick={onClickShiny}
      className="z-10 h-[25px] w-[25px] rounded-[5px] border-2 border-solid border-black bg-white shadow-[inset_-2px_-2px_gray] active:bg-gray-300 active:shadow-[inset_-2px_-2px_#61686b]"
    />
  )
}
