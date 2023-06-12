import React, { MouseEvent, useState } from 'react'
import Image from 'next/image'

import femaleIcon from '../assets/female.png'
import femaleActiveIcon from '../assets/femaleActive.png'

interface FemaleButtonProps {
  onClickFemale: (event: MouseEvent<HTMLButtonElement>) => void
}

export const FemaleButton: React.FC<FemaleButtonProps> = (props) => {
  const { onClickFemale } = props
  const [iconButton, setIconButton] = useState(
    <Image
      src={femaleIcon}
      alt="female"
      width={12}
      height={12}
      className="ml-[-2px] mt-[-2px] opacity-50"
    />,
  )
  const [isButtonInactive, setIsButtonInactive] = useState(false)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClickFemale(event)

    if (!isButtonInactive) {
      setIconButton(
        <Image
          src={femaleActiveIcon}
          alt="female"
          width={12}
          height={12}
          className="ml-[-2px] mt-[-2px] opacity-50"
        />,
      )
    } else {
      setIconButton(
        <Image
          src={femaleIcon}
          alt="female"
          width={12}
          height={12}
          className="ml-[-2px] mt-[-2px] opacity-50"
        />,
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
