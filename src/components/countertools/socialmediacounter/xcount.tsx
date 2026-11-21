export default function XCount({tabs, socialmedia}){
       const XComments = socialmedia.length;
    const XUsername = socialmedia.length ;
    const XDisplayName = socialmedia.length ;
        const XBio = socialmedia.length;
        const   XCaption = socialmedia.length;

    return (
        <>

       <div className={`${tabs === 2 ? "block": "hidden"} bg-zinc-950 border-2 border-gray-500 h-100 rounded-xl h-auto`}>
                            <div className="p-5">
<h1 className="font-bold text-center text-white text-2xl">X</h1>
                            </div>

                            
<div className="flex justify-between">
  <div className="p-5">
                            <h1 className="font-semibold text-lg text-white">Username</h1>
                        </div>
                        <div className="p-5">
                            <p className="font-semibold text-white bg-black p-2 text-sm w-15 text-center rounded-xl">{Math.min(XUsername, 15)}/15</p>
                        </div>
</div>


                            
<div className="flex justify-between">
  <div className="p-5">
                            <h1 className="font-semibold text-lg text-white">Display Name</h1>
                        </div>
                        <div className="p-5">
                            <p className="font-semibold text-white bg-black p-2 text-sm w-15 text-center rounded-xl">{Math.min(XDisplayName, 50)}/50</p>
                        </div>
</div>



<div className="flex justify-between">
  <div className="p-5">
                            <h1 className="font-semibold text-lg text-white">Caption</h1>
                        </div>
                        <div className="p-5">
                            <p className="font-semibold text-white bg-black p-2 text-sm w-15 text-center rounded-xl">{Math.min(XCaption, 4000)}/4000</p>
                        </div>
</div>


                            <div className="flex justify-between">
  <div className="p-5">
                            <h1 className="font-semibold text-lg text-white">Comments</h1>
                        </div>
                        <div className="p-5">
                            <p className="font-semibold text-white bg-black p-2 text-sm w-15 text-center rounded-xl">
                                {Math.min(XComments, 280)}/280</p>
                        </div>
</div>


<div className="flex justify-between">
  <div className="p-5">
                            <h1 className="font-semibold text-lg text-white">Bio</h1>
                        </div>
                        <div className="p-5">
                            <p className="font-semibold text-white bg-black p-2 text-sm text-sm w-15 text-center rounded-xl">{Math.min(XBio,160)}/160</p>
                        </div>
</div>
                     
                    </div>
        </>
    )
}