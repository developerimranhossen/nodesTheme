import Hero from "../../components/about/Hero";
import Member from "../../components/about/Member";
import Quality from "../../components/about/Quality";
import Team from "../../components/about/Team";

function Aboutpage() {
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
      <section className="nt-section nt-quality">
        <div className="nt-row">
          <div className="nt-col nt-quality-A">
            <Quality />
          </div>
        </div>
      </section>
      {/* End Hero */}
      <section className="nt-section nt-team">
        <div className="nt-row">
          <div className="nt-col nt-team-A">
            <Team />
          </div>
        </div>
      </section>
      {/* End Team */}
      <section className="nt-section nt-member">
        <div className="nt-row">
          <div className="nt-col nt-member-A">
            <Member />
          </div>
        </div>
      </section>
      {/* End Member */}
    </div>
  );
}

export default Aboutpage;
