import React, { MouseEvent } from 'react'

interface NavButtonProps {
  onClickIncrease: (event: MouseEvent<HTMLButtonElement>) => void
  onClickDecrease: (event: MouseEvent<HTMLButtonElement>) => void
}

export const NavButton: React.FC<NavButtonProps> = (props) => {
  const { onClickIncrease, onClickDecrease } = props

  return (
    <div
      title="nav-button"
      className="flex h-[52px] w-[52px] items-center justify-center"
    >
      <div
        title="nav-center-circle"
        className="z-[+2] h-[7px] w-[7px] rounded-full border border-solid border-black"
      />
      <div
        title="nav-button-horizontal"
        className="absolute h-[16px] w-[52px] rounded-[5px] border-2 border-solid border-black bg-mainButtons"
      >
        <button
          onClick={onClickDecrease}
          title="button-left"
          className="absolute left-0 top-0  h-full w-[26px] rounded-bl-[3px] rounded-tl-[3px] active:bg-[#3d3d3d]"
        />
        <button
          onClick={onClickIncrease}
          title="button-right"
          className="absolute right-0 top-0 h-full w-[26px] rounded-br-[3px] rounded-tr-[3px] active:bg-[#3d3d3d]"
        />
      </div>
      <div
        title="nav-button-vertical"
        className="absolute h-[16px] w-[52px] rotate-90 rounded-[5px] border-2 border-solid border-black bg-mainButtons"
      >
        <button
          title="button-top"
          className="absolute left-0 top-0 h-full w-[26px] rounded-bl-[3px] rounded-tl-[3px] active:bg-[#3d3d3d]"
        />
        <button
          title="button-bottom"
          className="absolute right-0 top-0 h-full w-[26px] rounded-br-[3px] rounded-tr-[3px] active:bg-[#3d3d3d]"
        />
        <div
          title="border-top"
          className="absolute left-[18px] right-[18px] top-[-3px] border-t-[3.5px] border-solid border-mainButtons"
        />
        <div
          title="border-bottom"
          className="absolute left-[18px] right-[18px] top-[11px] border-t-[3.5px] border-solid border-mainButtons"
        />
      </div>
    </div>
  )
}
