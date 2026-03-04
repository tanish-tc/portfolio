"use client";

import dynamic from "next/dynamic";
import Preloader from "@/components/Preloader";
import Navigation from "@/components/Navigation";
import HeroCanvas from "@/components/HeroCanvas";
import VisionBoard from "@/components/VisionBoard";
import SectionTransition from "@/components/SectionTransition";
import FeaturedWork from "@/components/FeaturedWork";
import ProjectArchive from "@/components/ProjectArchive";
import ExperienceSection from "@/components/ExperienceSection";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <Navigation />
      <main>
        <HeroCanvas />
        <VisionBoard />
        <SectionTransition />
        <FeaturedWork />
        <ProjectArchive />
        <ExperienceSection />
        <TechStack />
        <Footer />
      </main>
    </>
  );
}
