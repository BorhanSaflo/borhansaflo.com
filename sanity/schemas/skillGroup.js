export default {
  name: "skillGroup",
  title: "Skill Group",
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
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },
  ],
};
