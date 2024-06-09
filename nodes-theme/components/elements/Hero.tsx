function Hero() {
  return (
    <div className="nt-elelments-hero">
      <div className="nt-header-wrap">
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
          <h1>
            Elements
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
            proin faucibus nibh et sagittis a. Lacinia purus ac amet
            pellentesque aliquam enim.
          </p>
        </div>
    </div>
  );
}

export default Hero;
