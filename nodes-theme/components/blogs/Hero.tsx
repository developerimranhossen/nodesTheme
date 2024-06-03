
function Hero() {
  return (
    <div className="flex flex-col items-center gap-6 max-w-[1440px] mx-auto mt-[173px] ">
        <div className="flex w-[996px] flex-col items-center gap-3 mx-auto relative">
          <svg
            className="absolute -top-[30px]"
            xmlns="http://www.w3.org/2000/svg"
            width="287"
            height="157"
            viewBox="0 0 287 157"
            fill="none"
          >
            <g opacity="0.3">
              <g filter="url(#filter0_f_22013_1894)">
                <rect
                  width="186.948"
                  height="56.6767"
                  transform="matrix(1 -8.5065e-05 2.39268e-05 1 50 50.0156)"
                  fill="url(#paint0_linear_22013_1894)"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_22013_1894"
                x="0"
                y="0"
                width="286.949"
                height="156.692"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="25"
                  result="effect1_foregroundBlur_22013_1894"
                />
              </filter>
              <linearGradient
                id="paint0_linear_22013_1894"
                x1="-1.02381"
                y1="28.3384"
                x2="185.719"
                y2="28.3383"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#44BCFF" />
                <stop offset="0.234375" stop-color="#44B0FF" />
                <stop offset="0.489583" stop-color="#FF44EC" />
                <stop offset="0.739583" stop-color="#FF44EC" />
                <stop offset="1" stop-color="#FF675E" />
              </linearGradient>
            </defs>
          </svg>
          <h1 className="text-typography-heading text-center text-[64px] font-medium leading-[84px]">
            Blogs
          </h1>
          <p className="text-typography-paragraph-soft text-center text-[18px] leading-7">
            Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
            proin faucibus nibh et sagittis a. Lacinia purus ac amet
            pellentesque aliquam enim.
          </p>
        </div>
        <form className="flex w-[588px] p-1 justify-between items-center rounded-lg border border-component-stroke-dark-soft bg-component-fill-light mx-auto ">
          <div className="flex p-[10px] items-center gap-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="text-component-text-gray  text-sm "
            />
          </div>

          <div className="flex items-start">
            <div className="flex p-3 justify-center items-center gap-4 border rounded-lg bg-component-fill-primary">
              <button className="text-component-text-light-fixed text-center text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>
  )
}

export default Hero