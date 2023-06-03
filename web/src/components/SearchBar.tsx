'use client'

import Image from 'next/image'
import { useState } from 'react'

import pokeball from '../assets/pokeball.png'

import { api } from '@/lib/api'
import { PokemonProps } from '@/app/page'

interface SearchBarProps {
  onPokemonReceived: (data: PokemonProps) => void
}

export function SearchBar(props: SearchBarProps) {
  const [pokemonData, setPokemonData] = useState('')

  async function handleGetPokemon() {
    if (pokemonData) {
      const response = await api.get(`/pokemon/${pokemonData.toLowerCase()}`)
      const pokemon = response.data as PokemonProps

      props.onPokemonReceived(pokemon)
    }

    setPokemonData('')
  }

  return (
    <div className="flex h-20 w-full items-center justify-center self-center justify-self-center">
      <input
        type="text"
        placeholder="Name / id"
        className="mr-3 h-10 rounded-md text-center"
        value={pokemonData}
        onChange={(event) => setPokemonData(event.target.value)}
      />
      <button
        onClick={handleGetPokemon}
        className="h-14 w-14 rounded-full bg-white"
      >
        <Image src={pokeball} width={56} height={56} alt="Pokeball Icon" />
      </button>
    </div>
  )
}
