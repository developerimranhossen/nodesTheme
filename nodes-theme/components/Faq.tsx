import Accordion from "./Accordion"


function Faq() {
  return (
    <div className="nt-faq-container">
        <div className="nt-faq-wrap">
        <div className="nt-body-wrap">
            <h1>
            Frequently asked questions
            </h1>
            <p>
            Everything you need to know about the product and billing.
            </p>
        </div>
            <div className="nt-accordion-wrap">
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

export default Faq