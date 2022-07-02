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
  paragraph
} | order(order asc)
`;

export const projectsQuery = groq`
*[_type == "project"] {
    _id,
    _createdAt,
    _updatedAt,
    title,
    description,
    previewImage,
    tags[]-> | order(_createdAt asc) {
    tagName 
  },
  } | order(_createdAt desc)
`;
