export default function Navbars(){
    return (
        <>  
        <div className="grid grid-cols-2 items-center justify-between p-5">
            <div className="flex gap-5 justify-start items-start">
                <div className="">
                <h1 className="font-bold text-xl">Text Counter</h1>

                </div>
                  <div className="">
                <a href="/word-encounters" className="font-semibold text-lg">Word Counter</a>

                </div>
                <div className="/socialmediacounter">
                    <a href="/socialmediacounter" className="font-semibold text-lg">Social Media Counter</a>
                </div>
                <div className="">
                    <a href="/gamescounter" className="font-semibold text-lg">Games Counter</a>
                </div>
            </div>
                <div className="flex flex-col justify-end items-end">
                    <a href="/contact" className="font-semibold text-white hover:text-slate-100 w-30  text-center bg-black p-3 rounded-xl">Contact</a>
                </div>
        </div>
        
        </>
    )
}