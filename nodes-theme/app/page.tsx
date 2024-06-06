import Hero from "../components/Hero";
import Video from "../components/Video";
import Pricing from "../components/Pricing";
import Blogs from "../components/Blogs";
import TaskSection from "../components/TaskSection";
import UserSection from "../components/UserSection";
import LogoSection from "../components/LogoSection";
import ProgramSection from "../components/ProgramSection";
import UseCasesSection from "../components/UseCasesSection";
import TestimonialSection from "../components/TestimonialSection";
import Faq from "../components/Faq";

export default function Home() {
  return (
    <div className="nt-page-home">
      <section className="nt-section nt-hero">
        <div className="nt-row">
          <div className="nt-col nt-hero-A">
            <Hero />
          </div>
        </div>
      </section>
      {/* End Hero */}
      <section className="nt-section nt-feature">
        <div className="nt-row">
          <div className="nt-col nt-video-A">
            <Video />
          </div>
        </div>
      </section>
      {/* End Feature*/}
      <section className="nt-section nt-task">
        <div className="nt-row">
          <div className="nt-col nt-task-A">
            <TaskSection />
          </div>
        </div>
      </section>
      {/* End Tasks */}
      <section className="nt-section nt-user">
        <div className="nt-row">
          <div className="nt-col nt-user-A">
            <UserSection />
          </div>
        </div>
      </section>
      {/* End user */}
      <section className="nt-section nt-client">
        <div className="nt-row">
          <div className="nt-col nt-logo-A">
            <LogoSection backgourd={true} />
          </div>
        </div>
      </section>
      {/* End client */}
      <section className="nt-section nt-program">
        <div className="nt-row">
          <div className="nt-col nt-program-A">
            <ProgramSection />
          </div>
        </div>
      </section>
      {/* End Program */}
      <section className="nt-section nt-use-case">
        <div className="nt-row">
          <div className="nt-col nt-userCase-A">
            <UseCasesSection />
          </div>
        </div>
      </section>
      {/* End Use case */}
      <section className="nt-section nt-testimonial">
        <div className="nt-row">
          <div className="nt-col nt-testimonial-A">
            <TestimonialSection />
          </div>
        </div>
      </section>
      {/* End Testimonial */}
      <section className="nt-section nt-pricing">
        <div className="nt-row">
          <div className="nt-col nt-pricing-A">
            <Pricing />
          </div>
        </div>
      </section>
      {/* End Pricing */}
      <section className="nt-section nt-faq">
        <div className="nt-row">
          <div className="nt-col nt-faq-A">
            <Faq />
          </div>
        </div>
      </section>
      {/* End FAQ */}
      <section className="nt-section nt-blog">
        <div className="nt-row">
          <div className="nt-col nt-blog-A">
            <Blogs />
          </div>
        </div>
      </section>
      {/* End Blog */}
    </div>
    // End home wrap
  );
}
