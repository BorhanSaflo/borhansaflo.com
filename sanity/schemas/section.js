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
      name: "subheading",
      title: "Subheading",
      type: "string",
    },
    {
      name: "paragraph",
      title: "Paragraph",
      type: "text",
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
