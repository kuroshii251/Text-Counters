import heroimage from "../../../assets/heroimage.png"

export default function Hero(){
    return (
        <>
        <div className="flex flex-col justify-center items-center lg:min-h-screen h-200">
            <div className="grid lg:grid-cols-2 lg:justify-center lg:place-items-center">
                <div className="flex flex-col space-y-5 lg:justify-start lg:items-start justify-center items-center ">
  <h1 className="font-bold text-5xl w-120 lg:text-start text-center text-white">Count Your Words in a Seconds</h1>
                <p className="mx-auto lg:w-140 w-100 lg:text-xl text-center lg:text-start font-semibold text-white ">Type or paste your text to get instant word, character, sentence and paragraph count </p>
                <a href="#tool-list" className="bg-zinc-800 p-4 text-white font-semibold w-50 rounded-md text-center">Get Started</a>
                </div>
              <div className="lg:mt-0 mt-5 lg:px-0 px-10">
                <img src={heroimage} className="w-100" alt="" />
              </div>
            </div>

        </div>
        </>
    )
}