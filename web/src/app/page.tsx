export default function Home() {
  return (
    <div title="pokedex" className="h-[342px] w-[456px] flex rounded-xl">
      <div
        title="left-panel"
        className="bg-mainBackground box-border h-full w-1/2 rounded-tl-xl rounded-bl-xl rounded-tr-lg grid grid-rows-[23%_50%_27%] border-[3px] border-solid border-black"
      >
        <div title="left-top-container" className="block m-0 p-0">
          <svg className="h-[100] w-[225] absolute">
            <polyline
              className="fill-none stroke-black stroke-[3px]"
              points="0,75 70,75 90,38 224,38"
            />
          </svg>
          <div
            title="lights-container"
            className="relative flex justify-start items-center"
          >
            <div
              title="big-light-border"
              className="flex justify-center items-center ml-[5px] h-[60px] w-[60px] border-2 border-solid border-black rounded-full bg-white"
            >
              <div
                title="big-light-blue"
                className="h-[50px] w-[50px] border-2 border-black rounded-full bg-[#3298cb]"
              >
                <div
                  title="big-dot"
                  className="h-[15px] w-[15px] relative top-[7px] left-[10px] rounded-full bg-[#85bdfe]"
                />
              </div>
            </div>
            <div
              title="small-lights-container"
              className="ml-[24px] mt-[10px] w-[70px] h-full flex self-start justify-around"
            >
              <div
                title="small-light-red"
                className="border-2 border-black bg-[#c90000] w-5 h-5 rounded-full"
              >
                <div
                  title="dot-light-red"
                  className="h-[5px] w-[5px] relative bg-[#fe98cb] top-[3px] left-[3px] rounded-full"
                />
              </div>
              <div
                title="small-light-yellow"
                className="border-2 border-black bg-[#fecb65] w-5 h-5 rounded-full"
              >
                <div
                  title="dot-light-yellow"
                  className="h-[5px] w-[5px] relative bg-[#fefecb] top-[3px] left-[3px] rounded-full"
                />
              </div>
              <div
                title="small-light-green"
                className="border-2 border-black bg-[#32cb65] w-5 h-5 rounded-full"
              >
                <div
                  title="dot-light-green"
                  className="h-[5px] w-[5px] relative bg-[#98fe00] top-[3px] left-[3px] rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          title="screen-container"
          className="flex justify-center items-center"
        >
          <div
            title="screen"
            className="w-[150px] h-[150px] grid grid-rows-[10%_72%_18%] border-solid border-2 border-black bg-white rounded-bl-[17%]"
          >
            <div
              title="top-screen-lights"
              className="w-[50%] mt-[2px] flex justify-center justify-self-center items-center"
            >
              <div
                title="mini-light-red-1"
                className="border-solid border-black border w-[7px] h-[7px] bg-[#c90000] rounded-[50%] mr-[7px]"
              />
              <div
                title="mini-light-red-2"
                className="border-solid border-black border w-[7px] h-[7px] bg-[#c90000] rounded-[50%] mr-[7px]"
              />
            </div>
            <div
              title="main-screen"
              className="h-full w-[80%] justify-self-center bg-[url('https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png')] bg-mainScreen rounded-[5%] border-solid border-2 border-black bg-no-repeat bg-center bg-contain"
            />
            <div
              title="bottom-screen-lights"
              className="flex mt-[3px] w-[75%] justify-self-center justify-between items-center"
            >
              <div
                title="small-light-red"
                className="border-2 border-solid border-black bg-[#c90000] w-[16px]  h-[16px] rounded-full"
              >
                <div
                  title="dot-light-red-small"
                  className="h-[5px] w-[5px] relative bg-[#fe98cb] top-[1px] left-[1px] rounded-full"
                />
              </div>
              <div title="burger" className="block m-0 p-0">
                <div
                  title="line1"
                  className="w-[18px] h-[2px] bg-black mt-[2px]"
                />
                <div
                  title="line2"
                  className="w-[18px] h-[2px] bg-black mt-[2px]"
                />
                <div
                  title="line3"
                  className="w-[18px] h-[2px] bg-black mt-[2px]"
                />
                <div
                  title="line4"
                  className="w-[18px] h-[2px] bg-black mt-[2px]"
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
              className="w-[25px] h-[25px] rounded-[50%] border-2 border-solid border-black bg-mainButtons ml-[7px]"
            />
            <div
              title="long-buttons-container"
              className="flex w-[100px] justify-around ml-[7px]"
            >
              <div
                title="long-button-red"
                className="w-[35px] h-[5px] bg-[#c90000] rounded-xl border-[1.5px] border-solid border-black"
              />
              <div
                title="long-button-red"
                className="w-[35px] h-[5px] bg-[#3298cb] rounded-xl border-[1.5px] border-solid border-black"
              />
            </div>
          </div>
          <div
            title="nav-buttons-container"
            className="grid grid-cols-[27%_35%_38%]"
          >
            <div
              title="dots-container"
              className="h-full w-[50%] flex justify-self-center justify-between font-serif text-xl text-black"
            >
              <div>.</div>
              <div>.</div>
            </div>
            <div
              title="green-screen"
              className="w-[80px] h-[30px] rounded-[5px] border-2 border-solid border-black bg-[#3ab47d] flex justify-center items-center"
            >
              <span
                title="name-screen"
                className="w-full text-center text-[8px] break-words"
              >
                Bulbasaur
              </span>
            </div>
            <div
              title="right-nav-container"
              className="relative top-[-30px] flex flex-col justify-center items-center"
            >
              <div
                title="nav-button"
                className="h-[52px] w-[52px] flex justify-center items-center"
              >
                <div
                  title="nav-center-circle"
                  className="h-[7px] w-[7px] rounded-full border border-solid z-[+2] border-black"
                />
                <div
                  title="nav-button-vertical"
                  className="absolute bg-mainButtons rounded-[5px] h-[16px] w-[52px] border-2 border-solid border-black"
                ></div>
                <div
                  title="nav-button-vertical"
                  className="absolute bg-mainButtons rotate-90 rounded-[5px] h-[16px] w-[52px] border-2 border-solid border-black"
                >
                  <div
                    title="border-top"
                    className="border-t-[3.5px] border-solid border-mainButtons absolute top-[-3px] left-[18px] right-[18px]"
                  ></div>
                  <div
                    title="border-bottom"
                    className="border-t-[3.5px] border-solid border-mainButtons absolute top-[11px] left-[18px] right-[18px]"
                  />
                </div>
              </div>
              <div
                title="bottom-right-nav-container"
                className="flex justify-center items-center text-center"
              >
                <div
                  title="small-light-red-2"
                  className="border border-solid border-black bg-[#c90000] w-[12px] h-[12px] rounded-full"
                >
                  <div
                    title="dot-light-red-2"
                    className="h-[3px] w-[3px] relative bg-[#fe98cb] top-[1.5px] left-[1.5px] rounded-full"
                  ></div>
                </div>
                <div
                  title="dots-container-2"
                  className="h-full w-[50%] flex justify-self-center justify-between font-serif text-xl text-black"
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
    </div>
  )
}
