export default function Contact(){
    return (
        <>

        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-200">
            <div className="">
                <h1 className="font-bold text-4xl text-center mb-10 mt-10">Contact Us</h1>
            </div>
            <div className="bg-white p-5 rounded-lg mb-5">
                <form action="https://formspree.io/f/xwlonobp" method="POST" className="space-y-3 p-5  ">
                    <div className="flex gap-3">
    <div className="">
                        <p className="font-semibold mb-2  text-sm">Name</p>
                    <input type="text" name="name" className="w-50 rounded-sm p-2 border border-gray-400 rounded-lg" placeholder="Your name" />
                    </div>
                         <div className="">
                        <p className="font-semibold mb-2  text-sm">Email</p>
                        <input type="text" name="email" className="w-50 rounded-sm p-2 border border-gray-400 rounded-lg" placeholder="Your email" />
                    </div>
                    </div>           

               
                    <div className="">
                        <p className="font-semibold mb-2  text-sm">Message</p>
                        <textarea name="message" className="w-103 rounded-sm p-2 border-gray-400  border h-50 resize-none" placeholder="Your message" />
                    </div>

                    <button type="submit" className="bg-black p-3 w-103 text-white rounded-lg font-semibold ">Submit</button>
                </form>
            </div>
        </div>
        
        </>
    )
}