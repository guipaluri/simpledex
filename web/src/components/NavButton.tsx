export function NavButton() {
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
        title="nav-button-vertical"
        className="absolute h-[16px] w-[52px] rounded-[5px] border-2 border-solid border-black bg-mainButtons"
      ></div>
      <div
        title="nav-button-vertical"
        className="absolute h-[16px] w-[52px] rotate-90 rounded-[5px] border-2 border-solid border-black bg-mainButtons"
      >
        <div
          title="border-top"
          className="absolute left-[18px] right-[18px] top-[-3px] border-t-[3.5px] border-solid border-mainButtons"
        ></div>
        <div
          title="border-bottom"
          className="absolute left-[18px] right-[18px] top-[11px] border-t-[3.5px] border-solid border-mainButtons"
        />
      </div>
    </div>
  )
}
