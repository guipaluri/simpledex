'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Github, Linkedin } from 'lucide-react'

import { Logo } from '@/components/Logo'
import { NameScreen } from '@/components/NameScreen'
import { PokemonPicture } from '@/components/PokemonPicture'
import { SmallRedLight } from '@/components/SmallRedLight'
import { SquaredBlueButton } from '@/components/SquaredBlueButton'
import { LineBurger } from '@/components/LineBurger'
import { ThinButton } from '@/components/ThinButton'
import { TypeScreen } from '@/components/TypeScreen'
import { SearchBar } from '@/components/SearchBar'
import { NavButton } from '@/components/NavButton'
import { ShinyButton } from '@/components/ShinyButton'
import { FemaleButton } from '@/components/FemaleButton'

import { api } from '@/lib/api'
import { InfoScreen } from '@/components/InfoScreen'

export interface PokemonProps {
  id: number
  name: string
  imageDisplay: string
  imageFront: string
  imageBack: string
  imageFemale: string
  imageBackFemale: string
  imageShiny: string
  imageBackShiny: string
  imageShinyFemale: string
  imageBackShinyFemale: string
  primaryType: string
  primaryTypePT: string
  secondaryType?: string
  secondaryTypePT?: string
  weaknesses: Array<string>
  weaknessesPT: Array<string>
  resistances: Array<string>
  resistancesPT: Array<string>
  height: number
  weight: number
}

export default function Home() {
  const [pokemon, setPokemon] = useState<PokemonProps | null>(null)
  const [pokemonDisplay, setPokemonDisplay] = useState<string | null>(null)
  const [isShiny, setIsShiny] = useState<boolean>(false)
  const [isFemale, setIsFemale] = useState<boolean>(false)
  const [isBackTurned, setIsBackTurned] = useState<boolean>(false)
  const [buttonPressed, setButtonPressed] = useState<string | null>(null)

  function handlePokemon(pokemon: PokemonProps) {
    setPokemon(pokemon)

    if (isShiny) {
      if (isFemale) {
        setPokemonDisplay(pokemon.imageShinyFemale ?? pokemon.imageShiny)
      } else {
        setPokemonDisplay(pokemon.imageShiny)
      }
    } else {
      if (isFemale) {
        setPokemonDisplay(pokemon.imageFemale ?? pokemon.imageFront)
      } else {
        setPokemonDisplay(pokemon.imageFront)
      }
    }

    setButtonPressed('hash')
  }

  const handleButtonPress = (icon: string) => {
    setButtonPressed(icon)
  }

  async function increaseId(event: any) {
    if (pokemon) {
      if (pokemon.id < 1010) {
        const response = await api.get(`/pokemon/${pokemon.id + 1}`)
        const updatedPokemon = response.data

        setPokemon(updatedPokemon)

        if (isFemale) {
          if (isShiny) {
            setPokemonDisplay(
              updatedPokemon?.imageShinyFemale ?? updatedPokemon?.imageShiny,
            )
          } else {
            setPokemonDisplay(
              updatedPokemon?.imageFemale ?? updatedPokemon?.imageFront,
            )
          }
        } else {
          if (isShiny) {
            setPokemonDisplay(updatedPokemon?.imageShiny ?? '')
          } else {
            setPokemonDisplay(updatedPokemon?.imageFront ?? '')
          }
        }
      } else {
        const response = await api.get(`/pokemon/1`)
        const updatedPokemon = response.data

        setPokemon(updatedPokemon)
        if (isShiny) {
          setPokemonDisplay(updatedPokemon?.imageShiny ?? '')
        } else {
          setPokemonDisplay(updatedPokemon?.imageFront ?? '')
        }
      }
      setIsBackTurned(false)
    }
  }

  async function decreaseId(event: any) {
    if (pokemon) {
      if (pokemon.id > 1) {
        const response = await api.get(`/pokemon/${pokemon.id - 1}`)
        const updatedPokemon = response.data

        setPokemon(updatedPokemon)

        if (isFemale) {
          if (isShiny) {
            setPokemonDisplay(
              updatedPokemon?.imageShinyFemale ?? updatedPokemon?.imageShiny,
            )
          } else {
            setPokemonDisplay(
              updatedPokemon?.imageFemale ?? updatedPokemon?.imageFront,
            )
          }
        } else {
          if (isShiny) {
            setPokemonDisplay(updatedPokemon?.imageShiny ?? '')
          } else {
            setPokemonDisplay(updatedPokemon?.imageFront ?? '')
          }
        }
      } else {
        const response = await api.get(`/pokemon/1010`)
        const updatedPokemon = response.data

        setPokemon(updatedPokemon)
        if (isShiny) {
          setPokemonDisplay(updatedPokemon?.imageShiny ?? '')
        } else {
          setPokemonDisplay(updatedPokemon?.imageFront ?? '')
        }
      }
      setIsBackTurned(false)
    }
  }

  async function faceFront(event: any) {
    if (pokemon) {
      if (isShiny) {
        if (isFemale) {
          setPokemonDisplay(pokemon.imageShinyFemale ?? pokemon.imageShiny)
        } else {
          setPokemonDisplay(pokemon.imageShiny)
        }
      } else {
        if (isFemale) {
          setPokemonDisplay(pokemon.imageFemale ?? pokemon.imageFront)
        } else {
          setPokemonDisplay(pokemon.imageFront)
        }
      }
    }
    setIsBackTurned(false)
  }

  async function faceBack(event: any) {
    if (pokemon) {
      if (isShiny) {
        if (isFemale) {
          setPokemonDisplay(
            pokemon.imageBackShinyFemale ?? pokemon.imageBackShiny,
          )
        } else {
          setPokemonDisplay(pokemon.imageBackShiny)
        }
      } else {
        if (isFemale) {
          setPokemonDisplay(pokemon.imageBackFemale ?? pokemon.imageBack)
        } else {
          setPokemonDisplay(pokemon.imageBack)
        }
      }
    }
    setIsBackTurned(true)
  }

  async function female(event: any) {
    if (pokemon) {
      if (isShiny) {
        if (!isFemale) {
          isBackTurned
            ? setPokemonDisplay(
                pokemon.imageBackShinyFemale ?? pokemon.imageBackShiny,
              )
            : setPokemonDisplay(pokemon.imageShinyFemale ?? pokemon.imageShiny)
          setIsFemale(true)
        } else {
          isBackTurned
            ? setPokemonDisplay(pokemon.imageBackShiny)
            : setPokemonDisplay(pokemon.imageShiny)
          setIsFemale(false)
        }
      } else {
        if (!isFemale) {
          isBackTurned
            ? setPokemonDisplay(pokemon.imageBackFemale ?? pokemon.imageBack)
            : setPokemonDisplay(pokemon.imageFemale ?? pokemon.imageFront)
          setIsFemale(true)
        } else {
          isBackTurned
            ? setPokemonDisplay(pokemon.imageBack)
            : setPokemonDisplay(pokemon.imageFront)
          setIsFemale(false)
        }
      }
    } else {
      setIsFemale((prevState) => !prevState)
    }
  }

  async function shiny(event: any) {
    if (pokemon) {
      if (isFemale) {
        if (!isShiny) {
          isBackTurned
            ? setPokemonDisplay(
                pokemon.imageBackShinyFemale ?? pokemon.imageBackShiny,
              )
            : setPokemonDisplay(pokemon.imageShinyFemale ?? pokemon.imageShiny)
          setIsShiny(true)
        } else {
          isBackTurned
            ? setPokemonDisplay(pokemon.imageBackFemale ?? pokemon.imageBack)
            : setPokemonDisplay(pokemon.imageFemale ?? pokemon.imageFront)
          setIsShiny(false)
        }
      } else {
        if (!isShiny) {
          isBackTurned
            ? setPokemonDisplay(pokemon.imageBackShiny)
            : setPokemonDisplay(pokemon.imageShiny)
          setIsShiny(true)
        } else {
          isBackTurned
            ? setPokemonDisplay(pokemon.imageBack)
            : setPokemonDisplay(pokemon.imageFront)
          setIsShiny(false)
        }
      }
    } else {
      setIsShiny((prevState) => !prevState)
    }
  }

  return (
    <div>
      <Logo />
      <SearchBar onPokemonReceived={handlePokemon} />
      <div className="flex items-center justify-center">
        <div className="flex h-[342px] w-[456px] justify-self-center rounded-xl">
          <div className="box-border grid h-full w-1/2 grid-rows-[23%_50%_27%] rounded-bl-xl rounded-tl-xl rounded-tr-lg border-[3px] border-solid border-black bg-mainBackground">
            <div className="m-0 block p-0">
              <svg className="absolute h-[100] w-[225]">
                <polyline
                  className="fill-none stroke-black stroke-[3px]"
                  points="0,75 70,75 90,38 224,38"
                />
              </svg>
              <div className="relative flex items-center justify-start">
                <div className="ml-[5px] flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-solid border-black bg-white">
                  <div className="h-[50px] w-[50px] rounded-full border-2 border-black bg-[#3298cb]">
                    <div className="relative left-[10px] top-[7px] h-[15px] w-[15px] rounded-full bg-[#85bdfe]" />
                  </div>
                </div>
                <div className="ml-[24px] mt-[10px] flex h-full w-[70px] justify-around self-start">
                  <div className="h-5 w-5 rounded-full border-2 border-black bg-[#c90000]">
                    <div className="relative left-[3px] top-[3px] h-[5px] w-[5px] rounded-full bg-[#fe98cb]" />
                  </div>
                  <div className="h-5 w-5 rounded-full border-2 border-black bg-[#fecb65]">
                    <div className="relative left-[3px] top-[3px] h-[5px] w-[5px] rounded-full bg-[#fefecb]" />
                  </div>
                  <div className="h-5 w-5 rounded-full border-2 border-black bg-[#32cb65]">
                    <div className="relative left-[3px] top-[3px] h-[5px] w-[5px] rounded-full bg-[#98fe00]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="grid h-[150px] w-[150px] grid-rows-[10%_72%_18%] rounded-bl-[17%] border-2 border-solid border-black bg-white">
                <div className="mt-[2px] flex w-[50%] items-center justify-center justify-self-center">
                  <div className="mr-[7px] h-[7px] w-[7px] rounded-[50%] border border-solid border-black bg-[#c90000]" />
                  <div className="mr-[7px] h-[7px] w-[7px] rounded-[50%] border border-solid border-black bg-[#c90000]" />
                </div>
                <PokemonPicture image={pokemon ? pokemonDisplay : ''} />
                <div className="mt-[3px] flex w-[75%] items-center justify-between justify-self-center">
                  <div className="h-[16px] w-[16px] rounded-full border-2 border-solid  border-black bg-[#c90000]">
                    <div className="relative left-[1px] top-[1px] h-[5px] w-[5px] rounded-full bg-[#fe98cb]" />
                  </div>
                  <div className="m-0 block p-0">
                    <LineBurger />
                    <LineBurger />
                    <LineBurger />
                    <LineBurger />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-rows-[40%_60%]">
              <div className="flex items-start justify-start">
                <button className="ml-[7px] h-[25px] w-[25px] rounded-[50%] border-2 border-solid border-black bg-mainButtons active:bg-[#3d3d3d]" />
                <div className="ml-[7px] flex w-[100px] justify-around">
                  <div className="h-[5px] w-[35px] rounded-xl border-[1.5px] border-solid border-black bg-[#c90000]" />
                  <div className="h-[5px] w-[35px] rounded-xl border-[1.5px] border-solid border-black bg-[#3298cb]" />
                </div>
              </div>
              <div className="grid grid-cols-[27%_35%_38%]">
                <div className="flex h-full w-[50%] justify-between justify-self-center font-serif text-xl text-black" />
                <NameScreen name={pokemon?.name ?? ''} />
                <div className="relative top-[-30px] flex flex-col items-center justify-center">
                  <NavButton
                    onClickIncrease={increaseId}
                    onClickDecrease={decreaseId}
                    onClickFront={faceFront}
                    onClickBack={faceBack}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative box-border grid h-full w-[50%] grid-rows-[24%_repeat(4,_19%)] rounded-br-[10px] border-b-[3px] border-solid border-black bg-mainBackground before:absolute before:bottom-[0px] before:left-[0px] before:h-[265px] before:w-full before:rounded-br-[7px] before:border-r-[3px] before:border-solid before:border-black before:content-['']">
            <div className="m-0 block p-0">
              <svg className="h-full w-full">
                <polyline
                  className="fill-[#475569] stroke-none stroke-[3]"
                  points="0,0 0,40 138,40 158,75 250,75 250,0 0,0"
                />
                <polyline
                  className="fill-none stroke-black stroke-[3]"
                  points="0,40 138,40 158,75 250,75"
                />
              </svg>
            </div>
            <InfoScreen buttonPressed={buttonPressed} pokemonInfo={pokemon} />
            <div className="flex items-center justify-center">
              <div className="grid h-[60px] w-[146px] grid-cols-[repeat(5,_1fr)] grid-rows-[repeat(2,_1fr)]">
                <SquaredBlueButton
                  icon={'hash'}
                  onButtonPress={handleButtonPress}
                />
                <SquaredBlueButton
                  icon={'generation'}
                  onButtonPress={handleButtonPress}
                />
                <SquaredBlueButton
                  icon={'region'}
                  onButtonPress={handleButtonPress}
                />
                <SquaredBlueButton
                  icon={'resistances'}
                  onButtonPress={handleButtonPress}
                />
                <SquaredBlueButton
                  icon={'weaknesses'}
                  onButtonPress={handleButtonPress}
                />
                <SquaredBlueButton
                  icon={'height'}
                  onButtonPress={handleButtonPress}
                />
                <SquaredBlueButton
                  icon={'weight'}
                  onButtonPress={handleButtonPress}
                />
                <SquaredBlueButton
                  icon={'legendary'}
                  onButtonPress={handleButtonPress}
                />
                <SquaredBlueButton
                  icon={'mythical'}
                  onButtonPress={handleButtonPress}
                />
                <SquaredBlueButton
                  icon={'initial'}
                  onButtonPress={handleButtonPress}
                />
              </div>
            </div>
            <div className="flex justify-around">
              <div className="grid">
                <div className="flex items-center justify-start">
                  <SmallRedLight />
                  <SmallRedLight />
                </div>
                <div className="flex items-center justify-center">
                  <ShinyButton onClickShiny={shiny} />
                  <FemaleButton onClickFemale={female} />
                </div>
              </div>
              <div className="grid">
                <div className="flex justify-between">
                  <ThinButton />
                  <ThinButton />
                </div>
                <div className="border-solid- ml-[7px] h-[25px] w-[25px] justify-self-end rounded-[50%] border-2 border-black bg-[#fecb65]">
                  <div className="relative left-[5px] top-[3px] h-[7px] w-[7px] rounded-[50%] bg-[#fefecb]" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-around">
              <TypeScreen type={pokemon?.primaryTypePT} />
              <TypeScreen type={pokemon?.secondaryTypePT} />
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-12 py-4 text-white">
        <div className="flex items-center justify-center">
          <div className="flex space-x-4">
            <Link href="https://github.com/guipaluri" target="_blank">
              <Github />
            </Link>
            <Link
              href="https://www.linkedin.com/in/guilherme-paluri"
              target="_blank"
            >
              <Linkedin />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
