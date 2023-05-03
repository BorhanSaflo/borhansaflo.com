export default {
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Skill Name",
      type: "string",
    },
    {
      name: "icon",
      title: "Icon Id",
      type: "string",
    },
    {
      name: "color",
      title: "Icon Color",
      type: "string",
    },
    {
      name: "level",
      title: "Level",
      type: "number",
      options: {
        min: 1,
        max: 10,
        step: 1,
      },
    },
  ],
};
