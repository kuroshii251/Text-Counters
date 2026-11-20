export default function Tiktok({tabs, socialmedia}){
    const TiktokDisplayName = socialmedia.length;
    const TiktokUsername = socialmedia.length ;
    const TiktokBio = socialmedia.length;
    const TiktokComments = socialmedia.length;
    const TiktokTitlePost = socialmedia.length;
    const TiktokDescriptionPost = socialmedia.length;
    return (
        <>
             <div className={`${tabs === 3 ? "block": "hidden"} bg-white h-100 rounded-xl h-auto`}>
                            <div className="p-5">
<h1 className="font-bold text-center text-2xl">Tiktok</h1>
                            </div>

<div className="flex justify-between">
  <div className="p-5">
                            <h1 className="font-semibold text-lg">Display Name</h1>
                        </div>
                        <div className="p-5">
                            <p className="font-semibold text-white bg-black p-2 text-sm w-15 text-center rounded-xl">{Math.min(TiktokDisplayName, 30)}/30</p>
                        </div>
</div>

<div className="flex justify-between">
  <div className="p-5">
                            <h1 className="font-semibold text-lg">Username</h1>
                        </div>
                        <div className="p-5">
                            <p className="font-semibold text-white bg-black p-2 text-sm w-15 text-center rounded-xl">{Math.min(TiktokUsername, 24)}/24</p>
                        </div>
</div>

<div className="flex justify-between">
  <div className="p-5">
                            <h1 className="font-semibold text-lg">Bio</h1>
                        </div>
                        <div className="p-5">
                            <p className="font-semibold text-white bg-black p-2 text-sm w-15 text-center rounded-xl">{Math.min(TiktokBio, 160)}/160</p>
                        </div>
</div>


<div className="flex justify-between">
  <div className="p-5">
                            <h1 className="font-semibold text-lg">Comments</h1>
                        </div>
                        <div className="p-5">
                            <p className="font-semibold text-white bg-black p-2 text-sm w-15 text-center rounded-xl">{Math.min(TiktokComments, 150)}/150</p>
                        </div>
</div>


<div className="flex justify-between">
  <div className="p-5">
                            <h1 className="font-semibold text-lg">Title Post</h1>
                        </div>
                        <div className="p-5">
                            <p className="font-semibold text-white bg-black p-2 text-sm w-15 text-center rounded-xl">{Math.min(TiktokTitlePost, 90)}/90</p>
                        </div>
</div>



<div className="flex justify-between">
  <div className="p-5">
                            <h1 className="font-semibold text-lg">Description Post</h1>
                        </div>
                        <div className="p-5">
                            <p className="font-semibold text-white bg-black p-2 text-sm w-15 text-center rounded-xl">{Math.min(TiktokDescriptionPost, 4000)}/4000</p>
                        </div>
</div>



                     
                    </div>
        </>
    )
}