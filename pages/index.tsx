import type { GetStaticProps } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import Landing from "../components/Landing";
import Section from "../components/Section";
import React, { createRef, useEffect, useState } from "react";
import ProjectsGrid from "../components/Projects/ProjectsGrid";
import SkillsGrid from "../components/Skills/SkillsGrid";
import { fetchProjects } from "../lib/fetchProjects";
import { Project } from "../typings";
import { sanityClient } from "../sanity";
import { groq } from "next-sanity";

interface Props {
  projects: Project[];
}

const Home = ({ projects }: Props) => {
  const [currentElementIndexInViewport, setCurrentElementIndexInViewport] =
    useState(0);

  const loremText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostru exercitatio ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaeca cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostru exercitatio ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaeca cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  interface Section {
    id: string;
    nav: {
      name: string;
      href: string;
    };
    heading: string;
    paragraph?: string;
    content?: JSX.Element;
  }

  const sections: Section[] = [
    {
      id: "landing",
      nav: {
        name: "Home",
        href: "/",
      },
      heading: "Landing",
      paragraph: "Landing paragraph",
    },
    {
      id: "about",
      nav: {
        name: "About",
        href: "#about",
      },
      heading: "About",
      paragraph: loremText,
    },
    {
      id: "projects",
      nav: {
        name: "Projects",
        href: "#projects",
      },
      heading: "Projects",
      paragraph: loremText,
      content: <ProjectsGrid projects={projects} />,
    },
    {
      id: "skills",
      nav: {
        name: "Skills",
        href: "#skills",
      },
      heading: "Skills",
      paragraph: loremText,
      content: <SkillsGrid />,
    },
    {
      id: "contact",
      nav: {
        name: "Contact",
        href: "#contact",
      },
      heading: "Contact",
      paragraph: loremText,
    },
  ];

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
        sectionData={sections}
        currentElement={currentElementIndexInViewport}
      />
      <main>
        {sections.map((section, i) => {
          if (section.id === "landing") {
            return <Landing ref={sectionRefs[i]} id={section.id} key={i} />;
          } else {
            return (
              <Section
                ref={sectionRefs[i]}
                id={section.id}
                key={i}
                heading={section.heading}
                paragraph={section.paragraph}>
                {section.content}
              </Section>
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
  const projectsQuery = groq`
    *[_type == "project"] {
        _id,
        _createdAt,
        _updatedAt,
        title,
        description,
        previewImage,
        tags[]-> {
            _id,
            tagName
        },
    } | order(_createdAt desc)
    `;
  const projects: Project[] = await sanityClient.fetch(projectsQuery);

  return {
    props: {
      projects,
    },
    revalidate: 3600,
  };
};
