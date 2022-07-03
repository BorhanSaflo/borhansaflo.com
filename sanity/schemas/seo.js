export default {
  name: "seo",
  title: "SEO",
  type: "document",
  fields: [
    {
      name: "siteName",
      title: "Site Name",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "url",
      title: "Url",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "themeColor",
      title: "Theme Color",
      type: "string",
    },
    {
      name: "openGraphType",
      title: "Open Graph Type",
      type: "string",
      options: {
        list: ["article", "website"],
      },
    },
  ],
};
