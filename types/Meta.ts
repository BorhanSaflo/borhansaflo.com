export interface Meta extends MetaBody {
  _id: string;
  _type: "seo";
}

export type MetaBody = {
  siteName: string;
  title: string;
  description: string;
  image: string;
  url: string;
  themeColor: string;
  openGraphType: string;
};
