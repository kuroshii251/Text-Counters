import { useState } from "react"

export default function Navbars(){
    const [navbarhamburger,setNavbarHamburger] = useState(false);
    return (
        <>   
            <div className="flex lg:flex-grow flex-wrap gap-5   items-center p-5">
                <div className="">
                <a href="/" className="font-bold text-2xl text-white">Text Counter</a>
                </div>                                
<div className="flex flex-col justify-end items-end lg:hidden ml-auto  ">
    <button onClick={() => setNavbarHamburger(!navbarhamburger)}>
        <i className="fa-solid fa-bars cursor-pointer text-white text-2xl"></i>
    </button>
</div>
                
                <div className={`${navbarhamburger ? "flex flex-col" : "hidden"} w-full lg:flex-1 lg:items-center   lg:flex-row lg:flex gap-3`}>
 <div className="">
                <a href="/word-counter" className="font-semibold text-white text-lg">Word Counter</a>
                </div>

                <div className="flex">
                    <a href="/socialmedia-counter" className="font-semibold text-white text-lg">Social Media Counter</a>
                </div>

                <div className="">
                    <a href="/game-counter" className="font-semibold text-white text-lg">Games Counter</a>
                </div>
                
    <div className="flex flex-col lg:ml-auto">
                    <a href="/contact" className="font-semibold text-white hover:text-slate-100 w-30  text-center bg-zinc-900 p-3 rounded-xl">Contact</a>
                </div>
                </div>
                 
            </div>

                </>
    )
}