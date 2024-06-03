'use client'

import { useState } from "react"

function Accordion({data}) {
    console.log(data);
    const [isAccordionOpen, setIseAccordionOpen] = useState(false)
  return (
    <div className="nt-accordion-container">
        <button onClick={() => setIseAccordionOpen(!isAccordionOpen)}>
            <span className="">{data}</span>
            {isAccordionOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#071A34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#071A34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>}
        </button>
        <div className={`nt-text-wrap ${
            isAccordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}>
            <p>Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
        </div>
    </div>
  )
}

export default Accordion