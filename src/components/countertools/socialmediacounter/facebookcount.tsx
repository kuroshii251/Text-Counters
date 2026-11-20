export default function FacebookCount({tabs, socialmedia}){
     const FacebookBio = socialmedia.length;
    const Facebooknickname = socialmedia.length ;
    const FacebookTitlePost = socialmedia.length;
    const FacebookCommentPost = socialmedia.length;
    const FacebookDescriptionPost = socialmedia.length;
    return (
        <>

             <div className={`${tabs === 5 ? "block": "hidden"} bg-white h-100 rounded-xl h-auto`}>
                            <div className="p-5">
<h1 className="font-bold text-center text-2xl">Facebook</h1>
                            </div>

<div className="flex justify-between">
  <div className="p-5">
                            <h1 className="font-semibold text-lg">Nickname</h1>
                        </div>
                        <div className="p-5">
                            <p className="font-semibold text-white bg-black p-2 text-sm w-15 text-center rounded-xl">{Math.min(Facebooknickname, 30)}/30</p>
                        </div>
</div>

<div className="flex justify-between">
  <div className="p-5">
                            <h1 className="font-semibold text-lg">Comments</h1>
                        </div>
                        <div className="p-5">
                            <p className="font-semibold text-white bg-black p-2 text-sm w-15 text-center rounded-xl">
                                {Math.min(FacebookCommentPost, 8000)}/8000</p>
                        </div>
</div>


<div className="flex justify-between">
  <div className="p-5">
                            <h1 className="font-semibold text-lg">Title</h1>
                        </div>
                        <div className="p-5">
                            <p className="font-semibold text-white bg-black p-2 text-sm text-sm w-15 text-center rounded-xl">{Math.min(FacebookTitlePost,200)}/200</p>
                        </div>
</div>

<div className="flex justify-between">
  <div className="p-5">
                            <h1 className="font-semibold text-lg">Description</h1>
                        </div>
                        <div className="p-5">
                            <p className="font-semibold text-white bg-black p-2 text-sm w-15 text-center rounded-xl">{Math.min(FacebookDescriptionPost, 63206)}/63206</p>
                        </div>
</div>


<div className="flex justify-between">
  <div className="p-5">
                            <h1 className="font-semibold text-lg">Bio</h1>
                        </div>
                        <div className="p-5">
                            <p className="font-semibold text-white bg-black p-2 text-sm text-sm w-15 text-center rounded-xl">{Math.min(FacebookBio,101)}/101</p>
                        </div>
</div>
                     
                    </div>
        </>
    )
}