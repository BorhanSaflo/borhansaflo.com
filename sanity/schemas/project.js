export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
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
      name: "previewImage",
      title: "Preview Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "images",
      title: "Project Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "link",
      title: "Link",
      type: "string",
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Planned", value: "Planned" },
          { title: "In Development", value: "In Development" },
          { title: "Completed", value: "Completed" },
          { title: "On Hold", value: "On Hold" },
          { title: "Cancelled", value: "Cancelled" },
        ],
      },
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: { type: "tag" } }],
    },
  ],
};
