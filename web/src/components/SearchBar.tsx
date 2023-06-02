import Image from 'next/image'
import pokeball from '../assets/pokeball.png'

export function SearchBar() {
  return (
    <div className="flex h-20 w-full items-center justify-center self-center justify-self-center">
      <input
        type="text"
        placeholder="Name / id"
        className="mr-3 h-10 rounded-md text-center"
      />
      <button className="h-14 w-14 rounded-full bg-white">
        <Image src={pokeball} width={56} height={56} alt="Pokeball Icon" />
      </button>
    </div>
  )
}
