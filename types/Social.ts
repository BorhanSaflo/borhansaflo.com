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
