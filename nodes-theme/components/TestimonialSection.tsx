import Image from "next/image";
import LeftArrow from "../public/left-arrow.png";
import RightArrow from "../public/right-arrow.png";
import TestimonialCard from "./TestimonialCard";

function TestimonialSection() {
  return (
    <div className="nt-max-container bg-background-stroke-middle flex flex-col items-center gap-10">
      <div className="flex w-[588px] flex-col items-center gap-3">
        <p className="text-container-text-primary text-center text-lg">
          Testimonials
        </p>
        <h2 className="text-typography-heading text-center text-lg_2x">
          Customer Reviews
        </h2>
      </div>
      <div className="flex items-start gap-6">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
      <div className="flex justify-center items-start gap-6">
        <Image src={LeftArrow} width={48} height={48} alt="arrow" />
        <Image src={RightArrow} width={48} height={48} alt="arrow" />
      </div>
    </div>
  );
}

export default TestimonialSection;
