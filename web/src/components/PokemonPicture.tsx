interface PokemonPictureProps {
  image: string | null
}

export function PokemonPicture(props: PokemonPictureProps) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.image})`,
      }}
      className={`h-full w-[80%] justify-self-center rounded-[5%] border-2 border-solid border-black bg-mainScreen bg-contain bg-center bg-no-repeat`}
    />
  )
}
