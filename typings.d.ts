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
  subHeading: string;
  paragraph: string;
  content?: JSX.Element;
  order: number;
  image: string;
  button: boolean;
  buttonText: string;
  buttonIcon: string;
  buttonLink: string;
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

export interface Tag extends TagBody {
  _id: string;
  _type: "tag";
}

export type TagBody = {
  name: string;
};

//Skills
export interface SkillGroup extends SkillGroupBody {
  _id: string;
  _type: "skillGroup";
  _createdAt: string;
  _updatedAt: string;
  order: number;
}
export type SkillGroupBody = {
  name: string;
  skills: Skill[];
};

export interface Skill extends SkillBody {
  _id: string;
  _type: "skill";
}

export type SkillBody = {
  name: string;
  icon: string;
  color: string;
  level: number;
};
