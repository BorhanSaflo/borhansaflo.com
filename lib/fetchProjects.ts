import { Project } from "../typings";

export const fetchProjects = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getProjects`
  );
  const data = await res.json();
  const projects: Project[] = data.projects;

  return projects;
};
