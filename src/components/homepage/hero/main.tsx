import heroimage from "../../../assets/heroimage.png"

export default function Hero(){
    return (
        <>
        
        <div className="flex flex-col justify-center items-center min-h-screen">
            <div className="grid grid-cols-2 justify-center place-items-center">
                <div className="flex flex-col space-y-5">
  <h1 className="font-bold text-5xl w-120 text-start">Count Your Words in a Seconds</h1>
                <p className="mx-auto w-130 text-xl font-semibold ">Type or paste your text to get instant word, character, sentence and paragraph count </p>
                <a href="" className="bg-gray-800 p-4 text-white font-semibold w-50 rounded-md text-center">Get Started</a>
                </div>
              <div className="">
                <img src={heroimage} className="w-100" alt="" />
              

              </div>

            </div>

        </div>
        </>
    )
}