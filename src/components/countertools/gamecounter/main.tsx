import { useState } from "react"

export default function GameCounters(){
    const [usernames, setUsername] = useState("");
    const pubgMobileCount = usernames.length;
    const FortniteCount = usernames.length;
    const MobileLegendsCount = usernames.length;
    const RobloxCount = usernames.length;
    const CallOfDutyCount = usernames.length;
    const FreeFire = usernames.length;
    const ValorantCount = usernames.length;
    const PointBlankCount = usernames.length;

    return (
        <>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-7">
            <div className="">
                <h1 className="font-extrabold text-center text-4xl text-white">Games Counter</h1>
            </div>
            <div className="space-y-3  lg:grid grid-cols-2 gap-4">
                <div className="bg-white h-120 w-120 rounded-xl">
                    <textarea onChange={(e) => setUsername(e.target.value)} className="resize-none bg-zinc-950 border-2 border-gray-700 text-white p-5 h-120 rounded-xl w-120" placeholder="Type or paste your text here..."/>
                </div>

                <div className="bg-zinc-950 border-2 border-gray-700 p-5 lg:mb-0 mb-10 w-120 h-120 rounded-xl  ">
                    <div className="space-y-5 justify-center items-center pt-3 p-5">
                            <div className=" gap-4 flex justify-between items-center">
                            <div className="justify-between flex">
 <a href="" className="font-semibold text-white">Mobile Legends</a>

                            </div>
<div className="bg-black w-15 p-1 text-center rounded-xl">

                            <h1 className="text-white font-semibold">{Math.min(MobileLegendsCount, 12)}/12</h1>
                            </div>  
                        </div>
                           <div className=" gap-4 flex justify-between items-center">
                            <div className="justify-between flex">
 <a href="" className="font-semibold text-white">Pubg Mobile</a>

                            </div>
<div className="bg-black w-15 p-1 text-center rounded-xl">

                            <h1 className="text-white font-semibold">{Math.min(pubgMobileCount, 14)}/14</h1>
                            </div>  
                        </div>
                            <div className=" gap-4 flex justify-between items-center">
                            <div className="justify-between flex">
 <a href="" className="font-semibold text-white">Fortnite</a>

                            </div>
<div className="bg-black w-15 p-1 text-center rounded-xl">

                            <h1 className="text-white font-semibold">{Math.min(FortniteCount, 16)}/16</h1>
                            </div>  
                        </div>
                             <div className=" gap-4 flex justify-between items-center">
                            <div className="justify-between flex">
 <a href="" className="font-semibold text-white">Roblox</a>

                            </div>
<div className="bg-black w-15 p-1 text-center rounded-xl">

                            <h1 className="text-white font-semibold">{Math.min(RobloxCount, 20)}/20</h1>
                            </div>  
                        </div>

                          <div className=" gap-4 flex justify-between items-center">
                            <div className="justify-between flex">
 <a href="" className="font-semibold text-white">Valorant</a>

                            </div>
<div className="bg-black w-15 p-1 text-center rounded-xl">

                            <h1 className="text-white font-semibold">{Math.min(ValorantCount, 16)}/16</h1>
                            </div>  
                        </div>

                            <div className=" gap-4 flex justify-between items-center">
                            <div className="justify-between flex">
 <a href="" className="font-semibold text-white">Free Fire</a>

                            </div>
<div className="bg-black w-15 p-1 text-center rounded-xl">

                            <h1 className="text-white font-semibold">{Math.min(FreeFire, 12)}/12</h1>
                            </div>  
                        </div>
                        
                             <div className=" gap-4 flex justify-between items-center">
                            <div className="justify-between flex">
 <a href="" className="font-semibold text-white">Call Of Duty</a>

                            </div>
<div className="bg-black w-15 p-1 text-center rounded-xl">

                            <h1 className="text-white font-semibold">{Math.min(CallOfDutyCount, 14)}/14</h1>
                            </div>  
                        </div>
                        
                               <div className=" gap-4 flex justify-between items-center">
                            <div className="justify-between flex">
 <a href="" className="font-semibold text-white">Point Blank</a>

                            </div>
<div className="bg-black w-15 p-1 text-center rounded-xl">

                            <h1 className="text-white font-semibold">{Math.min(PointBlankCount, 16)}/16</h1>
                            </div>  
                        </div>
                    </div>

                </div>

            </div>


        </div>
        
        </>
    )
}