import Image from "next/image";
import BlogDetailCoverImg from "../../public/blog-details-cover.svg";
import BlogDetailBody from "../../public/blog-details-body.png";
import BlogCard from "../BlogCard";

function BlogDetails() {
  return (
    <div className="nt-blogdetails-container">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <g clip-path="url(#clip0_26537_3530)">
            <path
              d="M0.58686 9.39327L3.16686 11.9999C3.22884 12.0624 3.30257 12.112 3.38381 12.1459C3.46505 12.1797 3.55219 12.1971 3.64019 12.1971C3.7282 12.1971 3.81534 12.1797 3.89658 12.1459C3.97782 12.112 4.05155 12.0624 4.11353 11.9999C4.17601 11.938 4.22561 11.8642 4.25945 11.783C4.2933 11.7017 4.31073 11.6146 4.31073 11.5266C4.31073 11.4386 4.2933 11.3515 4.25945 11.2702C4.22561 11.189 4.17601 11.1152 4.11353 11.0533L1.74019 8.6666H15.3335C15.5103 8.6666 15.6799 8.59636 15.8049 8.47134C15.93 8.34631 16.0002 8.17674 16.0002 7.99993C16.0002 7.82312 15.93 7.65355 15.8049 7.52853C15.6799 7.4035 15.5103 7.33327 15.3335 7.33327H1.70019L4.11353 4.91993C4.23172 4.79595 4.29765 4.63123 4.29765 4.45993C4.29765 4.28864 4.23172 4.12392 4.11353 3.99993C4.05155 3.93745 3.97782 3.88785 3.89658 3.85401C3.81534 3.82016 3.7282 3.80273 3.64019 3.80273C3.55219 3.80273 3.46505 3.82016 3.38381 3.85401C3.30257 3.88785 3.22884 3.93745 3.16686 3.99993L0.58686 6.5666C0.212325 6.9416 0.00195313 7.44993 0.00195312 7.97993C0.00195312 8.50994 0.212325 9.01827 0.58686 9.39327Z"
              fill="#151A2D"
            />
          </g>
          <defs>
            <clipPath id="clip0_26537_3530">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <span>Back</span>
      </button>

      <Image src={BlogDetailCoverImg} width={1200} height={454} alt="" />
      <h1>
        I Lost 3 Days Of Data By Not Taking 10 Min. For These Deprecation Steps
      </h1>
      <div className="nt-date">
        <span>22 January 2024</span>
        <span>2 min read</span>
      </div>

      <hr />

      <div className="nt-body">
        <p>
          Are you looking for an easy guide on how to start a blog? The
          step-by-step guide on this page will show you how to create a blog in
          20 minutes with just the most basic computer skills. After completing
          this guide you will have a beautiful blog that is ready to share with
          the world. This guide is made especially for beginners. I will walk
          you through each and every step, using plenty of pictures and videos
          to make it all perfectly clear. If you get stuck or have questions at
          any point, simply send a message and I will do my best to help you
          out.
        </p>
        <div>
          <h3>Are you looking for an easy guide on how to start a blog? </h3>
          <p>
            Are you looking for an easy guide on how to start a blog? The
            step-by-step guide on this page will show you how to create a blog
            in 20 minutes with just the most basic computer skills. After
            completing this guide you will have a beautiful blog that is ready
            to share with the world. This guide is made especially for
            beginners. I will walk you through each and every step, using plenty
            of pictures and videos to make it all perfectly clear. If you get
            stuck or have questions at any point, simply send me a message and I
            will do my best to help you out. Are you looking for an easy guide
            on how to start a blog? The step-by-step guide on this page will
            show you how to create a blog in 20 minutes with just the most basic
            computer skills. After completing this guide you will have a
            beautiful blog that is ready to share with the world. This guide is
            made especially for beginners. I will walk you through each and
            every step, using plenty of pictures and videos to make it all
            perfectly clear. If you get stuck or have questions at any point,
            simply send me a message and I will do my best to help you out.
          </p>
        </div>
        <div>
          <h3>Are you looking for an easy guide on how to start a blog? </h3>
          <p>
            Are you looking for an easy guide on how to start a blog? The
            step-by-step guide on <span>this page</span> will show you how to
            create a blog in 20 minutes with just the most basic computer
            skills. After completing this guide you will have a beautiful blog
            that is ready to share with the world. This guide is made especially
            for beginners. I will walk you through each and every step, using
            plenty of pictures and videos to make it all perfectly clear. If you
            get stuck or have questions at any point, simply send me a
            message and I will do my best to help you out. Are you looking for
            an easy guide on how to start a blog? The step-by-step guide on this
            page will show you how to create a blog in 20 minutes with just the
            most basic computer skills. After completing this guide you will
            have a beautiful blog that is ready to share with the world. This
            guide is made especially for beginners. I will walk you through each
            and every step, using plenty of pictures and videos to make it all
            perfectly clear. If you get stuck or have questions at any point,
            simply <span>send me a message</span> and I will do my best to help
            you out.
          </p>
        </div>
      </div>

      <figure>
        <Image src={BlogDetailBody} width={688} height={454} alt="" />
        <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
      </figure>

      <div className="nt-blog-guide">
        <h2>Are you looking for an easy guide on how to start a blog? </h2>
        <div className="nt-guide-wrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <mask
              id="path-1-outside-1_26537_1428"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="32"
              height="32"
              fill="black"
            >
              <rect fill="white" width="32" height="32" />
              <path d="M4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16Z" />
            </mask>
            <path
              d="M16 24C11.5817 24 8 20.4183 8 16H0C0 24.8366 7.16344 32 16 32V24ZM24 16C24 20.4183 20.4183 24 16 24V32C24.8366 32 32 24.8366 32 16H24ZM16 8C20.4183 8 24 11.5817 24 16H32C32 7.16344 24.8366 0 16 0V8ZM16 0C7.16344 0 0 7.16344 0 16H8C8 11.5817 11.5817 8 16 8V0Z"
              fill="#F1C3D9"
              mask="url(#path-1-outside-1_26537_1428)"
            />
            <path
              d="M4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16Z"
              fill="#D33C85"
            />
          </svg>
          <div className="">
            <h4>Harmonizing Human Experience: The Artistry of UI-UX Design</h4>
            <p>
              Harmonizing Human Experience: The Artistry of UI-UX Design" delves
              into the intricate fusion of design disciplines to create
              immersive digital landscapes. It explores the symbiotic
              relationship between UI (User Interface){" "}
            </p>
          </div>
        </div>
        <div className="nt-guide-wrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <mask
              id="path-1-outside-1_26537_1428"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="32"
              height="32"
              fill="black"
            >
              <rect fill="white" width="32" height="32" />
              <path d="M4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16Z" />
            </mask>
            <path
              d="M16 24C11.5817 24 8 20.4183 8 16H0C0 24.8366 7.16344 32 16 32V24ZM24 16C24 20.4183 20.4183 24 16 24V32C24.8366 32 32 24.8366 32 16H24ZM16 8C20.4183 8 24 11.5817 24 16H32C32 7.16344 24.8366 0 16 0V8ZM16 0C7.16344 0 0 7.16344 0 16H8C8 11.5817 11.5817 8 16 8V0Z"
              fill="#F1C3D9"
              mask="url(#path-1-outside-1_26537_1428)"
            />
            <path
              d="M4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16Z"
              fill="#D33C85"
            />
          </svg>
          <div className="">
            <h4>Harmonizing Human Experience: The Artistry of UI-UX Design</h4>
            <p>
              Harmonizing Human Experience: The Artistry of UI-UX Design" delves
              into the intricate fusion of design disciplines to create
              immersive digital landscapes. It explores the symbiotic
              relationship between UI (User Interface){" "}
            </p>
          </div>
        </div>
        <div className="nt-guide-wrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <mask
              id="path-1-outside-1_26537_1428"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="32"
              height="32"
              fill="black"
            >
              <rect fill="white" width="32" height="32" />
              <path d="M4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16Z" />
            </mask>
            <path
              d="M16 24C11.5817 24 8 20.4183 8 16H0C0 24.8366 7.16344 32 16 32V24ZM24 16C24 20.4183 20.4183 24 16 24V32C24.8366 32 32 24.8366 32 16H24ZM16 8C20.4183 8 24 11.5817 24 16H32C32 7.16344 24.8366 0 16 0V8ZM16 0C7.16344 0 0 7.16344 0 16H8C8 11.5817 11.5817 8 16 8V0Z"
              fill="#F1C3D9"
              mask="url(#path-1-outside-1_26537_1428)"
            />
            <path
              d="M4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16Z"
              fill="#D33C85"
            />
          </svg>
          <div className="">
            <h4>Harmonizing Human Experience: The Artistry of UI-UX Design</h4>
            <p>
              Harmonizing Human Experience: The Artistry of UI-UX Design" delves
              into the intricate fusion of design disciplines to create
              immersive digital landscapes. It explores the symbiotic
              relationship between UI (User Interface){" "}
            </p>
          </div>
        </div>
      </div>
      <p>
        Are you looking for an easy guide on how to start a blog? The
        step-by-step guide on this page will show you how to create a blog in 20
        minutes with just the most basic computer skills. After completing this
        guide you will have a beautiful blog that is ready to share with the
        world. This guide is made especially for beginners. I will walk you
        through each and every step, using plenty of pictures and videos to make
        it all perfectly clear. If you get stuck or have questions at any point,
        simply send me a message and I will do my best to help you out. Are you
        looking for an easy guide on how to start a blog? The step-by-step guide
        on this page will show you how to create a blog in 20 minutes with just
        the most basic computer skills. After completing this guide you will
        have a beautiful blog that is ready to share with the world. This guide
        is made especially for beginners. I will walk you through each and every
        step, using plenty of pictures and videos to make it all perfectly
        clear. If you get stuck or have questions at any point, simply send me a
        message and I will do my best to help you out.
      </p>
      <hr />
      <div className="nt-bloglogo-container">
        <p>
          <span>Posted By: </span>
          <span>Mridul Ishat Dip</span>
        </p>
        <div className="nt-logo-wrap">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M18 9.05469C18 13.5464 14.7045 17.2702 10.4025 17.9459V11.6737H12.4943L12.8925 9.07869H10.4025V7.39494C10.4025 6.68469 10.7505 5.99319 11.865 5.99319H12.9968V3.78369C12.9968 3.78369 11.9692 3.60819 10.9875 3.60819C8.937 3.60819 7.5975 4.85094 7.5975 7.10019V9.07794H5.31825V11.6729H7.5975V17.9452C3.29625 17.2687 0 13.5457 0 9.05469C0 4.08444 4.02975 0.0546875 9 0.0546875C13.9702 0.0546875 18 4.08369 18 9.05469Z"
                fill="#151A2D"
              />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M9.00812 0C4.04162 0 0.015625 4.026 0.015625 8.9925C0.015625 12.804 2.38412 16.0605 5.72913 17.3707C5.64738 16.6605 5.58138 15.5647 5.75838 14.7877C5.92113 14.0842 6.80912 10.317 6.80912 10.317C6.80912 10.317 6.54287 9.777 6.54287 8.985C6.54287 7.734 7.26812 6.80175 8.17112 6.80175C8.94062 6.80175 9.31112 7.37925 9.31112 8.06775C9.31112 8.83725 8.82287 9.99225 8.56337 11.0655C8.34887 11.961 9.01487 12.6937 9.89537 12.6937C11.4944 12.6937 12.7229 11.0062 12.7229 8.5785C12.7229 6.4245 11.1764 4.92225 8.96312 4.92225C6.40262 4.92225 4.89963 6.83925 4.89963 8.823C4.89963 9.5925 5.19588 10.422 5.56563 10.8735C5.64063 10.9613 5.64813 11.043 5.62563 11.1315C5.55888 11.4128 5.40363 12.027 5.37363 12.153C5.33688 12.3158 5.24012 12.3525 5.06987 12.2715C3.94487 11.7457 3.24138 10.11 3.24138 8.7855C3.24138 5.9505 5.29862 3.34575 9.18437 3.34575C12.3006 3.34575 14.7276 5.5665 14.7276 8.54175C14.7276 11.643 12.7739 14.1375 10.0649 14.1375C9.15437 14.1375 8.29562 13.6635 8.00762 13.101C8.00762 13.101 7.55612 14.8177 7.44512 15.24C7.24562 16.0245 6.69737 17.0018 6.32762 17.601C7.17212 17.859 8.06087 18 8.99312 18C13.9596 18 17.9856 13.974 17.9856 9.0075C18.0006 4.026 13.9746 0 9.00812 0Z"
                fill="#151A2D"
              />
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M9 1.6215C11.403 1.6215 11.688 1.6305 12.6368 1.674C13.6178 1.719 14.628 1.9425 15.3428 2.65725C16.0643 3.37875 16.281 4.37925 16.326 5.36325C16.3695 6.312 16.3785 6.597 16.3785 9C16.3785 11.403 16.3695 11.688 16.326 12.6368C16.2817 13.6125 16.053 14.6325 15.3428 15.3428C14.6213 16.0643 13.6215 16.281 12.6368 16.326C11.688 16.3695 11.403 16.3785 9 16.3785C6.597 16.3785 6.312 16.3695 5.36325 16.326C4.395 16.2817 3.3615 16.0478 2.65725 15.3428C1.9395 14.625 1.719 13.6148 1.674 12.6368C1.6305 11.688 1.6215 11.403 1.6215 9C1.6215 6.597 1.6305 6.312 1.674 5.36325C1.71825 4.39125 1.94925 3.36525 2.65725 2.65725C3.37725 1.93725 4.3815 1.719 5.36325 1.674C6.312 1.6305 6.597 1.6215 9 1.6215ZM9 0C6.55575 0 6.249 0.0105 5.289 0.054C3.89775 0.11775 2.51625 0.50475 1.5105 1.5105C0.501 2.52 0.11775 3.8985 0.054 5.289C0.0105 6.249 0 6.55575 0 9C0 11.4443 0.0105 11.751 0.054 12.711C0.11775 14.1007 0.50625 15.486 1.5105 16.4895C2.51925 17.4983 3.9 17.8822 5.289 17.946C6.249 17.9895 6.55575 18 9 18C11.4443 18 11.751 17.9895 12.711 17.946C14.1015 17.8822 15.4845 17.4945 16.4895 16.4895C17.4998 15.4793 17.8822 14.1015 17.946 12.711C17.9895 11.751 18 11.4443 18 9C18 6.55575 17.9895 6.249 17.946 5.289C17.8822 3.89775 17.4945 2.5155 16.4895 1.5105C15.4823 0.50325 14.0977 0.117 12.711 0.054C11.751 0.0105 11.4443 0 9 0Z"
                fill="#151A2D"
              />
              <path
                d="M9.00041 4.37842C6.44816 4.37842 4.37891 6.44767 4.37891 8.99992C4.37891 11.5522 6.44816 13.6214 9.00041 13.6214C11.5527 13.6214 13.6219 11.5522 13.6219 8.99992C13.6219 6.44767 11.5527 4.37842 9.00041 4.37842ZM9.00041 11.9999C7.34366 11.9999 6.00041 10.6567 6.00041 8.99992C6.00041 7.34317 7.34366 5.99992 9.00041 5.99992C10.6572 5.99992 12.0004 7.34317 12.0004 8.99992C12.0004 10.6567 10.6572 11.9999 9.00041 11.9999Z"
                fill="#151A2D"
              />
              <path
                d="M13.8046 5.27572C14.4011 5.27572 14.8846 4.79219 14.8846 4.19572C14.8846 3.59926 14.4011 3.11572 13.8046 3.11572C13.2081 3.11572 12.7246 3.59926 12.7246 4.19572C12.7246 4.79219 13.2081 5.27572 13.8046 5.27572Z"
                fill="#151A2D"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="nt-article-container">
        <h3>Related article</h3>

        <div className="nt-blogcard-wrap">
          <BlogCard smallCard={true} />
          <BlogCard smallCard={true} />
          <BlogCard smallCard={true} />
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
