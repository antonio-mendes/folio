import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { EducationSkills } from "@/components/sections/education-skills";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Talks } from "@/components/sections/talks";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <EducationSkills />
      <Talks />
      <Contact />
    </>
  );
}
