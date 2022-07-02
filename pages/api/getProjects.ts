// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../sanity";
import { Project } from "../../typings";
import { groq } from "next-sanity";

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

type Data = {
  projects: Project[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projects: Project[] = await sanityClient.fetch(projectsQuery);
  res.status(200).json({ projects });
}
