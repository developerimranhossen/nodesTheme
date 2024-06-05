import Hero from "../../components/about/Hero";
import Quality from "../../components/about/Quality";

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
    </div>
  );
}

export default Aboutpage;
