import React from "react";
import BlogCard from "../BlogCard";

function BlogsBody() {
  return (
    <>
      <div className="nt-blogsbody-container">
        <div className="nt-header-wrap">
          <h3>New blog for you</h3>
          <p className="text-typography-sub-heading text-[18px] font-medium leading-7 ">
            (6)
          </p>
        </div>
        <div className="nt-left-blogcard">
          <BlogCard bigCard={true} />
          <div className="nt-right-blogcard">
            <BlogCard flexCard={true} />
            <BlogCard flexCard={true} />
            <BlogCard flexCard={true} />
          </div>
        </div>
      </div>
      <div className="nt-allblog-container">
        <div className="nt-header-wrap">
          <h1>All Blog post</h1>
        </div>
        <div className="nt-allblog-wrap">
          <BlogCard smallCard={true} />
          <BlogCard smallCard={true} />
          <BlogCard smallCard={true} />
          <BlogCard smallCard={true} />
          <BlogCard smallCard={true} />
          <BlogCard smallCard={true} />
          <BlogCard smallCard={true} />
          <BlogCard smallCard={true} />
          <BlogCard smallCard={true} />
        </div>
      </div>
    </>
  );
}

export default BlogsBody;
