import Hero from "../components/Hero";
import Video from "../components/Video";
import Pricing from "../components/Pricing";
import Questions from "../components/Questions";
import Blogs from "../components/Blogs";
import TaskSection from "../components/TaskSection";
import UserSection from "../components/UserSection";
import LogoSection from "../components/LogoSection";
import ProgramSection from "../components/ProgramSection";
import UseCasesSection from "../components/UseCasesSection";
import TestimonialSection from "../components/TestimonialSection";

export default function Home() {
  return (
    <div className="nt-page-home">
      <section className="nt-section">
        <div className="nt-row">
          <div className="nt-col nt-hero-A">
            <Hero />
          </div>
        </div>
      </section>
      <section className="nt-section">
        <div className="nt-row">
          <div className="nt-col nt-video-A">
            <Video />
          </div>
        </div>
      </section>

      <section className="nt-section">
        <div className="nt-row">
          <div className="nt-col nt-task-A">
            <TaskSection />
          </div>
        </div>
      </section>

      <section className="nt-section">
        <div className="nt-row">
          <div className="nt-col nt-user-A">
            <UserSection />
          </div>
        </div>
      </section>

      <section className="nt-section">
        <div className="nt-row">
          <div className="nt-col nt-logo-A">
            <LogoSection />
          </div>
        </div>
      </section>

      <section className="nt-section">
        <div className="nt-row">
          <div className="nt-col nt-program-A">
            <ProgramSection />
          </div>
        </div>
      </section>

      <section className="nt-section">
        <div className="nt-row">
          <div className="nt-col nt-userCase-A">
            <UseCasesSection />
          </div>
        </div>
      </section>

      <section className="nt-section">
        <div className="nt-row">
          <div className="nt-col nt-testimonial-A">
            <TestimonialSection />
          </div>
        </div>
      </section>

      <section className="nt-section">
        <div className="nt-row">
          <div className="nt-col nt-pricing-A">
            <Pricing />
          </div>
        </div>
      </section>

      <section className="nt-section">
        <div className="nt-row">
          <div className="nt-col nt-question-A">
            <Questions />
          </div>
        </div>
      </section>

      <section className="nt-section">
        <div className="nt-row">
          <div className="nt-col nt-blog-A">
            <Blogs />
          </div>
        </div>
      </section>
    </div>
  );
}
