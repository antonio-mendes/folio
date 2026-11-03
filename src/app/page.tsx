import { EducationSkills } from "@/components/sections/education-skills";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Talks } from "@/components/sections/talks";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Experience />
      <Talks />
      <EducationSkills />
    </>
  );
}
