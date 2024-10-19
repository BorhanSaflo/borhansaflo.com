import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";

export default {
  name: "skillGroup",
  title: "Skill Group",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
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
    orderRankField({ type: "project" }),
  ],
};
