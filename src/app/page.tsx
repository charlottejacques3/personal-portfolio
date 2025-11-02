import React from "react";
import { AboutSection } from "./components/about/AboutSection";
import { ExperienceSection } from "./components/experience/ExperienceSection";
import { SkillsSection } from "./components/skills/SkillsSection";
import { ProjectsSection } from "./components/projects/ProjectsSection";
import { CreditsSection } from "./components/CreditsSection";

export default function Home() {
  return (
    <div>
      <AboutSection/>
      <ExperienceSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <CreditsSection/>
    </div>
  );
}
