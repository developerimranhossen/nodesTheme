import Accordion from "./Accordion"


function Questions() {
  return (
    <div className="nt-max-container px-0 flex justify-center">
        <div className="flex flex-col items-center gap-10 w-[996px]">
        <div className="flex flex-col justify-center items-center gap-[8px] w-[588px] ">
            <h1 className="text-typography-heading text-center text-lg_2x">
            Frequently asked questions
            </h1>
            <p className="text-typography-paragraph-soft text-center">
            Everything you need to know about the product and billing.
            </p>
        </div>
            <div className="flex flex-col items-center gap-5 w-[996px]">
                <Accordion data={'Can I change my plan later?'} />
                <Accordion data={'What is your cancellation policy?'} />
                <Accordion data={'Can other info be added to an invoice?'} />
                <Accordion data={'How does billing work?'} />
                <Accordion data={'How do I change my account email?'} />
            </div>
        </div>
    </div>
  )
}

export default Questions