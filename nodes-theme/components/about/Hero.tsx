import Image from "next/image";
import AboutCoverImg from "../../public/about-cover.png";
import HeroCard from "./HeroCard";

function Hero() {
  return (
    <div className="nt-hero-container">
      <div className="nt-about-cover-img">
        <Image src={AboutCoverImg} fill alt="about-cover" />
      </div>
      <div className="nt-body-container">
        <h1>
          Our studio integrates top-tier graphics, photography, and web design,
          crafting compelling visual narratives for your brand's success.
        </h1>

        <div className="nt-body-card-wrap">
          <HeroCard />
          <HeroCard />
          <HeroCard />
          <HeroCard />
          <HeroCard />
        </div>
      </div>
    </div>
  );
}

export default Hero;
