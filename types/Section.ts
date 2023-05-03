import { PortableTextBlock } from "sanity";

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
  content?: JSX.Element;
  order: number;
  subSections: {
    name: string;
    heading: string;
    content: PortableTextBlock[];
    switchOrder: Boolean;
    image: string;
    imageAlt: string;
    buttons: {
      button: boolean;
      type: string;
      text: string;
      icon: string;
      link: string;
    }[];
  }[];
};
