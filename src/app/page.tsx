import React from "react";
import { AboutSection } from "./components/about/AboutSection";
import { ExperienceSection } from "./components/experience/ExperienceSection";
import { SkillsSection } from "./components/skills/SkillsSection";
import { ProjectsSection } from "./components/projects/ProjectsSection";

export default function Home() {
  return (
    <div>
      <AboutSection/>
      <ExperienceSection/>
      <SkillsSection/>
      <ProjectsSection/>
      {/* ADD LATER AS A MODAL */}
      {/* Assets: <br/>
      <a target="_blank" href="https://icons8.com/icon/62856/github">GitHub</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
      <a target="_blank" href="https://icons8.com/icon/98960/linkedin">LinkedIn</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> 
      <a target="_blank" href="https://icons8.com/icon/lYRyQVjFfJy5/github">GitHub</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>*/}
    </div>
  );
}
