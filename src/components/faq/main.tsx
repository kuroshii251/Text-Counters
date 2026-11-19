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
            quest:"How do I input the text?",
            ans:"Type or paste your text into the input field, and the result will show up instantly"
        },
    ]

    const handleFaq = (id) => {
        setOpenFaq(openFaq === id ? null : id);
    }
    return (
        <>
        <div className="flex flex-col justify-center items-center min-h-screen bg-slate-200">
            <h1 className="text-5xl font-bold">FAQ</h1>
            <p className="text-xl font-semibold">Frequently ask Question</p>
            <div className="pt-10">
     <div className="w-150 bg-white rounded-md ">
                {dataFaq.map((data) => (
  <div className="p-5 border-b-1 border-grey" key={data.id}>
    <div className="flex justify-between ">
        <div className="">
  <h1 className="font-semibold text-xl">{data.quest}</h1>
        </div>
  <button className="flex flex-col justify-end items-end cursor-pointer" onClick={() => handleFaq(data.id)}>
<i className="fa-solid fa-plus"></i>  
</button>
    </div> 


                    <div className={`${openFaq === data.id ? "flex": "hidden"} mt-3`}>
                        <p className="text-md font-semibold">{data.ans}</p>
                    </div>
                </div>
                ))}
              
            </div>
            </div>
       
        </div>
        </>
    )
}