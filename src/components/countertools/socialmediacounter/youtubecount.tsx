export default function Youtube({tabs, socialmedia}){
    const YoutubePostTitle = socialmedia.length;
    const YoutubePostDesription = socialmedia.length;
    const YoutubeComments = socialmedia.length ;
    const YoutubeChannelDescription = socialmedia.length;
    return (
        <>

        <div className={`${tabs === 6 ? "block": "hidden"} bg-white h-100 rounded-xl h-auto`}>
                            <div className="p-5">
<h1 className="font-bold text-center text-2xl">Youtube</h1>
                            </div>

<div className="flex justify-between">
  <div className="p-5">
                            <h1 className="font-semibold text-lg">Title Post</h1>
                        </div>
                        <div className="p-5">
                            <p className="font-semibold text-white bg-black p-2 text-sm w-15 text-center rounded-xl">{Math.min(YoutubePostTitle, 100)}/100</p>
                        </div>
</div>

<div className="flex justify-between">
  <div className="p-5">
                            <h1 className="font-semibold text-lg">Description Post</h1>
                        </div>
                        <div className="p-5">
                            <p className="font-semibold text-white bg-black p-2 text-sm w-15 text-center rounded-xl">{Math.min(YoutubePostDesription, 5000)}/5000</p>
                        </div>
</div>

<div className="flex justify-between">
  <div className="p-5">
                            <h1 className="font-semibold text-lg">Comments</h1>
                        </div>
                        <div className="p-5">
                            <p className="font-semibold text-white bg-black p-2 text-sm w-15 text-center rounded-xl">{Math.min(YoutubeComments, 30)}/30</p>
                        </div>
</div>


<div className="flex justify-between">
  <div className="p-5">
                            <h1 className="font-semibold text-lg">Channel Bio</h1>
                        </div>
                        <div className="p-5">
                            <p className="font-semibold text-white bg-black p-2 text-sm w-15 text-center rounded-xl">{Math.min(YoutubeChannelDescription, 1000)}/1000</p>
                        </div>
</div>


                     
                    </div>
        </>
    )
}