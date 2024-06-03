import BlogCard from "./BlogCard";

function Blogs() {
  return (
    <div className="nt-blog-container">
      <div className="nt-blog-header-wrap">
        <h4>Our Blog</h4>
        <h3>Articles & Resources</h3>
      </div>
      <div className="nt-left-blogcard">
        <BlogCard bigCard={true} />
        <div className="nt-right-blogcard">
          <BlogCard flexCard={true} />
          <BlogCard flexCard={true} />
          <BlogCard flexCard={true} />
        </div>
      </div>
      <button>
        <span>View all Blogs</span>{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
        >
          <g clip-path="url(#clip0_26436_1475)">
            <path
              d="M17.84 7.93243L14.9375 4.99992C14.8678 4.92963 14.7848 4.87383 14.6934 4.83576C14.602 4.79768 14.504 4.77808 14.405 4.77808C14.306 4.77808 14.208 4.79768 14.1166 4.83576C14.0252 4.87383 13.9422 4.92963 13.8725 4.99992C13.7328 5.14045 13.6544 5.33054 13.6544 5.52867C13.6544 5.72681 13.7328 5.9169 13.8725 6.05742L16.5425 8.74993H1.25C1.05109 8.74993 0.860322 8.82894 0.71967 8.9696C0.579018 9.11025 0.5 9.30101 0.5 9.49993C0.5 9.69884 0.579018 9.8896 0.71967 10.0303C0.860322 10.1709 1.05109 10.2499 1.25 10.2499H16.5875L13.8725 12.9574C13.8022 13.0271 13.7464 13.1101 13.7083 13.2015C13.6703 13.2929 13.6507 13.3909 13.6507 13.4899C13.6507 13.5889 13.6703 13.687 13.7083 13.7784C13.7464 13.8698 13.8022 13.9527 13.8725 14.0224C13.9422 14.0927 14.0252 14.1485 14.1166 14.1866C14.208 14.2247 14.306 14.2443 14.405 14.2443C14.504 14.2443 14.602 14.2247 14.6934 14.1866C14.7848 14.1485 14.8678 14.0927 14.9375 14.0224L17.84 11.1124C18.2614 10.6905 18.498 10.1187 18.498 9.52243C18.498 8.92617 18.2614 8.3543 17.84 7.93243Z"
              fill="#151A2D"
            />
          </g>
          <defs>
            <clipPath id="clip0_26436_1475">
              <rect
                width="18"
                height="18"
                fill="white"
                transform="translate(0.5 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
}

export default Blogs;
