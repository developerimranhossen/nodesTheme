import BlogCard from "../../components/BlogCard";
import BlogsBody from "../../components/blogs/BlogsBody";
import Hero from "../../components/blogs/Hero";

function Blogpage() {
  return (
    <div className="nt-page-blogs">
      <section className="nt-section nt-hero">
        <div className="nt-row">
          <div className="nt-col nt-hero-A">
            <Hero />
          </div>
        </div>
      </section>
      {/* End Hero */}

      <section className="nt-section nt-blogs">
        <div className="nt-row">
          <div className="nt-col nt-blogs-A">
            <BlogsBody />
          </div>
        </div>
      </section>
      {/* End blogsBody */}
    </div>
  );
}

export default Blogpage;
