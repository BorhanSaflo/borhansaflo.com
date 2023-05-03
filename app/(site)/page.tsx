import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Landing from "./components/Landing";
import SectionComponent from "./components/Section";
import React from "react";
import ProjectsGrid from "./components/Projects/ProjectsGrid";
import SkillsGrid from "./components/Skills/SkillsGrid";
import {
  getProjects,
  getSections,
  getSkills,
  getSocials,
} from "@/sanity/sanity-utils";

export default async function Home() {
  const sections = await getSections();
  const projects = await getProjects();
  const skills = await getSkills();
  const socials = await getSocials();

  return (
    <div>
      <Header sections={sections} socials={socials} />
      <main>
        {sections.map((section) => {
          if (section.id === "landing") {
            return <Landing key={section._id} section={section} />;
          } else {
            return (
              <SectionComponent key={section._id} section={section}>
                {section.id === "projects" ? (
                  <ProjectsGrid projects={projects} windowWidth={1000} />
                ) : (
                  section.id === "skills" && <SkillsGrid skills={skills} />
                )}
              </SectionComponent>
            );
          }
        })}
      </main>
      <Footer />
    </div>
  );
}
