import React from "react";
import Hero from "../../components/elements/Hero";
import TaskSection from "../../components/TaskSection";

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
    </div>
  );
}

export default ElementsPage;
