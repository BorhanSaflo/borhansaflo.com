export default {
  name: "section",
  title: "Section",
  type: "document",
  groups: [
    {
      name: "sectionText",
      title: "Text Section",
    },
    {
      name: "sectionButton",
      title: "Buttons Section",
    },
  ],
  fields: [
    {
      name: "order",
      title: "Order",
      type: "number",
      group: "sectionText",
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      group: "sectionText",
    },
    {
      name: "id",
      title: "ID",
      type: "string",
      group: "sectionText",
    },
    {
      name: "heading",
      title: "Heading",
      type: "string",
      group: "sectionText",
    },
    {
      name: "subHeading",
      title: "Subheading",
      type: "string",
      group: "sectionText",
    },
    {
      name: "paragraph",
      title: "Paragraph",
      type: "text",
      group: "sectionText",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      group: "sectionText",
    },
    {
      name: "buttons",
      title: "Buttons",
      type: "array",
      of: [{ type: "button" }],
      group: "sectionButton",
    },
  ],
  initialValue: {
    paragraph:
      "Lorem ipsum dolor sit amet. Et quia quisquam et consequuntur velit est consequuntur veniam. Non laudantium quia et numquam quia et similique modi ut pariatur exercitationem in illo consequatur.",
  },
  orderings: [
    {
      title: "Order",
      name: "order",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
};
