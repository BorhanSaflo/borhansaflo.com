import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Project } from "@/types/Project";
import { Section } from "@/types/Section";
import { SkillGroup } from "@/types/SkillGroup";
import { Social } from "@/types/Social";

const client = createClient(clientConfig);

enum DOCUMENT_TYPES {
  SECTION = "section",
  PROJECT = "project",
  SKILL_GROUP = "skillGroup",
  SOCIAL = "social",
  META = "meta",
}

async function fetchSanityData<T>(query: string, entityName: string): Promise<T> {
  try {
    return await client.fetch(query);
  } catch (error) {
    console.error(`Failed to fetch ${entityName}:`, error);
    throw new Error(
      `Failed to fetch ${entityName}: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
}

export async function getSections(): Promise<Section[]> {
  return fetchSanityData<Section[]>(
    groq`*[_type == "${DOCUMENT_TYPES.SECTION}"] | order(order asc) {
      order,
      _id,
      _createdAt,
      _updatedAt,
      name,
      id,
      heading,
      subHeading,
      subSections[]{
        name,
        heading,
        content,
        switchOrder,
        "image": image.asset->url,
        imageAlt,
        buttons,
      },
    }`,
    "sections"
  );
}

export async function getProjects(): Promise<Project[]> {
  return fetchSanityData<Project[]>(
    groq`*[_type == "${DOCUMENT_TYPES.PROJECT}"] | order(orderRank) {
      _id,
      _createdAt,
      _updatedAt,
      title,
      description,
      link,
      github,
      "previewImage": previewImage.asset->url,
      "images": images[].asset->url,
      status,
      tags[]-> {
          _id,
          name
      },
    }`,
    "projects"
  );
}

export async function getSkills(): Promise<SkillGroup[]> {
  return fetchSanityData<SkillGroup[]>(
    groq`*[_type == "${DOCUMENT_TYPES.SKILL_GROUP}"] | order(orderRank) {
      _id,
      _createdAt,
      _updatedAt,
      order,
      name,
      skills[]-> {
        _id,
        name,
        icon,
        color,
      },
    }`,
    "skills"
  );
}

export async function getSocials(): Promise<Social[]> {
  return fetchSanityData<Social[]>(
    groq`*[_type == "${DOCUMENT_TYPES.SOCIAL}"] {
      _id,
      name,
      id,
      icon,
      link,
    }`,
    "socials"
  );
}

export async function getMeta() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "meta"][0] {
      siteName,
      title,
      description,
      url,
      "image": image.asset->url,
      openGraphType,
      themeColor
    }`
  );
}
