export interface Project extends ProjectBody {
  _id: string;
  _type: "project";
  _createdAt: string;
  _updatedAt: string;
}

export type ProjectBody = {
  title: string;
  description: string;
  previewImage: string;
  tags: Tag[];
};

export interface Tag {
  _id: string;
  _type: "tag";
  tagName: string;
}
