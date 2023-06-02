import Image from 'next/image'
import simpleDexLogo from '../assets/logo.png'

export function Logo() {
  return (
    <div className="flex h-[40%] w-full items-center justify-self-start">
      <Image
        src={simpleDexLogo}
        alt="SimpleDex Logo"
        height={512}
        width={512}
      />
    </div>
  )
}
