export default {
  name: "section",
  title: "Section",
  type: "document",
  fields: [
    {
      name: "order",
      title: "Order",
      type: "number",
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "id",
      title: "ID",
      type: "string",
    },
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "subHeading",
      title: "Subheading",
      type: "string",
    },
    {
      name: "paragraph",
      title: "Paragraph",
      type: "text",
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
      name: "button",
      title: "Button",
      type: "boolean",
    },
    {
      name: "buttonText",
      title: "Button Text",
      type: "string",
    },
    {
      name: "buttonIcon",
      title: "Button Icon",
      type: "string",
    },
    {
      name: "buttonLink",
      title: "Button Link",
      type: "string",
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
