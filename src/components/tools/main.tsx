export default function Tools(){
    return (
        <>
        <div className="flex flex-col justify-center items-center min-h-screen" id="tool-list">
            <div className="p-3">
            <h1 className="text-5xl font-bold mb-5 text-white">Tools</h1>
            </div>
   <div className="grid lg:grid-cols-3 p-4 space-x-5 space-y-5 gap-5 ">
            <div className="p-3 lg:w-auto w-100 mx-auto bg-zinc-900 rounded-xl ">
                <div className="h-50 justify-center flex items-center rounded-xl border-1-0 border-t-0  bg-zinc-700 border-b-white">
                <h1 className="text-center text-4xl font-bold text-white">Word Counter</h1>
             </div>
                <p className="text-white p-3 font-semibold text-center font-semibold">Count the word, character, sentence, and paragraph in a seconds  </p>
                <div className="flex justify-center items-center pt-12">
                <a href="/word-counter" className="mx-auto text-white bg-black p-4 rounded-xl w-30 text-center font-semibold">Start</a>

                </div>
            </div>

                <div className="p-3 lg:w-auto bg-zinc-900 w-100 mx-auto rounded-xl ">
                <div className="h-50 justify-center flex items-center rounded-xl border-1-0 border-t-0 bg-zinc-700 border-b-white">
                <h1 className="text-center text-2xl font-bold text-white">Social Media Counter</h1>

                </div>
                <p className="text-white p-3 text-center font-semibold">Check the character limits for the various social media, like instagram, x, facebook, pinterest, threads, and tiktok </p>
                <div className="flex justify-center items-center pt-6">
                <a href="/socialmedia-counter" className="mx-auto text-white bg-black p-4 rounded-xl w-30 text-center font-semibold">Start</a>

                </div>
            </div>

                <div className="p-3 lg:w-auto w-100 bg-zinc-900 h-100 mx-auto rounded-xl ">
                <div className="h-50 justify-center flex items-center rounded-xl border-1-0 border-t-0 bg-zinc-700 border-b-white">
                <h1 className="text-center text-2xl font-bold text-white">Games Counter</h1>

                </div>
                <p className="text-white p-3 font-semibold text-center mt-1">Check your the character limits on your username before use it</p>
                <div className="flex justify-center items-center object-fit pt-10">
                <a href="/game-counter" className="mx-auto text-white bg-black p-4 rounded-xl w-30 text-center font-semibold">Start</a>

                </div>
            </div>

        </div>
        </div>
     
        
        </>
    )
}