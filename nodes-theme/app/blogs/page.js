import BlogCard from "../../components/BlogCard";
import Hero from "../../components/blogs/Hero";

function Blogpage() {
  return (
    <div className="nt-page-blogs">
      <Hero />
      <div className="max-w-[1440px] px-[120px] py-[80px] flex flex-col gap-8 mx-auto">
        <div className="flex items-start gap-2">
          <h3 className="text-typography-heading text-center text-3xl font-medium leading-[52px]">
            New blog for you
          </h3>
          <p className="text-typography-sub-heading text-[18px] font-medium leading-7 ">
            (6)
          </p>
        </div>
        <div className="flex flex-start gap-6">
          <BlogCard bigCard={true} />
          <div className="flex flex-col justify-between items-start self-stretch gap-4">
            <BlogCard flexCard={true} />
            <BlogCard flexCard={true} />
            <BlogCard flexCard={true} />
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] px-[120px] py-[80px] flex flex-col gap-8 mx-auto">
        <div className="flex items-start gap-2">
          <h1 className="text-typography-heading text-center text-3xl font-medium leading-[52px]">
            All Blog post
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-y-8">
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
    </div>
  );
}

export default Blogpage;
