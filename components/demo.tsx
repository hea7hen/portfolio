import React from "react";
import Component from "@/components/ui/portfolio-hero";
import { ProjectsTimeline } from "@/components/projects-timeline";
import { WhitepaperSection } from "@/components/whitepaper-section";
import { ExperiencePage } from "@/components/experience-section";



export default function Demo() {

  return (

    <div className="w-full">

      <Component />

      <div id="projects" className="relative">

        <ProjectsTimeline />

      </div>

      <div id="whitepaper" className="relative">

        <WhitepaperSection />

      </div>

      <div id="experience" className="relative">

        <ExperiencePage />

      </div>

    </div>

  );

}

