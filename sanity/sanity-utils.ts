import clientConfig from "./config/client-config";
import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";
import { Section } from "@/types/Section";
import { SkillGroup } from "@/types/SkillGroup";

export async function getSections(): Promise<Section[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "section"]{
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
    } | order(order asc)`,
    { next: { revalidate: 3600 } }
  );
}

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"] {
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
    } | order(_createdAt desc)`,
    { next: { revalidate: 3600 } }
  );
}

export async function getSkills(): Promise<SkillGroup[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "skillGroup"] {
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
        level,
      },
    } | order(order asc)`,
    { next: { revalidate: 3600 } }
  );
}

export async function getSocials() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "social"] {
      _id,
      name,
      id,
      icon,
      link,
    }`
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
    }`,
    { next: { revalidate: 3600 } }
  );
}