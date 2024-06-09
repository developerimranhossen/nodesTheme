import React from "react";
import Hero from "../../components/elements/Hero";
import TaskSection from "../../components/TaskSection";
import DocuVerticalImg from "../../public/docu-vertical.png";
import DocuHorizontal from "../../public/docu-horizontal.png";
import DocumentationCard from "../../components/DocumentationCard";
import ProgramCard from "../../components/ProgramCard";
import HeroCard from "../../components/about/HeroCard";

function ElementsPage() {
  return (
    <div className="nt-page-about">
      <section className="nt-section nt-hero">
        <div className="nt-row">
          <div className="nt-col nt-hero-A">
            <Hero />
          </div>
        </div>
      </section>
      {/* End Hero */}
      <section className="nt-section nt-task">
        <div className="nt-row">
          <div className="nt-col nt-task-A">
            <TaskSection />
          </div>
        </div>
      </section>
      {/* End Tasks */}
      <section className="nt-section nt-cards">
        <div className="nt-row">
          <div className="nt-col nt-card-A">
          <div className="flex gap-6 justify-center">
            <DocumentationCard path={DocuHorizontal} size={"384"} />
            <DocumentationCard path={DocuVerticalImg} size={"282"} />
            <DocumentationCard path={DocuHorizontal} size={"486"} />
          </div>
          <div className="flex nt-max-container gap-6">
            <ProgramCard />
            <HeroCard />
          </div>
          </div>
        </div>
      </section>
      {/* End Cards */}
    </div>
  );
}

export default ElementsPage;
