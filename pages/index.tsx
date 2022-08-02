import type { GetStaticProps } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import Landing from "../components/Landing";
import SectionComponent from "../components/Section";
import React, { createRef, RefObject, useEffect, useState } from "react";
import ProjectsGrid from "../components/Projects/ProjectsGrid";
import SkillsGrid from "../components/Skills/SkillsGrid";
import { Project, Section, SEO, SkillGroup, Social } from "../typings";
import { sanityClient } from "../sanity";
import {
  projectsQuery,
  sectionsQuery,
  seoQuery,
  skillsQuery,
  socialsQuery,
} from "../lib/getQuery";
import SEOComponent from "../components/SEO";
import "aos/dist/aos.css";
import AOS from "aos";

interface Props {
  seo: SEO;
  sections: Section[];
  projects: Project[];
  skills: SkillGroup[];
  socials: Social[];
}

const Home = ({ seo, sections, projects, skills, socials }: Props) => {
  const [currentElementIndexInViewport, setCurrentElementIndexInViewport] =
    useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const arrLength = sections.length;
  const [sectionRefs, setSectionRefs] = useState<RefObject<HTMLDivElement>[]>(
    []
  );

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-center",
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  useEffect(() => {
    setSectionRefs((elRefs) =>
      Array(arrLength)
        .fill(null)
        .map((_, i) => elRefs[i] || createRef<HTMLDivElement>())
    );
  }, [arrLength]);

  useEffect(() => {
    const handleScrollEvent = () => {
      setIsScrolled(window.scrollY > 0);
      checkCurrentElementInViewport();
    };
    window.addEventListener("scroll", handleScrollEvent);
    return () =>
      window.removeEventListener("scroll", checkCurrentElementInViewport);
  }, [sectionRefs]);

  const checkCurrentElementInViewport = () => {
    const currentElementIndexInViewport: number =
      window.innerHeight + window.scrollY >= document.body.offsetHeight
        ? arrLength - 1
        : sectionRefs.findIndex(
            (elRef: RefObject<HTMLDivElement>) =>
              elRef.current &&
              elRef.current.getBoundingClientRect().top <= 100 &&
              elRef.current.getBoundingClientRect().bottom >= 100
          );
    setCurrentElementIndexInViewport(currentElementIndexInViewport);
  };

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
      <SEOComponent seo={seo} />
      <Header
        sections={sections}
        socials={socials}
        isScrolled={isScrolled}
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
                isScrolled={isScrolled}
              />
            );
          } else {
            return (
              <SectionComponent
                ref={sectionRefs[i]}
                key={section._id}
                section={section}>
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
  const seo: SEO = await sanityClient.fetch(seoQuery);
  const socials: Social[] = await sanityClient.fetch(socialsQuery);
  const sections: Section[] = await sanityClient.fetch(sectionsQuery);
  const projects: Project[] = await sanityClient.fetch(projectsQuery);
  const skills: SkillGroup[] = await sanityClient.fetch(skillsQuery);

  return {
    props: {
      seo,
      projects,
      sections,
      skills,
      socials,
    },
    revalidate: 3600,
  };
};
