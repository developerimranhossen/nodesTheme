import CustomButton from "../../components/CustomButton";

const App = ({data}) => {
  console.log("data: ", data)
  return (
    <div className='nt-module nt-hero'>
        <p className="nt-pre-heading">
            {data.pre_heading}
        </p>
        <div>
          <div className="nt-main-heading bg-background-fill-central">
            <h1 className="">
              {data.heading}
              <br/>
              You may use 
              <span className="nt-text-glow"> static design
                <svg
                  className="absolute -top-5 left-[330px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="335"
                  height="158"
                  viewBox="0 0 335 158"
                  fill="none"
                >
                  <g opacity="0.3">
                    <g filter="url(#filter0_f_22003_145953)">
                      <rect
                        width="234.998"
                        height="56.6767"
                        transform="matrix(1 -6.76715e-05 3.00767e-05 1 50 50.6699)"
                        fill="url(#paint0_linear_22003_145953)"
                      />
                    </g>
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_22003_145953"
                      x="0"
                      y="0.654297"
                      width="335"
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
                        result="effect1_foregroundBlur_22003_145953"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_22003_145953"
                      x1="-1.28696"
                      y1="28.3384"
                      x2="233.454"
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
              </span> like this line.
            </h1>
          </div>
          <div className="">
            <CustomButton className="">
              {data.button[0]}
            </CustomButton>
            <CustomButton className="">
              {data.button[1]}
            </CustomButton>
          </div>
          <div className="">
            <p className="">
              {data.message[0]}
            </p>
            <p className="">
              {data.message[1]}
            </p>
          </div>
        </div>
    </div>
  )
}

export default App