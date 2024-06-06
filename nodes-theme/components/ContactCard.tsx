import Image from 'next/image';
import ContactImg from '../public/contact.svg'

function ContactCard() {
  return <div className="nt-contact-container">
    <div className="nt-contact-wrap">
      <Image src={ContactImg} width={564} height={759} alt='' />
    </div>
  </div>;
}

export default ContactCard;
