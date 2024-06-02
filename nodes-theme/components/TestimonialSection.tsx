import Image from "next/image";
import LeftArrow from "../public/left-arrow.png";
import RightArrow from "../public/right-arrow.png";
import TestimonialCard from "./TestimonialCard";

function TestimonialSection() {
  return (
    <div className="nt-testimonial-container">
      <div className="nt-header-wrap">
        <p className="">
          Testimonials
        </p>
        <h2 className="text-typography-heading text-center text-lg_2x">
          Customer Reviews
        </h2>
      </div>
      <div className="nt-card-wrap">
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
