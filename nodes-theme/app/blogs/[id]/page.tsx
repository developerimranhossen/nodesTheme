import BlogDetails from "../../../components/singleBlog/BlogDetails";

function BlogDetailsPage() {
  return (
    <div className="nt-page-details">
      <section className="nt-section nt-details">
        <div className="nt-row">
          <div className="nt-col nt-details-A">
            <BlogDetails />
          </div>
        </div>
      </section>
    </div>
    /* End Body */
  );
}

export default BlogDetailsPage;
