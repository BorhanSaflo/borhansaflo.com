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
          { title: "Planned", value: "calendar" },
          { title: "In Development", value: "development" },
          { title: "Completed", value: "checkmark" },
          { title: "On Hold", value: "pause" },
          { title: "Cancelled", value: "close" },
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
