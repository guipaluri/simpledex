import { PokemonProps } from '@/app/page'

interface InfoScreenProps {
  buttonPressed: string | null
  pokemonInfo: PokemonProps | null
}

export function InfoScreen({ buttonPressed, pokemonInfo }: InfoScreenProps) {
  function determineInfoDisplayed(buttonPressed: string | null) {
    function determineGenRegion(id: number) {
      if (id >= 1 && id <= 151) return { gen: 'Gen #1', region: 'Kanto' }
      if (id >= 152 && id <= 251) return { gen: 'Gen #2', region: 'Johto' }
      if (id >= 252 && id <= 386) return { gen: 'Gen #3', region: 'Hoenn' }
      if (id >= 387 && id <= 493) return { gen: 'Gen #4', region: 'Sinnoh' }
      if (id >= 494 && id <= 649) return { gen: 'Gen #5', region: 'Unova' }
      if (id >= 650 && id <= 721) return { gen: 'Gen #6', region: 'Kalos' }
      if (id >= 722 && id <= 809) return { gen: 'Gen #7', region: 'Alola' }
      if (id >= 810 && id <= 898) return { gen: 'Gen #8', region: 'Galar' }
      if (id >= 899 && id <= 905) return { gen: 'Gen #8', region: 'Hisui' }
      if (id >= 906 && id <= 1010) return { gen: 'Gen #9', region: 'Paldea' }

      return { gen: 'Unknown Gen', region: 'Unknown Region' }
    }

    function determineLegendary(id: number) {
      if (id >= 144 && id <= 146) return true
      if (id === 150) return true
      if (id >= 243 && id <= 245) return true
      if (id === 249 || id === 250) return true
      if (id >= 377 && id <= 384) return true
      if (id >= 480 && id <= 488) return true
      if (id >= 638 && id <= 646) return true
      if (id >= 716 && id <= 718) return true
      if (id === 772 || id === 773) return true
      if (id >= 785 && id <= 792) return true
      if (id === 800) return true
      if (id >= 888 && id <= 890) return true
      if (id === 891 || id === 892) return true
      if (id >= 894 && id <= 898) return true
      if (id === 905) return true
      if (id >= 1001 && id <= 1004) return true
      if (id === 1007 || id === 1008) return true

      return false
    }

    function determineMythical(id: number) {
      if (id === 151) return true
      if (id === 251) return true
      if (id === 385 || id === 386) return true
      if (id >= 489 && id <= 493) return true
      if (id === 494) return true
      if (id >= 647 && id <= 649) return true
      if (id >= 719 && id <= 721) return true
      if (id === 801 || id === 802) return true
      if (id >= 807 && id <= 809) return true
      if (id === 893) return true

      return false
    }

    function determineInitial(id: number) {
      if (id >= 1 && id <= 9) return true
      if (id >= 152 && id <= 160) return true
      if (id >= 252 && id <= 260) return true
      if (id >= 387 && id <= 395) return true
      if (id >= 495 && id <= 503) return true
      if (id >= 650 && id <= 658) return true
      if (id >= 722 && id <= 730) return true
      if (id >= 810 && id <= 818) return true
      if (id >= 906 && id <= 914) return true

      return false
    }

    if (buttonPressed === 'hash') {
      return pokemonInfo?.id ? `#${pokemonInfo?.id}` : ''
    }

    if (buttonPressed === 'generation') {
      const pokemonId = pokemonInfo?.id ?? 0
      const { gen } = determineGenRegion(pokemonId)
      return gen
    }

    if (buttonPressed === 'region') {
      const pokemonId = pokemonInfo?.id ?? 0
      const { region } = determineGenRegion(pokemonId)
      return region
    }

    if (buttonPressed === 'resistances') {
      return pokemonInfo?.resistancesPT.join(', ')
    }

    if (buttonPressed === 'weaknesses') {
      return pokemonInfo?.weaknessesPT.join(', ')
    }

    if (buttonPressed === 'height') {
      const pokemonHeight = pokemonInfo?.height ?? 0
      return `altura: ${pokemonHeight / 10}m`
    }

    if (buttonPressed === 'weight') {
      const pokemonWeight = pokemonInfo?.weight ?? 0
      return `peso: ${pokemonWeight / 10}kg`
    }

    if (buttonPressed === 'legendary') {
      const pokemonId = pokemonInfo?.id ?? 0
      const isLegendary = determineLegendary(pokemonId)
      return isLegendary ? 'lendário' : 'não lendário'
    }

    if (buttonPressed === 'mythical') {
      const pokemonId = pokemonInfo?.id ?? 0
      const isMythical = determineMythical(pokemonId)
      return isMythical ? 'mítico' : 'não mítico'
    }

    if (buttonPressed === 'initial') {
      const pokemonId = pokemonInfo?.id ?? 0
      const isInitial = determineInitial(pokemonId)
      return isInitial ? 'inicial' : 'não inicial'
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className="flex h-[64px] w-[148px] items-center justify-center break-words rounded-[4px] border-2 border-solid border-black bg-secondScreen pl-1 pr-0 text-left text-[9px] leading-4">
        {determineInfoDisplayed(buttonPressed)}
      </div>
    </div>
  )
}
