interface NameScreenProps {
  name: string
}

export function NameScreen(props: NameScreenProps) {
  return (
    <div
      title="green-screen"
      className="flex h-[30px] w-[80px] items-center justify-center rounded-[5px] border-2 border-solid border-black bg-[#3ab47d]"
    >
      <span
        title="name-screen"
        className="w-full break-words text-center text-[7.5px]"
      >
        {props.name}
      </span>
    </div>
  )
}
