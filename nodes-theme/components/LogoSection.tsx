import Image from "next/image";

import Nuxt from "../public/logos/nuxt.png";
import Miro from "../public/logos/miro.png";
import Lottie from "../public/logos/lottie.png";
import Angel from "../public/logos/angel.png";
import Drille from "../public/logos/drille.png";
import Kinsta from "../public/logos/kinsta.png";
import Behance from "../public/logos/behance.png";

function LogoSection({backgourd}) {
  return (
    <div className={`nt-logo-container ${backgourd && 'bg-background-stroke-middle'}`}>
        <Image src={Nuxt} width={98} height={24} alt=""/>
        <Image src={Miro} width={68} height={24} alt=""/>
        <Image src={Lottie} width={124} height={24} alt=""/>
        <Image src={Kinsta} width={98} height={24} alt=""/>
        <Image src={Angel} width={102} height={24} alt=""/>
        <Image src={Behance} width={132} height={24} alt=""/>
        <Image src={Drille} width={132} height={24} alt=""/>
        
    </div>
  )
}

export default LogoSection