const buttonHidden = ({ parent }: any) => !parent.button;

export default {
  name: "button",
  title: "Button",
  type: "object",
  fields: [
    { name: "button", type: "boolean", title: "Button" },
    {
      name: "text",
      type: "string",
      title: "Button Text",
      hidden: buttonHidden,
    },
    {
      name: "type",
      type: "string",
      title: "Button Type",
      options: {
        list: ["primary", "secondary", "transparent"],
      },
      hidden: buttonHidden,
    },
    {
      name: "icon",
      type: "string",
      title: "Button Icon",
      hidden: buttonHidden,
    },
    {
      name: "link",
      type: "string",
      title: "Button Link",
      hidden: buttonHidden,
    },
  ],
};
