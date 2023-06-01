export default function Home() {
  return (
    <div title="pokedex" className="flex h-[342px] w-[456px] rounded-xl">
      <div
        title="left-panel"
        className="box-border grid h-full w-1/2 grid-rows-[23%_50%_27%] rounded-bl-xl rounded-tl-xl rounded-tr-lg border-[3px] border-solid border-black bg-mainBackground"
      >
        <div title="left-top-container" className="m-0 block p-0">
          <svg className="absolute h-[100] w-[225]">
            <polyline
              className="fill-none stroke-black stroke-[3px]"
              points="0,75 70,75 90,38 224,38"
            />
          </svg>
          <div
            title="lights-container"
            className="relative flex items-center justify-start"
          >
            <div
              title="big-light-border"
              className="ml-[5px] flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-solid border-black bg-white"
            >
              <div
                title="big-light-blue"
                className="h-[50px] w-[50px] rounded-full border-2 border-black bg-[#3298cb]"
              >
                <div
                  title="big-dot"
                  className="relative left-[10px] top-[7px] h-[15px] w-[15px] rounded-full bg-[#85bdfe]"
                />
              </div>
            </div>
            <div
              title="small-lights-container"
              className="ml-[24px] mt-[10px] flex h-full w-[70px] justify-around self-start"
            >
              <div
                title="small-light-red"
                className="h-5 w-5 rounded-full border-2 border-black bg-[#c90000]"
              >
                <div
                  title="dot-light-red"
                  className="relative left-[3px] top-[3px] h-[5px] w-[5px] rounded-full bg-[#fe98cb]"
                />
              </div>
              <div
                title="small-light-yellow"
                className="h-5 w-5 rounded-full border-2 border-black bg-[#fecb65]"
              >
                <div
                  title="dot-light-yellow"
                  className="relative left-[3px] top-[3px] h-[5px] w-[5px] rounded-full bg-[#fefecb]"
                />
              </div>
              <div
                title="small-light-green"
                className="h-5 w-5 rounded-full border-2 border-black bg-[#32cb65]"
              >
                <div
                  title="dot-light-green"
                  className="relative left-[3px] top-[3px] h-[5px] w-[5px] rounded-full bg-[#98fe00]"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          title="screen-container"
          className="flex items-center justify-center"
        >
          <div
            title="screen"
            className="grid h-[150px] w-[150px] grid-rows-[10%_72%_18%] rounded-bl-[17%] border-2 border-solid border-black bg-white"
          >
            <div
              title="top-screen-lights"
              className="mt-[2px] flex w-[50%] items-center justify-center justify-self-center"
            >
              <div
                title="mini-light-red-1"
                className="mr-[7px] h-[7px] w-[7px] rounded-[50%] border border-solid border-black bg-[#c90000]"
              />
              <div
                title="mini-light-red-2"
                className="mr-[7px] h-[7px] w-[7px] rounded-[50%] border border-solid border-black bg-[#c90000]"
              />
            </div>
            <div
              title="main-screen"
              className="h-full w-[80%] justify-self-center rounded-[5%] border-2 border-solid border-black bg-mainScreen bg-[url('https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png')] bg-contain bg-center bg-no-repeat"
            />
            <div
              title="bottom-screen-lights"
              className="mt-[3px] flex w-[75%] items-center justify-between justify-self-center"
            >
              <div
                title="small-light-red"
                className="h-[16px] w-[16px] rounded-full border-2 border-solid  border-black bg-[#c90000]"
              >
                <div
                  title="dot-light-red-small"
                  className="relative left-[1px] top-[1px] h-[5px] w-[5px] rounded-full bg-[#fe98cb]"
                />
              </div>
              <div title="burger" className="m-0 block p-0">
                <div
                  title="line1"
                  className="mt-[2px] h-[2px] w-[18px] bg-black"
                />
                <div
                  title="line2"
                  className="mt-[2px] h-[2px] w-[18px] bg-black"
                />
                <div
                  title="line3"
                  className="mt-[2px] h-[2px] w-[18px] bg-black"
                />
                <div
                  title="line4"
                  className="mt-[2px] h-[2px] w-[18px] bg-black"
                />
              </div>
            </div>
          </div>
        </div>
        <div title="buttons-container" className="grid grid-rows-[40%_60%]">
          <div
            title="upper-buttons-container"
            className="flex items-start justify-start"
          >
            <div
              title="big-button"
              className="ml-[7px] h-[25px] w-[25px] rounded-[50%] border-2 border-solid border-black bg-mainButtons"
            />
            <div
              title="long-buttons-container"
              className="ml-[7px] flex w-[100px] justify-around"
            >
              <div
                title="long-button-red"
                className="h-[5px] w-[35px] rounded-xl border-[1.5px] border-solid border-black bg-[#c90000]"
              />
              <div
                title="long-button-red"
                className="h-[5px] w-[35px] rounded-xl border-[1.5px] border-solid border-black bg-[#3298cb]"
              />
            </div>
          </div>
          <div
            title="nav-buttons-container"
            className="grid grid-cols-[27%_35%_38%]"
          >
            <div
              title="dots-container"
              className="flex h-full w-[50%] justify-between justify-self-center font-serif text-xl text-black"
            >
              <div>.</div>
              <div>.</div>
            </div>
            <div
              title="green-screen"
              className="flex h-[30px] w-[80px] items-center justify-center rounded-[5px] border-2 border-solid border-black bg-[#3ab47d]"
            >
              <span
                title="name-screen"
                className="w-full break-words text-center text-[8px]"
              >
                Bulbasaur
              </span>
            </div>
            <div
              title="right-nav-container"
              className="relative top-[-30px] flex flex-col items-center justify-center"
            >
              <div
                title="nav-button"
                className="flex h-[52px] w-[52px] items-center justify-center"
              >
                <div
                  title="nav-center-circle"
                  className="z-[+2] h-[7px] w-[7px] rounded-full border border-solid border-black"
                />
                <div
                  title="nav-button-vertical"
                  className="absolute h-[16px] w-[52px] rounded-[5px] border-2 border-solid border-black bg-mainButtons"
                ></div>
                <div
                  title="nav-button-vertical"
                  className="absolute h-[16px] w-[52px] rotate-90 rounded-[5px] border-2 border-solid border-black bg-mainButtons"
                >
                  <div
                    title="border-top"
                    className="absolute left-[18px] right-[18px] top-[-3px] border-t-[3.5px] border-solid border-mainButtons"
                  ></div>
                  <div
                    title="border-bottom"
                    className="absolute left-[18px] right-[18px] top-[11px] border-t-[3.5px] border-solid border-mainButtons"
                  />
                </div>
              </div>
              <div
                title="bottom-right-nav-container"
                className="flex items-center justify-center text-center"
              >
                <div
                  title="small-light-red-2"
                  className="h-[12px] w-[12px] rounded-full border border-solid border-black bg-[#c90000]"
                >
                  <div
                    title="dot-light-red-2"
                    className="relative left-[1.5px] top-[1.5px] h-[3px] w-[3px] rounded-full bg-[#fe98cb]"
                  ></div>
                </div>
                <div
                  title="dots-container-2"
                  className="flex h-full w-[50%] justify-between justify-self-center font-serif text-xl text-black"
                >
                  <div className="black-dot">.</div>
                  <div className="black-dot">.</div>
                  <div className="black-dot">.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        title="right-panel"
        className="relative box-border grid h-full w-[50%] grid-rows-[24%_repeat(4,_19%)] rounded-br-[10px] border-b-[3px] border-solid border-black bg-mainBackground before:absolute before:bottom-[0px] before:left-[0px] before:h-[265px] before:w-full before:rounded-br-[7px] before:border-r-[3px] before:border-solid before:border-black before:content-['']"
      >
        <div title="empty-container" className="m-0 block p-0">
          <svg className="h-full w-full">
            <polyline
              className="fill-[#f2f2f2] stroke-none stroke-[3]"
              points="0,0 0,40 138,40 158,75 250,75 250,0 0,0"
            />
            <polyline
              className="fill-none stroke-black stroke-[3]"
              points="0,40 138,40 158,75 250,75"
            />
          </svg>
        </div>
        <div
          title="top-screen-container"
          className="flex items-center justify-center"
        >
          <div
            id="right-panel-screen"
            className="flex h-[64px] w-[146px] items-center justify-center break-words rounded-[4px] border-2 border-solid border-black bg-secondScreen pl-[6px] pr-[2px] text-left text-[9px] leading-4"
          >
            Height: 70cm Weight: 6.9kg
          </div>
        </div>
        <div
          title="square-buttons-container"
          className="flex items-center justify-center"
        >
          <div
            title="blue-squares-container"
            className="grid h-[60px] w-[146px] grid-cols-[repeat(5,_1fr)] grid-rows-[repeat(2,_1fr)]"
          >
            <div
              title="blue-square1"
              className="rounded-[2px] border-[1.5px] border-solid border-black bg-squareButtons shadow-[inset_-2px_-2px_#3298cb]"
            />
            <div
              title="blue-square2"
              className="rounded-[2px] border-[1.5px] border-solid border-black bg-squareButtons shadow-[inset_-2px_-2px_#3298cb]"
            />
            <div
              title="blue-square3"
              className="rounded-[2px] border-[1.5px] border-solid border-black bg-squareButtons shadow-[inset_-2px_-2px_#3298cb]"
            />
            <div
              title="blue-square4"
              className="rounded-[2px] border-[1.5px] border-solid border-black bg-squareButtons shadow-[inset_-2px_-2px_#3298cb]"
            />
            <div
              title="blue-square5"
              className="rounded-[2px] border-[1.5px] border-solid border-black bg-squareButtons shadow-[inset_-2px_-2px_#3298cb]"
            />
            <div
              title="blue-square6"
              className="rounded-[2px] border-[1.5px] border-solid border-black bg-squareButtons shadow-[inset_-2px_-2px_#3298cb]"
            />
            <div
              title="blue-square7"
              className="rounded-[2px] border-[1.5px] border-solid border-black bg-squareButtons shadow-[inset_-2px_-2px_#3298cb]"
            />
            <div
              title="blue-square8"
              className="rounded-[2px] border-[1.5px] border-solid border-black bg-squareButtons shadow-[inset_-2px_-2px_#3298cb]"
            />
            <div
              title="blue-square9"
              className="rounded-[2px] border-[1.5px] border-solid border-black bg-squareButtons shadow-[inset_-2px_-2px_#3298cb]"
            />
            <div
              title="blue-square10"
              className="rounded-[2px] border-[1.5px] border-solid border-black bg-squareButtons shadow-[inset_-2px_-2px_#3298cb]"
            />
          </div>
        </div>
        <div title="center-buttons-container" className="flex justify-around">
          <div title="center-left-container" className="grid">
            <div
              title="small-reds-container"
              className="flex items-center justify-start"
            >
              <div
                title="small-light-red"
                className="mr-[10px] mt-[10px] h-[7px] w-[7px] rounded-full border border-solid  border-black bg-[#c90000]"
              >
                <div
                  title="dot-light-red2"
                  className="relative left-[0.5px] top-[0.5px] h-[2px] w-[2px] rounded-full bg-[#fe98cb]"
                ></div>
              </div>
              <div
                title="small-light-red"
                className="mr-[10px] mt-[10px] h-[7px] w-[7px] rounded-full border border-solid  border-black bg-[#c90000]"
              >
                <div
                  title="dot-light-red2"
                  className="relative left-[0.5px] top-[0.5px] h-[2px] w-[2px] rounded-full bg-[#fe98cb]"
                ></div>
              </div>
            </div>
            <div
              title="white-squares-container"
              className="flex items-center justify-center"
            >
              <div
                title="white-square"
                className="h-[25px] w-[25px] rounded-[5px] border-2 border-solid border-black bg-white shadow-[inset_-2px_-2px_gray]"
              />
              <div
                title="white-square2"
                className="h-[25px] w-[25px] rounded-[5px] border-2 border-solid border-black bg-white shadow-[inset_-2px_-2px_gray]"
              />
            </div>
          </div>
          <div title="center-right-container" className="grid">
            <div
              title="thin-buttons-container"
              className="flex justify-between"
            >
              <div
                title="thin-button"
                className="ml-[10px] h-[3px] w-[35px] border border-solid border-black bg-mainButtons"
              />
              <div
                title="thin-button"
                className="ml-[10px] h-[3px] w-[35px] border border-solid border-black bg-mainButtons"
              />
            </div>
            <div
              title="yellow-button"
              className="border-solid- ml-[7px] h-[25px] w-[25px] justify-self-end rounded-[50%] border-2 border-black bg-[#fecb65]"
            >
              <div
                title="big-dot-light-yellow"
                className="relative left-[5px] top-[3px] h-[7px] w-[7px] rounded-[50%] bg-[#fefecb]"
              />
            </div>
          </div>
        </div>
        <div
          title="bottom-screens-container"
          className="flex items-center justify-around"
        >
          <div
            title="type-screen"
            className="flex h-[25px] w-[64px] items-center justify-center break-words rounded-[4px] border-2 border-solid border-black bg-secondScreen pl-[4px] pr-[2px] text-left text-[6.5px] leading-4"
          >
            Terrestre
          </div>
          <div
            id="id-screen"
            className="flex h-[25px] w-[64px] items-center justify-center break-words rounded-[4px] border-2 border-solid border-black bg-secondScreen pl-[4px] pr-[2px] text-left text-[9px] leading-4"
          >
            #1
          </div>
        </div>
      </div>
    </div>
  )
}
