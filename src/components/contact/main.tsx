export default function Contact(){
    return (
        <>

        <div className="flex flex-col items-center justify-center min-h-screen  ">
            <div className="">
                <h1 className="font-extrabold text-4xl text-center mb-10 mt-10 text-white">Contact Us</h1>
            </div>
            <div className="bg-zinc-900 p-5 rounded-lg mb-5 ">
                <form action="https://formspree.io/f/xwlonobp" method="POST" className="space-y-3 p-3  ">
                    <div className="flex gap-3">
    <div className="">
                        <p className="font-semibold mb-2 text-white  text-sm">Name</p>
                    <input type="text" name="name" className="w-50 rounded-sm p-3 bg-zinc-900 border text-white border-gray-600 rounded-lg" placeholder="Your name" />
                    </div>
                         <div className="">
                        <p className="font-semibold mb-2 text-white  text-sm">Email</p>
                        <input type="text" name="email" className="w-50 rounded-sm bg-zinc-900 text-white p-3 border border-gray-600 rounded-lg" placeholder="Your email" />
                    </div>
                    </div>           

               
                    <div className="">
                        <p className="font-semibold mb-2 text-white  text-sm">Message</p>
                        <textarea name="message" className="w-103 rounded-sm p-3 bg-zinc-900 text-white border-gray-600  border h-50 resize-none" placeholder="Your message" />
                    </div>

                    <button type="submit" className="bg-zinc-950 p-3 w-103 text-white  rounded-lg font-semibold ">Submit</button>
                </form>
            </div>
        </div>
        
        </>
    )
}