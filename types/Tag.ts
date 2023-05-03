export interface Tag extends TagBody {
  _id: string;
  _type: "tag";
}

export type TagBody = {
  name: string;
};
