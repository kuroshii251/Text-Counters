import { useState } from "react"

export default function WordCounter(){
    const [texts, setTexts] = useState("");
    const word = texts.match(/\s+/g)?.length || 0;
    const AlphabetCounts = texts.match(/[a-zA-Z]/g)?.length || 0;
    const spaceCounts = texts.match(/\s/g)?.length || 0;
    const numberCounts = texts.match(/[0-9]/g)?.length || 0;
    const sentencesCounts = texts.match(/[^.?!]+[.?!]+/g)?.length || 0;
    const paragraphCounts = texts.match(/^(.+?)(\n\s*\n|$)/gm)?.length || 0;
    const characterCounts = texts.match(/./gs)?.length || 0;

    return (
        <>

        <div className="justify-center flex flex-col mx-auto min-h-screen bg-slate-200">
            <div className="flex justify-center pt-10 pb-15">
                <h1 className="font-extrabold text-5xl text-center">Word Counter</h1>
            </div>
            <div className="flex justify-center p-3 place-items-center pb-10 ">
                <div className="bg-white rounded-l-xl  w-120 ">
                    <textarea onChange={(e) => setTexts(e.target.value)} className="h-120 p-4 w-120 resize-none " placeholder="Input your text here..."/>
                </div>

                  <div className="h-120 bg-white p-4 border-l-2 border-gray-300 rounded-r-xl     w-120 scroll-smooth overflow-auto h-100 ">
                    <div className="p-3 space-y-4">
                        <div className="shadow shadow-black p-4 rounded-xl flex justify-between items-center">
                            <div className="">
                            <h1>Character</h1>
                            </div>

                            <div className="bg-black p-2 rounded-full w-10 h-10">
                            <h1 className="text-white text-center font-semibold">{characterCounts}</h1>

                            </div>

                        </div>


   <div className="shadow shadow-black p-4 rounded-xl flex justify-between items-center">
                            <div className="">
                            <h1>Word</h1>
                            </div>

                            <div className="bg-black p-2 rounded-full w-10 h-10">
                            <h1 className="text-white text-center font-semibold">{word}</h1>

                            </div>

                        </div>
                         <div className="shadow shadow-black p-4 rounded-xl flex justify-between items-center">
                            <div className="">
                            <h1>Alphabet</h1>

                            </div>

                            <div className="bg-black p-2 rounded-full w-10 h-10">
                            <h1 className="text-white font-semibold text-center">{AlphabetCounts}</h1>

                            </div>

                        </div>

                           <div className="shadow shadow-black p-4 rounded-xl flex justify-between items-center">
                            <div className="">
                            <h1>Number</h1>

                            </div>

                            <div className="bg-black p-2 rounded-full w-10 h-10">
                            <h1 className="text-white font-semibold text-center">{numberCounts}</h1>

                            </div>

                        </div>

                         <div className="shadow shadow-black p-4 rounded-xl flex justify-between items-center">
                            <div className="">
                            <h1>Sentences</h1>

                            </div>

                            <div className="bg-black p-2 rounded-full w-10 h-10">
                            <h1 className="text-white font-semibold text-center">{sentencesCounts}</h1>

                            </div>

                        </div>

                           <div className="shadow shadow-black p-4 rounded-xl flex justify-between items-center">
                            <div className="">
                            <h1 className="font-semibold">Paragraph</h1>
                            </div>

                            <div className="bg-black p-2 rounded-full w-10 h-10">
                            <h1 className="text-white font-semibold text-center">{paragraphCounts}</h1>

                            </div>

                        </div>

                         <div className="shadow shadow-black p-4 rounded-xl flex justify-between items-center">
                            <div className="">
                            <h1>Space</h1>

                            </div>

                            <div className="bg-black p-2 rounded-full w-10 h-10">
                            <h1 className="text-white font-semibold text-center">{spaceCounts}</h1>

                            </div>

                        </div>

                    </div>
                    
                </div>

            </div>



        </div>
        
        </>
    )
}