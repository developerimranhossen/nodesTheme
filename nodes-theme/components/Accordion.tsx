'use client'

import { useState } from "react"

function Accordion({data}) {
    console.log(data);
    const [isAccordionOpen, setIseAccordionOpen] = useState(false)
  return (
    <div className="flex flex-col items-start gap-[14px] self-stretch w-[948px] p-6 border border-background-stroke-inner">
        <button onClick={() => setIseAccordionOpen(!isAccordionOpen)} className="flex justify-between w-full">
            <span className="text-gray-900 text-lg font-medium">{data}</span>
            {isAccordionOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#071A34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#071A34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>}
        </button>
        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
            isAccordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}>
            <p className="text-gray-500 text-md overflow-hidden">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
        </div>
    </div>
  )
}

export default Accordion