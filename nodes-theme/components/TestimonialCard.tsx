import Image from 'next/image'
import AvatarImg from '../public/avatar.png'

function TestimonialCard() {
  return (
    <div className="nt-card-container">
        <div className="nt-img-container">
        <div className="nt-img-wrap">
            <Image src={AvatarImg} fill alt='avatar' />
            
        </div>
        <div className="">
          <h3>Cameron Williamson</h3>
          <p>TechSolutions Inc.</p>
        </div>
        </div>
        <p className="">Zenify has become an integral part of our financial management. The data- driven solutions for modern businesses have been instrumental in our decision-making process. </p>
    </div>
    
  )
}

export default TestimonialCard