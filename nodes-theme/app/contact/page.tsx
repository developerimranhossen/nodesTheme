import ContactCard from "../../components/ContactCard"


function ContactPage() {
  return (
    <div className="nt-page-contact">
      <section className="nt-section nt-contact">
        <div className="nt-row">
          <div className="nt-col nt-contact-A">
            <ContactCard />
          </div>
        </div>
      </section>
    </div>
    // End ContactCard 
  )
}

export default ContactPage