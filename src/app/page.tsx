import { EducationSkills } from "@/components/sections/education-skills";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Talks } from "@/components/sections/talks";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Talks />
      <EducationSkills />
    </>
  );
}
