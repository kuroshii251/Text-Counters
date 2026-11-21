import { useState } from "react"
import InstagramCount from "./instagramcount";
import FacebookCount from "./facebookcount";
import XCount from "./xcount";
import Threads from "./threadscount";
import Youtube from "./youtubecount";
import Tiktok from "./tiktokcount";

export default function SocialMediaCounter(){

    const [socialmedia, setSocialMedia] = useState("");
    const [tabs,setTabs] = useState(0);

    const usernameCount = socialmedia.length;
    const altTextCount = socialmedia.length;
    const postTitleCount = socialmedia.length;
    const bioCount = socialmedia.length;
    const commentsCount = socialmedia.length;
    const postDescriptionCount = socialmedia.length;


    const handleTabs = (id) => {
        setTabs(id);
    }


    return (
        <>
        <div className="flex flex-col justify-center  items-center min-h-screen p-3">
            <div className="p-3">

                <h1 className="font-extrabold text-4xl text-center text-white">Social Media Counter</h1>
            </div>
            <div className="">
                <div className="col space-y-7">
                    <div className=" w-120 h-40 rounded-xl p-4">
                        <div className="flex flex-wrap gap-5 justify-center">
                      <button onClick={() => handleTabs(0)} className="font-semibold cursor-pointer bg-zinc-900 rounded-xl text-white p-3">Pinterest</button>
                 <button onClick={() => handleTabs(1)} className="font-semibold cursor-pointer bg-zinc-900 rounded-xl text-white p-3">Instagram</button>
                            <button onClick={() => handleTabs(2)} className="font-semibold bg-zinc-900 rounded-xl cursor-pointer    text-white p-3 w-20">X</button>
                            <button onClick={() => handleTabs(3)} className="font-semibold bg-zinc-900 rounded-xl cursor-pointer text-white p-3">TikTok</button>
                            <button onClick={() => handleTabs(4)} className="font-semibold bg-zinc-900 rounded-xl cursor-pointer text-white p-3">Threads</button>
                             <button onClick={() => handleTabs(5)} className="font-semibold bg-zinc-900 rounded-xl cursor-pointer text-white p-3">Facebook</button>
                            <button onClick={() => handleTabs(6)} className="font-semibold bg-zinc-900 rounded-xl  cursor-pointer text-white p-3">Youtube</button>

                        </div>

                    </div>

                    <div className="h-auto bg-white w-120 rounded-xl ">
                        <textarea name="" onChange={(e) => setSocialMedia(e.target.value)} className="resize-none h-100 bg-zinc-950 rounded-xl w-120 p-5 bg-black text-white border-2 border-gray-500" id="" placeholder="Type or paste your text here..."></textarea>

                    </div>

                    <div className={`${tabs === 0 ? "block": "hidden"} bg-zinc-950  border-2 border-gray-500 h-100 rounded-xl h-auto`}>
                            <div className="p-5">
<h1 className="font-bold text-center text-2xl text-white">Pinterest</h1>
                            </div>

<div className="flex justify-between">
  <div className="p-5">
                            <h1 className="font-semibold text-lg text-white">Username</h1>
                        </div>
                        <div className="p-5">
                            <p className="font-semibold text-white bg-black p-2 text-sm w-15 text-center rounded-xl">{Math.min(usernameCount, 30)}/30</p>
                        </div>
</div>
<div className="flex justify-between">
  <div className="p-5">
                            <h1 className="font-semibold text-white text-lg">Alt Text</h1>
                        </div>
                        <div className="p-5">
                            <p className="font-semibold text-white bg-black p-2 text-sm w-15 text-center rounded-xl">{Math.min(altTextCount,500)}/500</p>
                        </div>
</div>
<div className="flex justify-between">
  <div className="p-5">
                            <h1 className="font-semibold text-white text-lg">Comments</h1>
                        </div>
                        <div className="p-5">
                            <p className="font-semibold text-white bg-black p-2 text-sm w-15 text-center rounded-xl">
                                {Math.min(commentsCount, 500)}/500</p>
                        </div>
</div>

<div className="flex justify-between">
  <div className="p-5">
                            <h1 className="font-semibold text-white text-lg">Post Description</h1>
                        </div>
                        <div className="p-5">
                            <p className="font-semibold text-white bg-black p-2 text-sm w-15 text-center rounded-xl">{Math.min(postDescriptionCount, 500)}/500</p>
                        </div>
</div>

<div className="flex justify-between">
  <div className="p-5">
                            <h1 className="font-semibold  text-white text-lg">Post Title</h1>
                        </div>
                        <div className="p-5">
                            <p className="font-semibold text-white bg-black p-2 text-sm text-sm w-15 text-center rounded-xl">{Math.min(postTitleCount,100)}/100</p>
                        </div>
</div>

<div className="flex justify-between">
  <div className="p-5">
                            <h1 className="font-semibold text-white text-lg">Bio</h1>
                        </div>
                        <div className="p-5">
                            <p className="font-semibold text-white bg-black p-2 text-sm text-sm w-15 text-center rounded-xl">{Math.min(bioCount,160)}/160</p>
                        </div>
</div>
                     
                    </div>

                <InstagramCount tabs={tabs} socialmedia={socialmedia}/>
  <FacebookCount tabs={tabs} socialmedia={socialmedia}/>


                <XCount tabs={tabs} socialmedia={socialmedia}/>

                <Threads tabs={tabs} socialmedia={socialmedia}/>

                <Youtube tabs={tabs} socialmedia={socialmedia}/>

                <Tiktok tabs={tabs} socialmedia={socialmedia}/>

                      
                    </div>
                
            </div>

        </div>
        
        </>
    )
}