export default function Tools(){
    return (
        <>
        <div className="flex flex-col justify-center items-center min-h-screen">
            <div className="p-3">
            <h1 className="text-5xl font-bold mb-5">Tools</h1>
            </div>
   <div className="grid grid-cols-3 p-4 space-x-5 space-y-5 ">
            <div className="p-3 w-auto bg-gray-800 rounded-xl ">
                <div className="h-50 justify-center flex items-center rounded-xl border-1 border-t-none  bg-white border-b-white">
                <h1 className="text-center text-2xl font-bold ">Word Counter</h1>
             </div>
                <p className="text-white p-3">Count the word, character, sentence, and paragraph in a seconds  </p>
                <div className="flex justify-center items-center">
                <a href="" className="mx-auto text-white bg-black p-4 rounded-xl w-30 text-center font-semibold">Start</a>

                </div>
            </div>

                <div className="p-3 w-auto bg-gray-800 rounded-xl ">
                <div className="h-50 justify-center flex items-center rounded-xl border-1 border-t-none  bg-white border-b-white">
                <h1 className="text-center text-2xl font-bold ">Social Media Counter</h1>

                </div>
                <p className="text-white p-3">Check the character limits for the various social media, like instagram, x, facebook, and tiktok </p>
                <div className="flex justify-center items-center">
                <a href="" className="mx-auto text-white bg-black p-4 rounded-xl w-30 text-center font-semibold">Start</a>

                </div>
            </div>

                <div className="p-3 w-auto bg-gray-800 rounded-xl ">
                <div className="h-50 justify-center flex items-center rounded-xl border-1 border-t-none  bg-white border-b-white">
                <h1 className="text-center text-2xl font-bold ">Games Counter</h1>

                </div>
                <p className="text-white p-3">Check your the character limits on your username before use it</p>
                <div className="flex justify-center items-center">
                <a href="" className="mx-auto text-white bg-black p-4 rounded-xl w-30 text-center font-semibold">Start</a>

                </div>
            </div>

        </div>
        </div>
     
        
        </>
    )
}