import Image from 'next/image'
import simpleDexLogo from '../assets/logo.png'

export function Logo() {
  return (
    <div className="flex h-[40%] w-full items-center justify-self-start">
      <div className="max-w-[640px]">
        <Image src={simpleDexLogo} priority={true} alt="SimpleDex Logo" />
      </div>
    </div>
  )
}
