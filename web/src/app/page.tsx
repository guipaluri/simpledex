import { Github, Linkedin } from 'lucide-react'

import { LineBurger } from '@/components/LineBurger'
import { NameScreen } from '@/components/NameScreen'
import { NavButton } from '@/components/NavButton'
import { SmallRedLight } from '@/components/SmallRedLight'
import { SquaredBlueButton } from '@/components/SquaredBlueButton'
import { SquaredWhiteButton } from '@/components/SquaredWhiteButton'
import { ThinButton } from '@/components/ThinButton'
import { TypeScreen } from '@/components/TypeScreen'
import { SearchBar } from '@/components/SearchBar'
import { Logo } from '@/components/Logo'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Logo />
      <SearchBar />
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
                <div className="h-full w-[80%] justify-self-center rounded-[5%] border-2 border-solid border-black bg-mainScreen bg-[url('https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png')] bg-contain bg-center bg-no-repeat" />
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
                <div className="ml-[7px] h-[25px] w-[25px] rounded-[50%] border-2 border-solid border-black bg-mainButtons" />
                <div className="ml-[7px] flex w-[100px] justify-around">
                  <div className="h-[5px] w-[35px] rounded-xl border-[1.5px] border-solid border-black bg-[#c90000]" />
                  <div className="h-[5px] w-[35px] rounded-xl border-[1.5px] border-solid border-black bg-[#3298cb]" />
                </div>
              </div>
              <div className="grid grid-cols-[27%_35%_38%]">
                <div className="flex h-full w-[50%] justify-between justify-self-center font-serif text-xl text-black" />
                <NameScreen name="Bulbasaur" />
                <div className="relative top-[-30px] flex flex-col items-center justify-center">
                  <NavButton />
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
            <div className="flex items-center justify-center">
              <div className="flex h-[64px] w-[146px] items-center justify-center break-words rounded-[4px] border-2 border-solid border-black bg-secondScreen pl-[6px] pr-[2px] text-left text-[9px] leading-4">
                Height: 70cm Weight: 6.9kg
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="grid h-[60px] w-[146px] grid-cols-[repeat(5,_1fr)] grid-rows-[repeat(2,_1fr)]">
                <SquaredBlueButton />
                <SquaredBlueButton />
                <SquaredBlueButton />
                <SquaredBlueButton />
                <SquaredBlueButton />
                <SquaredBlueButton />
                <SquaredBlueButton />
                <SquaredBlueButton />
                <SquaredBlueButton />
                <SquaredBlueButton />
              </div>
            </div>
            <div className="flex justify-around">
              <div className="grid">
                <div className="flex items-center justify-start">
                  <SmallRedLight />
                  <SmallRedLight />
                </div>
                <div className="flex items-center justify-center">
                  <SquaredWhiteButton />
                  <SquaredWhiteButton />
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
              <TypeScreen type="Planta" />
              <TypeScreen type="Venenoso" />
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
            {/* Adicione mais ícones/link aqui */}
          </div>
        </div>
      </footer>
    </div>
  )
}
