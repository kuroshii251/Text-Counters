export default function Footer(){
    return (
        <>
<div className="bg-gray-900 p-5">
     <div className="grid grid-cols-2 gap-5">
            <div className="justify-start text-start flex flex-col space-y-5 p-5">
                <h1 className="text-3xl text-white font-bold">Text Counter</h1>
                <p className="font-semibold text-white w-100 q q">Text counter is the website where you can find out the number of words you have typed into the input field</p>
            </div>

      <div className="space-y-5">
                <div className="">
                <a href="/" className="font-semibold text-white">Home</a>
                </div>
                <div className="">
                <a href="/wordcounter" className="font-semibold text-white">Word Counter</a>
                </div>
                <div className="">
                <a href="/socialmediacounter" className="font-semibold text-white">Social Media Counter</a>
                </div>
                <div className="">
                <a href="/gamescounter" className="font-semibold text-white">Games Counter</a>
                </div>
                <div className="">
                <a href="/contact" className="font-semibold text-white">Contact</a>
                </div>
</div>
        </div>
        <div className="p-4 mt-5">
            <h1 className="text-white font-semibold text-md">Copyright @2026 by Kuro</h1>
        </div>
</div>
   
        </>
    )
}