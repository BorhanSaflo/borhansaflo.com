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
      name: "subSections",
      title: "Sub Sections",
      type: "array",
      of: [{ type: "subSection" }],
      group: "sectionText",
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
