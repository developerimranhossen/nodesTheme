
import CustomImage from "../components/CustomImage";
import Task from "../components/Task";
import HillImg from "../public/hill.jpg";
import Image from "next/image";
import TasksImg from "../public/tasks.png";
import DocuVerticalImg from "../public/docu-vertical.png";
import DocuHorizontal from "../public/docu-horizontal.png";
import Nuxt from "../public/logos/nuxt.png";
import Miro from "../public/logos/miro.png";
import Lottie from "../public/logos/lottie.png";
import Angel from "../public/logos/angel.png";
import Drille from "../public/logos/drille.png";
import Kinsta from "../public/logos/kinsta.png";
import Behance from "../public/logos/behance.png";

import DocumentationCard from "../components/DocumentationCard";
import ProgramCard from "../components/ProgramCard";
import Hero from '../modules/hero'

// Data sample 
const hero = {
  pre_heading: "Create your website",
  heading: "With the power of Nodes Theme",
  button: ["Try for free", "Buy it now"],
  message: ['Its easy to use and designed considering your backend datastructure', 'Powered with tailwind-css & scss. Of course its the Next']
}

export default function Home() {
  return (
    <>
      <div className="nt-page nt-home bg-background-fill-central">
        <section className="nt-section nt-hero">
          <div className="nt-row">
            <div className="nt-col nt-hero-A">
              <Hero data={hero}/>
            </div>{/* End hero-A */}
          </div>{/* End row */}
        </section>{/* End section Hero */}
        <section className="nt-section">

        </section>{/*end media*/}
        <section className="nt-section">

        </section>{/*end blogs*/}
        <section className="nt-section">

        </section>{/*end Gallery*/}
        <section className="nt-section">

        </section>{/*end Partners*/}
        <section className="nt-section">

        </section>{/*end Features*/}

        

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
          <Task heading={"Never miss any task"} />
        </div>
        <div className="max-container flex justify-between items-center">
          <Task heading={"Drag Drop & Publish"} />
          <CustomImage path={TasksImg} />
        </div>
        <div className="max-container flex flex-col items-center gap-10">
          <div className="w-[450px] flex flex-col justify-center items-center gap-3 ">
            <div className="flex items-center gap-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M15.0052 7.16949L5.513 5.05297C4.05537 4.72797 2.67188 5.83695 2.67188 7.33039V23.8482C2.67188 24.9412 3.43059 25.8879 4.49739 26.1257L15.0052 28.4686V7.16949Z"
                  fill="#D33C85"
                />
                <path
                  d="M17 28.4682L27.5079 26.1252C28.5747 25.8874 29.3333 24.9408 29.3333 23.8478V7.3299C29.3333 5.83646 27.9499 4.72748 26.4923 5.05248L17 7.169V28.4682Z"
                  fill="#D33C85"
                />
              </svg>
              <h4 className="text-component-text-primary items-center text-lg">
                The modern standard
              </h4>
            </div>
            <div className="flex flex-col items-center gap-2 self-stretch">
              <h1 className="text-typography-heading text-center text-lg_2x">
                Beautiful documentation that converts users
              </h1>
              <p className="text-typography-paragraph-soft">
                A platform you can rely on to reach your audience
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <DocumentationCard path={DocuHorizontal} size={"384"} />
            <DocumentationCard path={DocuVerticalImg} size={"282"} />
            <DocumentationCard path={DocuVerticalImg} size={"282"} />
          </div>
          <div className="flex gap-6">
            <DocumentationCard path={DocuHorizontal} size={"486"} />
            <DocumentationCard path={DocuHorizontal} size={"486"} />
          </div>
        </div>
        <div className="max-container flex justify-between items-center bg-background-stroke-middle">
          <Image src={Nuxt} />
          <Image src={Miro} />
          <Image src={Lottie} />
          <Image src={Drille} />
          <Image src={Kinsta} />
          <Image src={Angel} />
          <Image src={Behance} />
        </div>
        <div className="max-container flex flex-col justify-center items-center gap-10">
          <div className="flex flex-col justify-center items-center gap-[18px] w-[588px] ">
            <h1 className="text-typography-heading text-center text-lg_2x">
              Elevating Card Programs with Cutting-Edge Technology
            </h1>
            <p className="text-typography-paragraph-soft text-center">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
            <div className="flex items-center gap-3">
              <p className="text-container-text-secondary text-center text-md">
                Compare all pro features
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_26359_1306)">
                  <path
                    d="M19.2667 8.25825L16.0417 4.99992C15.9642 4.92181 15.872 4.85981 15.7705 4.81751C15.6689 4.7752 15.56 4.75342 15.45 4.75342C15.34 4.75342 15.2311 4.7752 15.1295 4.81751C15.028 4.85981 14.9358 4.92181 14.8583 4.99992C14.7031 5.15605 14.616 5.36726 14.616 5.58742C14.616 5.80757 14.7031 6.01878 14.8583 6.17492L17.825 9.16658H0.833333C0.61232 9.16658 0.400358 9.25438 0.244078 9.41066C0.0877974 9.56694 0 9.7789 0 9.99992C0 10.2209 0.0877974 10.4329 0.244078 10.5892C0.400358 10.7455 0.61232 10.8333 0.833333 10.8333H17.875L14.8583 13.8416C14.7802 13.9191 14.7182 14.0112 14.6759 14.1128C14.6336 14.2143 14.6118 14.3232 14.6118 14.4333C14.6118 14.5433 14.6336 14.6522 14.6759 14.7537C14.7182 14.8553 14.7802 14.9474 14.8583 15.0249C14.9358 15.103 15.028 15.165 15.1295 15.2073C15.2311 15.2496 15.34 15.2714 15.45 15.2714C15.56 15.2714 15.6689 15.2496 15.7705 15.2073C15.872 15.165 15.9642 15.103 16.0417 15.0249L19.2667 11.7916C19.7348 11.3228 19.9978 10.6874 19.9978 10.0249C19.9978 9.36241 19.7348 8.727 19.2667 8.25825Z"
                    fill="#49A492"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_26359_1306">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="flex gap-6 flex-wrap">
            <ProgramCard />
            <ProgramCard />
            <ProgramCard />
            <ProgramCard />
            <ProgramCard />
            <ProgramCard />
          </div>
        </div>
      </div>
    </>
  );
}
