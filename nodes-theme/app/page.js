import CustomButton from "@/components/CustomButton";
import CustomImage from "@/components/CustomImage";
import Task from "@/components/Task";
import HillImg from "@/public/hill.jpg";
import Image from "next/image";
import TasksImg from "@/public/tasks.png";

export default function Home() {
  return (
    <>
      <div className="nt-page-home">
        <div className="max-w-[792px] mx-auto mt-[77px] flex flex-col gap-4 text-center">
          <p className="text-typography-sub-heading-soft text-lg">
            Smart web builder, made for Developers
          </p>
          <div className="relative">
            <h1 className="text-typography-display text-lg_4x">
              Create any{" "}
              <span className="bg-website bg-clip-text text-fill-color-transparent font-medium">
                website
              </span>{" "}
              with no-limits
            </h1>
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
          </div>
          <div className="flex justify-center items-start gap-6">
            <CustomButton className="border border-component-stroke-secondary-soft bg-component-fill-secondary-soft text-component-text-secondary leading-6 ">
              Explore templates
            </CustomButton>
            <CustomButton className="bg-component-fill-primary text-component-text-light-fixed leading-6">
              Start build today
            </CustomButton>
          </div>
          <div className="flex justify-center items-center gap-10">
            <p className="text-typography-paragraph-soft text-md">
              60 Days free trial
            </p>
            <p className="text-typography-paragraph-soft text-md">
              No credit card required
            </p>
          </div>
        </div>

        <div className="flex max-container py-0 mt-[120px] mb-[60px] relative">
          <div className="bg-gradient-3  w-[1233px] h-[770px] opacity-50 filter blur-[48px]"></div>
          <div className="w-[1200px] h-[716px] absolute">
            <Image src={HillImg} className="rounded-[18px] shadow-2xl" fill />
          </div>
          <svg
            className="absolute left-1/2 top-1/2  -translatex-1/2 -translate-y-1/2"
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="40"
            viewBox="0 0 35 40"
            fill="none"
          >
            <path
              d="M31.9611 21.7365L2.99228 38.2901C1.65896 39.052 0 38.0893 0 36.5536V20V3.44636C0 1.91071 1.65896 0.947979 2.99228 1.70987L31.9611 18.2635C33.3048 19.0313 33.3048 20.9687 31.9611 21.7365Z"
              fill="#D33C85"
            />
          </svg>
        </div>
        <div className="max-container flex justify-between items-center">
          <CustomImage path={TasksImg} />
          <Task heading={'Never miss any task'} />
        </div>
      </div>
    </>
  );
}
