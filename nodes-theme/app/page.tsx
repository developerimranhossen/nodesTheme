import Image from "next/image";

import Hero from "../components/Hero";
import Video from "../components/Video";
import Pricing from "../components/Pricing";
import Questions from "../components/Questions";
import Blogs from "../components/Blogs";
import TaskSection from "../components/TaskSection";
import UserSection from "../components/UserSection";
import LogoSection from "../components/LogoSection";
import ProgramSection from "../components/ProgramSection";
import UseCasesSection from "../components/UseCasesSection";
import TestimonialSection from "../components/TestimonialSection";

export default function Home() {
  return (
    <div className="nt-page-home">
      <Hero />
      <Video />
      <TaskSection />
      <UserSection />
      <LogoSection />
      <ProgramSection />
      <UseCasesSection />
      <TestimonialSection />
      <Pricing />
      <Questions />
      <Blogs />
    </div>
  );
}
