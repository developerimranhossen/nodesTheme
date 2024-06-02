import Image from 'next/image'
import AvatarImg from '../public/avatar.png'

function TestimonialCard() {
  return (
    <div className="flex flex-col items-start gap-6 w-[282px] p-6 border border-transparent rounded-xl bg-background-fill-surface">
        <div className="flex items-center gap-[14px] self-stretch">
        <div className="size-12 justify-center items-center shrink-0 border border-transparent rounded-[48px] relative">
            <Image src={AvatarImg} fill alt='avatar' />
            
        </div>
        <div className="">
          <h3 className="text-typography-sub-heading font-semibold">Cameron Williamson</h3>
          <p className="text-typography-paragraph-soft text-xs">TechSolutions Inc.</p>
        </div>
        </div>
        <p className="">Zenify has become an integral part of our financial management. The data- driven solutions for modern businesses have been instrumental in our decision-making process. </p>
    </div>
    
  )
}

export default TestimonialCard