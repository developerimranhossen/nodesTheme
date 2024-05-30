import CustomImage from "../components/CustomImage";
import Task from "../components/Task";

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
import Hill from "../public/hill.jpg";
import AvatarImg from "../public/avatar.png";
import UseCase from "../public/use-case.png";
import LeftArrow from "../public/left-arrow.png";
import RightArrow from "../public/right-arrow.png";

import DocumentationCard from "../components/DocumentationCard";
import ProgramCard from "../components/ProgramCard";
import CustomButton from "../components/CustomButton";
import TestimonialCard from "../components/TestimonialCard";
import PricingCard from "../components/PricingCard";
import Hero from "../components/Hero";
import Video from "../components/Video";




export default function Home() {
  return (
    <>
      <div className="nt-page-home">
        <Hero />
        <Video />
        <div className="nt-max-container flex justify-between items-center">
          <CustomImage path={TasksImg} />
          <Task heading={"Never miss any task"} />
        </div>
        <div className="nt-max-container flex justify-between items-center">
          <Task heading={"Drag Drop & Publish"} />
          <CustomImage path={TasksImg} />
        </div>
        <div className="nt-max-container flex flex-col items-center gap-10">
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
        <div className="nt-max-container flex justify-between items-center bg-background-stroke-middle">
          
        </div>
        <div className="nt-max-container flex flex-col justify-center items-center gap-10">
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
      <div className="nt-max-container flex flex-col justify-center items-center gap-10 bg-background-stroke-middle">
<div className="flex flex-col items-center gap-3 w-[588px]">
  <p className="text-container-text-primary text-lg ">Use cases</p>
  <h1 className="text-typography-heading text-center text-lg_2x">For teams who create training videos at scale</h1>
  <div className="flex p-[6px] justify-center items-center gap-4 border border-background-stroke-surface rounded-xl bg-background-fill-surface">
    <div className="flex py-1 p-2 items-center gap-[6px] bg-component-fill-primary border border-transparent rounded-lg">
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.11877 2.58005C3.79348 2.10943 4.61346 1.8335 5.49939 1.8335C6.38532 1.8335 7.20531 2.10943 7.88001 2.58005C8.1065 2.73803 8.41817 2.68249 8.57615 2.456C8.73413 2.22952 8.6786 1.91784 8.45211 1.75986C7.61503 1.17598 6.59646 0.833496 5.49939 0.833496C4.40233 0.833496 3.38375 1.17598 2.54668 1.75986C2.32019 1.91784 2.26465 2.22952 2.42263 2.456C2.58061 2.68249 2.89229 2.73803 3.11877 2.58005ZM5.49927 3.8335C5.10379 3.8335 4.73448 3.939 4.4163 4.12305C4.17727 4.26132 3.8714 4.17964 3.73313 3.94061C3.59486 3.70158 3.67654 3.39572 3.91557 3.25745C4.38186 2.98772 4.92331 2.8335 5.49927 2.8335C6.07523 2.8335 6.61668 2.98772 7.08297 3.25745C7.322 3.39572 7.40368 3.70158 7.26541 3.94061C7.12713 4.17964 6.82127 4.26132 6.58224 4.12305C6.26406 3.939 5.89474 3.8335 5.49927 3.8335ZM4.74935 6.35302C3.66057 5.74536 2.2838 5.45515 1.22966 5.33934C0.644108 5.27501 0.166016 5.7504 0.166016 6.33692V12.1779C0.166016 12.7644 0.644108 13.24 1.22966 13.3043C2.2838 13.4201 3.66057 13.7103 4.74935 14.318V6.35302ZM6.24935 14.318C7.33813 13.7103 8.7149 13.4201 9.76904 13.3043C10.3546 13.24 10.8327 12.7644 10.8327 12.1779V6.33692C10.8327 5.7504 10.3546 5.27501 9.76904 5.33934C8.7149 5.45515 7.33813 5.74536 6.24935 6.35302V14.318Z" fill="white"/>
</svg>
<span className="text-component-text-light-fixed text-xs">Learning and development</span>
    </div>
    <div className="flex py-1 p-2 items-center gap-[6px] bg-component-fill-dark-soft border border-transparent rounded-lg">
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.06079 4.08116C8.7289 3.90375 8.37028 3.78484 8.00065 3.72835V0.352053C8.92357 0.421464 9.82386 0.682463 10.6433 1.12047C11.6102 1.63728 12.4347 2.38457 13.0438 3.29614C13.6529 4.20772 14.0278 5.25544 14.1352 6.3465C14.1403 6.39763 14.1447 6.44878 14.1486 6.49994H10.7723C10.6992 6.02176 10.522 5.56465 10.2525 5.16124C9.95011 4.7087 9.54079 4.33772 9.06079 4.08116ZM3.79685 1.45681C4.75411 0.817193 5.85821 0.437967 7.00065 0.352051V3.72835C6.52375 3.80124 6.06644 3.97786 5.66195 4.24813C5.11769 4.61179 4.6935 5.12868 4.443 5.73342C4.19251 6.33817 4.12697 7.00362 4.25467 7.64561C4.34958 8.12275 4.54806 8.57101 4.83375 8.95977L2.44634 11.3472C1.69926 10.4786 1.18669 9.42972 0.962086 8.30055C0.704851 7.00734 0.836873 5.6669 1.34146 4.44872C1.84604 3.23055 2.70052 2.18936 3.79685 1.45681ZM3.15346 12.0543C3.85514 12.6578 4.67629 13.1098 5.56544 13.3795C6.61457 13.6978 7.726 13.7524 8.80127 13.5385C9.86654 13.3266 10.8637 12.8577 11.7063 12.1727L8.70155 10.084C8.52218 10.1538 8.33644 10.2081 8.14634 10.2459C7.61253 10.3521 7.06078 10.325 6.53995 10.167C6.17982 10.0578 5.84217 9.88829 5.54087 9.66687L3.15346 12.0543ZM10.5583 8.26647C10.6606 8.01956 10.7322 7.76214 10.7723 7.49994H14.1486C14.0957 8.20286 13.9315 8.89542 13.6599 9.55117C13.3673 10.2576 12.9563 10.906 12.4469 11.4697L9.64433 9.52146C10.044 9.1817 10.3574 8.7516 10.5583 8.26647Z" fill="#151A2D"/>
</svg>
<span className="text-component-text-dark text-xs">Learning and development</span>
    </div>
    <div className="flex py-1 p-2 items-center gap-[6px] bg-component-fill-dark-soft border border-transparent rounded-lg">
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.06079 4.08116C8.7289 3.90375 8.37028 3.78484 8.00065 3.72835V0.352053C8.92357 0.421464 9.82386 0.682463 10.6433 1.12047C11.6102 1.63728 12.4347 2.38457 13.0438 3.29614C13.6529 4.20772 14.0278 5.25544 14.1352 6.3465C14.1403 6.39763 14.1447 6.44878 14.1486 6.49994H10.7723C10.6992 6.02176 10.522 5.56465 10.2525 5.16124C9.95011 4.7087 9.54079 4.33772 9.06079 4.08116ZM3.79685 1.45681C4.75411 0.817193 5.85821 0.437967 7.00065 0.352051V3.72835C6.52375 3.80124 6.06644 3.97786 5.66195 4.24813C5.11769 4.61179 4.6935 5.12868 4.443 5.73342C4.19251 6.33817 4.12697 7.00362 4.25467 7.64561C4.34958 8.12275 4.54806 8.57101 4.83375 8.95977L2.44634 11.3472C1.69926 10.4786 1.18669 9.42972 0.962086 8.30055C0.704851 7.00734 0.836873 5.6669 1.34146 4.44872C1.84604 3.23055 2.70052 2.18936 3.79685 1.45681ZM3.15346 12.0543C3.85514 12.6578 4.67629 13.1098 5.56544 13.3795C6.61457 13.6978 7.726 13.7524 8.80127 13.5385C9.86654 13.3266 10.8637 12.8577 11.7063 12.1727L8.70155 10.084C8.52218 10.1538 8.33644 10.2081 8.14634 10.2459C7.61253 10.3521 7.06078 10.325 6.53995 10.167C6.17982 10.0578 5.84217 9.88829 5.54087 9.66687L3.15346 12.0543ZM10.5583 8.26647C10.6606 8.01956 10.7322 7.76214 10.7723 7.49994H14.1486C14.0957 8.20286 13.9315 8.89542 13.6599 9.55117C13.3673 10.2576 12.9563 10.906 12.4469 11.4697L9.64433 9.52146C10.044 9.1817 10.3574 8.7516 10.5583 8.26647Z" fill="#151A2D"/>
    </svg>
    <span className="text-component-text-dark text-xs">Customer services</span>
    </div>
    <div className="flex py-1 p-2 items-center gap-[6px] bg-component-fill-dark-soft border border-transparent rounded-lg">
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.06079 4.08116C8.7289 3.90375 8.37028 3.78484 8.00065 3.72835V0.352053C8.92357 0.421464 9.82386 0.682463 10.6433 1.12047C11.6102 1.63728 12.4347 2.38457 13.0438 3.29614C13.6529 4.20772 14.0278 5.25544 14.1352 6.3465C14.1403 6.39763 14.1447 6.44878 14.1486 6.49994H10.7723C10.6992 6.02176 10.522 5.56465 10.2525 5.16124C9.95011 4.7087 9.54079 4.33772 9.06079 4.08116ZM3.79685 1.45681C4.75411 0.817193 5.85821 0.437967 7.00065 0.352051V3.72835C6.52375 3.80124 6.06644 3.97786 5.66195 4.24813C5.11769 4.61179 4.6935 5.12868 4.443 5.73342C4.19251 6.33817 4.12697 7.00362 4.25467 7.64561C4.34958 8.12275 4.54806 8.57101 4.83375 8.95977L2.44634 11.3472C1.69926 10.4786 1.18669 9.42972 0.962086 8.30055C0.704851 7.00734 0.836873 5.6669 1.34146 4.44872C1.84604 3.23055 2.70052 2.18936 3.79685 1.45681ZM3.15346 12.0543C3.85514 12.6578 4.67629 13.1098 5.56544 13.3795C6.61457 13.6978 7.726 13.7524 8.80127 13.5385C9.86654 13.3266 10.8637 12.8577 11.7063 12.1727L8.70155 10.084C8.52218 10.1538 8.33644 10.2081 8.14634 10.2459C7.61253 10.3521 7.06078 10.325 6.53995 10.167C6.17982 10.0578 5.84217 9.88829 5.54087 9.66687L3.15346 12.0543ZM10.5583 8.26647C10.6606 8.01956 10.7322 7.76214 10.7723 7.49994H14.1486C14.0957 8.20286 13.9315 8.89542 13.6599 9.55117C13.3673 10.2576 12.9563 10.906 12.4469 11.4697L9.64433 9.52146C10.044 9.1817 10.3574 8.7516 10.5583 8.26647Z" fill="#151A2D"/>
    </svg>
<span className="text-component-text-dark text-xs">Customer services</span>
    </div>
   

  </div>
  <div className="flex justify-between items-center w-[1200px] ">
    <div className="flex flex-col shrink-0 items-start gap-6 w-[486px] ">
      <div className="flex flex-col items-start gap-[14px] self-stretch">
        <h1 className="text-typography-sub-heading text-lg font-medium">Replace boring text, PowerPoints and
PDFs with engaging videos your team
will love</h1>
<p className="text-typography-paragraph-soft">"Usually, our colleagues don't jump in the air when they hear e-learning, but the AI videos created with Synthesia have sparked motivation that we haven't seen before."</p>
      </div>
      <div className="flex flex-col items-start gap-5">
        <div className="flex items-center gap-3">
          <div className="size-10 border border-background-stroke-inner rounded-[48px] relative">
            <Image src={AvatarImg} fill alt="avatar" />
          </div>
          <div className="">
            <h3 className="text-typography-sub-heading text-xs font-semibold">Jesper B.</h3>
            <p className="text-typography-paragraph-soft text-xs">Learning Specialist at BESTSELLER</p>
            <button className="flex items-center gap-2"><span className="text-component-text-secondary">Learn more</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
  <path d="M19.8067 10.0396L16.125 6.40546C15.71 5.99546 15 6.2863 15 6.86546V9.66629H0.833333C0.3725 9.66629 0 10.0396 0 10.4996C0 10.9596 0.3725 11.333 0.833333 11.333H15V14.1338C15 14.713 15.71 15.0038 16.125 14.5938L19.8067 10.9596C20.0642 10.7055 20.0642 10.2938 19.8067 10.0396Z" fill="#49A492"/>
</svg></button>
          </div>
        </div>
      </div>
    </div>
    <div className="w-[594px] h-[371px] shrink-0 border-[6px] border-white bg-lavender-bloom rounded-2xl relative">
      <Image src={UseCase} fill alt="use" />
    </div>
  </div>
</div>


</div>
<div className="nt-max-container bg-background-stroke-middle flex flex-col items-center gap-10">
  <div className="flex w-[588px] flex-col items-center gap-3">
    <p className="text-container-text-primary text-center text-lg">Testimonials</p>
    <h2 className="text-typography-heading text-center text-lg_2x">Customer Reviews</h2>
  </div>
  <div className="flex items-start gap-6">
    <TestimonialCard />
    <TestimonialCard />
    <TestimonialCard />
    <TestimonialCard />
  </div>
  <div className="flex justify-center items-start gap-6">
    <Image src={LeftArrow} width={48} height={48} alt="arrow" />
    <Image src={RightArrow} width={48} height={48} alt="arrow" />

  </div>
  
  </div>
  <div className="nt-max-container flex flex-col justify-center items-center gap-10">
  <div className="flex w-[588px] flex-col items-center gap-3">
    <p className="text-container-text-primary text-center text-lg">Pricing</p>
    <h2 className="text-typography-heading text-center text-lg_2x">Unleash Your Pricing Potential: Maximize Value, Minimize Cost</h2>
  </div>
  <div className="flex items-start gap-6">
    <PricingCard />
  </div>

</div>

    </>
  );
}
