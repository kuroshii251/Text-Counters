export default function Footer(){
    return (
        <>
<div className="bg-zinc-950 p-5">
     <div className="grid lg:grid-cols-2  md:grid-cols-2 gap-5">
            <div className="justify-start text-start flex flex-col space-y-5 p-5">
                <a href="/" className="text-3xl text-white font-bold">Text Counter</a>
                <p className="font-semibold text-white lg:w-100">Text counter is the website where you can find out the number of words you have typed into the input field</p>
            </div>

      <div className="space-y-5 p-5">
        <div className="">
            <h1 className="font-semibold text-white text-xl">Menu</h1>
        </div>
                <div className="">
                <a href="/word-counter" className="font-semibold text-white">Word Counter</a>
                </div>
                <div className="">
                <a href="/socialmedia-counter" className="font-semibold text-white">Social Media Counter</a>
                </div>
                <div className="">
                <a href="/game-counter" className="font-semibold text-white">Games Counter</a>
                </div>
                <div className="">
                <a href="/contact" className="font-semibold text-white">Contact</a>
                </div>
</div>
        </div>
        <div className="p-4 mt-5 border border-t-gray-300 border-l-0 border-b-0 border-r-0">
            <h1 className="text-white font-semibold text-md">Copyright @2026 by Kuro</h1>
        </div>
</div>
   
        </>
    )
}