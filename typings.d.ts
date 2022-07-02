//Sections
export interface Section extends SectionBody {
  _id: string;
  _type: "section";
  _createdAt: string;
  _updatedAt: string;
}

export type SectionBody = {
  name: string;
  id: string;
  heading: string;
  paragraph: string;
  content?: JSX.Element;
};

//Projects
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
