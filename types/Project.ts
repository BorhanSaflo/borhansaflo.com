import { Tag } from "./Tag";

export interface Project extends ProjectBody {
  _id: string;
  _type: "project";
  _createdAt: string;
  _updatedAt: string;
}

export type ProjectBody = {
  title: string;
  description: string;
  link?: string;
  github?: string;
  previewImage: string;
  images: string[];
  status: string;
  tags: Tag[];
};
