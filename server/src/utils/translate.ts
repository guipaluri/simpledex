export function translate(word: string) {
  const dictionary: { [key: string]: string } = {
    bug: 'inseto',
    dark: 'sombrio',
    dragon: 'dragão',
    electric: 'elétrico',
    fairy: 'fada',
    fighting: 'lutador',
    fire: 'fogo',
    flying: 'voador',
    ghost: 'fantasma',
    grass: 'planta',
    ground: 'terrestre',
    ice: 'gelo',
    normal: 'normal',
    poison: 'venenoso',
    psychic: 'psíquico',
    rock: 'pedra',
    steel: 'aço',
    water: 'água',
  }

  return dictionary[word] ?? word
}
