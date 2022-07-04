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
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            {
              title: "Normal",
              value: "normal",
            },
            {
              title: "H1",
              value: "h1",
            },
            {
              title: "H2",
              value: "h2",
            },
            {
              title: "H3",
              value: "h3",
            },
            {
              title: "H4",
              value: "h4",
            },
            {
              title: "H5",
              value: "h5",
            },
            {
              title: "H6",
              value: "h6",
            },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Underline", value: "underline" },
              { title: "Emphasis", value: "em" },
              { title: "Code", value: "code" },
            ],
          },
        },
      ],
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
  orderings: [
    {
      title: "Order",
      name: "order",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
};
