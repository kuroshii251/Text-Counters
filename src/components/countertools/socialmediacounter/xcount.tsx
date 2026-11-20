export default function XCount({tabs, socialmedia}){
       const XComments = socialmedia.length;
    const XUsername = socialmedia.length ;
    const XDisplayName = socialmedia.length ;

    const XTitlePost = socialmedia.length;
    const XDescriptionPost = socialmedia.length;
        const XBio = socialmedia.length;

    return (
        <>

             <div className={`${tabs === 2 ? "block": "hidden"} bg-white h-100 rounded-xl h-auto`}>
                            <div className="p-5">
<h1 className="font-bold text-center text-2xl">X</h1>
                            </div>

                            
<div className="flex justify-between">
  <div className="p-5">
                            <h1 className="font-semibold text-lg">Username</h1>
                        </div>
                        <div className="p-5">
                            <p className="font-semibold text-white bg-black p-2 text-sm w-15 text-center rounded-xl">{Math.min(XUsername, 15)}/15</p>
                        </div>
</div>


                            
<div className="flex justify-between">
  <div className="p-5">
                            <h1 className="font-semibold text-lg">Display Name</h1>
                        </div>
                        <div className="p-5">
                            <p className="font-semibold text-white bg-black p-2 text-sm w-15 text-center rounded-xl">{Math.min(XDisplayName, 50)}/50</p>
                        </div>
</div>



<div className="flex justify-between">
  <div className="p-5">
                            <h1 className="font-semibold text-lg">Description</h1>
                        </div>
                        <div className="p-5">
                            <p className="font-semibold text-white bg-black p-2 text-sm w-15 text-center rounded-xl">{Math.min(XDescriptionPost, 500)}/500</p>
                        </div>
</div>



<div className="flex justify-between">
  <div className="p-5">
                            <h1 className="font-semibold text-lg">Post Title</h1>
                        </div>
                        <div className="p-5">
                            <p className="font-semibold text-white bg-black p-2 text-sm text-sm w-15 text-center rounded-xl">{XTitlePost}</p>
                        </div>
</div>

                            <div className="flex justify-between">
  <div className="p-5">
                            <h1 className="font-semibold text-lg">Comments</h1>
                        </div>
                        <div className="p-5">
                            <p className="font-semibold text-white bg-black p-2 text-sm w-15 text-center rounded-xl">
                                {Math.min(XComments, 280)}/280</p>
                        </div>
</div>


<div className="flex justify-between">
  <div className="p-5">
                            <h1 className="font-semibold text-lg">Bio</h1>
                        </div>
                        <div className="p-5">
                            <p className="font-semibold text-white bg-black p-2 text-sm text-sm w-15 text-center rounded-xl">{Math.min(XBio,160)}/160</p>
                        </div>
</div>
                     
                    </div>
        </>
    )
}