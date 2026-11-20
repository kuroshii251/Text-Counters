export default function Threads({tabs, socialmedia}){
    const ThreadsCaption = socialmedia.length;
    const ThreadsName = socialmedia.length;
    const ThreadsUsername = socialmedia.length;
    const ThreadsComment = socialmedia.length;
    const ThreadsBio = socialmedia.length;
    return (
        <>

             <div className={`${tabs === 4 ? "block": "hidden"} bg-white h-100 rounded-xl h-auto`}>
                            <div className="p-5">
<h1 className="font-bold text-center text-2xl">Threads</h1>
                            </div>

<div className="flex justify-between">
  <div className="p-5">
                            <h1 className="font-semibold text-lg">Username</h1>
                        </div>
                        <div className="p-5">
                            <p className="font-semibold text-white bg-black p-2 text-sm w-15 text-center rounded-xl">{Math.min(ThreadsUsername, 30)}/30</p>
                        </div>
</div>

<div className="flex justify-between">
  <div className="p-5">
                            <h1 className="font-semibold text-lg">Name</h1>
                        </div>
                        <div className="p-5">
                            <p className="font-semibold text-white bg-black p-2 text-sm text-sm w-15 text-center rounded-xl">{Math.min(ThreadsName,160)}/160</p>
                        </div>
</div>

<div className="flex justify-between">
  <div className="p-5">
                            <h1 className="font-semibold text-lg">Comments</h1>
                        </div>
                        <div className="p-5">
                            <p className="font-semibold text-white bg-black p-2 text-sm w-15 text-center rounded-xl">
                                {Math.min(ThreadsComment, 500)}/500</p>
                        </div>
</div>

<div className="flex justify-between">
  <div className="p-5">
                            <h1 className="font-semibold text-lg">Bio</h1>
                        </div>
                        <div className="p-5">
                            <p className="font-semibold text-white bg-black p-2 text-sm text-sm w-15 text-center rounded-xl">{Math.min(ThreadsBio,160)}/160</p>
                        </div>
</div>


<div className="flex justify-between">
  <div className="p-5">
                            <h1 className="font-semibold text-lg">Caption</h1>
                        </div>
                        <div className="p-5">
                            <p className="font-semibold text-white bg-black p-2 text-sm text-sm w-15 text-center rounded-xl">{Math.min(ThreadsCaption,100)}/100</p>
                        </div>
</div>


                     
                    </div>
        </>
    )
}