import Certifications from "@/components/certifications/page";
import Education from "@/components/education/page";
import Hero from "@/components/hero/page";
import Projects from "@/components/projects/page";
import Skills from "@/components/skills/page";
import Summary from "@/components/summary/page";
import WorkExperience from "@/components/work-experience/page";

export default function Home() {
  return (
    <>
      <Hero />
      <Summary />
      <Education />
      <WorkExperience />
      <Skills />
      <Projects/>
      <Certifications/>
    </>
  );
}
