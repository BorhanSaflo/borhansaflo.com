import { groq } from "next-sanity";

export const sectionsQuery = groq`
*[_type == "section"]{
  order,
  _id,
  _createdAt,
  _updatedAt,
  name,
  id,
  heading,
  subHeading,
  content,
  image,
  buttons
} | order(order asc)
`;

export const projectsQuery = groq`
*[_type == "project"] {
    _id,
    _createdAt,
    _updatedAt,
    title,
    description,
    link,
    previewImage,
    status,
    tags[]-> | order(_updatedAt asc) {
        _id,
        name 
    },
  } | order(_createdAt desc)
`;

export const skillsQuery = groq`
*[_type == "skillGroup"] {
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
 } | order(order asc)
`;

export const socialsQuery = groq`
*[_type == "social"] {
    _id,
    name,
    id,
    icon,
    link,
 }
`;

export const seoQuery = groq`
*[_type == "seo"][0] {
    _id,
  ...
 }
`;
