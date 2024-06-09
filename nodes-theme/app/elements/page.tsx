import React from "react";
import Hero from "../../components/elements/Hero";
import TaskSection from "../../components/TaskSection";
import DocuVerticalImg from "../../public/docu-vertical.png";
import DocuHorizontal from "../../public/docu-horizontal.png";
import DocumentationCard from "../../components/DocumentationCard";
import ProgramCard from "../../components/ProgramCard";
import HeroCard from "../../components/about/HeroCard";
import UseCasesSection from "../../components/UseCasesSection";
import BlogCard from "../../components/BlogCard";
import QualityCard from "../../components/about/QualityCard";
import Quality from "../../components/about/Quality";
import Member from "../../components/about/Member";
import NumberCard from "../../components/about/NumberCard";
import TeamCard from "../../components/about/TeamCard";
import Review from "../../components/about/Review";

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
            <div className="nt-top-card-wrap">
              <DocumentationCard path={DocuHorizontal} size={"384"} />
              <DocumentationCard path={DocuVerticalImg} size={"282"} />
              <DocumentationCard path={DocuHorizontal} size={"486"} />
            </div>
            <div className="nt-bottom-card-wrap">
              <ProgramCard />
              <HeroCard />
            </div>
          </div>
        </div>
      </section>
      {/* End Cards */}
      <section className="nt-section nt-use-case">
        <div className="nt-row">
          <div className="nt-col nt-userCase-A">
            <UseCasesSection />
          </div>
        </div>
      </section>
      {/* End Use case */}
      <section className="nt-section nt-blog-card">
        <div className="nt-row">
          <div className="nt-col nt-blog-card-A">
            <BlogCard bigCard={true} />
            <div className="">
              <BlogCard smallCard={true} />
              <BlogCard flexCard={true} />
            </div>
          </div>
        </div>
      </section>
      {/* End Blog Card */}
      <section className="nt-section nt-quality-card">
        <div className="nt-row">
          <div className="nt-col nt-quality-card-A">
            <QualityCard green={true} />
            <QualityCard purple={true} />
          </div>
        </div>
      </section>
      {/* End Use case */}
      <section className="nt-section nt-member">
        <div className="nt-row">
          <div className="nt-col nt-member-A">
            <div className="nt-right-card">
              <TeamCard />
            </div>
            <div className="nt-card-wrap">
              <div className="nt-left-card">
                <NumberCard green={true}>
                  <h1>10K+</h1>
                  <p>Companies use Sense</p>
                </NumberCard>
                <NumberCard puplish={true}>
                  <h1>$5M+</h1>
                  <p>Raised in Series</p>
                </NumberCard>
              </div>
              <NumberCard red={true}>
                <h1>2015</h1>
                <p>Year founded</p>
              </NumberCard>
            </div>
          </div>
        </div>
      </section>
      {/* End Member */}
      <section className="nt-section nt-review">
        <div className="nt-row">
          <div className="nt-col nt-review-A">
            <Review />
          </div>
        </div>
      </section>
      {/* End Review */}
    </div>
  );
}

export default ElementsPage;
