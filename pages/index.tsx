import type { GetStaticProps } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import Landing from "../components/Landing";
import SectionComponent from "../components/Section";
import React, { createRef, useEffect, useState } from "react";
import ProjectsGrid from "../components/Projects/ProjectsGrid";
import SkillsGrid from "../components/Skills/SkillsGrid";
import { Project, Section, SkillGroup } from "../typings";
import { sanityClient } from "../sanity";
import { projectsQuery, sectionsQuery, skillsQuery } from "../lib/getQuery";

interface Props {
  sections: Section[];
  projects: Project[];
  skills: SkillGroup[];
}

const Home = ({ sections, projects, skills }: Props) => {
  const [currentElementIndexInViewport, setCurrentElementIndexInViewport] =
    useState(0);

  const arrLength = sections.length;
  const [sectionRefs, setSectionRefs] = useState([]);

  useEffect(() => {
    setSectionRefs((elRefs) =>
      Array(arrLength)
        .fill(null)
        .map((_, i) => elRefs[i] || createRef<HTMLDivElement>())
    );
  }, [arrLength]);

  useEffect(() => {
    const checkCurrentElementInViewport = () => {
      const currentElementIndexInViewport = sectionRefs.findIndex(
        (elRef: React.RefObject<HTMLDivElement>) =>
          elRef.current &&
          elRef.current.getBoundingClientRect().top <= 100 &&
          elRef.current.getBoundingClientRect().bottom >= 100
      );
      setCurrentElementIndexInViewport(currentElementIndexInViewport);
    };
    window.addEventListener("scroll", checkCurrentElementInViewport);
    return () =>
      window.removeEventListener("scroll", checkCurrentElementInViewport);
  }, [sectionRefs]);

  const getSectionContent = (section: string) => {
    switch (section) {
      case "projects":
        return <ProjectsGrid projects={projects} />;
      case "skills":
        return <SkillsGrid skills={skills} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Head>
        <title>
          Borhan Saflo | Web Developer, Designer, & Aspiring Software Engineer
        </title>
        <meta name="description" content="Borhan Saflo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        sections={sections}
        currentElement={currentElementIndexInViewport}
      />
      <main>
        {sections.map((section, i) => {
          if (section.id === "landing") {
            return (
              <Landing
                ref={sectionRefs[i]}
                key={section._id}
                section={section}
              />
            );
          } else {
            return (
              <SectionComponent ref={sectionRefs[i]} section={section}>
                {getSectionContent(section.id)}
              </SectionComponent>
            );
          }
        })}
      </main>
      <Footer />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const sections: Section[] = await sanityClient.fetch(sectionsQuery);
  const projects: Project[] = await sanityClient.fetch(projectsQuery);
  const skills: SkillGroup[] = await sanityClient.fetch(skillsQuery);

  return {
    props: {
      projects,
      sections,
      skills,
    },
    revalidate: 3600,
  };
};
