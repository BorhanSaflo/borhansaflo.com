export default {
  name: "subSection",
  title: "Sub Section",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "heading",
      title: "Heading",
      type: "string",
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
      name: "switchOrder",
      title: "Switch Order",
      type: "boolean",
    },
    {
      name: "buttons",
      title: "Buttons",
      type: "array",
      of: [{ type: "button" }],
    },
  ],
};
