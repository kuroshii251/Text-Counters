import { useState } from "react"

export default function Faq(){
    const [openFaq, setOpenFaq] = useState();

    const dataFaq = [
        {
            id:1,
            quest:"What is Text Counters?",
            ans:"Text counter is the website where you can find out the number of words you have typed into the input field"
        },

         {
            id:2,
            quest:"What is this website for?",
            ans:"This website is for check the limit an words you type"
        },

         {
            id:3,
            quest:"How to use Text Counters?",
            ans:"Type or paste your text into the input field, and the result will show up instantly"
        },
    ]

    const handleFaq = (id) => {
        setOpenFaq(openFaq === id ? null : id);
    }
    return (
        <>
        <div className="flex flex-col justify-center items-center min-h-screen ">
            <h1 className="text-5xl font-bold text-white">FAQ</h1>
            <p className="text-xl font-semibold text-white">Frequently ask Question</p>
            <div className="pt-10">
     <div className="lg:w-150 w-120 bg-zinc-900 rounded-md ">
                {dataFaq.map((data) => (
  <div className="p-5 border-b-1 border-grey" key={data.id}>
    <div className="flex justify-between ">
        <div className="">
  <h1 className="font-semibold text-xl text-white">{data.quest}</h1>
        </div>
  <button className="flex flex-col justify-end items-end cursor-pointer" onClick={() => handleFaq(data.id)}>
    {openFaq === data.id ? (
                <i className="fa-solid fa-minus text-white"></i>  

    ): (
        <i className="fa-solid fa-plus text-white"></i>  

    ) }
</button>
    </div> 
                    <div className={`${openFaq === data.id ? "flex": "hidden"}  mt-3`}>
                        <p className="text-md font-semibold text-white">{data.ans}</p>
                    </div>
                </div>
                ))}
              
            </div>
            </div>
       
        </div>
        </>
    )
}