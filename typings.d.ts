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
  content: TypedObject[];
  content?: JSX.Element;
  order: number;
  image: string;
  buttons: {
    button: boolean;
    type: string;
    text: string;
    icon: string;
    link: string;
  }[];
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

export interface Social extends SocialBody {
  _id: string;
  _type: "social";
}

export type SocialBody = {
  name: string;
  id: string;
  link: string;
  icon: string;
};

export interface SEO extends SEOBody {
  _id: string;
  _type: "seo";
}

export type SEOBody = {
  siteName: string;
  title: string;
  description: string;
  image: string;
  url: string;
  themeColor: string;
  openGraphType: string;
};
