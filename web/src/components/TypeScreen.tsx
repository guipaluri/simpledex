interface TypeScreenProps {
  type?: string
}

export function TypeScreen(props: TypeScreenProps) {
  return (
    <div
      title="type-screen"
      className="flex h-[25px] w-[64px] items-center justify-center break-words rounded-[4px] border-2 border-solid border-black bg-secondScreen pl-[4px] pr-[2px] text-left text-[6.5px] leading-4"
    >
      {props.type}
    </div>
  )
}
